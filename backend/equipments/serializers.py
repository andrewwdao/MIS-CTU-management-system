from rest_framework import serializers
from django.utils import timezone
from django.db import transaction
from django.db.models import Max, Count
from django.contrib.auth import get_user_model
from .models import Equipment, Device, Rent, RentDetail

User = get_user_model()

class DeviceCreateSerializer(serializers.ModelSerializer):
	equipment = serializers.PrimaryKeyRelatedField(
		queryset=Equipment.objects.all()
		)

	class Meta:
		model = Device
		fields = "__all__"
		read_only_fields = ("in_used", "device_status")
		

class EquipmentListSerializer(serializers.ModelSerializer):
	class Meta:
		model = Equipment
		fields = "__all__"


class DeviceReadSerializer(serializers.ModelSerializer):
	equipment = EquipmentListSerializer(read_only=True)
	device_status = serializers.SerializerMethodField()
	used_by = serializers.SerializerMethodField()

	class Meta:
		model = Device
		fields = "__all__"

	def get_device_status(self, obj):
		return obj.get_device_status_display()

	def get_used_by(self, obj):
		user = obj.get_user()
		return user.username if user is not None else None


class DeviceUpdateSerializer(serializers.ModelSerializer):
	class Meta:
		model = Device
		fields = ['device_number', 'device_status']

	def validate_device_number(self, value):
		equipment = self.instance.equipment
		if value == self.instance.device_number:
			raise serializers.ValidationError('This is old device number.')

		if equipment.devices.filter(device_number=value).exists():
			raise serializers.ValidationError('Device number must be unique together with equipment')
			
		return value

	def validate(self, data):
		if self.instance.in_used:
			raise serializers.ValidationError('In used device can not be change.')
		
		return data 


class DeviceListSerializer(serializers.ModelSerializer):
	device_status = serializers.SerializerMethodField()
	
	class Meta:
		model = Device
		exclude = ('equipment',)

	def get_device_status(self, obj):
		return obj.get_device_status_display()


class EquipmentDetailSerializer(serializers.ModelSerializer):
	devices = DeviceListSerializer(many=True, read_only=True)
	amount = serializers.SerializerMethodField()

	class Meta:
		model = Equipment
		fields = "__all__"

	def get_amount(self, obj):
		return obj.devices.count()

class RenterSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ['id', 'email', 'username', 'first_name', 'last_name' ]

	
class RentListSerializer(serializers.ModelSerializer):
	renter =  RenterSerializer(read_only=True)
	is_returned = serializers.SerializerMethodField()
	
	class Meta:
		model = Rent
		fields = ['id', 'renter', 'is_returned', 'deliver_time', 'return_time']

	def get_is_returned(self, obj):
		return obj.return_time is not None


class RentDetailSerializer(serializers.ModelSerializer):
	device = DeviceListSerializer(read_only=True)

	class Meta:
		model = RentDetail
		fields = ['id', 'device', 'description', 
		'deliver_status', 'return_status']


class RentDetailReturnSerializer(serializers.Serializer):
	STATUS_CHOICES = (
		(1, 'Good'),
		(2, 'Not Good')
	)
	id = serializers.IntegerField(required=True)
	description = serializers.CharField(max_length=1024, allow_blank=True, required=True)
	return_status = serializers.ChoiceField(choices=STATUS_CHOICES, required=True)


class RentReadSerializer(serializers.ModelSerializer):
	renter = RenterSerializer(read_only=True)
	is_returned = serializers.SerializerMethodField()
	equipments = serializers.SerializerMethodField()
	details = serializers.SerializerMethodField()

	class Meta:
		model = Rent
		fields = '__all__'

	def get_is_returned(self, obj):
		return obj.return_time is not None

	def get_equipments(self, obj):
		queryset = obj.details.prefetch_related('device__equipment').\
		values('device__equipment', 'device__equipment__equipment_name').\
		annotate(total=Count('device__equipment'))
		return queryset

	def get_details(self, obj):
		return RentDetailSerializer(obj.details.all(), many=True).data


class RentCreateSerializer(serializers.ModelSerializer):	
	devices = serializers.PrimaryKeyRelatedField(
		queryset=Device.objects.filter(in_used=False), many=True)

	class Meta:
		model = Rent
		fields = ['renter', 'devices']

	@transaction.atomic()
	def create(self, validated_data):
		rent = Rent.objects.create(renter=validated_data['renter'])
		for device in validated_data['devices']:
			device.in_used = True
			RentDetail.objects.get_or_create(
				rent=rent, device=device, 
				defaults={'deliver_status': device.device_status})
		
		Device.objects.bulk_update(validated_data['devices'], ['in_used'])
		return rent


class RentReturnSerializer(serializers.ModelSerializer):
	return_time = serializers.DateTimeField(default=timezone.now())
	details = RentDetailReturnSerializer(many=True)

	class Meta:
		model = Rent
		fields = ['return_time', 'details']


	def validate(self, data):
		if self.instance.return_time:
			raise serializers.ValidationError('Rent has already been returned.')
		
		return data

	def validate_details(self, value):
		detail_ids = []
		for detail in value:
			detail_ids.append(detail['id'])
		
		instance_detail_ids = list(self.instance.details.values_list('id', flat=True))
		
		detail_ids.sort()
		instance_detail_ids.sort()
		
		if detail_ids != instance_detail_ids:
			raise serializers.ValidationError('Inconsistant return rent details.')

		
		return value
		# if len(value) != self.instance.details.count():
		# 	raise serializers.ValidationError('Detail data are not enough.')
		
		# self.check(value)
		# instance_data = {detail.id: detail for detail in self.instance.details.all()}
		# details_data = {detail['id']: detail for detail in value}

		# for detail_id, data in details_data.items():
		# 	detail = instance_data.get(detail_id, None)

		# 	if detail is None:
		# 		raise serializers.ValidationError('Details contain invalid id.')

	@transaction.atomic()
	def update(self, instance, validated_data):
		instance.return_time = validated_data['return_time']
		instance_data = {detail.id: detail for detail in instance.details.all()}
		details_data = {detail['id']: detail for detail in validated_data.pop('details')}

		for detail_id, data in details_data.items():
			detail = instance_data.get(detail_id, None)
			if detail is not None:
				detail.device.condition = data['description']
				detail.device.status = data['return_status']
				detail.device.in_used = False
				detail.device.save()
				detail.description = data['description']
				detail.return_status = data['return_status']
				detail.save()

		# RentDetail.objects.bulk_update(instance_data, ['return_status'])
		instance.save()
		return instance
		