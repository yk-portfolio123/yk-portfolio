const fs = require('fs');

const awsmobile = {
  "aws_project_region": process.env.MY_AWS_PROJECT_REGION,
  "aws_appsync_graphqlEndpoint": process.env.MY_AWS_APPSYNC_GRAPHQLENDPOINT,
  "aws_appsync_region": process.env.MY_AWS_APPSYNC_REGION,
  "aws_appsync_authenticationType": process.env.MY_AWS_APPSYNC_AUTHENTICATIONTYPE,
  "aws_appsync_apiKey": process.env.MY_AWS_APPSYNC_APIKEY,
  "aws_cognito_identity_pool_id": process.env.MY_AWS_COGNITO_IDENTITY_POOL_ID,
  "aws_cognito_region": process.env.MY_AWS_COGNITO_REGION,
  "aws_user_pools_id": process.env.MY_AWS_USER_POOLS_ID,
  "aws_user_pools_web_client_id": process.env.MY_AWS_USER_POOLS_WEB_CLIENT_ID,
  "oauth": {},
  "aws_user_files_s3_bucket": process.env.MY_AWS_USER_FILES_S3_BUCKET,
  "aws_user_files_s3_bucket_region": process.env.MY_AWS_USER_FILES_S3_BUCKET_REGION
};

const content = `const awsmobile = ${JSON.stringify(awsmobile, null, 2)};\nexport default awsmobile;`;

fs.writeFileSync('./src/aws-exports.js', content, 'utf8');
