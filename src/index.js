// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductContext from './Context/ProductContext';


ReactDOM.render(
  <React.StrictMode>

    < ProductContext> 

      <App />

      </ProductContext>
  
  </React.StrictMode>,
  document.getElementById('root')
);
