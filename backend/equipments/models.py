from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Equipment(models.Model):
    equipment_id = models.CharField(max_length=10, unique=True)
    equipment_name = models.CharField(max_length=100, unique=True)
    picture = models.ImageField('Equipment picture', upload_to='equipments', blank=True, null=True)

    def __str__(self):
        return "{}: {}".format(self.equipment_id, self.equipment_name)


class Device(models.Model):
    STATUS_CHOICES = (
        (1, 'Good'),
        (2, 'Not Good')
    )
    device_number = models.PositiveSmallIntegerField()
    device_status = models.PositiveSmallIntegerField(choices=STATUS_CHOICES ,default=1)
    in_used = models.BooleanField(default=False)
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE, related_name="devices")

    class Meta:
        unique_together = ['device_number', 'equipment']

    def __str__(self):
        return "{}: {}".format(self.equipment.equipment_id, self.device_number)


class Rent(models.Model):
    renter = models.ForeignKey(User, on_delete=models.CASCADE, related_name='rents')
    deliver_time = models.DateTimeField('Deliver Time', auto_now_add=True)
    return_time = models.DateTimeField('Return time', null=True)
    

class RentDetail(models.Model):
    STATUS_CHOICES = (
        (1, 'Good'),
        (2, 'Not Good')
    )
    rent = models.ForeignKey(Rent, related_name='details', on_delete=models.CASCADE)
    device = models.ForeignKey(Device, related_name='devices', on_delete=models.CASCADE)
    deliver_status= models.PositiveSmallIntegerField(choices=STATUS_CHOICES)
    return_status = models.PositiveSmallIntegerField(choices=STATUS_CHOICES, null=True)