import { createContext, useContext, useState } from "react";
import { CartContext } from "./cart-context";
import toast from "react-hot-toast";

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
  const [cartItem, setCartItem] = useState<CartDataProps[]>([]);

  const handleCart = async (
    productData: ProductDataProps,
    quantity: number
  ) => {
    const updatedCartItem = [...cartItem];
    const existingProduct = updatedCartItem.find(
      (item: any) => item.id === productData.id
    );

    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + quantity;
    } else {
      updatedCartItem.push({ ...productData, quantity: quantity });
    }

    await setCartItem(updatedCartItem);
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
    const updatedCartItem = [...cartItem];
    const existingProduct = updatedCartItem.find((item: any) => item.id === id);

    existingProduct!.quantity = quantity;

    await setCartItem(updatedCartItem);

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
    const newCart = cartItem.filter((item: any) => item.id !== id);
    await setCartItem(newCart);
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
        cartItem,
        setCartItem,
        handleCart,
        UpdateCartItem,
        RemoveCartItem,
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

// Usage of CartContext
// ...
