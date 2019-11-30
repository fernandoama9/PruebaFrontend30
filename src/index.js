import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App.js'
import Main from '../src/components/Main/index.js'
import ReactDOM from 'react-dom';


ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>, document.getElementById('root'));