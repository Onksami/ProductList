import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";

const ProductCard = (props) => {


  //context
  const productContext = useContext(ProductContext);
  // console.log("ProuctCards  productContext:", productContext);

  const [imageList, setImageList] = useState([]);

  // Fetch list of images


  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=1") 
      .then((response) => response.json())
      .then((data) => setImageList(data))
      .catch((error) => console.error("Error fetching images", error));
  }, []);





  // Converting number to date

  let storedTimestamp = props.item.added; 
  let date = new Date(parseInt(storedTimestamp, 10));

  // Functions

  const shoppingCardAdd = () => {
    //1. get previous shopping card from context
    const shoppingCard = [...productContext.shoppingCard];

    // 2. check if item is already added
    const addedItem = shoppingCard.find(
      (item) => item.name === props.item.name
    );

    if (!addedItem) {
      // 3. add quantity key inside item object
      props.item.quantity = 1;
      shoppingCard.push(props.item);
      productContext.setShoppingCard(shoppingCard);
    } else {
      addedItem.quantity += 1;
      productContext.setShoppingCard(shoppingCard);
    }

  // @todo calculate total prize and set to context
   // Calculate total price
    const totalPrice = shoppingCard.reduce(
      (total, item) => total + item.price * item.quantity,
      0
        );

    // Set the total price to context
    productContext.setShoppingCard(shoppingCard);
    productContext.setTotalPrice(totalPrice);
  };

 


  return (
    <div className="product-card">
    <div>
      {imageList.map((productImage, index) => (
        <div key={productImage.id} className="pcImage">
          <img key={index} alt={productImage.author} src={productImage.download_url} />
        </div>
      ))}
    </div>
    <Link to={`/product/${props.item.slug}`}>
        <button>Detail</button>
    </Link>
      <div className="pcPrice">₺ {props.item.price}</div>

      <div className="pcName">{props.item.name}</div>

      <div className="pcButton">
        <button onClick={shoppingCardAdd}>Add to Card</button>
      </div>
    </div>
  );
};

export default ProductCard;
