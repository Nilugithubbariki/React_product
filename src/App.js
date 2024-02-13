import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Grocery from "./components/Grocery";
import Cart from "./components/Cart";
import Body from "./components/Body";
import Hearder from "./components/Hearder";
import ResturantMenu from "./components/ResturantMenu";
const App = () => {
  return (
    <div>
      <Hearder />
      <Routes>
        <Route path="/" element={<Body pagePer={10} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/resturantmenu/:resId" element={<ResturantMenu />} />
      </Routes>
    </div>
  );
};

export default App;
