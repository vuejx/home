# Màn hình quản trị

## Danh sách
<img src="/page_list.png" alt="structure">

## Cập nhật dữ liệu
<img src="/page_edit.png" alt="structure">

## Mô tả

1. createdAt: Ngày tạo dữ liệu
1. modifiedAt Ngày cập nhật dữ liệu
1. shortName: Mã duy nhất
1. siteParent: Chọn Site sử dụng page
1. storeDb: Cơ sở dữ liệu chứa site ( lựa chọn vuejx_cfg )
1. visibility: Hiển thị page này cho trang công cộng hoặc riêng tư
1. hidden: page này không hiển thị trên menu nếu lựa chọn hidden
1. title: Tên định danh cho site
1. pageParent: Chọn trang cha nếu muốn thiết kế site map dạng cây
1. description: Mô tả cho site
1. pageHeaderConfig: Cấu hình header hiển thị của page ( cấu hình này sẽ ghi đè nếu cấu hình header của site )
1. pageFooterConfig: Cấu hình footer hiển thị của page ( cấu hình này sẽ ghi đè nếu cấu hình footer của site )
1. cssConfig: Cấu hình stylesheet cho page ( cấu hình này sẽ công thêm với cấu hình stylesheet của site )
1. order: Thứ tự sắp xếp ( mặc định quản trị sắp xếp theo trường này )
1. status: Trạng thái của bản ghi
1. openAccess: Mức độ truy cập của bản ghi
1. storage: Trạng thái sử dụng của dữ liệu
1. accessRoles: Phân quyền dữ liệu theo role
1. accessUsers: Phân quyền dữ liệu theo tài khoản đăng nhập
1. accessEmails: Phân quyền dữ liệu theo địa chỉ email chia sẻ dữ liệu