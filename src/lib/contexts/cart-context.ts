import { createContext } from "react";

type ProductDataProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type CartContextProps = {
  cartItem: any;
  setCartItem: any;
  handleCart: (productData: ProductDataProps, quantity: number) => void;
  UpdateCartItem: (id: number, quantity: number) => void;
  RemoveCartItem: (id: number) => void;
};

export const CartContext = createContext<CartContextProps | null>(null);
