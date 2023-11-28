import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";



function Filtration() {


  // variables

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
        // console.log("Tagslar geldi ", t);
        setTags(t);
      });
  }, []);




// ----------------- functions -----------------------

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

//Sorting function

const onLowToHigh = (lth) => {
  // console.log("onLimitClick", lth);
  productContext.setSortPriceLth(lth); //function for limitation
};

const onHighToLow = (htl) => {
  // console.log("onLimitClick", htl);
  productContext.setSortPriceHtl(htl); //function for limitation
};

// Rendering 

  return (
    <>


{/* ---------------- Sorting  ---------------  */}
      <div id="sortingSelect" className="divSelect">
        <p>Sorting</p>

        <label onChange={(lth) => onLowToHigh(lth.target.value)} for="Low to high" className="sortingLabel">
        <input type="radio" />Low to high</label>

        <label onChange={(htl) => onHighToLow(htl.target.value)} for="High to low">
        <input type="radio" />High to low</label>

        <label for="New to old">
        <input type="radio"/>New to old</label>

        <label for="Old to new">
        <input type="radio" /> Old to new </label>

      </div>

{/* ---------------- Manufacturer ---------------  */}
<div className="divSelect" id="divManufacturerSelect">
        <p>Brands</p>

        {companies.map((company, index) => {
          return (
            <div key={index}>
              <input
                value={company.slug}
                onChange={onCompanyChangeHandler}
                type="checkbox"
                checked={
                  productContext.selectedManufacturer === company.slug
                    ? true
                    : false
                }
              />
              <label for="scales">{company.name}</label>
            </div>
          );
        })}

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


{/* ---------------- Tags ---------------  */}
<div className="divSelect" id="divTagSelect">
        <p>Tags</p>
        {tags.map((tag, index) => {
          return (
            <div key={index} id="tagsElement">
              <input
                value={tag}
                onChange={onTagHandler}
                type="checkbox"
                checked={
                  productContext.selectedTag === tag ? true : false
                }
              />
              <label for="tag">{tag}</label>
            </div>
          );
        })}

        <select onChange={onTagHandler} >
          <option>Please choose one Tag</option>

          {tags.map((tag, index) => {
            return (
              <option key={index} value={tag}>
                {tag}
              </option>
            );
          })}
        </select>
      </div>


{/* ---------------- Product Type ---------------  */}
      <div className="divSelect" id="divProductSelect">
        <p>Products Type</p>
        <select onChange={onItemTypeChangeHandler}>
          <option>Please choose one Item Type</option>

          {itemType.length > 0
            ? itemType.map((itemType, index) => {
                return <option key={index}>{itemType}</option>;
              })
            : ""}
        </select>
      </div>

    </>
  );
}

export default Filtration;
