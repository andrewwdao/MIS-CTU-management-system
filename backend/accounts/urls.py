from django.urls import path 
from rest_framework.routers import SimpleRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import SchoolViewSet, MajorViewSet, UserViewSet

router = SimpleRouter()
router.register('schools', SchoolViewSet, basename='school')
router.register('majors', MajorViewSet, basename='major')
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
@api {post} /auth/token/refresh/ Tạo access token mới từ refresh token 
@apiName RefeshToken 
@apiGroup Authentication

@apiParam {String} refresh JSON Web Refresh token

@apiSuccess {String} access JSON Web Access token.
@apiSuccessExample {json} Sucess-Response:
    HTTP/1.1 200 OK
    {
        "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTg0NjkyNTAxLCJqdGkiOiI5MzgyZThkZTNkZjg0MTk4ODU3ZjFiODVkNzBmNGZlMiIsInVzZXJfaWQiOjF9.Ll8th-HNYswVisYiJOSK8pkKTBqVXkykvMG4LiMOp9w"
    }
 
"""
"""
@api {get} /schools/ Lấy danh sách các khoa viện
@apiName ListSchools 
@apiGroup School
@apiPermission admin
@apiHeader {String} Authorization Access JSON Web token.

@apiSuccess {Object[]} schools Khoa viện.
@apiSuccess {Number} schools.id ID Khoa viện
@apiSuccess {String} schools.school_id Mã khoa viện.
@apiSuccess {String} schools.school_name Tên khoa viện.

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

@apiSuccess {Number} id ID Khoa viện 
@apiSuccess {String} school_id Mã khoa viện.
@apiSuccess {String} school_name Tên khoa viện.
@apiSuccess {Object[]} majors Các nghành học.

@apiSuccessExample {json} Success-Example:
    HTTP/1.1 201 Created
    {
        "id": 1,
        "school_id": "KH",
        "school_name": "Khoa Khoa học Tự nhiên",
        "majors": []
    } 
"""
"""
@api {get} /schools/:school_id/ Lấy thông tin chi tiết của khoa viện 
@apiName GetSchool
@apiGroup School
@apiPermission admin 
@apiHeader {String} Authorization Access JSON Web token

@apiParam {String} school_id Mã khoa viện.
@apiSuccess {String} id ID Khoa viện
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
                "id": 1,
                "school": "DI",
                "major_id": "KTPM",
                "major_name": "Kỹ thuật phần mềm"
            },
            {
                "id": "2"
                "school": "DI",
                "major_id": "IT",
                "major_name": "Cong nghe thong tin"
            }
        ]
    }
"""
"""
@api {patch} /schools/:school_id/ Cập nhật thông tin khoa viện
@apiName UpdateSchool
@apiGroup School
@apiPermission admin
@apiHeader {String} Authorization Access JSON Web token

@apiParam {String} school_id Mã khoa viện.
@apiParam {String} [school_id] Mã khoa viện cập nhật 
@apiParam {String} [school_name] Tên khoa viện cập nhật 

@apiSuccess {Number} id ID Khoa viện 
@apiSuccess {String} school_id Mã khoa viện
@apiSuccess {String} school_name Tên khoa viện
@apiSuccess {Object[]} majors Các nghành học 
@apiSuccess {String} majors.school Mã khoa viện của nghành
@apiSuccess {String} majors.major_id Mã nghành học 
@apiSuccess {String} majors.major_name Tên nghành học
@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK 
    {
        "id": 1,
        "school_id": "IT",
        "school_name": "Khoa Công nghệ Thông tin",
        "majors": []
    }
 
"""
"""
@api {delete} /schools/:school_id/ Xóa khoa viện
@apiName DeleteSchool
@apiGroup School
@apiPermission admin
@apiHeader {String} Authorization Access JSON Web token

@apiSuccessExample {json} Success-Example:
    HTTP/1.1 204 No Content
"""
"""
@api {get} /majors/ Lấy danh sách các nghành học
@apiName GetMajorList
@apiGroup Major
@apiPermission admin
@apiHeader {String} Authorization Access JSON Web token

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    [
        {
            "id": 1,
            "school": 2,
            "major_id": "XHH",
            "major_name": "Xã hội học"
        },
        {
            "id": 2,
            "school": 3,
            "major_id": "KTPM",
            "major_name": "Ky thuat phan mem"
        }
    ]
"""
"""
@api {post} /majors/ Tạo nghành học mới
@apiName CreateMajor
@apiGroup Major
@apiPermission admin
@apiHeader {String} Authorization Access JSON Web token

@apiParam {Number} school ID Khoa viện
@apiParam {String} major_id Mã nghành học
@apiParam {String} major_name Tên nghành học 
@apiParamExample {json} Request-Example:
{
	"school": 3,
	"major_id": "IT",
	"major_name": "Cong nghe thong tin"
}

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 201 Created
    {
        "id": 3,
        "school": 3,
        "major_id": "IT",
        "major_name": "Cong nghe thong tin"
    }
"""
"""
@api {get} /users/ Lấy danh sách user 
@apiName ListUsers
@apiGroup User
@apiPermission admin technician
@apiHeader {String} Authorization Access JSON Web token.

@apiSuccess {Object[]} users User
@apiSuccess {Number} users.id User ID
@apiSuccess {String} users.email User Email.
@apiSuccess {String} users.role User role.
@apiSuccess {String} users.first_name User first name.
@apiSuccess {String} users.last_name User last name.
@apiSuccess {String} users.birth_date User birth date.

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    [
        {
            "id": 1,
            "email": "admin@gmail.com",
            "role": 1,
            "role_name": "Quản trị viên",
            "first_name": "admin",
            "last_name": "nguyne",
            "birth_date": null
        },
        {
            "id": 2,
            "email": "nhatquangc@gmail.com",
            "role": 2,
            "role_name": "Kỹ thuật viên",
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
@apiName CreateUserByAdmin
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
@apiParam {int} student_info[major] Mã nghành.
@apiParam {Object} extra_info Thông tin sử dụng ngoài.
@apiParam {String} extra_info[identity_id] Mã chứng minh nhân dân.
@apiParam {String} extra_info[workplace] Nơi làm việc.

@apiParamExample {json} Request-Example:
    {
        "email": "nhatquangc@gmail.com",
        "role": 3,
        "birthdate": null,
        "phonenumber": null,
        "gender": "F",
        "avatar": null,
        "student_info": {
            "student_id": "b1607021",
            "class_id": "DI16V7F2",
            "major": 1
        },
        "extra_info": null
    }
"""
"""
@api {post} /users/ Tạo user mới sử dụng phân quyền kỹ thuật viên
@apiName CreateUserByTechnician
@apiGroup User
@apiPermission technician
@apiHeader {String} Authorization Access JSON Web token.

@apiParam {String} email Email bắt buộc.
@apiParam {Number=3,4} role Vai trò user bắt buộc.
@apiParam {String} [first_name] Tên User không bắt buộc.
@apiParam {String} [last_name] Họ User không bắt buộc.
@apiParam {String} [birth_date] Ngày sinh User không bắt buộc.
@apiParam {String} [phonenumber] Số điện thoại User không bắt buộc.
@apiParam {String="M","F"} gender Giới tính User.
@apiParam {File} [avatar] Avatar User không bắt buộc.
@apiParam {Object} student_info Thông tin sinh viên.
@apiParam {String} student_info[student_id] Mã số sinh viên.
@apiParam {String} student_info[class_id] Mã số lớp.
@apiParam {int} student_info[major] Mã nghành.
@apiParam {Object} extra_info Thông tin sử dụng ngoài.
@apiParam {String} extra_info[identity_id] Mã chứng minh nhân dân.
@apiParam {String} extra_info[workplace] Nơi làm việc.

@apiParamExample {json} Request-Example:
    {
        "email": "nhatquangc@gmail.com",
        "role": 3,
        "birthdate": null,
        "phonenumber": null,
        "gender": "F",
        "avatar": null,
        "student_info": {
            "student_id": "b1607021",
            "class_id": "DI16V7F2",
            "major": 1,
        },
        "extra_info": null
    }
"""
"""
@api {get} /users/:id/ Lấy thông tin chi tiết user
@apiName GetAUser
@apiGroup User 
@apiPermission admin technician 

@apiHeader {String} Authorization Access JSON Web token.

@apiParam {Number} id ID User.

@apiSuccess {Number} id ID User.
@apiSuccess {String} email User email.
@apiSuccess {String} username Username.
@apiSuccess {Number} role role.
@apiSuccess {String} role_name Role name.
@apiSuccess {String} first_name Firstname.
@apiSuccess {String} last_name Lastname.
@apiSuccess {String} birth_date Birthdate. 
@apiSuccessExample {json} Response-Success:
    HTTP/1.1 200 OK 
    {
        "id": 5,
        "email": "nhatquang91ct@gmail.com",
        "username": "kjohnston",
        "role": 2,
        "role_name": "Kỹ thuật viên"
        "first_name": "",
        "last_name": "",
        "birth_date": null,
        "phonenumber": null,
        "gender": "F",
        "avatar": null,
        "student_info": {
            "student_id": "b1607001",
            "class_id": "DI16V7F2",
            "school": {
                "id": 2,
                "school_id": "XH",
                "school_name": "Khoa Khoa học Xã Hội và Nhân Văn"
            },
            "major": {
                "id": 1,
                "school": 2,
                "major_id": "XHH",
                "major_name": "Xã hội học"
            }
        },
        "extra_info": null
    }
"""

"""
@api {get} /majors/ Lay danh sach cac nghanh hoc
@apiName GetMajorList
@apiGroup Majors
@apiPermission admin technician 

@apiHeader {String} Authorization Access JSON Web token.

@apiSuccess {Number} id ID nghanh hoc
@apiSuccess {Number} school ID khoa vien
@apiSuccess {String} major_id Ma nghanh hoc
@apiSuccess {String} major_name Ten nghanh hoc
@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    [
        {
            "id": 1,
            "school": 2,
            "major_id": "XHH",
            "major_name": "Xã hội học"
        },
        {
            "id": 2,
            "school": 3,
            "major_id": "KTPM",
            "major_name": "Ky thuat phan mem"
        },
        {
            "id": 3,
            "school": 3,
            "major_id": "IT",
            "major_name": "Cong nghe thong tin"
        }
    ]
"""

"""
@api {post} /majors/ Tao nghanh hoc moi
@apiName CreateAMajor
@apiGroup Majors   
@apiPermission admin technician 

@apiHeader {String} Authorization Access JSON Web token.

@apiParam {Number} school ID Khoa vien
@apiParam {String} major_id Ma nghanh hoc
@apiParam {String} major_name Ten nghanh hoc

@apiParamExample {json} Request-Example:
    {
        "school": 3,
        "major_id": "HTTT",
        "major_name": "He thong thong tin"
    }

@apiSuccess {Number} id ID nghanh hoc
@apiSuccess {Number} school ID khoa vien
@apiSuccess {String} major_id Ma nghanh hoc
@apiSuccess {String} major_name Ten nghanh hoc
@apiSuccessExample {json} Success-Response:
    HTTP/1.1 201 Created
    {
        "id": 4,
        "school": 3,
        "major_id": "HTTT",
        "major_name": "He thong thong tin"
    }
"""

"""
@api {get} /majors/:id/ Lay thong tin mot nghanh hoc
@apiName GetAMajor
@apiGroup Major

@apiPermission admin technician

@apiHeader {String} Authorization Access JSON Web token.

@apiParam {Number} id ID nghanh hoc

@apiSuccess {Number} id ID nghanh hoc
@apiSuccess {Number} school ID khoa vien
@apiSuccess {String} major_id Ma nghanh hoc
@apiSuccess {String} major_name Ten nghanh hoc
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "id": 3,
        "school": 3,
        "major_id": "IT",
        "major_name": "Cong nghe thong tin"
    }
"""

"""
@api {patch} /majors/:id/ Cap nhat nghanh hoc
@apiName UpdateAMajor
@apiGroup Majors
@apiPermission admin technician 

@apiHeader {String} Authorization Access JSON Web token.

@apiParam {Number} id ID nghanh hoc
@apiParam {Number} [school] ID khoa vien
@apiParam {String} [major_id] Ma nghanh hoc
@apiParam {String} [major_name] Ten nghanh hoc
@apiParamExample {json} Request-Example:
    {
        "major_id": "IT"
    }

@apiSuccess {Number} id ID nghanh hoc
@apiSuccess {Number} school ID khoa vien
@apiSuccess {String} major_id Ma nghanh hoc
@apiSuccess {String} major_name Ten nghanh hoc
@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "id": 3,
        "school": 3,
        "major_id": "IT",
        "major_name": "Cong nghe thong tin"
    }
"""

"""
@api {delete} /majors/:id/ Xoa nghanh hoc
@apiName DeleteAMajor
@apiGroup Majors
@apiPermission admin technician 

@apiHeader {String} Authorization Access JSON Web token.

@apiParam {Number} id ID nghanh hoc

@apiSuccessExample {json} Success-Response
    HTTP/1.1 204 No Content
"""