import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/CartSlice";
const Cart = () => {
  const cartItmes = useSelector((store) => store.cart.itmes);
  console.log(cartItmes);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div>
      <h1>Welcome To Cart Page...</h1>
      <button onClick={handleClearCart}>Clear cart</button>
    </div>
  );
};

export default Cart;
