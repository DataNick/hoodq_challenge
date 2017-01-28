import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Data from './addresses.json';


ReactDOM.render(
  <App profileData={Data}/>,
  document.getElementById('root')
);
