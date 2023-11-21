import React, {  useState, useEffect, useContext} from 'react'
import { ProductContext } from "../Context/ProductContext";

const allItems = ["all items", "mug", "shirt"];

function Filtration() {
  const [selectedItem, setSelectedItem] = useState(["all items", "mug", "shirt"]);

  console.log("selected Item Calisiyor mu? ", selectedItem );

  const productContext = useContext(ProductContext);
  console.log("Filtration  productContext:", productContext);


  const handleSelectedItem = (s) => {
    console.log(handleSelectedItem, s );
    productContext.setSelectedItem(s);
  }

  useEffect ( () => {
    setSelectedItem ();
    return console.log("degisti degisti!! "); //useEffect i kullanamadik :/
    
  }, [selectedItem] )

  return (
   <>
   <select onChange={handleSelectedItem()}>
   {allItems.map((allItems, index) => {
    return (
      <option key={index}>{allItems}</option>
      // secilen item i context e veremedim.
    )
   })}
    

   </select>
   </>
  )
}

export default Filtration