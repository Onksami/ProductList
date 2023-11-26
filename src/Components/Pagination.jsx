import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

// import Limit from "./Limit"; this component has been removed.


const pageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const LimitArray = [10, 20, 30]; // array for limitation

function Pagination() {
  const productContext = useContext(ProductContext);


  const onPageClick = (p) => {
    // console.log("onPageClick", p);
    productContext.setPage(p);
  };

  const onLimitClick = (l) => {
    // console.log("onLimitClick", l);
    productContext.setLimit(l); //function for limitation
};

  return (
    <div className="pagination-container">
      <div className="pagination-box">
        {pageArray.map((p, i) => {
          return (
            <div className="page" style={{ background: p === productContext.page ? "green" : "", }} onClick={() => onPageClick(p)} >
              {p}{" "}
            </div>
          );
        })}
      </div>
      {/* @todo create limit array */}


      <select onChange={(l) => onLimitClick(l.target.value)}>
          
        {LimitArray.map((l, i) => {
          return (
          
            <option
              className="limit"
              style={{
                background: l === productContext.limit ? "green" : "",
              }}>
             {l}{" "}
            </option>
            
          );
        })}
       
      </select>
      
      
    </div>
  );
}

export default Pagination;
