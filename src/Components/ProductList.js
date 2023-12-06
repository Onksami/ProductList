import React, { useContext } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import { ProductContext } from "../Context/ProductContext";

function ProductList(props) {
  const productsContext = useContext(ProductContext);
  return (
    <>
      <Header />
     

      <div className="products-container">
        {productsContext.products.map((product, index) => {
          return <ProductCard key={index} item={product} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
