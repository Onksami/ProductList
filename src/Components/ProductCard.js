import React, { useState, useEffect } from 'react';

const ProductCard = (props) => {
  const [data, setData] = useState([]);


 
              
  return (
    <div>
      <span>{props.item.added}</span>
      <h3> <b> {props.item.name}</b></h3>
      <h5>{props.item.description}</h5>
      <h2> <i> {props.item.itemType} </i> </h2>
      <span>{props.item.manufacturer}</span>
      
      <h5>{props.item.price}</h5>
      <h5>{props.item.slug}</h5>
      <h5>{props.item.tags}</h5>
      
      
      
      
    </div>
  );
};

export default ProductCard;
