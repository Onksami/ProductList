import "./App.css";

import ProductList from "./Components/ProductList";
import Pagination from "./Components/Pagination";
import { useContext } from "react";
import { ProductContext } from "./Context/ProductContext";

function App() {
  return (
    <div className="App">
      <ProductList />
      <hr />
      <br />
      <hr />
      <Pagination />
    </div>
  );
}

export default App;
