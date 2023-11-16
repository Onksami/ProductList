import React, { useState, useEffect } from 'react';

export const ProductContext = React.createContext();

export default function ProductContextApp({children}) {
  const [items, setItems] = useState ([]);

  useEffect(() => {
    fetch("http://localhost:3001/items?_page=1&_limit=16")
      .then(response => response.json())
      .then(json => setItems(json))
    
  }, []);

  return (
    <ProductContext.Provider value={items}>
     {children}
    </ProductContext.Provider>
  )
}
