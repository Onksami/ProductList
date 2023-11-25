import React, { useContext , useEffect , useState} from 'react';

import { ProductContext } from "../Context/ProductContext";



function Filtration() {

  const [companies, setCompanies] = useState([]);



  const productContext = useContext(ProductContext);
  console.log("Filtration  productContext:", productContext);


  // get companies request 
  useEffect(() => {
    fetch(`http://localhost:3002/companies`)
      .then((response) => response.json())
      .then((c) => {
        console.log("Companies ", c);
        setCompanies(c)
       
      });
  }, []);






const tags = [
  "Trees",
  "Beach",
  "Ocean",
  "Water",
  "Animal",
  "Road",
  "Hills"
];



const onOptionChangeHandler = (event) => {
    // setData(event.target.value);
    productContext.setSelectedItemType(event.target.value);
    console.log(
        "User Selected Value - ",
        event.target.value  
    );
};

const onCompanyChangeHandler = (event) => {
  // setData(event.target.value);
  productContext.setSelectedManufacturer(event.target.value);
  console.log(
      "User Selected Company - ",
      event.target.value  
  );
};





  return (
   <>
    <div id='sortingSelect' className="divSelect">
      <p>Sorting</p>
      <div className="sortingElm">
        <div></div>
      </div>

      <div className="sortingElm">

      </div>

      <div className="sortingElm">

      </div>

      <div className="sortingElm">

      </div>
    </div>

    <div className='divSelect' id='divProductSelect'>
      <p>Products Type</p>

      </div>
       
      <div className='divSelect' id='divManufacturerSelect'>
      <p>Brands</p>
      <select onChange={onCompanyChangeHandler}>
                <option>Please choose one manufacturer</option>
                {/* {JSON.stringify(companies)}; */}
                
                {companies.map((company, index) => {
                    return (
                        <option key={index}>
                            {company.slug}
                        </option>
                    );
                })}
            </select>

      </div>

      <div className='divSelect' id='divTagsSelect'>
        <p>Tags</p>
        <select>
          <option selected>Tag options will be added later on.</option>
        </select>

      </div>

    {/* <select onChange={onTagHandler}>
                <option>Please choose onetag</option>
                {tags.map((tag, index) => {
                    return (
                        <option key={index}>
                            {tags}
                        </option>
                    );
                })}
            </select> */}
   </>
  )
}

export default Filtration