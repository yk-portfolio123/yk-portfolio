import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
const awsmobile = {
  "aws_project_region": process.env.PROJECT_REGION,
  "aws_appsync_graphqlEndpoint": process.env.APPSYNC_GRAPHQLENDPOINT,
  "aws_appsync_region": process.env.APPSYNC_REGION,
  "aws_appsync_authenticationType": process.env.APPSYNC_AUTHENTICATIONTYPE,
  "aws_appsync_apiKey": process.env.APPSYNC_APIKEY,
  "aws_cognito_identity_pool_id": process.env.COGNITO_IDENTITY_POOL_ID,
  "aws_cognito_region": process.env.COGNITO_REGION,
  "aws_user_pools_id": process.env.USER_POOLS_ID,
  "aws_user_pools_web_client_id": process.env.USER_POOLS_WEB_CLIENT_ID,
  "oauth": {},
  "aws_cognito_username_attributes": [],
  "aws_cognito_social_providers": [],
  "aws_cognito_signup_attributes": [
      "EMAIL"
  ],
  "aws_cognito_mfa_configuration": "OFF",
  "aws_cognito_mfa_types": [
      "SMS"
  ],
  "aws_cognito_password_protection_settings": {
      "passwordPolicyMinLength": 8,
      "passwordPolicyCharacters": []
  },
  "aws_cognito_verification_mechanisms": [
      "EMAIL"
  ],
  "aws_user_files_s3_bucket": process.env.USER_FILES_S3_BUCKET,
  "aws_user_files_s3_bucket_region": process.env.USER_FILES_S3_BUCKET_REGION,
};
Amplify.configure(awsmobile);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
