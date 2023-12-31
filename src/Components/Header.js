import React, {useContext,useState, useEffect } from "react";

import { ProductContext } from "../Context/ProductContext";


function Header (props) {

  const productContext = useContext(ProductContext);



  return (
    <div className='header'>

      <div className='market'>Market</div>

      <div className='total'>
        <img alt='' src='../Images/padlock.png'></img>
        <span id='totalPrice'> ₺  </span>
      </div>
    </div>

    
    
  )
}

export default Header