from django.urls import path 
from rest_framework.routers import SimpleRouter
from .views import EquipmentViewSet, DeviceViewSet, RentViewSet

router = SimpleRouter()
router.register('equipments', EquipmentViewSet, basename='equipment')
router.register('devices', DeviceViewSet, basename='device')
router.register('rents', RentViewSet, basename='rent')

urlpatterns = [] + router.urls

"""
@api {get} /equipments/ Lay danh sach cac trang thiet bi
@apiName ListEquipment
@apiGroup Equipment
@apiPermission staff
@apiHeader {String} Authorization Access JSON Web token.

@apiSuccess {Object[]} equipments Trang thiet bi.
@apiSuccess {Number} equipments.id ID Trang thiet bi
@apiSuccess {String} equipments.equipment_id Mã trang thiet bi
@apiSuccess {String} equipments.equipment_name Tên trang thiet bi
@apiSuccess {String} equipments.picture Hinh anh trang thiet bi

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    [
        {
            "id": 1,
            "equipment_id": "xe2",
            "equipment_name": "Raspberry Pi",
            "picture": null
        },
        {
            "id": 2,
            "equipment_id": "xe24",
            "equipment_name": "Orange PI",
            "picture": null
        }
    ]
"""

"""
@api {post} /equipments/ Tao trang thiet bi moi
@apiName CreateEquipment 
@apiGroup Equipment
@apiPermission staff
@apiHeader {String} Authorization Access JSON Web token.

@apiParam {String} equipment_id Mã trang thiet bi.
@apiParam {String} equipment_name Tên trang thiet bi.
@apiParam {File} picture Hinh anh trang thiet bi.

@apiSuccess {Number} id ID Trang thiet bi
@apiSuccess {String} equipment_id Mã trang thiet bi
@apiSuccess {String} equipment_name Tên trang thiet bi
@apiSuccess {String} picture Hinh anh trang thiet bi
@apiSuccess {Number} amount So luong thiet bi 
@apiSuccess {Object[]} devices Cac thiet bi chi tiet 

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 201 Created
    {
        "id": 3,
        "devices": [],
        "amount": 0,
        "equipment_id": "esp",
        "equipment_name": "Esp32",
        "picture": null
    }
"""

"""
@api {get} /equipments/:id/ Chi tiet trang thiet bi
@apiName GetEquipment 
@apiGroup Equipment
@apiPermission staff
@apiHeader {String} Authorization Access JSON Web token.

@apiParam {String} id ID Trang thiet bi

@apiSuccess {Number} id ID Trang thiet bi
@apiSuccess {String} equipment_id Mã trang thiet bi
@apiSuccess {String} equipment_name Tên trang thiet bi
@apiSuccess {String} picture Hinh anh trang thiet bi
@apiSuccess {Number} amount So luong thiet bi 
@apiSuccess {Object[]} devices Cac thiet bi chi tiet 

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "id": 1,
        [
            {
                "id": 1,
                "device_status": "Good",
                "device_number": 1,
                "in_used": true
            },
            {
                "id": 3,
                "device_status": "Good",
                "device_number": 2,
                "in_used": false
            },
            {
                "id": 4,
                "device_status": "Good",
                "device_number": 324,
                "in_used": true
            },
            {
                "id": 5,
                "device_status": "Good",
                "device_number": 223,
                "in_used": false
            }
        ]   
        "amount": 4,
        "equipment_id": "xe2",
        "equipment_name": "Raspberry Pi",
        "picture": null
    }
"""

"""
@api {patch} /equipments/:id/ Cap nhat chi tiet trang thiet bi moi
@apiName UpdateEquipment 
@apiGroup Equipment
@apiPermission staff
@apiHeader {String} Authorization Access JSON Web token.

@apiParam {String} id ID Trang thiet bi

@apiParam {String} [equipment_id] Mã trang thiet bi.
@apiParam {String} [equipment_name] Tên trang thiet bi.
@apiParam {File} [picture] Hinh anh trang thiet bi.

@apiSuccess {Number} id ID Trang thiet bi
@apiSuccess {String} equipment_id Mã trang thiet bi
@apiSuccess {String} equipment_name Tên trang thiet bi
@apiSuccess {String} picture Hinh anh trang thiet bi
@apiSuccess {Number} amount So luong thiet bi 
@apiSuccess {Object[]} devices Cac thiet bi chi tiet 

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "id": 3,
        "devices": [],
        "amount": 0,
        "equipment_id": "esp",
        "equipment_name": "Esp32",
        "picture": null
    }
"""

"""
@api {get} /equipments/:equipment_id/devices/ Lay danh sach cac chi tiet trang thiet bi
@apiName ListDevice
@apiGroup Device
@apiPermission staff
@apiHeader {String} Authorization Access JSON Web token.

@apiParam {Number} equipment_id ID trang thiet bi
@apiSuccess {Object[]} devices Chi tiet trang thiet bi.
@apiSuccess {Number} devices.id ID Chi tiet
@apiSuccess {Number} devices.device_number So chi tiet trang thiet bi
@apiSuccess {String} devices.device_status Trang thai 
@apiSuccess {Boolean} devices.in_used  Tinh trang su dung

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    [
        {
            "id": 1,
            "device_status": "Good",
            "device_number": 1,
            "in_used": true
        },
        {
            "id": 3,
            "device_status": "Good",
            "device_number": 2,
            "in_used": false
        },
        {
            "id": 4,
            "device_status": "Good",
            "device_number": 324,
            "in_used": true
        },
        {
            "id": 5,
            "device_status": "Good",
            "device_number": 223,
            "in_used": false
        }
    ]
"""

"""
@api {delete} /equipments/:id/ Xoa trang thiet bi
@apiName DeleteEquipment 
@apiGroup Equipment
@apiPermission staff
@apiHeader {String} Authorization Access JSON Web token.

@apiParam {String} id ID Trang thiet bi

@apiSuccess {Number} id ID Trang thiet bi

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 204 No Content
"""

"""
@api {post} /devices/ Tao trang thiet bi moi
@apiName CreateDevice 
@apiGroup Device
@apiPermission staff
@apiHeader {String} Authorization Access JSON Web token.

@apiParam {Number} equipment Mã loại trang thiết bị
@apiParam {NUmber} device_number Số trang thiết bị

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 201 Created
    {
        "id": 7,
        "equipment": 1,
        "device_number": 253,
        "device_status": 1,
        "in_used": false
    }
"""

"""
@api {get} /devices/:id/ Lay chi tiet trang thiet bi
@apiName GetDevice
@apiGroup Device
@apiPermission staff
@apiHeader {String} Authorization Access JSON Web token.

@apiParam {Number} id ID chi tiet trang thiet bi
@apiSuccess {Number} id ID Chi tiet
@apiSuccess {Number} device_number So chi tiet trang thiet bi
@apiSuccess {String} device_status Trang thai 
@apiSuccess {Boolean} in_used  Tinh trang su dung
@apiSuccess {Equipment} equipment Doi tuong trang thiet bi

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "id": 1,
        "equipment": {
            "id": 1,
            "equipment_id": "xe2",
            "equipment_name": "Raspberry Pi",
            "picture": null
        },
        "device_status": "Good",
        "device_number": 1,
        "in_used": true
    }
"""

"""
@api {patch} /devices/:id/ Cap nhat chi tiet trang thiet bi
@apiName UpdateDevice
@apiGroup Device
@apiPermission staff
@apiHeader {String} Authorization Access JSON Web token.

@apiParam {Number} id ID chi tiet trang thiet bi
@apiParam {Number} [device_number] So chi tiet trang thiet bi
@apiParam {Number} [device_status] Trang thai

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "device_number": 5,
        "device_status": 2
    }
"""

"""
@api {delete} /devices/:id/ Xoa chi tiet trang thiet bi
@apiName DeleteDevice
@apiGroup Device
@apiPermission staff
@apiHeader {String} Authorization Access JSON Web token.

@apiParam {Number} id ID chi tiet trang thiet bi

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 204 No Content
"""

"""
@api {get} /rents/ Danh sach thue muon 
@apiName ListRent
@apiGroup Rent
@apiPermission staff
@apiHeader {String} Authorization Access JSON Web token.

@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "count": 3,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 3,
                "renter": {
                    "id": 2,
                    "email": "lucas@gmail.com",
                    "username": "lucas",
                    "first_name": "Lucas",
                    "last_name": "Nguyen"
                },
                "is_returned": true,
                "deliver_time": "2020-08-16T03:42:14.614067Z",
                "return_time": "2020-08-16T04:32:48.365447Z"
            },
            {
                "id": 4,
                "renter": {
                    "id": 2,
                    "email": "lucas@gmail.com",
                    "username": "lucas",
                    "first_name": "Lucas",
                    "last_name": "Nguyen"
                },
                "is_returned": true,
                "deliver_time": "2020-08-16T03:42:35.474486Z",
                "return_time": "2020-08-16T04:36:41.616421Z"
            },
            {
                "id": 5,
                "renter": {
                    "id": 2,
                    "email": "lucas@gmail.com",
                    "username": "lucas",
                    "first_name": "Lucas",
                    "last_name": "Nguyen"
                },
                "is_returned": true,
                "deliver_time": "2020-08-16T04:55:12.039492Z",
                "return_time": "2020-08-16T04:57:58.755477Z"
            }
        ]
    }
"""

"""
@api {post} /rents/ Tao thue muon moi
@apiName CreateRent
@apiGroup Rent
@apiPermission staff
@apiHeader {String} Authorization Access JSON Web token.

@apiParam {Number} renter User ID of renter
@apiParam {Number[]} devices Device IDs list
@apiParamExample {json} Request-Example:
    {
        "renter": 2,
        "devices": [3]
    }


@apiSuccessExample {json} Success-Response:
    HTTP/1.1 201 Created
    {
        "id": 6,
        "renter": {
            "id": 2,
            "email": "lucas@gmail.com",
            "username": "lucas",
            "first_name": "Lucas",
            "last_name": "Nguyen"
        },
        "is_returned": false,
        "equipments": [
            {
                "device__equipment": 2,
                "device__equipment__equipment_name": "raspberry pi",
                "total": 1
            }
        ],
        "details": [
            {
                "id": 9,
                "device": {
                    "id": 3,
                    "device_status": "Good",
                    "device_number": 1,
                    "condition": "Burned pin",
                    "in_used": true
                },
                "description": "",
                "deliver_status": 1,
                "return_status": null
            }
        ],
        "deliver_time": "2020-08-16T05:39:54.775319Z",
        "return_time": null
    }
"""

"""
@api {get} /rents/:id/ Chi tiet thue muon
@apiName GetDetailRent
@apiGroup Rent
@apiPermission staff
@apiHeader {String} Authorization Access JSON Web token.

@apiParam {Number} id ID Ban cho thue muon
@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "id": 6,
        "renter": {
            "id": 2,
            "email": "lucas@gmail.com",
            "username": "lucas",
            "first_name": "Lucas",
            "last_name": "Nguyen"
        },
        "is_returned": false,
        "equipments": [
            {
                "device__equipment": 2,
                "device__equipment__equipment_name": "raspberry pi",
                "total": 1
            }
        ],
        "details": [
            {
                "id": 9,
                "device": {
                    "id": 3,
                    "device_status": "Good",
                    "device_number": 1,
                    "condition": "Burned pin",
                    "in_used": true
                },
                "description": "",
                "deliver_status": 1,
                "return_status": null
            }
        ],
        "deliver_time": "2020-08-16T05:39:54.775319Z",
        "return_time": null
    }
"""

"""
@api {get} /rents/:id/ Tra thue muon
@apiName ReturnRent
@apiGroup Rent
@apiPermission staff
@apiHeader {String} Authorization Access JSON Web token.

@apiParam {Number} id ID Ban cho thue muon
@apiParam {String} [return_time=now] Thoi gian tra
@apiParam {Detail[]} details Chi tiet tra
@apiParam {Number} details[id] ID chi tiet muon thuoc don muon
@apiParam {String} details[description] Mieu ta tinh trang thiet bi khi tra
@apiParam {Number} details[return_status] Tinh trang thiet bi khi tra
@apiParamExample {json} Request-Example:
{
    "details":[
        {
            "id": 8,
            "description": "Burned pin",
            "return_status": 2
        }
    ]
}
@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "id": 6,
        "renter": {
            "id": 2,
            "email": "lucas@gmail.com",
            "username": "lucas",
            "first_name": "Lucas",
            "last_name": "Nguyen"
        },
        "is_returned": false,
        "equipments": [
            {
                "device__equipment": 2,
                "device__equipment__equipment_name": "raspberry pi",
                "total": 1
            }
        ],
        "details": [
            {
                "id": 9,
                "device": {
                    "id": 3,
                    "device_status": "Good",
                    "device_number": 1,
                    "condition": "Burned pin",
                    "in_used": true
                },
                "description": "",
                "deliver_status": 1,
                "return_status": null
            }
        ],
        "deliver_time": "2020-08-16T05:39:54.775319Z",
        "return_time": null
    }
"""