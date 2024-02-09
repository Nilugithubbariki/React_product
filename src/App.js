import React from "react";
import { Routes, Route } from "react-router-dom";
import ApplyOut from "./components/ApplyOut";
import About from "./components/About";
import Contact from "./components/Contact";
import Grocery from "./components/Grocery";
import Cart from "./components/Cart";
import Body from "./components/Body";
import Hearder from "./components/Hearder";
const App = () => {
  return (
    <div>
      <Hearder />
      <Routes>
        {/* <Route path="/" element={<ApplyOut />} /> */}
        <Route path="/" element={<Body />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Grocery" element={<Grocery />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
