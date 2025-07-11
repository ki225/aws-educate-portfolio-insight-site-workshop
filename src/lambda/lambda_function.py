import json
import os
import logging
import boto3
from botocore.exceptions import ClientError

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodb = boto3.resource('dynamodb')
table_name = os.environ.get('PROJECT_VIEWS_TABLE_NAME', 'portfolio-insight-project-views')
project_views_table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    """
    Main handler for Lambda function
    """
    logger.info(f"Event: {json.dumps(event)}")
    
    http_method = event.get('httpMethod', '')
    path = event.get('path', '')
    path_parameters = event.get('pathParameters', {})
    query_parameters = event.get('queryStringParameters', {}) or {}
    
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    }
    
    if http_method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': headers,
            'body': ''
        }
    
    try:
        if '/projects/views' in path and http_method == 'GET':
            return get_all_project_views(headers)
        
        elif '/projects/view' in path and http_method == 'POST':
            return increment_project_view(event, headers)
        
        else:
            return {
                'statusCode': 404,
                'headers': headers,
                'body': json.dumps({'error': 'Not Found'})
            }
            
    except Exception as e:
        logger.error(f"Error processing request: {str(e)}")
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': str(e)})
        }

def get_all_project_views(headers):
    """
    Get view counts for all projects
    """
    try:
        response = project_views_table.scan()
        items = response.get('Items', [])
        
        result = {
            'projects': items
        }
        
        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps(result, default=str)
        }
    
    except ClientError as e:
        logger.error(f"DynamoDB error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': f"Database error: {str(e)}"})
        }

def increment_project_view(event, headers):
    """
    Increment view count for a specific project
    """
    try:
        body = json.loads(event.get('body', '{}'))
        project_id = body.get('project_id')
        project_title = body.get('project_title', '')
        
        if not project_id:
            return {
                'statusCode': 400,
                'headers': headers,
                'body': json.dumps({'error': 'project_id is required'})
            }
        
        update_expression = "ADD view_count :inc"
        expression_attribute_values = {':inc': 1}
        
        if project_title:
            update_expression += " SET project_title = :title"
            expression_attribute_values[':title'] = project_title
            
        response = project_views_table.update_item(
            Key={'project_id': project_id},
            UpdateExpression=update_expression,
            ExpressionAttributeValues=expression_attribute_values,
            ReturnValues='ALL_NEW'
        )
        
        updated_item = response.get('Attributes', {})
        
        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({
                'message': 'View count incremented',
                'project': updated_item
            }, default=str)
        }
        
    except ClientError as e:
        logger.error(f"DynamoDB error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': f"Database error: {str(e)}"})
        }
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Invalid JSON in request body'})
        }
