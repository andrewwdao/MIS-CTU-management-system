define({ "api": [
  {
    "type": "post",
    "url": "/auth/token/",
    "title": "Đăng nhập lấy token",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email bắt buộc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password bắt buộc</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "Authentication",
    "name": "PostAuthToken"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C:\\Users\\Hikaru\\Documents\\GitHub\\MIS-CTU-management-system\\backend\\docs\\main.js",
    "groupTitle": "C:\\Users\\Hikaru\\Documents\\GitHub\\MIS-CTU-management-system\\backend\\docs\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/users/",
    "title": "Tạo user mới sử dụng phân quyền admin",
    "name": "CreateUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access JSON Web token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email bắt buộc.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "2",
              "3",
              "4"
            ],
            "optional": false,
            "field": "role",
            "description": "<p>Vai trò user bắt buộc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_name",
            "description": "<p>Tên User không bắt buộc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "last_name",
            "description": "<p>Họ User không bắt buộc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "birthdate",
            "description": "<p>Ngày sinh User không bắt buộc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phonenumber",
            "description": "<p>Số điện thoại User không bắt buộc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"M\"",
              "\"F\""
            ],
            "optional": false,
            "field": "gender",
            "description": "<p>Giới tính User.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "avatar",
            "description": "<p>Avatar User không bắt buộc.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "student_info",
            "description": "<p>Thông tin sinh viên.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student_info[student_id]",
            "description": "<p>Mã số sinh viên.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student_info[class_id]",
            "description": "<p>Mã số lớp.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student_info[major]",
            "description": "<p>Mã nghành.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student_info[school]",
            "description": "<p>Mã khoa.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "extra_info",
            "description": "<p>Thông tin sử dụng ngoài.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extra_info[identity_id]",
            "description": "<p>Mã chứng minh nhân dân.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extra_info[workplace]",
            "description": "<p>Nơi làm việc.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./accounts/serializers.py",
    "groupTitle": "User"
  }
] });
