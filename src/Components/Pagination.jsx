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
            <div
              className="page"
              style={{
                background: p === productContext.page ? "green" : "",
              }}
              onClick={() => onPageClick(p)}
            >
              {p}{" "}
            </div>
          );
        })}
      </div>
      {/* @todo create limit array */}
      <div className="limit-box">
        <select>
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
      </div>
    </div>
  );
}

export default Pagination;
