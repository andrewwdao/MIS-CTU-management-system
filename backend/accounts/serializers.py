from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import StudentInfo, ExtraInfo, School, Major
from .utilities import make_random_username

User = get_user_model() 


class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'


class MajorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Major
        fields = '__all__'


class UserCreateSerializerForAdmin(serializers.ModelSerializer):
    ROLE_CHOICES = (
        (2, 'Kỹ thuật viên'),
        (3, 'Sinh viên'),
        (4, 'Người dùng thông thường')
    )
    role = serializers.ChoiceField(choices=ROLE_CHOICES)

    class Meta:
        model = User
        fields = ['email', 'role', 'first_name', 'last_name', 
        'birthdate', 'phonenumber']

    def create(self, validated_data):
        validated_data['password'] = User.objects.make_random_password()
        validated_data['username'] = make_random_username()
        while(User.objects.filter(username=validated_data['username']).exists()):
            validated_data['username'] = make_random_username()

        instance = User.objects.create_user(**validated_data)
        return instance


class UserCreateSerializerForTechnician(serializers.ModelSerializer):
    ROLE_CHOICES = (
        (3, 'Sinh viên'),
        (4, 'Người dùng thông thường')
    )
    role = serializers.ChoiceField(choices=ROLE_CHOICES)

    class Meta:
        model = User
        fields = ['email', 'role', 'first_name', 'last_name',
        'birthdate', 'phonenumber']

    def create(self, validated_data):
        validated_data['password'] = User.objects.make_random_password()
        validated_data['username'] = make_random_username()
        while(User.objects.filter(username=validated_data['username']).exists()):
            validated_data['username'] = make_random_username()

        instance = User.objects.create_user(**validated_data)
        return instance

