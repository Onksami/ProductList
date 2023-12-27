import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import ProductCard from "./ProductCard";

function ProductList(props) {

  const [itemType, setItemTypes] = useState([]);

  const productsContext = useContext(ProductContext);
  console.log("Filtration  productContext:", productsContext);



    // get itemType request
    useEffect(() => {
      fetch(`https://e-commerce-jsondb.vercel.app/itemType`)
        .then((response) => response.json())
        .then((itemType) => {
          // console.log("Item Type geldi ", itemType);
          setItemTypes(itemType);
        });
    }, []);


    const onItemTypeChangeHandler = (event) => {
      productsContext.setSelectedItemType(event.target.value);
      // console.log("User Selected an itemtype - ", event.target.value);
    };


  return (
    <>
    <div>
        <p>Products</p>
        <select onChange={onItemTypeChangeHandler}>
          {/* <option>Please choose one Item Type</option> */}

          {itemType.length > 0
            ? itemType.map((itemType, index) => {
                return <option key={index}>{itemType}</option>;
              })
            : ""}
        </select>
      </div>
   

      <div className="products-container">
        {productsContext.products.map((product, index) => {
          return <ProductCard key={index} item={product} />;
        })}
      </div>
      
    </>
  );
}

export default ProductList;
