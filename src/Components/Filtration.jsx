import React, { useContext, useEffect, useState } from "react";

import { ProductContext } from "../Context/ProductContext";

function Filtration() {
  const [companies, setCompanies] = useState([]);
  const [itemType, setItemTypes] = useState([]);
  const [tags, setTags] = useState([]);


  const productContext = useContext(ProductContext);
  console.log("Filtration  productContext:", productContext);

  // get companies request
  useEffect(() => {
    fetch(`http://localhost:3002/companies`)
      .then((response) => response.json())
      .then((c) => {
        // console.log("Companies ", c);
        setCompanies(c);
      });
      
  }, []);

  // get itemType request
  useEffect(() => {
    fetch(`http://localhost:3002/itemType`)
      .then((response) => response.json())
      .then((itemType) => {
        // console.log("Item Type geldi ", itemType);
        setItemTypes(itemType);
      });
  }, []);

  // get tags request
  useEffect(() => {
    fetch(`http://localhost:3002/tags`)
      .then((response) => response.json())
      .then((t) => {
        console.log("Tagslar geldi ", t);
        setTags(t);
      });
  }, []);

  const onItemTypeChangeHandler = (event) => {
    productContext.setSelectedItemType(event.target.value);
    console.log("User Selected an itemtype - ", event.target.value);
  };

  const onCompanyChangeHandler = (event) => {
    productContext.setSelectedManufacturer(event.target.value);
    console.log("User Selected Company - ", event.target.value);
  };

  const onTagHandler = (event) => {
    productContext.setSelectedTag(event.target.value);
    console.log("Tags selected  - ", event.target.value);
  };

  return (
    <>
      <div id="sortingSelect" className="divSelect">
        <p>Sorting</p>
        <div className="sortingElm">
          <div></div>
        </div>

        <div className="sortingElm"></div>

        <div className="sortingElm"></div>

        <div className="sortingElm"></div>
      </div>


      <div className="divSelect" id="divManufacturerSelect">
        <p>Brands</p>
        <select onChange={onCompanyChangeHandler}>
          <option>Please choose one manufacturer</option>

          {companies.map((company, index) => {
            return (
              <option key={index} value={company.slug}>
                {company.name}
              </option>
            );
          })}
        </select>
      </div>


      <div className="divSelect" id="divProductSelect">
        <p>Products Type</p>
        <select onChange={onItemTypeChangeHandler}>
          <option>Please choose one Item Type</option>

          { itemType.length > 0 ?  itemType.map((itemType, index) => {
            return <option key={index}>{itemType}</option>;
          }) : ""} 
        </select>
      </div>


      <div>
      <select onChange={onTagHandler}>
          { tags.length > 0 ? tags.map((tag, index) => {
            return (
              <option key={index} >
                {tag}
              </option>
            );
          }) : ""}
      </select>
      </div>
    </>
  );
}

export default Filtration;
