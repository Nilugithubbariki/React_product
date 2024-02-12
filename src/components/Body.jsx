import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import Resturant from "./Resturant";
import "../App.css";
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
  const ascHandle = () => {
    let ascSort = [...data].sort((a, b) =>
      a.brand.toLowerCase().localeCompare(b.brand.toLowerCase())
    );
    setData(ascSort);
  };
  const dscHandle = () => {
    let dscSort = [...data].sort((a, b) =>
      b.brand.toLowerCase().localeCompare(a.brand.toLowerCase())
    );
    setData(dscSort);
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
        <span className="sortStyle">
          <button className="uStyle" onClick={ascHandle}>
            <i class="bi bi-sort-up">Asc</i>
          </button>
          <button className="dStyle" onClick={dscHandle}>
            <i class="bi bi-sort-down">Dsc</i>
          </button>
        </span>
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
                <div className="addStyle">
                  <button
                    onClick={() => handleAdd(resp)}
                    className="button add"
                  >
                    Add to cart
                  </button>
                  <button className="button buy">Buy now</button>
                </div>
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
