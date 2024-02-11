import React from "react";
import "../App.css";
const Resturant = (props) => {
  const { resData } = props;
  console.log("ResData", resData);
  const {
    brand,
    category,
    discountPercentage,
    price,
    rating,
    stocktitle,
    images,
  } = resData;

  return (
    <>
      <div>
        <img src={images[0]} alt="" className="imgStyle" />
        <h4>{brand}</h4>
        <h6>{category}</h6>
        <h6>{discountPercentage}</h6>
        <h6>{price}</h6>
        <h6>{rating} stars</h6>
        <h6>{stocktitle}</h6>
      </div>
    </>
  );
};

export default Resturant;
