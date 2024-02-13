import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";
const Hearder = () => {
  const [btn, setBtn] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <ul className="ulStyle">
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" style={{ textDecoration: "none" }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/Contact" style={{ textDecoration: "none" }}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/Cart" style={{ textDecoration: "none" }}>
            Cart({cartItems.length}items)
          </Link>
        </li>
        <button
          className="btn"
          onClick={() => (btn === "Login" ? setBtn("Logout") : setBtn("Login"))}
        >
          {btn}
        </button>
      </ul>
    </div>
  );
};

export default Hearder;
