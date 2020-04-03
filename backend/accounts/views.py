from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from .models import School, Major
from .permissions import IsStaff
from .serializers import *

User = get_user_model()


class SchoolViewSet(ModelViewSet):
    queryset = School.objects.all()
    permission_classes = [IsAuthenticated, IsStaff]
    
    def get_serializer_class(self):
        if self.action == 'list':
            return SchoolListSerializer
        else:
            return SchoolDetailSerializer
    
    @action(detail=True, methods=['get'])
    def majors(self, request, pk=None):
        if request.method == 'GET':
            instance = self.get_object()
            serializer = MajorSerializer(instance.majors, many=True)
            return Response(data=serializer.data, status=status.HTTP_200_OK)


class MajorViewSet(ModelViewSet):
    queryset = Major.objects.all()
    serializer_class = MajorSerializer
    permission_classes = [IsAuthenticated, IsStaff]


class UserViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated, IsStaff]
    
    def get_queryset(self):
        if self.request.user.role == 1:
           return User.objects.all()
        else:
           return User.objects.exclude(role=1) 

    def get_serializer_class(self):
        if self.action == 'list':
            return UserListSerializer
        
        elif self.action == 'create':
            if self.request.user.role == 1:
                return UserCreateSerializerForAdmin
            else:
                return UserCreateSerializerForTechnician
        
        else:
            return UserDetailSerializer

    @action(detail=True, methods=['post'])
    def reset_password(self, request, pk=None):
        instance = self.get_object()
        serializer = ResetPasswordSerializer(instance, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data={'detail': 'Password has been reset successfully.'}, status=status.HTTP_200_OK)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
