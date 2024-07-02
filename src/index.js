import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
const awsmobile = {
  "aws_project_region": "us-east-2",
  "aws_appsync_graphqlEndpoint": "https://f25dqe5bfbebvbrjk4s2z4t2vq.appsync-api.us-east-2.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-2",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-d345vgiicvevfbwofnx2wevn2y",
  "aws_cognito_identity_pool_id": "us-east-2:8342c5ad-406a-4283-b898-07575618863b",
  "aws_cognito_region": "us-east-2",
  "aws_user_pools_id": "us-east-2_UOUBESCmm",
  "aws_user_pools_web_client_id": "4rdsv46b2vl4pkstsstjuiaijl",
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
  "aws_user_files_s3_bucket": "amplify-ykportfolio-ykenvelop-e7c83-deploymente7c83-ykenvelop",
  "aws_user_files_s3_bucket_region": "us-east-2"
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
