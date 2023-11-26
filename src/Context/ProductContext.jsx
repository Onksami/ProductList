import React, { useState, useEffect } from "react";

export const ProductContext = React.createContext();

export default function ProductContextApp({ children }) {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(10);

  const [selectedItemType, setSelectedItemType] = useState("");

  const [selectedManufacturer, setSelectedManufacturer] = useState("");

  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    const pItemType = selectedItemType ? `&itemType=${selectedItemType}` : "";
    const pSelectedManufacturer = selectedManufacturer
      ? `&manufacturer=${selectedManufacturer}`
      : "";

    const pSelectedTag = selectedTag ? `&tags_like=${selectedTag}` : "";

    fetch(
      `http://localhost:3002/items?_page=${page}&_limit=${limit}${pItemType}${pSelectedManufacturer}${pSelectedTag}`
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log("json", json);
        setItems(json);
      });
  }, [page, limit, selectedItemType, selectedManufacturer, selectedTag]); //call useEffect when page is changed

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
        selectedItemType,
        setSelectedManufacturer,
        selectedManufacturer,
        selectedTag,
        setSelectedTag,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
