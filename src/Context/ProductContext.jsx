import React, { useState, useEffect } from "react";
import { baseURL } from "../constants";


export const ProductContext = React.createContext();

const initialFilterValues = {selectedItemType: "" , selectedTag : "", selectedManufacturer: "", order: "" , sort:"", limit: 10, page:1}

export default function ProductContextApp({ children }) {



  const storedFilterValues = JSON.parse(localStorage.getItem("filterValues") ) || initialFilterValues;

  // console.log("storedFilterValues" , storedFilterValues ) ;

  const [items, setItems] = useState([]);

  const [page, setPage] = useState(storedFilterValues.page);  

  const [limit, setLimit] = useState(storedFilterValues.limit);

  const [selectedItemType, setSelectedItemType] = useState(storedFilterValues.selectedItemType);

  const [selectedManufacturer, setSelectedManufacturer] = useState(storedFilterValues.selectedManufacturer);

  const [selectedTag, setSelectedTag] = useState(storedFilterValues.selectedTag);

  const [sort, setSort] = useState(storedFilterValues.sort);

  const [order, setOrder] = useState(storedFilterValues.order);



  useEffect(() => {
    
    const pItemType = selectedItemType ? `&itemType=${selectedItemType}` : "";
    const pSelectedManufacturer = selectedManufacturer
      ? `&manufacturer=${selectedManufacturer}`
      : "";

    const pSelectedTag = selectedTag ? `&tags_like=${selectedTag}` : "";
    const pSort = sort
      ? `&_sort=${sort}`
      : "";

      console.log(" context pSort", pSort);
    const pOrder = order
      ? `&_order=${order}`
      : "";
      const filterValues = {selectedItemType , selectedTag, selectedManufacturer, order , sort, limit, page}
      const sfilterValues = JSON.stringify(filterValues);
      localStorage.setItem("filterValues" , sfilterValues)
    fetch(
      `${baseURL}/items?_page=${page}&_limit=${limit}${pItemType}${pSelectedManufacturer}${pSelectedTag}${pSort}${pOrder}`
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log("json", json);
        setItems(json);
      });
  }, [
    page,
    limit,
    selectedItemType,
    selectedManufacturer,
    selectedTag,
    sort,
    order,
  ]); //call useEffect when page is changed


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
        setSort,
        sort,
        setOrder,
        order
      }}
    >
      {children}
    </ProductContext.Provider>

    
  );
}
