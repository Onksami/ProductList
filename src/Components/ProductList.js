import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import ProductCard from "./ProductCard";

function ProductList(props) {
  const [itemType, setItemTypes] = useState([]);

  const productsContext = useContext(ProductContext);

  // get itemType request
  useEffect(() => {
    fetch(`https://e-commerce-jsondb.vercel.app/itemType`)
      .then((response) => response.json())
      .then((itemType) => {
        const allItemTypes = ['All', ...itemType]; // Include 'All' in item types
        setItemTypes(allItemTypes);
      });
  }, []);

  const onItemTypeChangeHandler = (event) => {
    const selectedType = event.target.value;
    if (selectedType === 'All') {
      productsContext.setSelectedItemType(null); // Show all products when 'All' is selected
    } else {
      productsContext.setSelectedItemType(selectedType);
    }
  };

  return (
    <>
      <div>
        <p>Products</p>
        <select onChange={onItemTypeChangeHandler} value={productsContext.selectedItemType || 'All'}>
          {itemType.length > 0 &&
            itemType.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
        </select>
      </div>

      <div className="products-container">
        {productsContext.products.map((product, index) => {
          return <ProductCard key={index} item={product} index={index} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
