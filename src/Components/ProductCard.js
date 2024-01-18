import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";

const ProductCard = (props) => {


  //context
  const productContext = useContext(ProductContext);
  // console.log("ProuctCards  productContext:", productContext);


  // Converting number to date

  let storedTimestamp = props.item.added; 
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


    // Set the total price to context
    productContext.setShoppingCard(shoppingCard);
  };




  return (
    <div className="product-card">

<img alt="img" src={`https://picsum.photos/200/300?random=${props.index}`} />

    <Link to={`/product/${props.item.slug}`}>
        <button>Detail</button>
    </Link>
      <div className="pcPrice">₺ {props.item.price}</div>

      <div className="pcName">{props.item.name}</div>

      <div className="pcButton">
        <button onClick={shoppingCardAdd}>Add to Card</button>
      </div>
    </div>
  );
};

export default ProductCard;
