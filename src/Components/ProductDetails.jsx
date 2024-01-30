import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";


const ProductDetails = () => {
  const { slug } = useParams();
  // Fetch the product details based on the productId and display them

  const productsContext = useContext(ProductContext);

  console.log("productsContext??", productsContext);

  const item = productsContext.products.find(p => p.slug === slug)

  console.log("item geldii" , item);

  if (productsContext.products.length === 0) {
     return (<div>Loading! </div>);

  }

  if (!item) {
    return <>Error</>
  }
  return (
    <div>
      <h2>Product Detail Page</h2>
      <p>Product ID: {slug}</p>
      <p>Product price: {item.price}</p>
      <p>Manufacturer : {item.manufacturer}</p>

      {/* Display other product details */}
    </div>
  );
};

export default ProductDetails;