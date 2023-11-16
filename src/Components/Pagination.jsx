import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const pageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function Pagination() {
  const productContext = useContext(ProductContext);
  console.log("Pagination  productContext:", productContext);

  const onPageClick = (p) => {
    console.log("onPageClick", p);
    productContext.setPage(p);
  };

  return (
    <div className="pagination-container">
      <div className="pagination-box">
        {pageArray.map((p, i) => {
          return (
            <div className="page" onClick={() => onPageClick(p)}>
              {p}{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;
