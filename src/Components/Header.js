import React, {useContext,useState, useEffect } from "react";

import { ProductContext } from "../Context/ProductContext";


function Header (props) {

  const productContext = useContext(ProductContext);
  

  const [totalPrice, setTotalPrice] = useState(productContext.totalPrice);

  
  useEffect(() => {
    // Update local state when the context changes
    setTotalPrice(productContext.totalPrice);
  }, [productContext.totalPrice]);

  console.log("productContext header ??? " , productContext);



  return (
    <div className='header'>

      <div className='market'>Market</div>

      <div className='total'>
        <img alt='' src='../Images/padlock.png'></img>
        <span id='totalPrice'> ₺ {totalPrice.toFixed(2)}  </span>
      </div>
    </div>

    
    
  )
}

export default Header