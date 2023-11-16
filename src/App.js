
import { Pagination } from '@mui/material';
import './App.css';

import ProductList from './Components/ProductList';


function App() {
  return (
    <div className="App">
    
    <ProductList />
    <hr/>
    <br/>
    <hr/>
    <Pagination />
    </div>
  );
}

export default App;
