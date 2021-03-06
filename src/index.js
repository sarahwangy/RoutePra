import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// import './bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// 安装bootstrap 的方法， 下载 因为bootstrap 引用了其他的格式，所以不能直接引用，需要转换
// https://react-bootstrap.github.io/getting-started/introduction/

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
