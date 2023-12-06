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

type CartDataProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
};

type CartContextProps = {
  handleCart: (productData: ProductDataProps, quantity: number) => void;
  UpdateCartItem: (id: number, quantity: number) => void;
  RemoveCartItem: (id: number) => void;
  state: CartDataProps[];
};

export const CartContext = createContext<CartContextProps | null>(null);
