import React, {useContext , useState} from "react";
import { ProductContext } from "../Context/ProductContext";

function Filtration(props) {

    const [search, setSearch] = useState("");
    

const productContext =useContext(ProductContext);
console.log("Filtration  productContext:", productContext);



console.log("Filtration items", props); // Contexten gelen degeri gormek icin.

let items = props.prototype.map(props.products)
console.log("Filtration items for products",  items); //konsola gelmedi

// Array.prototype.props = function(callback) {
//     let items = []; ...  kullanamadim...

// Conlose a bir array geliyor. array icin bir map yapmam gerekiyor.
// array.prototype.map() gibi bir fonksiyon kullanilacak array dan verileri alabilmek icin  



const handleChange = (e) => {
    setSearch(e.target.value);
  }



  return (
<input type="search" onChange={handleChange} value={search} placeholder="Search ..." > 
{props.products.filter(() => { 
    return search.toLowerCase() === "" ? props.products : props.products.name.toLowerCase().includes(search);
}).map((f, index) => {

    // burda bir sikinti var 
    //sidebar dan filtration i Comment Out yap.
    
})}
</input>
  )
}

export default Filtration