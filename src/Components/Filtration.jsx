import React, { useContext} from 'react'
import { ProductContext } from "../Context/ProductContext";


function Filtration() {

  const productContext = useContext(ProductContext);
  console.log("Filtration  productContext:", productContext);

  const options = [
    "shirt",
    "mug",
    "bend"
];

const companies = [
  "Konopelski-Group",
  "Metz---Kautzer",
  "Rice-Inc",
  "Company A"
];



const onOptionChangeHandler = (event) => {
    // setData(event.target.value);
    productContext.setSelectedItemType(event.target.value);
    console.log(
        "User Selected Value - ",
        event.target.value  
    );
};

const onManufacturerChangeHandler = (event) => {
  // setData(event.target.value);
  productContext.setSelectedManufacturer(event.target.value);
  console.log(
      "User Selected Company - ",
      event.target.value  
  );
};


  return (
   <>

   <select onChange={onOptionChangeHandler}>
                <option>Please choose one option</option>
                {options.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select>

            <br />

    <select onChange={onManufacturerChangeHandler}>
                <option>Please choose one manufacturer</option>
                {companies.map((manufacturer, index) => {
                    return (
                        <option key={index}>
                            {manufacturer}
                        </option>
                    );
                })}
            </select>
   </>
  )
}

export default Filtration