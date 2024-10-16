import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

function tick() {
  const element = (
    <div>
      <h1>안녕, 리엑트</h1>
      <h2>현재시간: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(element);
}

setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
