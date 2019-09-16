# Mô tả quyền dữ liệu

## Quản lý phân quyền của người dùng

+ Mỗi người dùng được định danh = username
+ guest là tên người dùng đặc biệt được gắn cho các phiên không có xác thực
+ Người dùng được gắn với 1 tập roles. Roles được sử dụng để xác định vị trí công việc hoặc tổ chức làm việc của người dùng
+ admin là roles đặc biệt cho phép quản trị, đọc ghi toàn bộ dữ liệu trong hệ thống
+ user là roles đặc biệt dành cho tất cả người dùng có tài khoản được xác thực
+ Mỗi phiên đăng nhập, ứng dụng được phép truy cập thông tin trong một phạm vi scope nhất định

## Phân quyền trên một collection dữ liệu 

Chỉ có admin được phép ghi thay đổi phân quyền trên 1 collection thông qua dữ liệu _meta 
Các giá trị trường metadata:
+ rightMode: 0 = theo phân quyền của từng bản ghi; 1 = cho phép đọc tất cả bản ghi; 2: cho phép đọc/ghi tất cả bản ghi. Ngầm định rightMode = 0.
+ publicAccess: 0 = không cho phép guest truy cập, 1 = cho phép guest truy cập nhưng ko được tạo mới; 2: cho phép guest truy cập và tạo mới dữ liệu. Ngầm định publicAccess = 0.   
+ scopes: danh sách các scope được phép truy cập bảng dữ liệu. Nếu null thì được truy cập bởi mọi scope, ví dụ [ “scope_1”,  “scope_2”] 
+ projections: hạn chế các trường thông tin được phép trả về theo phạm vi của từng scope, ví dụ: [ { scope: “scope_1”, keys: { “field_1”: 0 , field_2”: 1,...}},... ]

## Cấu trúc của 1 tài liệu mặc định tạo ra có các trường như sau

_id: key dữ liệu (nếu không tường minh thì hệ thống tự tạo $oid)

_etag: version của dữ liệu dùng để xử lý caching tự động. Etag được trả lại trong header của http.

_dateCreated: ngày tạo tài liệu (tự động cập nhật khi POST, PUT lần đầu)

_dateModified: ngày sửa tài liệu lần cuối (tự động cập nhật khi PUT hoặc PATCH)

_username: người tạo dữ liệu, sử dụng tên đăng nhập. Trong trường hợp người dùng không đăng nhập thì tự động tạo phiên làm việc cho người dùng “guest”. Người chủ sở hữu dữ liệu có toàn quyền đọc ghi

_email: email của người tạo dữ liệu trong trường hợp người dùng hoặc guest có định danh = email duy nhất

_storage: trạng thái sử dụng của dữ liệu: draft (lưu nháp), archive (lưu trữ), trash (thùng rác), regular (thông thường). Ngầm định dữ liệu tạo ra lưu ở bộ nhớ regular. 

_openAccess: mức độ truy cập mở của bản ghi: 2 = tất cả đều có thể đọc bao gồm cả guest; 1 = người dùng có tài khoản được đọc, 0 = chỉ những người nào được phân quyền. Ngầm định có giá trị là 0.   

_accessRoles: danh sách những roles được phép truy cập (đọc/ghi) dữ liệu, ví dụ [ { role: “r1”, permission: 1, role: “r2”, permission: 2 } ]

_accessUsers: danh sách những người dùng được phép truy cập (đọc/ghi) dữ liệu, ví dụ [ { username: “u1”, permission: 1, username: “u2”, permission: 2 } ]

_accessEmails: danh sách những email (guest) được phép truy cập (đọc/ghi) dữ liệu, ví dụ [ { email: “mail_1@dot.com”, permission: 1, email: “mail_2@dot.com”, permission: 2 } ]

## Các quyền truy cập dữ liệu 

1. quyền đọc dữ liệu
2. quyền sửa dữ liệu 
3. quyền chia sẻ dữ liệu (_openAccess, _accessRoles, _accessUsers, _accessEmails) 
4. quyền xóa dữ liệu vĩnh viễn, hoặc thay đổi lưu trữ (_storage)
