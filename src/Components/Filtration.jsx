import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";

function Filtration() {
  // variables

  const [companies, setCompanies] = useState([]);
  // const [itemType, setItemTypes] = useState([]);
  const [tags, setTags] = useState([]);

  // const [filteredValue, setFilteredValue] = useState([]);

  const productContext = useContext(ProductContext);
  console.log("Filtration  productContext:", productContext);

  // get companies request
  useEffect(() => {
    fetch(`https://e-commerce-jsondb.vercel.app/companies`)
      .then((response) => response.json())
      .then((c) => {
        // console.log("Companies ", c);
        setCompanies(c);
      });
  }, []);

  // get itemType request
  // useEffect(() => {
  //   fetch(`https://e-commerce-jsondb.vercel.app/itemType`)
  //     .then((response) => response.json())
  //     .then((itemType) => {
  //       // console.log("Item Type geldi ", itemType);
  //       setItemTypes(itemType);
  //     });
  // }, []);

  // get tags request
  useEffect(() => {
    fetch(`https://e-commerce-jsondb.vercel.app/tags`)
      .then((response) => response.json())
      .then((t) => {
        // console.log("Tagslar geldi ", t);
        setTags(t);
      });
  }, []);

  // ----------------- functions -----------------------

  // const onItemTypeChangeHandler = (event) => {
  //   productContext.setSelectedItemType(event.target.value);
  //   // console.log("User Selected an itemtype - ", event.target.value);
  // };

  const onCompanyChangeHandler = (event) => {
    productContext.setSelectedManufacturer(event.target.value);
  };

  const onTagHandler = (event) => {
    productContext.setSelectedTag(event.target.value);
    // console.log("Tags selected  - ", event.target.value);
  };

  //Sorting function

  const onLowToHigh = () => {
    // console.log("onLimitClick", lth);
    productContext.setSort("price");
    productContext.setOrder("asc");
  };

  const onHighToLow = () => {
    // console.log("onLimitClick", lth);
    productContext.setSort("price");
    productContext.setOrder("desc");
  };

  const onNewToOld = () => {
    // console.log("onLimitClick", lth);
    productContext.setSort("added");
    productContext.setOrder("desc");
  };

  const onOldToNew = () => {
    // console.log("onLimitClick", lth);
    productContext.setSort("added");
    productContext.setOrder("asc");
  };


//Clear Filtration function


const clearFiltration = () => {
  productContext.setSelectedManufacturer("");
  productContext.setSelectedTag("");
  productContext.setSort("");
  productContext.setOrder("");

 
}


  // Rendering

  return (
    <>
     {/* ---------------- Clear Button  ---------------  */}
    
    
      <button className="filtrationClear" onClick={clearFiltration}>
       clear filters
      </button>
  

      {/* ---------------- Sorting  ---------------  */}
      
      <div className="sortingComp">
        <p>Sorting</p>
        <div className="sortingList">
          <label for="Low to high">
            <input name="sortingCheck"   onChange={onLowToHigh} type="radio"  />
            Price low to high
          </label>

          <label for="High to low">
            <input name="sortingCheck" className="radioBtn" onChange={onHighToLow} type="radio" />
          Price high to low
          </label>

          <label for="New to old">
            <input name="sortingCheck" className="radioBtn" onChange={onNewToOld} type="radio" />
            New to old
          </label>

          <label for="Old to new">
            <input name="sortingCheck" className="radioBtn" onChange={onOldToNew} type="radio" /> Old to new{" "}
          </label>
        </div>
      </div>

      {/* ---------------- Manufacturer ---------------  */}
      <p id="brandsHeader">Brands</p>
      <input className="manSearch" type="text" placeholder="Search Brands"></input>
      
      <div className="manComp">
        
        {companies.map((company, index) => {
          return (
            <div className="manCompListing" key={index}>
              <input value={company.slug} onChange={onCompanyChangeHandler} type="checkbox"  checked={productContext.selectedManufacturer === company.slug ? true : false}/>
              <label for="scales">{company.name}</label>

            </div>
          );
        })}

        {/* <select onChange={onCompanyChangeHandler}>
          <option>Please choose one manufacturer</option>

          {companies.map((company, index) => {
            return (
              <option key={index} value={company.slug}>
                {company.name}
              </option>
            );
          })}
        </select> */}
      </div>

      {/* ---------------- Tags ---------------  */}
      
      <p id="tagsHeader">Tags</p>
      <input className="tagsInput" type="text" placeholder="Search tags"></input>
      <div className="tagsComp">
        
  
        {tags.map((tag, index) => {
          return (
            <div className="tagsCompListing" key={index}>
              <input value={tag} onChange={onTagHandler} type="checkbox" checked={productContext.selectedTag === tag ? true : false}/>
              <label for="tag">{tag}</label>
            </div>
          );
        })}

        {/* <select onChange={onTagHandler}>
          <option>Please choose one Tag</option>

          {tags.map((tag, index) => {
            return (
              <option key={index} value={tag}>
                {tag}
              </option>
            );
          })}
        </select> */}
      </div>

      {/* ---------- Product Type (moved to ProductList.js) ---------------  */}
      {/* <div>
        <p>Products Type</p>
        <select onChange={onItemTypeChangeHandler}>
          <option>Please choose one Item Type</option>

          {itemType.length > 0
            ? itemType.map((itemType, index) => {
                return <option key={index}>{itemType}</option>;
              })
            : ""}
        </select>
      </div> */}
    </>
  );
}

export default Filtration;
