from django.urls import path 
from rest_framework.routers import SimpleRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import SchoolViewSet, UserViewSet

router = SimpleRouter()
router.register('schools', SchoolViewSet, basename='school')
router.register('users', UserViewSet, basename='user')

urlpatterns = [
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
] + router.urls