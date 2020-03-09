from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import (StudentInfo, ExtraInfo, School, Major)


User = get_user_model()


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['email', 'first_name', 'last_name', 'phonenumber']


@admin.register(StudentInfo)
class StudentInfoAdmin(admin.ModelAdmin):
    pass

@admin.register(ExtraInfo)
class ExtraInfoAdmin(admin.ModelAdmin):
    pass

@admin.register(School)
class SchoolAdmin(admin.ModelAdmin):
    pass

@admin.register(Major)
class MajorAdmin(admin.ModelAdmin):
    pass