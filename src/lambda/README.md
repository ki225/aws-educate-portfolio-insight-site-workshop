## 使用 API

本專案 API 端點如下:

1. **GET /projects/views** - 返回所有專案的瀏覽次數
2. **POST /projects/view** - 增加特定專案的瀏覽次數



### POST /v1/projects/view
- 功能：對某個專案（project）增加一次瀏覽次數，並（可選）設定專案標題。
- 資料儲存位置：寫入（或更新）到 DynamoDB 表 portfolio-insight-project-views，欄位為：
  - project_id: 專案唯一識別碼（必要）
  - project_title: 專案名稱（可選）
  - view_count: 被自動加 1 的欄位

```bash
curl -X POST https://{api-id}.execute-api.us-west-2.amazonaws.com/v1/projects/view \
  -H "Content-Type: application/json" \
  -d '{"project_id": "project-123", "project_title": "我的精彩專案"}'
```

### GET /v1/projects/views
- 功能：列出所有專案的瀏覽次數資訊（從 DynamoDB scan() 所得）。

```bash
curl -X GET https://{api-id}.execute-api.us-west-2.amazonaws.com/v1/projects/views
```

## 資料結構

### ProjectViews 表格說明

| 欄位          | 類型     | 說明                                            |
|---------------|----------|------------------------------------------------|
| project_id    | str     | 主鍵                          |
| view_count    | number  | 專案的總瀏覽次數                                |
| project_title | str     | 專案的顯示名稱                           |

## 測試
### POST /v1/projects/view
```
curl -X POST https://v8nad22usc.execute-api.us-west-2.amazonaws.com/v1/projects/view  -H "Content-Type: application/json"  -d '{"project_id": "demo123", "project_title": "My Demo Project"}'
```
result
```
{"message": "View count incremented", "project": {"view_count": "1", "project_id": "demo123", "project_title": "My Demo Project"}}
```

### GET /v1/projects/views
```
curl -X GET https://v8nad22usc.execute-api.us-west-2.amazonaws.com/v1/projects/views
```
result
```
{"projects": [{"view_count": "3", "project_id": "demo123", "project_title": "My Demo Project"}]}
```