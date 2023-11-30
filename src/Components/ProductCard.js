import React, { useState, useEffect } from "react";

const ProductCard = (props) => {


// Retrieve the number from local storage
let storedTimestamp = props.item.added // Assuming 'timestamp' is the key where the number is stored
let date = new Date(parseInt(storedTimestamp, 10));

console.log("converted date", date);

  


  return (
    <div className="product-card">
     <span>{date.toString()}</span>
      <h3>
        {" "}
        <b> {props.item.name}</b>
      </h3>
      <h5>{props.item.description}</h5>
      <h2>
        {" "}
        <i> {props.item.itemType} </i>{" "}
      </h2>
      <span>{props.item.manufacturer}</span>

      <h5>{props.item.price}</h5>
      <h5>{props.item.slug}</h5>
      <h5>{props.item.tags}</h5>
    </div>
  );
};

export default ProductCard;
