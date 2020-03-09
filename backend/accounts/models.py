from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
 
 
class User(AbstractUser):
	ROLE_CHOICES=(
		(1, 'Quản trị viên'),
		(2, 'Kỹ thuật viên'),
		(3, 'Sinh viên'),
		(4, 'Người dùng thông thường')
		)
	
	GENDER_CHOICES=(
		('M', 'Nam'),
		('F', 'Nữ')
	)

	email = models.EmailField('Email address', unique=True)
	role = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, default=3)
	birthdate = models.DateField('User birthdate', null=True)
	phonenumber = PhoneNumberField('User phonenumber', blank=True, null=True)
	gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default='M')
	avatar = models.ImageField(upload_to='avatars', blank=True, null=True)
	rfid = models.CharField('RFID Card number', max_length=10, unique=True, null=True)
	fingerprint_pattern = models.IntegerField(unique=True, null=True)

	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['username', 'first_name', 'last_name']


class School(models.Model):
	school_id = models.CharField(max_length=10, primary_key=True)
	school_name = models.CharField(max_length=100, unique=True)


class Major(models.Model):
	major_id = models.CharField(max_length=10, primary_key=True)
	major_name = models.CharField(max_length=100, unique=True)
	school = models.ForeignKey(School, on_delete=models.CASCADE, related_name='majors')


class StudentInfo(models.Model):
	student_id = models.CharField(max_length=10, unique=True)
	class_id = models.CharField(max_length=10)
	school = models.ForeignKey(School, on_delete=models.SET_NULL, null=True, related_name='students')
	major = models.ForeignKey(Major, on_delete=models.SET_NULL, null=True, related_name='students')
	user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student_info')


class ExtraInfo(models.Model):
	identity_card = models.CharField(max_length=12, unique=True)
	workplace = models.CharField(max_length=200)
	user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='extra_info')


class TimeLog(models.Model):
	date = models.DateField('Log date', auto_now_add=True)
	check_in = models.TimeField('Check in time', auto_now_add=True)
	check_out = models.TimeField('Check out time', blank=True, null=True)
	expire = models.TimeField('Expire time')
	user = models.ForeignKey(User, on_delete=models.CASCADE)

	class Meta:
		unique_together = ['date', 'user']


@receiver(post_save, sender=User)
def initialize_role(sender, created, instance, **kwargs):
	if created and (instance.role == 1 or instance.is_superuser):
			instance.role = 1
			instance.is_staff = True
			instance.is_superuser = True 
			instance.save()
