import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearItem } from "../utils/CartSlice";
import "../App.css";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("CartItems", cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div>
      <h1>Wellcome to Cart page...</h1>
      <button onClick={handleClearCart}>Clear Cart</button>
      {cartItems.length === 0 && <h1>Cart is empty Add Items to the Cart</h1>}
      {cartItems?.map((item) => {
        return (
          <div>
            <div>
              <img src={item.images[0]} className="cartimgStyle" />
            </div>
            <h3>{item.brand}</h3>
            <h3>{item.description}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
