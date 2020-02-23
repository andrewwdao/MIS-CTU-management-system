from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from django.contrib.auth import get_user_model

User = get_user_model()

