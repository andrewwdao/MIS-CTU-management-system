from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import StudentInfo, ExtraInfo, School, Major
from .utilities import make_random_username

User = get_user_model() 


class MajorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Major
        fields = ['major_id', 'major_name']

    def create(self, validated_data):
        school = self.context['school']
        instance = school.majors.create(**validated_data)
        return instance


class SchoolSerializer(serializers.ModelSerializer):
    majors = MajorSerializer(many=True, read_only=True)

    class Meta:
        model = School
        fields = ['school_id', 'school_name', 'majors']


class StudentInfoSerializer(serializers.ModelSerializer):
    school = serializers.PrimaryKeyRelatedField(
        queryset=School.objects.all()
    )
    
    major = serializers.PrimaryKeyRelatedField(
        queryset=Major.objects.all()
    )

    class Meta:
        model = StudentInfo
        fields = ['student_id', 'class_id', 'school', 'major']

    def validate(self, data):
        if data['major'].school.school_id != data['school'].school_id:
            raise serializers.ValidationError('Major school not match.')

        return data


class ExtraInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtraInfo
        fiedls = ['identity_card', 'workplace']


class ResetPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=10)
    repeat_password = serializers.CharField(max_length=10)

    def validate(self, data):
        if self.data['password'] != ['repeat_password']:
            raise serializers.ValidationError('Passwords does not match.')
        
        return data

    def update(self, instance, validate_data):
        instance.set_password(validate_data['password'])
        return instance


class UserCreateSerializerForAdmin(serializers.ModelSerializer):
    """
    @api {post} /users/ Tạo user mới sử dụng phân quyền admin
    @apiName CreateUser
    @apiGroup User

    @apiHeader {String} Authorization Access JSON Web token.

    @apiParam {String} email Email bắt buộc.
    @apiParam {Number=2,3,4} role Vai trò user bắt buộc.
    @apiParam {String} [first_name] Tên User không bắt buộc.
    @apiParam {String} [last_name] Họ User không bắt buộc.
    @apiParam {String} [birthdate] Ngày sinh User không bắt buộc.
    @apiParam {String} [phonenumber] Số điện thoại User không bắt buộc.
    @apiParam {String="M","F"} gender Giới tính User.
    @apiParam {File} [avatar] Avatar User không bắt buộc.
    @apiParam {Object} student_info Thông tin sinh viên.
    @apiParam {String} student_info[student_id] Mã số sinh viên.
    @apiParam {String} student_info[class_id] Mã số lớp.
    @apiParam {String} student_info[major] Mã nghành.
    @apiParam {String} student_info[school] Mã khoa.
    @apiParam {Object} extra_info Thông tin sử dụng ngoài.
    @apiParam {String} extra_info[identity_id] Mã chứng minh nhân dân.
    @apiParam {String} extra_info[workplace] Nơi làm việc.
    """
    ROLE_CHOICES = (
        (2, 'Kỹ thuật viên'),
        (3, 'Sinh viên'),
        (4, 'Người dùng thông thường')
    )
    role = serializers.ChoiceField(choices=ROLE_CHOICES)
    student_info = StudentInfoSerializer(allow_null=True)
    extra_info = ExtraInfoSerializer(allow_null=True)
    
    class Meta:
        model = User
        fields = ['email', 'role', 'first_name', 'last_name', 
        'birthdate', 'phonenumber', 'gender', 'avatar', 
        'student_info', 'extra_info']
    
    def validate(self, data):
        if data['role'] in [2, 3] and not data['student_info']:
            raise serializers.ValidationError('Student info not provided for student user.')
        
        if data['role'] == 4 and not data['extra_info']:
            raise serializers.ValidationError('Extra info not provided for normal role.')
        
        return data

    def create(self, validated_data):
        validated_data['password'] = User.objects.make_random_password()
        validated_data['username'] = make_random_username()
        while(User.objects.filter(username=validated_data['username']).exists()):
            validated_data['username'] = make_random_username()

        student_data = validated_data.pop('student_info')
        extra_data = validated_data.pop('extra_info')

        if validated_data['role'] in [2, 3]:
            instance = User.objects.create_user(**validated_data)
            StudentInfo.objects.create(user=instance, **student_data)
        
        else:
            instance = User.objects.create_user(**validated_data)
            ExtraInfo.objects.create(user=instance, **extra_data)
        
        return instance


class UserCreateSerializerForTechnician(serializers.ModelSerializer):
    ROLE_CHOICES = (
        (3, 'Sinh viên'),
        (4, 'Người dùng thông thường')
    )
    role = serializers.ChoiceField(choices=ROLE_CHOICES)
    student_info = StudentInfoSerializer(allow_null=True)
    extra_info = ExtraInfoSerializer(allow_null=True)
    
    class Meta:
        model = User
        fields = ['email', 'role', 'first_name', 'last_name', 
        'birthdate', 'phonenumber', 'gender', 'avatar', 
        'student_info', 'extra_info']
    
    def validate(self, data):
        if data['role'] == 3 and not data['student_info']:
            raise serializers.ValidationError('Student info not provided for student user.')
        
        if data['role'] == 4 and not data['extra_info']:
            raise serializers.ValidationError('Extra info not provided for normal role.')
        
        return data

    def create(self, validated_data):
        validated_data['password'] = User.objects.make_random_password()
        validated_data['username'] = make_random_username()
        while(User.objects.filter(username=validated_data['username']).exists()):
            validated_data['username'] = make_random_username()

        student_data = validated_data.pop('student_info')
        extra_data = validated_data.pop('extra_info')

        if validated_data['role'] == 3:
            instance = User.objects.create_user(**validated_data)
            StudentInfo.objects.create(user=instance, **student_data)
        
        else:
            instance = User.objects.create_user(**validated_data)
            ExtraInfo.objects.create(user=instance, **extra_data)
        
        return instance

class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'role', 'first_name', 'last_name', 'birthdate']


class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'username', 'role', 'first_name', 'last_name',
        'birthdate', 'phonenumber', 'gender', 'avatar', 'student_info',
        'extra_info']
