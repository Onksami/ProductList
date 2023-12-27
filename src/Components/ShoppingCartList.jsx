import React, { useState, useContext } from 'react';
import { ProductContext } from "../Context/ProductContext";


function ShoppingCartList() {

    const productContext = useContext(ProductContext);
    // console.log("ShoppingCartList" , productContext);

  const [quantity, setQuantity] = useState(1);
  const productName = productContext.shoppingCard.name;
  const price = productContext.shoppingCard.price; // You can set the price dynamically or statically
  const totalPrice = price * quantity



  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <>
      <div>{productName} <br />
          Price: ${price * quantity}
          <button onClick={decreaseQuantity}>-</button>
          {quantity}
          <button onClick={increaseQuantity}>+</button>
      </div> 
      <div>
        Total: {totalPrice}
      </div>


    </>
  );
}

export default ShoppingCartList;
