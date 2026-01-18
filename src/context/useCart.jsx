import { useContext } from "react";
import CartContext from "./CartCOntext";

export const useCart = () => useContext(CartContext)
