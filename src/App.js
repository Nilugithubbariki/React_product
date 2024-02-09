import React from "react";
import { Routes, Route } from "react-router-dom";
import ApplyOut from "./components/ApplyOut";
import About from "./components/About";
import Contact from "./components/Contact";
import Grocery from "./components/Grocery";
import Cart from "./components/Cart";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ApplyOut />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Grocery" element={<Grocery />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
