import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import Resturant from "./Resturant";
import { Link } from "react-router-dom";
const Body = ({ pagePer }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentpage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(data.length / pagePer);
  const StartIndex = (currentpage - 1) * pagePer;
  const EndIndex = StartIndex + pagePer;
  const currentData = data.slice(StartIndex, EndIndex);
  const handlePage = (newPage) => {
    setCurrentPage(newPage);
  };
  const changeName = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      axios.get("https://dummyjson.com/products").then((res) => {
        console.log(res.data.products);
        setData(res.data.products);
      });
    };
    fetchData();
  }, []);
  const dispatch = useDispatch();
  const handleAdd = (resp) => {
    dispatch(addItem(resp));
    console.log("Nilanchala");
  };
  return (
    <div>
      <div className="inputStyle">
        <input
          type="text"
          className="InnerinputStyle"
          placeholder="Search Here..."
          onChange={changeName}
        />
      </div>
      <div className="brandStyle">
        {currentData
          ?.filter((item) => {
            if (search === "") {
              return item;
            } else if (
              item.brand.toLowerCase().includes(search.toLowerCase())
            ) {
              return item;
            }
          })
          ?.map((resp) => {
            return (
              <div className="productStyle">
                <Link key={resp.id} to={"/resturantmenu/" + resp.id}>
                  <Resturant key={resp.id} resData={resp} />
                </Link>
                <button onClick={() => handleAdd(resp)}>Add to cart</button>
                <button>Buy now</button>
              </div>
            );
          })}
      </div>
      <div className="paginationStyle">
        <button
          onClick={() => handlePage(currentpage - 1)}
          disabled={currentpage === 1}
          className="btnStyle"
        >
          Previous
        </button>
        <span>
          Page {currentpage} Of {totalPage}
        </span>
        <button
          onClick={() => handlePage(currentpage + 1)}
          disabled={currentpage === totalPage}
          className="btnStyle"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Body;
