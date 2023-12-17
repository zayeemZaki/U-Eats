import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Amplify } from "aws-amplify";
import amplifyconfig from './amplifyconfiguration.json';
import awsmobile from './aws-exports';
import awsconfig from './aws-exports';
Amplify.configure(amplifyconfig);
Amplify.configure(awsmobile);
Amplify.configure(awsconfig);

const existingConfig = Amplify.getConfig();
Amplify.configure({
  ...existingConfig,
  API: {
    ...existingConfig.API?.REST,
    'stripeAPI': {
      endpoint: 'https://sapsmxfq24.execute-api.us-east-1.amazonaws.com/dev',
      region: 'us-east-1'
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
