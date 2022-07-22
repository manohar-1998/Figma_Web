import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routing from './routing';
import Header from './Pages/header';
// import Routes from './Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {<Routing />}
    {/* <App/> */}
  </React.StrictMode>
);


reportWebVitals();
