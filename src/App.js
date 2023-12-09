import "./App.css";

import ProductList from "./Components/ProductList";
import Pagination from "./Components/Pagination";
import { useContext } from "react";
import { ProductContext } from "./Context/ProductContext";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";




function App() {
  return (
    <div className="App">
     
      <div className="app-container">
      <div className="header">
        <Header />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="productList">
          <ProductList />

          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
