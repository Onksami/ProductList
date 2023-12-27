import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";


const ProductCard = (props) => {

//context
const productContext = useContext(ProductContext);
// console.log("ProuctCards  productContext:", productContext);

//function


// Converting number to date

let storedTimestamp = props.item.added // Assuming 'timestamp' is the key where the number is stored
let date = new Date(parseInt(storedTimestamp, 10));


// Functions

const shoppingCardAdd = () => {
  productContext.setShoppingCard(props.item);
  console.log("Add button clicked");
}


  return (
    <div className="product-card">
      
    <div className="pcImage">

      <img alt="asd" src="https://picsum.photos/id/83/200/300"/>
    
    </div>

    <div className="pcPrice">
     ₺ {props.item.price}
    </div>

    <div className="pcName">
     {props.item.name}
    </div>

    <div className="pcButton">
    <button onClick={shoppingCardAdd}>Add to Card</button>
    </div>
    
    

 
    </div>
  );
};

export default ProductCard;
