from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Equipment(models.Model):
    equipment_id = models.CharField(max_length=10, unique=True)
    equipment_name = models.CharField(max_length=100, unique=True)
    amount = models.PositiveSmallIntegerField()
    picture = models.ImageField('Equipment picture', upload_to='equipments', blank=True, null=True)

    def __str__(self):
        return "{}: {}".format(self.equipment_id, self.equipment_name)


class Device(models.Model):
    STATUS_CHOICES = (
        (1, 'Good'),
        (2, 'Not Good')
    )
    device_number = models.PositiveSmallIntegerField()
    device_status = models.PositiveSmallIntegerField(choices=STATUS_CHOICES)
    in_used = models.BooleanField(default=False)
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['device_number', 'equipment']

    def __str__(self):
        return "{}: {}".format(self.equipment.equipment_id, self.device_number)


class Rent(models.Model):
    STATUS_CHOICES = (
        (1, 'Good'),
        (2, 'Not Good')
    )
    device = models.ForeignKey(Device, on_delete=models.CASCADE, related_name='rents')
    renter = models.ForeignKey(User, on_delete=models.CASCADE, related_name='rents')
    deliver_time = models.DateTimeField('Deliver Time')
    return_time = models.DateTimeField('Return time', null=True)
    deliver_status = models.PositiveSmallIntegerField(choices=STATUS_CHOICES)
    return_status = models.PositiveSmallIntegerField(choices=STATUS_CHOICES, null=True)
