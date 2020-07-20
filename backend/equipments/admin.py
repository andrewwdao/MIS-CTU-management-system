from django.contrib import admin
from .models import Equipment, Device, Rent, RentDetail


@admin.register(Equipment)
class EquipmentAdmin(admin.ModelAdmin):
	pass


@admin.register(Device)
class DeviceAdmin(admin.ModelAdmin):
	pass


@admin.register(Rent)
class RentAdmin(admin.ModelAdmin):
	pass


@admin.register(RentDetail)
class RentDetailAdmin(admin.ModelAdmin):
	pass