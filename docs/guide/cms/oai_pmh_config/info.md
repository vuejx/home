# Màn hình quản trị

## Danh sách
<img src="/oai_config_list.png" alt="structure">

## Cập nhật dữ liệu
<img src="/oai_config_edit.png" alt="structure">


## Đồng bộ dữ liệu
<img src="/oai_config_async.png" alt="structure">

## Logs đồng bộ dữ liệu
<img src="/oai_config_logs.png" alt="structure">


## Mô tả

1. createdAt: Ngày tạo dữ liệu
1. modifiedAt Ngày cập nhật dữ liệu
1. shortName: Mã duy nhất
1. prefix: Prefix của đối tượng XML trả về
1. storeDb: Database lưu trữ dữ liệu đồng bộ
1. storeCollection: Collection lưu trữ dữ liệu đồng bộ
1. title: Tên định danh cho database
1. description: Mô tả cho cấu hình đồng bộ dữ liệu
1. oai_identify_xml: Định nghĩa OAI-Identify-XML
1. oai_json_mapping_datasource: Cấu hình mapping dữ liệu dạng mã code với dữ liệu danh mục
1. oai_input_url: Địa chỉ API OAI-PMH chia sẻ dữ liệu
1. oai_json: Cấu hình chuyển đổi dữ liệu XML ( OAI-PMH ) sang cấu trúc dữ liệu metadata đã định nghĩa
1. order: Thứ tự sắp xếp ( mặc định quản trị sắp xếp theo trường này )
1. status: Trạng thái của bản ghi
1. openAccess: Mức độ truy cập của bản ghi
1. storage: Trạng thái sử dụng của dữ liệu
1. accessRoles: Phân quyền dữ liệu theo role
1. accessUsers: Phân quyền dữ liệu theo tài khoản đăng nhập
1. accessEmails: Phân quyền dữ liệu theo địa chỉ email chia sẻ dữ liệu