import React, { useState, useEffect } from "react";
import { baseURL } from "../constants";


export const ProductContext = React.createContext();

const initialFilterValues = {selectedItemType: "All" , selectedTags : [], selectedManufacturers: [], order: "" , sort:"", limit: 10, page:1}

export default function ProductContextApp({ children }) {



  const storedFilterValues = JSON.parse(localStorage.getItem("filterValues") ) || initialFilterValues;

  // console.log("storedFilterValues" , storedFilterValues ) ;

  const [items, setItems] = useState([]);

  const [page, setPage] = useState(storedFilterValues.page);  

  const [limit, setLimit] = useState(storedFilterValues.limit);

  const [selectedItemType, setSelectedItemType] = useState(storedFilterValues.selectedItemType);

  const [sort, setSort] = useState(storedFilterValues.sort);

  const [order, setOrder] = useState(storedFilterValues.order);

  const [addToCardProduct, setAddToCardProduct] = useState("");

  const [addToCardPrice, setAddToCardPrice] = useState("");

  const [shoppingCard, setShoppingCard] = useState([]);

  const [increaseBtn, setIncreaseBtn] = useState(0);
  
  const [selectedManufacturers, setSelectedManufacturers] = useState([storedFilterValues.selectedManufacturers]);

  const [selectedTags, setSelectedTags] = useState([storedFilterValues.selectedTags]);

  console.log("selectedManufacturers  context", selectedManufacturers);

  useEffect(() => {
    
    const pItemType = selectedItemType ? `&itemType=${selectedItemType}` : "";

    const pSelectedManufacturers = selectedManufacturers.length > 1 ? `&manufacturer=${selectedManufacturers.join('&manufacturer=')}` : "";

    const pSort = sort ? `&_sort=${sort}` : "";

    const pSelectedTags = selectedTags.length > 0 ? `&tag=${selectedTags.join('&tags_like=')}` : "";

    const pOrder = order ? `&_order=${order}` : "";

    const filterValues = {selectedItemType , selectedTags, pSelectedManufacturers, order , sort, limit, page}

    const sfilterValues = JSON.stringify(filterValues);

    localStorage.setItem("filterValues" , sfilterValues)
    
    fetch(
      `${baseURL}/items?_page=${page}&_limit=${limit}${pItemType}${pSelectedManufacturers}${pSelectedTags}${pSort}${pOrder}`
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
    selectedManufacturers,
    selectedTags,
    sort,
    order,
  ]);

  const totalPrice = shoppingCard.reduce(
    (accumulator, product) => {
      const price = parseFloat(product.price);
      const quantity = parseInt(product.quantity);
      return accumulator + (price * quantity);
    
    },
    0
  );

  


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
        setSort,
        sort,
        setOrder,
        order,
        setAddToCardProduct,
        addToCardProduct,
        setAddToCardPrice,
        addToCardPrice,
        setShoppingCard,
        shoppingCard,
        setIncreaseBtn,
        increaseBtn,
        totalPrice,
        selectedManufacturers,
        setSelectedManufacturers,
        selectedTags,
        setSelectedTags,


      }}
    >
      {children}
    </ProductContext.Provider>

    
  );
}
