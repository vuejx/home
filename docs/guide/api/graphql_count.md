# API đếm số lượng
## Mô tả API
Phương thức: POST
```
/vuejx
```
Các tham số truy vấn:
1. token: Mã JSON Web Tokens ( JWT ) nhận được khi đăng nhập ( tuỳ chọn ).

2. db: Tên Database cần lấy dữ liệu.

3. collection: Tên Collection cần lấy dữ liệu.

4. body: Câu truy vấn lấy dữ liệu ( định dạng DSL QUERY )

Tham số Headers

1. Authorization: Mã xác thực Oauth2 ( access token ) nhận được khi đăng nhập hệ thống ( tuỳ chọn ).

2. token: Mã JSON Web Tokens ( JWT ) nhận được khi đăng nhập ( tuỳ chọn ).

## Ví dụ mẫu
Câu truy vấn sau lấy số lượng bản ghi của "collection" vuejx_page.
```
query {
  count( token: "Mã token",
        body: {
            query: {
                bool: {
                    filter: {
                        match: {
                            site: "guest"
                        }
                    },
                    "must": [
                        {
                            "match": {
                                "siteParent": "guest"
                            }
                        },
                        {
                            "match": {
                                "hidden": false
                            }
                        },
                        {
                            "match": {
                                "visibility": "web"
                            }
                        }
                    ]
                }
            }
        },
        db: "vuejx_cfg",
        collection: "vuejx_page"
    )
}
```
kế quả trả về như sau:
```
{
  "data": {
    "count": {
      "count": 1,
      "_shards": {
        "total": 2,
        "successful": 2,
        "skipped": 0,
        "failed": 0
      }
    }
  }
}
```