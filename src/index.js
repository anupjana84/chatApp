import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import store from './Store/Store';
import { Provider } from 'react-redux';
import MainRoute from './Routes/MainRoute';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>

   
    <MainRoute />
   

  </Provider>
  </React.StrictMode>)
