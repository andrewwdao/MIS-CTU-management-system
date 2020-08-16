from rest_framework import status
from rest_framework.decorators import action
from rest_framework.mixins import (ListModelMixin, CreateModelMixin, 
UpdateModelMixin, RetrieveModelMixin, DestroyModelMixin)
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .paginations import RentResultPagination
from .models import Equipment, Device, Rent
from .serializers import (EquipmentListSerializer, EquipmentDetailSerializer, DeviceReadSerializer, 
							DeviceListSerializer, DeviceCreateSerializer, DeviceUpdateSerializer, RentListSerializer,
							RentCreateSerializer, RentReadSerializer, RentReturnSerializer)
from accounts.permissions import IsStaff


class EquipmentViewSet(ModelViewSet):
	queryset = Equipment.objects.all()
	# permission_classes = [IsAuthenticated, IsStaff]
	
	def get_serializer_class(self):
		if self.action == 'list':
			return EquipmentListSerializer
		else:
			return EquipmentDetailSerializer
	
	@action(detail=True, methods=['get'])
	def devices(self, request, *args, **kwargs):
		queryset = self.get_object().devices.all()
		serializer = DeviceListSerializer(queryset, many=True)
		return Response(data=serializer.data, status=status.HTTP_200_OK)


class DeviceViewSet(CreateModelMixin, RetrieveModelMixin, 
UpdateModelMixin, DestroyModelMixin, GenericViewSet):
	queryset = Device.objects.all()
	# permission_classes = [IsAuthenticated, IsStaff]

	def get_serializer_class(self):
		if self.action == 'create':
			return DeviceCreateSerializer
		elif self.action in ['update', 'partial_update']:
			return DeviceUpdateSerializer
		else:
			return DeviceReadSerializer


class RentViewSet(ListModelMixin, RetrieveModelMixin, GenericViewSet):
	queryset = Rent.objects.all()
	pagination_class = RentResultPagination
	# filter_backends = [filters.OrderingFilter, RentFilter]
	# ordering_fields = ['deliver_time', 'return_time']
	# permission_classes = [IsAuthenticated, IsStaff]

	def get_serializer_class(self):
		if self.action == 'create':
			return RentCreateSerializer
		elif self.action == 'list':
			return RentListSerializer
		else:
			return RentReadSerializer

	def create(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		if serializer.is_valid():
			instance = serializer.save()
			serializer = RentReadSerializer(instance)
			return Response(serializer.data, status.HTTP_201_CREATED)
		else:
			return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

	@action(detail=True, methods=['post'])
	def back(self, request, *args, **kwargs):
		serializer = RentReturnSerializer(instance=self.get_object(), data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(data={'detail': 'Return succeed.'}, status=status.HTTP_200_OK)
		else:
			return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
