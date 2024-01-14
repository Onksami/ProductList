// index.js
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import ProductContext from './Context/ProductContext';
import About from './Components/About';
import ProductDetails from './Components/ProductDetails';





ReactDOM.render(
 
    < ProductContext> 
    <BrowserRouter >
      <Routes >
        <Route path="/" element={   <Navigate to="/product" replace={true} />}/> 
        <Route path="/product" element={<App />}/> 
        <Route path="/product/:slug" element={<ProductDetails />}/> 
        <Route path="/about" element={<About />}/> 
        <Route path="*" element={<div> not found</div>}/> 
        
      </Routes>
    </BrowserRouter>

      </ProductContext>,
  document.getElementById('root')
);
