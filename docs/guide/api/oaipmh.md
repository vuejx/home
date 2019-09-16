# OAI-PMH Service
## Mô tả API
Phương thức: GET
```
/vuejx/oai
```
Query parameters:
1. verb: Identify | ListMetadataFormats | ListRecords | GetRecord

2. metadataPrefix: &lt;db&gt;

3. set: &lt;collection&gt;

4. identifier: ID định danh của bản ghi

5. resumptionToken: Phân trang bản ghi cần lấy giữ liệu

6. from: Thời gian cập nhật bản ghi ( UTC )

7. until: Thời gian cập nhật bản ghi ( UTC )

Điều kiện lấy dữ liệu các bản ghi thoả mãn điều kiện:

1. mode: normal

2. openAccess: 2

## Ví dụ mẫu
Câu truy vấn sau lấy thông tin Identify
```
/vuejx/oai?verb=Identify&metadataPrefix=vuejx_cfg&set=project
```
Câu truy vấn sau lấy thông tin ListMetadataFormats
```
/vuejx/oai?verb=ListMetadataFormats
/vuejx/oai?verb=ListMetadataFormats&metadataPrefix=vuejx_page
```
Câu truy vấn sau lấy danh sách ListRecords
```
/vuejx/oai?verb=ListRecords&metadataPrefix=vuejx_cfg&set=vuejx_page&resumptionToken=1&from=2019-10-30T09:12:33Z&until=2019-10-30T09:12:33Z
```
Câu truy vấn sau lấy danh sách GetRecord
```
/vuejx/oai?verb=GetRecord&metadataPrefix=vuejx_cfg&set=vuejx_page&identifier=5d7266c33e78a2f92d23e9c5
```