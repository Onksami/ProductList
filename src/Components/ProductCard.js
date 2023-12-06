import React, { useState, useEffect } from "react";

const ProductCard = (props) => {


  //Lorem Picsum Images (chatgpt) 
  const [images, setImages] = useState([]);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await fetch('https://picsum.photos/v2/list');
  //       if (!response.ok) { 
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setImages(data);
  //     } catch (error) {
  //       console.error('Error fetching images:', error);
  //     }
  //   };

  //   fetchImages();
  // }, []);




// Converting number to date



let storedTimestamp = props.item.added // Assuming 'timestamp' is the key where the number is stored
let date = new Date(parseInt(storedTimestamp, 10));


  


  return (
    <div className="product-card">
      
    {/* <div className="pcImage">
    
        {images.map((image, index) => (
          <img
            key={index}
            src={image.download_url}
            alt={`Lorem Picsum ${image.id}`}
            width={10}
            height={10}
          />
        ))}
    </div> */}

    <div className="pcPrice">
     ₺ {props.item.price}
    </div>

    <div className="pcName">
     {props.item.name}
    </div>

    <div className="pcButton">
    <button>Add</button>
    </div>
    
    

{/*       
     <span>{date.toString()}</span>
      <h3>
        {" "}
        
      </h3>
      <h5>{props.item.description}</h5>
      <h2>
        {" "}
        <i> {props.item.itemType} </i>{" "}
      </h2>
      <span>{props.item.manufacturer}</span>

      
      <h5>{props.item.slug}</h5>
      <h5>{props.item.tags}</h5>
      <b> {props.item.name}</b> */}
 
    </div>
  );
};

export default ProductCard;
