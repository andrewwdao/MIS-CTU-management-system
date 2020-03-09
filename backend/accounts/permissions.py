from rest_framework.permissions import BasePermission


class IsStaff(BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            return request.user.role in [1, 2]
        else:
            return False