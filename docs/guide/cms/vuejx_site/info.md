# Màn hình quản trị

## Danh sách
<img src="/site_list.png" alt="structure">

## Cập nhật dữ liệu
<img src="/site_edit.png" alt="structure">

## Mô tả

1. createdAt: Ngày tạo dữ liệu
1. modifiedAt Ngày cập nhật dữ liệu
1. shortName: Mã duy nhất
1. storeDb: Cơ sở dữ liệu chứa site ( lựa chọn vuejx_cfg )
1. title: Tên định danh cho site
1. description: Mô tả cho site
1. guestHeaderConfig: Cấu hình header hiển thị của site dữ liệu công cộng ( cấu hình này sẽ bị ghi đè nếu cấu hình page hiển thì sử dụng header riêng)
1. guestFooterConfig: Cấu hình footer hiển thị của site dữ liệu công cộng ( cấu hình này sẽ bị ghi đè nếu cấu hình page hiển thì sử dụng footer riêng)
1. groupHeaderConfig: Cấu hình header hiển thị của site dữ liệu riêng tư ( cấu hình này sẽ bị ghi đè nếu cấu hình page hiển thì sử dụng header riêng)
1. groupFooterConfig: Cấu hình footer hiển thị của site dữ liệu riêng tư ( cấu hình này sẽ bị ghi đè nếu cấu hình page hiển thì sử dụng footer riêng)
1. cssConfig: Cấu hình stylesheet cho site dữ liệu ( cấu hình này sẽ công thêm với cấu hình stylesheet của page hiển thị)
1. order: Thứ tự sắp xếp ( mặc định quản trị sắp xếp theo trường này )
1. status: Trạng thái của bản ghi
1. openAccess: Mức độ truy cập của bản ghi
1. storage: Trạng thái sử dụng của dữ liệu
1. accessRoles: Phân quyền dữ liệu theo role
1. accessUsers: Phân quyền dữ liệu theo tài khoản đăng nhập
1. accessEmails: Phân quyền dữ liệu theo địa chỉ email chia sẻ dữ liệu