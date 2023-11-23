import React, { useContext} from 'react';

import Itemjson from  "../items.json";

import Tagsjson from "../tags.json";

import Companiesjson from "../companies.json"



import { ProductContext } from "../Context/ProductContext";



function Filtration() {


// console.log("filtation a ekledigim Itemjson geldi", Itemjson);
// console.log("filtation a ekledigim TagsJson geldi", Tagsjson);
// console.log("filtation a ekledigim Companiesjson geldi", Companiesjson);

  const productContext = useContext(ProductContext);
  console.log("Filtration  productContext:", productContext);

  // json to stringify
  // !!!!! converting didnt work!!!!!!!

const stringifyItems = JSON.stringify(Itemjson);
// console.log("json dosyasi stringify oldu mu? " , stringifyItems);

const stringifyTags = JSON.stringify(Tagsjson);
// console.log("json dosyasi stringify oldu mu? " , stringifyTags);

const stringifyCompanies = JSON.stringify(Companiesjson);

// !!!!!!!!! String to array !!!! 

const arrayItems = JSON.parse(stringifyItems);
// console.log( " string i array yaptik mi? ", arrayItems);

// const arrayTags = JSON.parse(stringifyTags);
// const arrayCompanies = JSON.parse(stringifyCompanies);

// fetch("items.json")
//   .then(response => response.json())
//   .then(data => {
//     if (Array.isArray(data)) {
//       // Use the array here
//       console.log("item.json has been occured", data); // This will output the array
//     } else {
//       console.error('The fetched data is not an array.');
//     }
//   })

// const options = [
//   "mug",
//   "shirt",
 
// ];

const companies = [

  "Rice-Inc",
  "Oberbrunner-Block-and-Mills",
  "Dickens-Franecki",
  "OHara-Group"

];

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



// The function which has been made for Tags selection

// const onTagHandler = (event) => {
//   // setData(event.target.value);
//   productContext.setSelectedTag(event.target.value);
//   console.log(
//       "User Selected Company - ",
//       event.target.value  
//   );
// };


  return (
   <>
    <div className='divSelect' id='divProductSelect'>
      <p>Sorting</p>
    <select onChange={onOptionChangeHandler}>
                  <option>Please choose one product</option>
                  {/* {JSON.stringify(options)}; */}
                  {arrayItems.map((arrayItem, index) => {
                      return (
                          <option key={index}>
                              {arrayItem.itemType}
                          </option>
                      );
                  })}
              </select>
      </div>
       
      <div className='divSelect' id='divManufacturerSelect'>
      <p>Brands</p>
      <select onChange={onCompanyChangeHandler}>
                <option>Please choose one manufacturer</option>
                {/* {JSON.stringify(companies)}; */}
                
                {companies.map((company, index) => {
                    return (
                        <option key={index}>
                            {company}
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