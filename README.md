# Portfolio Insight Site Workshop

本工作坊建立一個作品集洞察網站，使用以下 AWS 服務：
- Amazon S3 用於靜態網站託管
- Amazon DynamoDB 用於資料儲存
- AWS Lambda 用於後端處理
- Amazon API Gateway 用於 API 端點

## 部署步驟
本工作坊使用 aws iac 工具 CloudFormation 進行 lambda, dynamoDB, apigateway 等部署。詳細步驟請參考 `src/template/README.md`。