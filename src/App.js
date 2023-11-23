import "./App.css";

import ProductList from "./Components/ProductList";
import Pagination from "./Components/Pagination";
import { useContext } from "react";
import { ProductContext } from "./Context/ProductContext";
import Sidebar from "./Components/Sidebar";


function App() {
  return (
    <div className="App">
     
      <div className="app-container">
      <div className="header">
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div>
          <ProductList />

          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
