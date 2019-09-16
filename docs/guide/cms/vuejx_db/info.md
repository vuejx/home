# Màn hình quản trị

## Danh sách
<img src="/db_list.png" alt="structure">

## Cập nhật dữ liệu
<img src="/db_edit.png" alt="structure">

## Mô tả

1. createdAt: Ngày tạo dữ liệu
1. modifiedAt Ngày cập nhật dữ liệu
1. shortName: Mã duy nhất ( tên database trong MongoDB )
1. title: Tên định danh cho database
1. description: Mô tả cho database
1. order: Thứ tự sắp xếp ( mặc định quản trị sắp xếp theo trường này )
1. status: Trạng thái của bản ghi
1. openAccess: Mức độ truy cập của bản ghi
1. storage: Trạng thái sử dụng của dữ liệu
1. accessRoles: Phân quyền dữ liệu theo role
1. accessUsers: Phân quyền dữ liệu theo tài khoản đăng nhập
1. accessEmails: Phân quyền dữ liệu theo địa chỉ email chia sẻ dữ liệu