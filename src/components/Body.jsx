import axios from "axios";
import React, { useEffect, useState } from "react";
import Resturant from "./Resturant";

const Body = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      axios.get("https://dummyjson.com/products").then((res) => {
        console.log(res.data.products);
        setData(res.data.products);
      });
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="inputStyle">
        <input
          type="text"
          className="InnerinputStyle"
          placeholder="Search Here..."
        />
      </div>
      <div className="brandStyle">
        {data?.map((item) => {
          return (
            <div className="productStyle">
              <Resturant key={item.id} resData={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
