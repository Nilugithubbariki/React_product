import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../App.css";
function RestuarantMenu() {
  const { resId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${resId}`).then((response) => {
      setProduct(response.data);
    });
  }, [resId]);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Product Details</h1>

      {product.images.map((image) => {
        return <img src={image} alt="" className="productImage" />;
      })}

      <p>{product.description}</p>
      <Link to="/">Back to Product List</Link>
    </div>
  );
}

export default RestuarantMenu;
