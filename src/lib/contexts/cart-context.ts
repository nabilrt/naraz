import { createContext } from "react";

type CartContextProps = {
  cartItem: any;
  setCartItem: any;
};

export const CartContext = createContext<CartContextProps | null>(null);
