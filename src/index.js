import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Amplify, { API } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);
API.configure(awsconfig);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
