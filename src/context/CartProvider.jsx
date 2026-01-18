import { useState } from "react";
import CartContext from "./CartCOntext";

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    const itemInCart = cartItem.find((item) => item._id === product._id);
    if (itemInCart) {
      // increase quantity
      const updatedCart = cartItem.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCartItem(updatedCart);
    } else {
      // adding new item with quantity 1
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = ( cartItem, productId, action ) => {
    setCartItem(
      cartItem
        .map((item) => {
          if (item._id === productId) {
            let newUnit = item.quantity;
            if (action === "increase") {
              newUnit = newUnit + 1;
            } else if (action == "decrease") {
              newUnit = newUnit - 1;
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter((item) => item != null),
    );
  };



  const deleteItem = (productId) => {
    setCartItem(cartItem.filter(item => item._id != productId))
  }
  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, addToCart, updateQuantity , deleteItem}}
    >
      {children}
    </CartContext.Provider>
  );
};
