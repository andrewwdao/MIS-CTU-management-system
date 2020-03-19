define({ "api": [
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
    "filename": "./docs/api/main.js",
    "group": "/home/lucas/Documents/GitHub/MIS-CTU-management-system/backend/docs/api/main.js",
    "groupTitle": "/home/lucas/Documents/GitHub/MIS-CTU-management-system/backend/docs/api/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/auth/token/",
    "title": "Đăng nhập lấy token",
    "name": "GetToken",
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh",
            "description": "<p>JSON Web Refresh token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access",
            "description": "<p>JSON Web Access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"refresh\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTU4NDYyNzY1OCwianRpIjoiMTUwYjFlNjkwMzhlNDVmNTg2Y2RhNWI3NjYxMzRiZWMiLCJ1c2VyX2lkIjoxfQ.EYvp60M3znIvtmiC5Nqvg1qE1ZGGDyDwNgkZsSuHtA0\",\n    \"access\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTg0NTQxNTU4LCJqdGkiOiI0YWMyNjc0ZTMxZjE0MzE5ODVkZDlhOThjMTE3MTRlZCIsInVzZXJfaWQiOjF9.MZx1uUPm2tR23Or1UQLVL5sykzDTcEXCmTfa3rH5nck\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/schools/",
    "title": "Tạo khoa viện mới",
    "name": "CreateSchool",
    "group": "School",
    "permission": [
      {
        "name": "admin"
      }
    ],
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
            "field": "school_id",
            "description": "<p>Mã khoa viện.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "school_name",
            "description": "<p>Tên khoa viện.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "school_id",
            "description": "<p>Mã khoa viện.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "school_name",
            "description": "<p>Tên khoa viện.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "majors",
            "description": "<p>Các nghành học.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "HTTP/1.1 201 Created\n{\n    \"school_id\": \"KH\",\n    \"school_name\": \"Khoa Khoa học Tự nhiên\",\n    \"majors\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "School"
  },
  {
    "type": "get",
    "url": "/schools/:id/",
    "title": "Lấy thông tin chi tiết của khoa viện",
    "name": "GetSchool",
    "group": "School",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access JSON Web token</p>"
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
            "field": "id",
            "description": "<p>Mã khoa viện.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "school_id",
            "description": "<p>Mã khoa viện.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "school_name",
            "description": "<p>Tên khoa viện</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "majors",
            "description": "<p>Nghành học</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "majors.school",
            "description": "<p>Khoa viện</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "majors.major_id",
            "description": "<p>Mã nghành học</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "majors.major_name",
            "description": "<p>Tên nghành học</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"school_id\": \"DI\",\n    \"school_name\": \"Khoa Công Nghệ Thông tin và Truyền Thông\",\n    \"majors\": [\n        {\n            \"school\": \"DI\",\n            \"major_id\": \"KTPM\",\n            \"major_name\": \"Kỹ thuật phần mềm\"\n        },\n        {\n            \"school\": \"DI\",\n            \"major_id\": \"IT\",\n            \"major_name\": \"Cong nghe thong tin\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "School"
  },
  {
    "type": "get",
    "url": "/schools/",
    "title": "Lấy danh sách các khoa",
    "name": "ListSchools",
    "group": "School",
    "permission": [
      {
        "name": "admin"
      }
    ],
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "school",
            "description": "<p>Khoa viện.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "school.school_id",
            "description": "<p>Mã khoa viện.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "school.school_name",
            "description": "<p>Tên khoa viện.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"school_id\": \"DI\",\n        \"school_name\": \"Khoa Công Nghệ Thông tin và Truyền Thông\"\n    },\n    {\n        \"school_id\": \"NN\",\n        \"school_name\": \"Khoa Nông nghiệp và Sinh học Ứng dụng\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "School"
  },
  {
    "type": "post",
    "url": "/users/",
    "title": "Tạo user mới sử dụng phân quyền admin",
    "name": "CreateUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
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
            "field": "birth_date",
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
    "filename": "./accounts/urls.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Lấy danh sách user",
    "name": "ListUsers",
    "group": "User",
    "permission": [
      {
        "name": "admin technician"
      }
    ],
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User first name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birth_date",
            "description": "<p>User birth date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"email\": \"admin@gmail.com\",\n        \"role\": 1,\n        \"first_name\": \"\",\n        \"last_name\": \"\",\n        \"birth_date\": null\n    }\n]",
          "type": "json"
        },
        {
          "title": "Unauthorized-Response:",
          "content": "HTTP/1.1 401 Unauthorized \n{\n    \"detail\": \"Authentication credentials were not provided.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "User"
  }
] });
