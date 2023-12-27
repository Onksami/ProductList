import React, { useState, useContext } from 'react';
import { ProductContext } from "../Context/ProductContext";


function ShoppingCartList() {

    const productContext = useContext(ProductContext);
    // console.log("ShoppingCartList" , productContext);

  const [quantity, setQuantity] = useState(1);
  // const productName = productContext.shoppingCard.name;
  // const price = productContext.shoppingCard.price; // You can set the price dynamically or statically
  // const totalPrice = price * quantity



  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  console.log("shopping card coming? ", productContext.shoppingCard);

  return (
    <>
    {productContext.shoppingCard.map((product, index) =>{
      return (
        <div>{product.name} <br />
        Price: ${product.price}


        
        <button onClick={decreaseQuantity}>-</button>
        1
        <button onClick={increaseQuantity}>+</button>
    </div> 
      )
    } )}

      <div>
        Total: 
      </div>


    </>
  );
}

export default ShoppingCartList;
