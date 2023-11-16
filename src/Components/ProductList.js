import React, {useState,  useEffect, useContext} from 'react'
import Header from './Header'
import ProductCard from './ProductCard'
import { ProductContext } from '../Context/ProductContext';



function ProductList( {} ) {

const products = useContext(ProductContext);

console.log("products", products);

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/items?_page=1&_limit=16")
      .then(response => response.json())
      .then(json => setItems(json))
    
  }, []);
  

  return (
    <>
        <Header />
        <hr />
        
        {
          items.map((item, index) =>{
            return ( <ProductCard item={item}/> )
          } )
        }


    </>
  )
}

export default ProductList