import { createContext, useContext, useReducer, useState } from "react";
import { CartContext } from "./cart-context";
import toast from "react-hot-toast";
import { cartReducer } from "../reducers/cart-reducer/cartReducer";
import { CART_REDUCER_ACTION_PROPS } from "../reducers/cart-reducer/cartReducerProps";

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

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(cartReducer, []);

  const handleCart = async (
    productData: ProductDataProps,
    quantity: number
  ) => {
    console.log(quantity);
    dispatch({
      type: CART_REDUCER_ACTION_PROPS.ADD_TO_CART,
      payload: productData,
      quantity: quantity,
    });
    toast.success("Added to Cart!", {
      duration: 2000,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const UpdateCartItem = async (id: number, quantity: number) => {
    dispatch({
      type: CART_REDUCER_ACTION_PROPS.UPDATE_CART,
      payload: id,
      quantity: quantity,
    });

    toast.success("Cart Updated!", {
      duration: 2000,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const RemoveCartItem = async (id: number) => {
    dispatch({
      type: CART_REDUCER_ACTION_PROPS.REMOVE_FROM_CART,
      payload: id,
    });
    toast.success("Item Removed From Cart!", {
      duration: 2000,

      // Styling
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <CartContext.Provider
      value={{
        handleCart,
        UpdateCartItem,
        RemoveCartItem,
        state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
