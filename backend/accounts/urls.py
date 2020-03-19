from django.urls import path 
from rest_framework.routers import SimpleRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import SchoolViewSet, MajorViewSet, UserViewSet

router = SimpleRouter()
router.register('schools', SchoolViewSet, basename='school')
router.register('majors', MajorViewSet, basename='majors')
router.register('users', UserViewSet, basename='user')

urlpatterns = [
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
] + router.urls

"""
@api {post} /auth/token/ Đăng nhập lấy token
@apiName GetToken
@apiGroup Authentication 

@apiParam {String} email Email bắt buộc.
@apiParam {String} password Password bắt buộc

@apiSuccess {String} refresh JSON Web Refresh token.
@apiSuccess {String} access JSON Web Access token.

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTU4NDYyNzY1OCwianRpIjoiMTUwYjFlNjkwMzhlNDVmNTg2Y2RhNWI3NjYxMzRiZWMiLCJ1c2VyX2lkIjoxfQ.EYvp60M3znIvtmiC5Nqvg1qE1ZGGDyDwNgkZsSuHtA0",
        "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTg0NTQxNTU4LCJqdGkiOiI0YWMyNjc0ZTMxZjE0MzE5ODVkZDlhOThjMTE3MTRlZCIsInVzZXJfaWQiOjF9.MZx1uUPm2tR23Or1UQLVL5sykzDTcEXCmTfa3rH5nck"
    }
"""
"""
@api {get} /schools/ Lấy danh sách các khoa viện
@apiName ListSchools 
@apiGroup School
@apiPermission admin
@apiHeader {String} Authorization Access JSON Web token.

@apiSuccess {Object[]} school Khoa viện.
@apiSuccess {String} school.school_id Mã khoa viện.
@apiSuccess {String} school.school_name Tên khoa viện.

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    [
        {
            "school_id": "DI",
            "school_name": "Khoa Công Nghệ Thông tin và Truyền Thông"
        },
        {
            "school_id": "NN",
            "school_name": "Khoa Nông nghiệp và Sinh học Ứng dụng"
        }
    ]
"""
"""
@api {post} /schools/ Tạo khoa viện mới
@apiName CreateSchool
@apiGroup School
@apiPermission admin
@apiHeader {String} Authorization Access JSON Web token.

@apiParam {String} school_id Mã khoa viện.
@apiParam {String} school_name Tên khoa viện.

@apiSuccess {String} school_id Mã khoa viện.
@apiSuccess {String} school_name Tên khoa viện.
@apiSuccess {Object[]} majors Các nghành học.

@apiSuccessExample {json} Success-Example:
    HTTP/1.1 201 Created
    {
        "school_id": "KH",
        "school_name": "Khoa Khoa học Tự nhiên",
        "majors": []
    } 
"""
"""
@api {get} /schools/:id/ Lấy thông tin chi tiết của khoa viện 
@apiName GetSchool
@apiGroup School
@apiPermission admin 
@apiHeader {String} Authorization Access JSON Web token

@apiParam {String} id Mã khoa viện.
@apiSuccess {String} school_id Mã khoa viện.
@apiSuccess {String} school_name Tên khoa viện
@apiSuccess {Object[]} majors Nghành học 
@apiSuccess {String} majors.school Khoa viện
@apiSuccess {String} majors.major_id Mã nghành học
@apiSuccess {String} majors.major_name Tên nghành học

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "school_id": "DI",
        "school_name": "Khoa Công Nghệ Thông tin và Truyền Thông",
        "majors": [
            {
                "school": "DI",
                "major_id": "KTPM",
                "major_name": "Kỹ thuật phần mềm"
            },
            {
                "school": "DI",
                "major_id": "IT",
                "major_name": "Cong nghe thong tin"
            }
        ]
    }
"""
"""
@api {patch} /schools/:id/ Cập nhật thông tin khoa viện
@apiName UpdateSchool
@apiGroup School
@apiPermission admin
@apiHeader {String} Authorization Access JSON Web token

@apiParam {String} id Mã khoa viện.
@apiParam {String} [school_id] Mã khoa viện cập nhật 
@apiParam {String} [school_name] Tên khoa viện cập nhật 

@apiSuccess {String} school_id Mã khoa viện
@apiSuccess {String} school_name Tên khoa viện
@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK 
    {
        
    }
"""
"""
@api {get} /users/ Lấy danh sách user 
@apiName ListUsers
@apiGroup User
@apiPermission admin technician
@apiHeader {String} Authorization Access JSON Web token.

@apiSuccess {String} email User Email.
@apiSuccess {String} role User role.
@apiSuccess {String} first_name User first name.
@apiSuccess {String} last_name User last name.
@apiSuccess {String} birth_date User birth date.

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    [
        {
            "email": "admin@gmail.com",
            "role": 1,
            "first_name": "",
            "last_name": "",
            "birth_date": null
        }
    ]

@apiSuccessExample {json} Unauthorized-Response:
    HTTP/1.1 401 Unauthorized 
    {
        "detail": "Authentication credentials were not provided."
    }
"""
"""
@api {post} /users/ Tạo user mới sử dụng phân quyền admin
@apiName CreateUser
@apiGroup User
@apiPermission admin
@apiHeader {String} Authorization Access JSON Web token.

@apiParam {String} email Email bắt buộc.
@apiParam {Number=2,3,4} role Vai trò user bắt buộc.
@apiParam {String} [first_name] Tên User không bắt buộc.
@apiParam {String} [last_name] Họ User không bắt buộc.
@apiParam {String} [birth_date] Ngày sinh User không bắt buộc.
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