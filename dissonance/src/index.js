import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/antd/dist/antd.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';

{/* The following line can be included in your src/index.js or App.js file*/}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
