# API truy vấn dữ liệu
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
Câu truy vấn sau lấy danh sách 10 bản ghi của "collection" vuejx_page.
```
query {
  search( token: "Mã token",
        body: {
            sort: [ 
                    {
                        order: "asc"
                    }
                ],
            _source: {
                includes: [ "shortName", "title" ]
            },
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
            },
            from: 0,
            size: 10
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
    "search": {
      "took": 7,
      "timed_out": false,
      "_shards": {
        "total": 2,
        "successful": 2,
        "skipped": 0,
        "failed": 0
      },
      "hits": {
        "total": {
          "value": 1,
          "relation": "eq"
        },
        "max_score": null,
        "hits": [
          {
            "_index": "vuejx_cfg___vuejx_page",
            "_type": "_doc",
            "_id": "5d7266c33e78a2f92d23e9c5",
            "_score": null,
            "_source": {
              "title": "Home",
              "shortName": "home"
            },
            "sort": [
              4
            ]
          }
        ]
      }
    }
  }
}
```