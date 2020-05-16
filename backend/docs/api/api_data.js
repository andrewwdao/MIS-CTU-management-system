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
    "group": "/home/lucas/Documents/Projects/MIS-CTU-management-system/backend/docs/api/main.js",
    "groupTitle": "/home/lucas/Documents/Projects/MIS-CTU-management-system/backend/docs/api/main.js",
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
    "url": "/auth/token/refresh/",
    "title": "Tạo access token mới từ refresh token",
    "name": "RefeshToken",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh",
            "description": "<p>JSON Web Refresh token</p>"
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
            "field": "access",
            "description": "<p>JSON Web Access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucess-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"access\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTg0NjkyNTAxLCJqdGkiOiI5MzgyZThkZTNkZjg0MTk4ODU3ZjFiODVkNzBmNGZlMiIsInVzZXJfaWQiOjF9.Ll8th-HNYswVisYiJOSK8pkKTBqVXkykvMG4LiMOp9w\"\n}",
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
    "url": "/devices/",
    "title": "Tao trang thiet bi moi",
    "name": "CreateDevice",
    "group": "Device",
    "permission": [
      {
        "name": "staff"
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
            "type": "Number",
            "optional": false,
            "field": "equipment_id",
            "description": "<p>Mã trang thiet bi.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "equipment_name",
            "description": "<p>Tên trang thiet bi.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": 7,\n    \"equipment\": 1,\n    \"device_number\": 253,\n    \"device_status\": 1,\n    \"in_used\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./equipments/urls.py",
    "groupTitle": "Device"
  },
  {
    "type": "get",
    "url": "/devices/:id/",
    "title": "Lay chi tiet trang thiet bi",
    "name": "GetDevice",
    "group": "Device",
    "permission": [
      {
        "name": "staff"
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID chi tiet trang thiet bi</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Chi tiet</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "device_number",
            "description": "<p>So chi tiet trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "device_status",
            "description": "<p>Trang thai</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "in_used",
            "description": "<p>Tinh trang su dung</p>"
          },
          {
            "group": "Success 200",
            "type": "Equipment",
            "optional": false,
            "field": "equipment",
            "description": "<p>Doi tuong trang thiet bi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"equipment\": {\n        \"id\": 1,\n        \"equipment_id\": \"xe2\",\n        \"equipment_name\": \"Raspberry Pi\",\n        \"picture\": null\n    },\n    \"device_status\": \"Good\",\n    \"device_number\": 1,\n    \"in_used\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./equipments/urls.py",
    "groupTitle": "Device"
  },
  {
    "type": "get",
    "url": "/equipments/:equipment_id/devices/",
    "title": "Lay danh sach cac chi tiet trang thiet bi",
    "name": "ListDevice",
    "group": "Device",
    "permission": [
      {
        "name": "staff"
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
            "type": "Number",
            "optional": false,
            "field": "equipment_id",
            "description": "<p>ID trang thiet bi</p>"
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
            "field": "devices",
            "description": "<p>Chi tiet trang thiet bi.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "devices.id",
            "description": "<p>ID Chi tiet</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "devices.device_number",
            "description": "<p>So chi tiet trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "devices.device_status",
            "description": "<p>Trang thai</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "devices.in_used",
            "description": "<p>Tinh trang su dung</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 1,\n        \"device_status\": \"Good\",\n        \"device_number\": 1,\n        \"in_used\": true\n    },\n    {\n        \"id\": 3,\n        \"device_status\": \"Good\",\n        \"device_number\": 2,\n        \"in_used\": false\n    },\n    {\n        \"id\": 4,\n        \"device_status\": \"Good\",\n        \"device_number\": 324,\n        \"in_used\": true\n    },\n    {\n        \"id\": 5,\n        \"device_status\": \"Good\",\n        \"device_number\": 223,\n        \"in_used\": false\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./equipments/urls.py",
    "groupTitle": "Device"
  },
  {
    "type": "patch",
    "url": "/devices/:id/",
    "title": "Cap nhat chi tiet trang thiet bi",
    "name": "UpdateDevice",
    "group": "Device",
    "permission": [
      {
        "name": "staff"
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID chi tiet trang thiet bi</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "device_number",
            "description": "<p>So chi tiet trang thiet bi</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "device_status",
            "description": "<p>Trang thai</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"device_number\": 5,\n    \"device_status\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./equipments/urls.py",
    "groupTitle": "Device"
  },
  {
    "type": "post",
    "url": "/equipments/",
    "title": "Tao trang thiet bi moi",
    "name": "CreateEquipment",
    "group": "Equipment",
    "permission": [
      {
        "name": "staff"
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
            "field": "equipment_id",
            "description": "<p>Mã trang thiet bi.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "equipment_name",
            "description": "<p>Tên trang thiet bi.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "picture",
            "description": "<p>Hinh anh trang thiet bi.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "equipment_id",
            "description": "<p>Mã trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "equipment_name",
            "description": "<p>Tên trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Hinh anh trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>So luong thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "devices",
            "description": "<p>Cac thiet bi chi tiet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": 3,\n    \"devices\": [],\n    \"amount\": 0,\n    \"equipment_id\": \"esp\",\n    \"equipment_name\": \"Esp32\",\n    \"picture\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./equipments/urls.py",
    "groupTitle": "Equipment"
  },
  {
    "type": "get",
    "url": "/equipments/:id/",
    "title": "Chi tiet trang thiet bi moi",
    "name": "GetEquipment",
    "group": "Equipment",
    "permission": [
      {
        "name": "staff"
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
            "field": "id",
            "description": "<p>ID Trang thiet bi</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "equipment_id",
            "description": "<p>Mã trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "equipment_name",
            "description": "<p>Tên trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Hinh anh trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>So luong thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "devices",
            "description": "<p>Cac thiet bi chi tiet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    [\n        {\n            \"id\": 1,\n            \"device_status\": \"Good\",\n            \"device_number\": 1,\n            \"in_used\": true\n        },\n        {\n            \"id\": 3,\n            \"device_status\": \"Good\",\n            \"device_number\": 2,\n            \"in_used\": false\n        },\n        {\n            \"id\": 4,\n            \"device_status\": \"Good\",\n            \"device_number\": 324,\n            \"in_used\": true\n        },\n        {\n            \"id\": 5,\n            \"device_status\": \"Good\",\n            \"device_number\": 223,\n            \"in_used\": false\n        }\n    ]   \n    \"amount\": 4,\n    \"equipment_id\": \"xe2\",\n    \"equipment_name\": \"Raspberry Pi\",\n    \"picture\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./equipments/urls.py",
    "groupTitle": "Equipment"
  },
  {
    "type": "get",
    "url": "/equipments/",
    "title": "Lay danh sach cac trang thiet bi",
    "name": "ListEquipment",
    "group": "Equipment",
    "permission": [
      {
        "name": "staff"
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
            "field": "equipments",
            "description": "<p>Trang thiet bi.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "equipments.id",
            "description": "<p>ID Trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "equipments.equipment_id",
            "description": "<p>Mã trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "equipments.equipment_name",
            "description": "<p>Tên trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "equipments.picture",
            "description": "<p>Hinh anh trang thiet bi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 1,\n        \"equipment_id\": \"xe2\",\n        \"equipment_name\": \"Raspberry Pi\",\n        \"picture\": null\n    },\n    {\n        \"id\": 2,\n        \"equipment_id\": \"xe24\",\n        \"equipment_name\": \"Orange PI\",\n        \"picture\": null\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./equipments/urls.py",
    "groupTitle": "Equipment"
  },
  {
    "type": "patch",
    "url": "/equipments/:id/",
    "title": "Chi tiet trang thiet bi moi",
    "name": "UpdateEquipment",
    "group": "Equipment",
    "permission": [
      {
        "name": "staff"
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
            "field": "id",
            "description": "<p>ID Trang thiet bi</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "equipment_id",
            "description": "<p>Mã trang thiet bi.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "equipment_name",
            "description": "<p>Tên trang thiet bi.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "picture",
            "description": "<p>Hinh anh trang thiet bi.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "equipment_id",
            "description": "<p>Mã trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "equipment_name",
            "description": "<p>Tên trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Hinh anh trang thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>So luong thiet bi</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "devices",
            "description": "<p>Cac thiet bi chi tiet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 3,\n    \"devices\": [],\n    \"amount\": 0,\n    \"equipment_id\": \"esp\",\n    \"equipment_name\": \"Esp32\",\n    \"picture\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./equipments/urls.py",
    "groupTitle": "Equipment"
  },
  {
    "type": "post",
    "url": "/majors/",
    "title": "Tạo nghành học mới",
    "name": "CreateMajor",
    "group": "Major",
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
            "type": "Number",
            "optional": false,
            "field": "school",
            "description": "<p>ID Khoa viện</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "major_id",
            "description": "<p>Mã nghành học</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "major_name",
            "description": "<p>Tên nghành học</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"school\": 3,\n\"major_id\": \"IT\",\n\"major_name\": \"Cong nghe thong tin\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": 3,\n    \"school\": 3,\n    \"major_id\": \"IT\",\n    \"major_name\": \"Cong nghe thong tin\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "Major"
  },
  {
    "type": "get",
    "url": "/majors/:id/",
    "title": "Lay thong tin mot nghanh hoc",
    "name": "GetAMajor",
    "group": "Major",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID nghanh hoc</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID nghanh hoc</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "school",
            "description": "<p>ID khoa vien</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major_id",
            "description": "<p>Ma nghanh hoc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major_name",
            "description": "<p>Ten nghanh hoc</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 3,\n    \"school\": 3,\n    \"major_id\": \"IT\",\n    \"major_name\": \"Cong nghe thong tin\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "Major"
  },
  {
    "type": "get",
    "url": "/majors/",
    "title": "Lấy danh sách các nghành học",
    "name": "GetMajorList",
    "group": "Major",
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
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 1,\n        \"school\": 2,\n        \"major_id\": \"XHH\",\n        \"major_name\": \"Xã hội học\"\n    },\n    {\n        \"id\": 2,\n        \"school\": 3,\n        \"major_id\": \"KTPM\",\n        \"major_name\": \"Ky thuat phan mem\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "Major"
  },
  {
    "type": "post",
    "url": "/majors/",
    "title": "Tao nghanh hoc moi",
    "name": "CreateAMajor",
    "group": "Majors",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "school",
            "description": "<p>ID Khoa vien</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "major_id",
            "description": "<p>Ma nghanh hoc</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "major_name",
            "description": "<p>Ten nghanh hoc</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"school\": 3,\n    \"major_id\": \"HTTT\",\n    \"major_name\": \"He thong thong tin\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID nghanh hoc</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "school",
            "description": "<p>ID khoa vien</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major_id",
            "description": "<p>Ma nghanh hoc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major_name",
            "description": "<p>Ten nghanh hoc</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": 4,\n    \"school\": 3,\n    \"major_id\": \"HTTT\",\n    \"major_name\": \"He thong thong tin\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "Majors"
  },
  {
    "type": "delete",
    "url": "/majors/:id/",
    "title": "Xoa nghanh hoc",
    "name": "DeleteAMajor",
    "group": "Majors",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID nghanh hoc</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "Majors"
  },
  {
    "type": "get",
    "url": "/majors/",
    "title": "Lay danh sach cac nghanh hoc",
    "name": "GetMajorList",
    "group": "Majors",
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID nghanh hoc</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "school",
            "description": "<p>ID khoa vien</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major_id",
            "description": "<p>Ma nghanh hoc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major_name",
            "description": "<p>Ten nghanh hoc</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 1,\n        \"school\": 2,\n        \"major_id\": \"XHH\",\n        \"major_name\": \"Xã hội học\"\n    },\n    {\n        \"id\": 2,\n        \"school\": 3,\n        \"major_id\": \"KTPM\",\n        \"major_name\": \"Ky thuat phan mem\"\n    },\n    {\n        \"id\": 3,\n        \"school\": 3,\n        \"major_id\": \"IT\",\n        \"major_name\": \"Cong nghe thong tin\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "Majors"
  },
  {
    "type": "patch",
    "url": "/majors/:id/",
    "title": "Cap nhat nghanh hoc",
    "name": "UpdateAMajor",
    "group": "Majors",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID nghanh hoc</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "school",
            "description": "<p>ID khoa vien</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "major_id",
            "description": "<p>Ma nghanh hoc</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "major_name",
            "description": "<p>Ten nghanh hoc</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"major_id\": \"IT\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID nghanh hoc</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "school",
            "description": "<p>ID khoa vien</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major_id",
            "description": "<p>Ma nghanh hoc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major_name",
            "description": "<p>Ten nghanh hoc</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 3,\n    \"school\": 3,\n    \"major_id\": \"IT\",\n    \"major_name\": \"Cong nghe thong tin\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "Majors"
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Khoa viện</p>"
          },
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
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": 1,\n    \"school_id\": \"KH\",\n    \"school_name\": \"Khoa Khoa học Tự nhiên\",\n    \"majors\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "School"
  },
  {
    "type": "delete",
    "url": "/schools/:school_id/",
    "title": "Xóa khoa viện",
    "name": "DeleteSchool",
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
    "success": {
      "examples": [
        {
          "title": "Success-Example:",
          "content": "HTTP/1.1 204 No Content",
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
    "url": "/schools/:school_id/",
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
            "field": "school_id",
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
            "field": "id",
            "description": "<p>ID Khoa viện</p>"
          },
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
          "content": "HTTP/1.1 200 OK\n{\n    \"school_id\": \"DI\",\n    \"school_name\": \"Khoa Công Nghệ Thông tin và Truyền Thông\",\n    \"majors\": [\n        {\n            \"id\": 1,\n            \"school\": \"DI\",\n            \"major_id\": \"KTPM\",\n            \"major_name\": \"Kỹ thuật phần mềm\"\n        },\n        {\n            \"id\": \"2\"\n            \"school\": \"DI\",\n            \"major_id\": \"IT\",\n            \"major_name\": \"Cong nghe thong tin\"\n        }\n    ]\n}",
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
    "title": "Lấy danh sách các khoa viện",
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
            "field": "schools",
            "description": "<p>Khoa viện.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schools.id",
            "description": "<p>ID Khoa viện</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schools.school_id",
            "description": "<p>Mã khoa viện.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schools.school_name",
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
    "type": "patch",
    "url": "/schools/:school_id/",
    "title": "Cập nhật thông tin khoa viện",
    "name": "UpdateSchool",
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
            "field": "school_id",
            "description": "<p>Mã khoa viện.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "school_name",
            "description": "<p>Tên khoa viện cập nhật</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Khoa viện</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "school_id",
            "description": "<p>Mã khoa viện</p>"
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
            "description": "<p>Các nghành học</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "majors.school",
            "description": "<p>Mã khoa viện của nghành</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n    \"id\": 1,\n    \"school_id\": \"IT\",\n    \"school_name\": \"Khoa Công nghệ Thông tin\",\n    \"majors\": []\n}",
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
    "name": "CreateUserByAdmin",
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
            "type": "int",
            "optional": false,
            "field": "student_info[major]",
            "description": "<p>Mã nghành.</p>"
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
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"nhatquangc@gmail.com\",\n    \"role\": 3,\n    \"birthdate\": null,\n    \"phonenumber\": null,\n    \"gender\": \"F\",\n    \"avatar\": null,\n    \"student_info\": {\n        \"student_id\": \"b1607021\",\n        \"class_id\": \"DI16V7F2\",\n        \"major\": 1\n    },\n    \"extra_info\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/",
    "title": "Tạo user mới sử dụng phân quyền kỹ thuật viên",
    "name": "CreateUserByTechnician",
    "group": "User",
    "permission": [
      {
        "name": "technician"
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
            "type": "int",
            "optional": false,
            "field": "student_info[major]",
            "description": "<p>Mã nghành.</p>"
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
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"nhatquangc@gmail.com\",\n    \"role\": 3,\n    \"birthdate\": null,\n    \"phonenumber\": null,\n    \"gender\": \"F\",\n    \"avatar\": null,\n    \"student_info\": {\n        \"student_id\": \"b1607021\",\n        \"class_id\": \"DI16V7F2\",\n        \"major\": 1,\n    },\n    \"extra_info\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./accounts/urls.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id/",
    "title": "Lấy thông tin chi tiết user",
    "name": "GetAUser",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role_name",
            "description": "<p>Role name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Firstname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Lastname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birth_date",
            "description": "<p>Birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>Phonenumber</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar</p>"
          },
          {
            "group": "Success 200",
            "type": "StudentInfo",
            "optional": false,
            "field": "student_info",
            "description": "<p>Student Info</p>"
          },
          {
            "group": "Success 200",
            "type": "ExtraInfo",
            "optional": false,
            "field": "extra_info",
            "description": "<p>Extra Info</p>"
          },
          {
            "group": "Success 200",
            "type": "Rent[]",
            "optional": false,
            "field": "rents",
            "description": "<p>Rents</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success:",
          "content": "HTTP/1.1 200 OK \n{\n    \"id\": 1,\n    \"email\": \"admin@gmail.com\",\n    \"username\": \"admin\",\n    \"role\": 1,\n    \"role_name\": \"Quản trị viên\",\n    \"first_name\": \"\",\n    \"last_name\": \"\",\n    \"birth_date\": null,\n    \"phonenumber\": null,\n    \"gender\": \"M\",\n    \"avatar\": null,\n    \"student_info\": null,\n    \"extra_info\": null,\n    \"rents\": [\n        {\n            \"id\": 1,\n            \"device\": {\n                \"id\": 1,\n                \"equipment\": {\n                    \"id\": 1,\n                    \"equipment_id\": \"xe2\",\n                    \"equipment_name\": \"Raspberry Pi\",\n                    \"amount\": 10,\n                    \"picture\": null\n                },\n                \"device_number\": 1,\n                \"device_status\": 1,\n                \"in_used\": false\n            },\n            \"deliver_time\": \"2020-05-07T02:22:33Z\",\n            \"return_time\": \"2020-05-29T02:22:37Z\",\n            \"deliver_status\": 1,\n            \"return_status\": 2,\n            \"renter\": 1\n        }\n    ]\n}",
          "type": "json"
        }
      ]
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
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.email",
            "description": "<p>User Email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.role",
            "description": "<p>User role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.first_name",
            "description": "<p>User first name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.last_name",
            "description": "<p>User last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.birth_date",
            "description": "<p>User birth date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 1,\n        \"email\": \"admin@gmail.com\",\n        \"role\": 1,\n        \"role_name\": \"Quản trị viên\",\n        \"first_name\": \"admin\",\n        \"last_name\": \"nguyne\",\n        \"birth_date\": null\n    },\n    {\n        \"id\": 2,\n        \"email\": \"nhatquangc@gmail.com\",\n        \"role\": 2,\n        \"role_name\": \"Kỹ thuật viên\",\n        \"first_name\": \"\",\n        \"last_name\": \"\",\n        \"birth_date\": null\n    }\n]",
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
