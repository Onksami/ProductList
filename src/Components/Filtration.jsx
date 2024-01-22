import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";

function Filtration() {
  // variables

  const [companies, setCompanies] = useState([]);
  // const [itemType, setItemTypes] = useState([]);
  const [tags, setTags] = useState([]);

  // const [filteredValue, setFilteredValue] = useState([]);

  const productContext = useContext(ProductContext);
  // console.log("Filtration  productContext:", productContext);

  const [selectedOption, setSelectedOption] = useState(""); // State to manage the selected option
  const [manufacturerSearch, setManufacturerSearch] = useState("");
  const [tagSearch, setTagSearch] = useState("");
 
 
 
  // get companies request
  useEffect(() => {
    fetch(`https://e-commerce-jsondb.vercel.app/companies`)
      .then((response) => response.json())
      .then((c) => {
        // console.log("Companies ", c);
        setCompanies(c);
      });
  }, []);


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


  const onCompanyChangeHandler = (event) => {
    const selectedManufacturer = event.target.value === productContext.selectedManufacturer ? '' : event.target.value;
    productContext.setSelectedManufacturer(selectedManufacturer);
  };

  const onTagHandler = (event) => {
    const selectedTag = event.target.value === productContext.selectedTag ? '' : event.target.value;
    productContext.setSelectedTag(selectedTag);
  };

  //Sorting function

  const onLowToHigh = () => {
    // console.log("onLimitClick", lth);
    productContext.setSort("price");
    productContext.setOrder("asc");
    setSelectedOption("lowToHigh"); // Set the selected option state
  };

  const onHighToLow = () => {
    // console.log("onLimitClick", lth);
    productContext.setSort("price");
    productContext.setOrder("desc");
    setSelectedOption("highToLow"); // Set the selected option state
  };

  const onNewToOld = () => {
    // console.log("onLimitClick", lth);
    productContext.setSort("added");
    productContext.setOrder("desc");
    setSelectedOption("newToOld"); // Set the selected option state
  };

  const onOldToNew = () => {
    // console.log("onLimitClick", lth);
    productContext.setSort("added");
    productContext.setOrder("asc");
    setSelectedOption("oldToNew"); // Set the selected option state
    
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
            <input name="sortingCheck" onChange={onLowToHigh} type="radio" checked={selectedOption === "lowToHigh"} />
            Price low to high
          </label>

          <label for="High to low">
            <input name="sortingCheck" className="radioBtn" onChange={onHighToLow} type="radio" checked={selectedOption === "highToLow"}  />
          Price high to low
          </label>

          <label for="New to old">
            <input name="sortingCheck" className="radioBtn" onChange={onNewToOld} type="radio" checked={selectedOption === "newToOld"} />
            New to old
          </label>

          <label for="Old to new">
            <input name="sortingCheck" className="radioBtn" onChange={onOldToNew} type="radio" checked={selectedOption === "oldToNew"} /> Old to new{" "}
          </label>
        </div>
      </div>

      {/* ---------------- Manufacturer ---------------  */}
      <p id="brandsHeader">Brands</p>
      <input
        className="manSearch"
        type="text"
        placeholder="Search Brands"
        value={manufacturerSearch}
        onChange={(e) => setManufacturerSearch(e.target.value)}
      />

      <div className="manComp">
        {companies
          .filter((company) =>
            company.name.toLowerCase().includes(manufacturerSearch.toLowerCase())
          )
          .map((company, index) => (
            <div className="manCompListing" key={index}>
              <input
                value={company.slug}
                onChange={onCompanyChangeHandler}
                type="checkbox"
                checked={productContext.selectedManufacturer === company.slug}
              />
              <label htmlFor="scales">{company.name}</label>
            </div>
          ))}
      </div>

      {/* ---------------- Tags ---------------  */}
      
   
      <p id="tagsHeader">Tags</p>
      <input
        className="tagsInput"
        type="text"
        placeholder="Search tags"
        value={tagSearch}
        onChange={(e) => setTagSearch(e.target.value)}
      />
            
      <div className="tagsComp">
        {tags
          .filter((tag) => tag.toLowerCase().includes(tagSearch.toLowerCase()))
          .map((tag, index) => (
            <div className="tagsCompListing" key={index}>
              <input
                value={tag}
                onChange={onTagHandler}
                type="checkbox"
                checked={productContext.selectedTag === tag}
              />
              <label htmlFor="tag">{tag}</label>
            </div>
          ))}
      </div>
  
    </>
  );
}

export default Filtration;
