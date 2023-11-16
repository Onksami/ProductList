import React, { useState, useEffect } from "react";

export const ProductContext = React.createContext();

export default function ProductContextApp({ children }) {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3002/items?_page=${page}&_limit=10`)
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        setItems(json);
      });
  }, [page]); //call useEffect when page is changed

  return (
    <ProductContext.Provider
      value={{
        products: items,
        test: "test",
        isLoading: true,
        setPage,
        page,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
