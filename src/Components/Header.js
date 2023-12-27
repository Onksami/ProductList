import React, {useContext } from "react";

import { ProductContext } from "../Context/ProductContext";


function Header (props) {

  const productContext = useContext(ProductContext);
  const price = productContext.shoppingCard.price; // You can set the price dynamically or statically


  return (
    <div className='header'>

      <div className='market'>Market</div>

      <div className='total'>
        <img alt='' src='../Images/padlock.png'></img>
        <span id='totalPrice'> ₺ {price} </span>
      </div>
    </div>

    
    
  )
}

export default Header