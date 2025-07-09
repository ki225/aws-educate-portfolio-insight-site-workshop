## 使用 API

本專案 API 端點如下:

1. **GET /projects/views** - 返回所有專案的瀏覽次數
2. **POST /projects/view** - 增加特定專案的瀏覽次數

### 獲取專案瀏覽次數

```bash
curl -X GET https://{api-id}.execute-api.us-west-2.amazonaws.com/v1/projects/views
```

### 增加專案瀏覽次數

```bash
curl -X POST https://{api-id}.execute-api.us-west-2.amazonaws.com/v1/projects/view \
  -H "Content-Type: application/json" \
  -d '{"project_id": "project-123", "project_title": "我的精彩專案"}'
```

## 資料結構

### ProjectViews 表格說明

| 欄位          | 類型     | 說明                                            |
|---------------|----------|------------------------------------------------|
| project_id    | str     | 主鍵                          |
| view_count    | number  | 專案的總瀏覽次數                                |
| project_title | str     | 專案的顯示名稱                           |