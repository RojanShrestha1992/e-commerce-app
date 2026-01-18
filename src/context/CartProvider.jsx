import {  useState } from "react";
import CartContext from "./CartCOntext";

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    setCartItem([...cartItem, product])
  }
  return (
    <CartContext.Provider value={{ cartItem, setCartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

