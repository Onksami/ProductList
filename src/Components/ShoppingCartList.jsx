import React, { useState, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

function ShoppingCartList() {
  const productContext = useContext(ProductContext);
  // console.log("ShoppingCartList" , productContext);

  const [quantity, setQuantity] = useState(1);
  // const productName = productContext.shoppingCard.name;
  // const price = productContext.shoppingCard.price; // You can set the price dynamically or statically
  // const totalPrice = price * quantity

  const increaseQuantity = () => {
    //1. find selected shopping item inside context shoppingCard
    //2. increase quantity of selected shopping item
    //3. update context shoppingCard (setShoppingCard)
  };

  const decreaseQuantity = () => {
    //1. find selected shopping item inside context shoppingCard
    //2. decrease quantity of selected shopping item
    //3. update context shoppingCard (setShoppingCard)
    // @notice if quantity is 1 then remove from context shoppingCard
    // how to remove an object from array
  };

  // console.log("shopping card coming? ", productContext.shoppingCard);

  return (
    <>
      {productContext.shoppingCard.map((product, index) => {
        return (
          <div>
            {product.name} <br />
            Price: ${product.price}
            <button onClick={decreaseQuantity}>-</button>
            {product?.quantity}
            <button onClick={increaseQuantity}>+</button>
          </div>
        );
      })}

      <div>Total:</div>
    </>
  );
}

export default ShoppingCartList;
