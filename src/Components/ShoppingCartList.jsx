import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

function ShoppingCartList(props) {


  const productContext = useContext(ProductContext);
  // console.log("ShoppingCartList" , productContext);
  const shoppingCard = [...productContext.shoppingCard];

  

  const addedItem = shoppingCard.find((item) => item.slug === item.slug);
  // const productName = productContext.shoppingCard.name;

  // Retrieve shopping card from localStorage on component mount
  useEffect(() => {
    const storedShoppingCard = localStorage.getItem("shoppingCard");
    if (storedShoppingCard) {
      productContext.setShoppingCard(JSON.parse(storedShoppingCard));
    }
  }, []);

  // Update localStorage whenever shopping card changes
  useEffect(() => {
    localStorage.setItem("shoppingCard", JSON.stringify(productContext.shoppingCard));
  }, [productContext.shoppingCard]);
  

const increaseQuantity = (slug) => {
  const shoppingCard = [...productContext.shoppingCard];
  const addedItem = shoppingCard.find((item) => item.slug === slug);

  if (!addedItem) {
    props.item.quantity = 1;
    productContext.setShoppingCard([...shoppingCard, props.item]);
  } else {
    addedItem.quantity += 1;
    productContext.setShoppingCard(shoppingCard);
  }
};

const decreaseQuantity = (slug) => {
  const shoppingCard = [...productContext.shoppingCard];
  const addedItem = shoppingCard.find((item) => item.slug === slug);

  if (addedItem) {
    if (addedItem.quantity === 1) {
      // If quantity is 1, remove the item
      const updatedCard = shoppingCard.filter((item) => item.slug !== slug);
      productContext.setShoppingCard(updatedCard);
    } else {
      addedItem.quantity -= 1;
      productContext.setShoppingCard(shoppingCard);
    }
  }
};

const total = productContext.shoppingCard.reduce(
  (accumulator, product) => accumulator + product.price * product.quantity,
  0
);

  return (
    <>
    {productContext.shoppingCard.map((product, index) => {
      return (
        <div key={index}>
          {product.name} <br />
          Price: ${product.price}
          <button onClick={() => decreaseQuantity(product.slug)}>-</button>
          {product?.quantity}
          <button onClick={() => increaseQuantity(product.slug)}>+</button>
          <hr />
        </div>
      );
    })}
     <div>Total: ₺{total}</div>
  </>
  );
}

export default ShoppingCartList;
