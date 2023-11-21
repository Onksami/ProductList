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



const onOptionChangeHandler = (event) => {
    // setData(event.target.value);
    productContext.setSelectedItemType(event.target.value);
    console.log(
        "User Selected Value - ",
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
   </>
  )
}

export default Filtration