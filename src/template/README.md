## IAC 部署說明

### 架構
此架構使用巢狀 CloudFormation：
- `main.yml` - 引用所有其他模板的主模板
- `s3.yml` - 建立用於網站託管的 S3 儲存桶
- `dynamodb.yml` - 建立用於作品集資料和專案瀏覽次數的 DynamoDB 資料表
- `lambda.yml` - 建立 Lambda 函數和 IAM 角色
- `apigateway.yml` - 建立 API Gateway 資源


### 前置條件

1. 已安裝並設定 AWS CLI
<!-- 2. 用於 Lambda 程式碼部署的 S3 -->

### 步驟

1. **封裝 Lambda 函數：**

```bash
cd src/lambda
zip -r portfolio-insight-function.zip lambda_function.py
aws s3 cp portfolio-insight-function.zip s3://your-deployment-bucket-name/lambda/
```

2. **更新 parameters.json：**

編輯 `template/parameters.json` 並填入您的 S3 儲存桶名稱：

```json
[
  {
    "ParameterKey": "ProjectName",
    "ParameterValue": "portfolio-insight"
  },
  {
    "ParameterKey": "DeploymentBucket",
    "ParameterValue": "your-deployment-bucket-name"
  },
  {
    "ParameterKey": "LambdaCodeKey",
    "ParameterValue": "lambda/portfolio-insight-function.zip"
  }
]
```

3. **部署 CloudFormation 堆疊：**

```bash
aws cloudformation deploy \
  --template-file template/main.yml \
  --stack-name portfolio-insight \
  --parameter-overrides file://template/parameters.json \
  --capabilities CAPABILITY_NAMED_IAM \
  --region us-west-2
```

**重要注意事項：**

- 此堆疊使用 `arn:aws:lambda:us-west-2:770693421928:layer:Klayers-p311-boto3:25` Lambda Layer 提供 boto3 相依性
- 此 Lambda Layer 僅適用於 `us-west-2` 區域和 Python 3.11
- 必須部署到 `us-west-2` 區域才能使 Lambda Layer 正常運作