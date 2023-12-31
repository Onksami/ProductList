import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const ProductCard = (props) => {

  // console.log("props", props);

  //context
  const productContext = useContext(ProductContext);
  // console.log("ProuctCards  productContext:", productContext);


  // Converting number to date

  let storedTimestamp = props.item.added; // Assuming 'timestamp' is the key where the number is stored
  let date = new Date(parseInt(storedTimestamp, 10));

  // Functions

  const shoppingCardAdd = () => {
    //1. get previous shopping card from context
    const shoppingCard = [...productContext.shoppingCard];

    // 2. check if item is already added
    const addedItem = shoppingCard.find(
      (item) => item.name === props.item.name
    );

    if (!addedItem) {
      // 3. add quantity key inside item object
      props.item.quantity = 1;
      shoppingCard.push(props.item);
      productContext.setShoppingCard(shoppingCard);
    } else {
      addedItem.quantity += 1;
      productContext.setShoppingCard(shoppingCard);
    }

  // @todo calculate total prize and set to context
   // Calculate total price
    const totalPrice = shoppingCard.reduce(
      (total, item) => total + item.price * item.quantity,
      0
        );

    // Set the total price to context
    productContext.setShoppingCard(shoppingCard);
    productContext.setTotalPrice(totalPrice);
  };


  

  

  return (
    <div className="product-card">
      <div className="pcImage">
        <img alt="asd" src="https://picsum.photos/id/17/200/300" />
      </div>

      <div className="pcPrice">₺ {props.item.price}</div>

      <div className="pcName">{props.item.name}</div>

      <div className="pcButton">
        <button onClick={shoppingCardAdd}>Add to Card</button>
      </div>
    </div>
  );
};

export default ProductCard;
