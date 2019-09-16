# Bắt đầu

## Địa chỉ truy cập
```
/ui/#/admin
```

## Danh sách cơ sở dữ liệu hệ thống

| Mã cơ sở dữ liệu | Tên cơ sở dữ liệu | Mô tả  |
| ------------- | ------------- | ----- |
| vuejx_db      | Danh sách cớ sở dữ liệu | Danh sách database trong MongoDB |
| vuejx_collection      | Danh sách metadata      | Danh sách Collection thuộc database trong MongoDB |
| scope | Danh sách scope      | Danh sách Scope được gán cho người dùng |
| projection | 	Danh sách projection      | Định nghĩa các trường dữ liệu có hiệu lực đối với từng Scope |
| vuejx_site | Danh sách trang dữ liệu      | Danh sách trang dữ liệu |
| vuejx_page | Danh sách Page      | Danh sách Page thuộc từng trang dữ liệu |
| aggrs | Danh sách định nghĩa báo cáo cho đối tượng      | Định nghĩa kết quả báo cáo cần truy xuất cho từng đối tượng |
| oai_pmh_config | OAI-PMH Config      | Định nghĩa cấu hình đồng bộ dữ liệu |
| oai_pmh_async | OAI-PMH ASYNC      | Danh sách Logs mỗi khi đồng bộ dữ liệu vào hệ thống |
| _schemas | Danh sách _schemas      | Định nghĩa Format dữ liệu trước khi thao tác với MongoDB |
| open_access | Mức độ truy cập      | Định nghĩa mức độ truy cập dữ liệu|
| permission | Các quyền truy cập dữ liệu      | Các quyền truy cập dữ liệu |
| role | Danh sách chức vụ      | Danh sách chức vụ được gán cho người dùng |
| storage | Danh sách các trạng thái sử dụng của dữ liệu      | Danh sách các trạng thái sử dụng của dữ liệu |
| dict_collection | Danh sách nhóm danh mục	      | Danh sách nhóm danh mục |
| dict_item | Danh sách dữ liệu danh mục      | Danh sách dữ liệu danh mục |
| tag | Danh sách thẻ nhẫn      | Thẻ nhãn sử dụng phân nhóm dữ liệu |
| person | Danh sách người dùng      | Danh sách người dùng |

## Đánh chỉ mục hệ thống

<img src="/reindex_list.png" alt="structure">

<img src="/reindex_edit.png" alt="structure">

+ Reindex: Đánh chỉ mục cho đối tượng hiện tại
+ ReindexAll: Đánh lại toàn bộ chỉ mục hệ thống
+ Start Date: Chọn ngày dữ liệu bắt đầu ( modifiedAt )
+ End Date: Chọn ngày dữ liệu cuối cùng ( modifiedAt )
+ Type: 
    - Default: Chỉ đánh lại index dữ liệu ( không thay đổi mapping trường dữ liệu )
    - Clean: Xoá index hiện tại và tạo lại index mới ( thay đổi mapping trường dữ liệu ). lựa chọn này không khả dụng với điều kiện ngày tháng Start và End date, đánh lại chỉ mục toàn bộ dữ liệu