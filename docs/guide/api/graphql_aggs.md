# API thống kê báo cáo
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
Câu truy vấn sau lấy thống kê các bản ghi của "collection" vuejx_page gộp nhóm theo shortName.
```
query {
  aggs( token: "Mã token",
        body: {
            size: 0,
            aggs: {
                group_by_state: {
                    terms: {
                        field: "shortName"
                    }
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
    "aggs": {
      "took": 26,
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
        "hits": []
      },
      "aggregations": {
        "group_by_state": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [
            {
              "key": "home",
              "doc_count": 1
            }
          ]
        }
      }
    }
  }
}
```