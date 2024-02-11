import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ResturantMenu = () => {
  const { userId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${userId}`)
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((error) => {
        alert("Something Went Wront...");
      });
  }, [userId]);
  return (
    <div>
      {product?.map((item) => {
        return (
          <div>
            <div>{item.brand}</div>
          </div>
        );
      })}
    </div>
  );
};
export default ResturantMenu;
