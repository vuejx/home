# API truy vấn dữ liệu
## Mô tả API
Phương thức: GET
```
/core/restheart/<db>/<collection>
```
Các tham số truy vấn:
1. db: Tên Database cần lấy dữ liệu.

2. collection: Tên Collection cần lấy dữ liệu.

Query parameters:
1. page: Phân trang dữ liệu.

2. pagesize: Số bản ghi trả về trên 1 trang dữ liệu.

3. sort: Sắp xếp thứ tự ( sort=[ |-]fieldname ) || ( sort={"fieldname":-1} )

4. filter: Câu truy vấn dữ liệu dạng JSON

5. keys: Truy vấn xác định các trường dữ liệu trả về 

Tham số Headers

1. Authorization: Mã xác thực Oauth2 ( access token ) nhận được khi đăng nhập hệ thống ( tuỳ chọn ).

2. token: Mã JSON Web Tokens ( JWT ) nhận được khi đăng nhập ( tuỳ chọn ).

## Ví dụ mẫu
Câu truy vấn sau lấy danh sách 10 bản ghi của "collection" vuejx_page trang thứ 1, sắp xếp giảm dần theo trường order và kết quả trả về gồm 2 cột shortName và title.
```
/core/restheart/vuejx_cfg/vuejx_page?page=1&pagesize=10&sort=-order&keys={"shortName": 1, "title": 1}
```
Câu truy vấn dạng JSON.
```
/core/restheart/vuejx_cfg/vuejx_page?page=1&pagesize=10&filter={"title": "Home"}
```
Sử dụng regex.
```
/core/restheart/vuejx_cfg/vuejx_page?page=1&pagesize=10&filter={"title":{"$regex":"^Hom*"}}
```
kế quả trả về như sau:
```
{
    "_embedded": [
        {
            "_id": {
                "$oid": "5d7266c33e78a2f92d23e9c5"
            },
            "shortName": "home",
            "title": "Home"
        }
    ],
    "_id": "vuejx_page",
    "_etag": {
        "$oid": "5d79bfcdae5d9c3a225e851a"
    },
    "_size": 1,
    "_total_pages": 1,
    "_returned": 1
}
```