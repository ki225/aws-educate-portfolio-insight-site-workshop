# 完全使用手動創建的 S3 儲存桶部署指南

本指南說明如何完全使用已手動創建的 S3 儲存桶進行部署，不再嘗試通過 CloudFormation 創建 S3 儲存桶。

## 前置準備

1. **確保已經手動創建了 S3 儲存桶 `testforws0709`**
   ```bash
   # 如果尚未創建，請使用以下命令
   aws s3 mb s3://testforws0709 --region us-west-2
   ```

2. **檢查 parameters.json 是否正確配置**
   - `DeploymentBucket` 參數已設置為 "testforws0709"
   - `LambdaCodeKey` 參數已設置為 "lambda/portfolio-insight-function.zip"

## 部署步驟

### 1. 上傳 Lambda 程式碼

```bash
cd src/lambda
zip -r portfolio-insight-function.zip lambda_function.py
aws s3 cp portfolio-insight-function.zip s3://testforws0709/lambda/
```

### 2. 上傳模板文件

```bash
cd src/
aws s3 cp template/ s3://testforws0709/templates/ --recursive
```

### 3. 部署 CloudFormation 堆疊

```bash
aws cloudformation create-stack \
  --stack-name portfolio-insight \
  --template-url https://testforws0709.s3.amazonaws.com/templates/main.yml \
  --parameters file://parameters.json \
  --capabilities CAPABILITY_NAMED_IAM \
  --region us-west-2
```

## 重要更改說明

1. **移除了 S3Stack**：
   - `main.yml` 中已完全移除 S3Stack 資源
   - 不再嘗試通過 CloudFormation 創建或管理 S3 儲存桶
   - 只使用手動創建的 S3 儲存桶來存儲和部署模板和 Lambda 程式碼

2. **移除了 S3 相關輸出**：
   - `main.yml` 中已移除與 S3 儲存桶相關的輸出
   - 如果需要獲取 S3 儲存桶信息，請直接使用 AWS 控制台或 CLI

3. **確保 DynamoDB 表格命名不衝突**：
   - 如果之前的部署已創建了相同名稱的 DynamoDB 表格，可能需要調整 `dynamodb.yml` 中的表格名稱

## 疑難排解

如果部署仍然失敗，請嘗試以下步驟：

1. **檢查詳細的失敗原因**：
   ```bash
   aws cloudformation describe-stack-events \
     --stack-name portfolio-insight \
     --query "StackEvents[?ResourceStatus=='CREATE_FAILED'].{Resource:LogicalResourceId,Reason:ResourceStatusReason}"
   ```

2. **確認所有模板已正確上傳**：
   ```bash
   aws s3 ls s3://testforws0709/templates/ --recursive
   ```

3. **驗證模板可訪問性**：
   ```bash
   curl -I https://testforws0709.s3.amazonaws.com/templates/main.yml
   ```
