import { createContext, useContext, useState } from "react";
import { CartContext } from "./cart-context";

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItem, setCartItem] = useState([]);

  return (
    <CartContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === null) {
    throw new Error(
      "useCart must be used within a CartProvider"
    )
  }

  return context
}

// Usage of CartContext
// ...
