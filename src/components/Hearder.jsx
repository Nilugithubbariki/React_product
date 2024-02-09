import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Hearder = () => {
  return (
    <div>
      <ul className="ulStyle">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Grocery">Grocery</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Hearder;
