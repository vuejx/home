# API thống kê báo cáo
## Mô tả API
### Định nghĩa báo cáo cho đối tượng
Phương thức: PUT
```
/core/restheart/<db>/<collection>
```
Các tham số truy vấn:
1. db: Tên Database cần lấy dữ liệu.

2. collection: Tên Collection cần lấy dữ liệu.

Tham số Headers

1. Authorization: Mã xác thực Oauth2 ( access token ) nhận được khi đăng nhập hệ thống ( tuỳ chọn ).

2. token: Mã JSON Web Tokens ( JWT ) nhận được khi đăng nhập ( tuỳ chọn ).

Body: thêm 2 loại báo cáo dạng ( mapReduce và pipeline )
```
{ 
   "aggrs":[ 
      { 
         "map":"function() { emit(this.shortName, 1) }",
         "query":{ 

         },
         "out":"order_totals",
         "reduce":"function(key, count) { return Array.sum(count) }",
         "type":"mapReduce",
         "uri":"test_mr"
      },
      { 
         "type":"pipeline",
         "uri":"test_pl",
         "stages":[ 
            { 
               "_$group":{ 
                  "_id":"$shortName",
                  "total":{ 
                     "_$sum":1
                  }
               }
            }
         ]
      }
   ]
}
```
## Ví dụ mẫu
Câu truy vấn lấy dữ liệu thống kê theo
```
/core/restheart/<db>/<collection>/_aggrs/test_mr
```
hoặc
```
/core/restheart/<db>/<collection>/_aggrs/test_pl
```
kế quả trả về như sau:
```
{
    "_id": "home",
    "total": 2,
    "_embedded": [
        {
            "_id": "home",
            "total": 1
        },
        {
            "_id": "test",
            "total": 1
        }
    ],
    "_size": 2,
    "_total_pages": 1,
    "_returned": 2
}
```
### Dữ liệu gốc
```
{
    "_embedded": [
        {
            "_id": {
                "$oid": "5d7266c33e78a2f92d23e9c5"
            },
            "shortName": "home",
            "title": "Home"
        },
        {
            "_id": {
                "$oid": "5d7266c33e78a2f92d23e9c6"
            },
            "shortName": "test",
            "title": "Test"
        }
    ],
    "_size": 2,
    "_total_pages": 1,
    "_returned": 2
}
```