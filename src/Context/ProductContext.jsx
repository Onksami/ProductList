import React, { useState, useEffect } from "react";

export const ProductContext = React.createContext();

export default function ProductContextApp({ children }) {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(10); 

  const [selectedItemType, setSelectedItemType] = useState("");


  


  




  useEffect(() => {
    fetch(`http://localhost:3002/items?_page=${page}&_limit=${limit}&itemType=${selectedItemType}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        setItems(json);
      });
  }, [page, limit, selectedItemType]); //call useEffect when page is changed





  return (
    <ProductContext.Provider
      value={{
        products: items,
        test: "test",
        isLoading: true,
        setPage,
        page,
        setLimit,
        limit,
        setSelectedItemType,
        selectedItemType
      

      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
