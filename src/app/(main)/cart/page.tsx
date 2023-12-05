"use client";
import { useCart } from "@/lib/contexts/cart-provider";
import CartItem from "@/modules/cart-item/CartItem";

const Cart = () => {
  const { cartItem, setCartItem } = useCart();

  const calculateTotalPrice = () => {
    if (cartItem.length === 0) return 0;

    const total = cartItem.reduce((acc: number, item: any) => {
      return acc + item.price * item.quantity;
    }, 0);

    return total;
  };

  return (
    <div className="m-6">
      <h1>Cart</h1>
      {cartItem.map((item: any) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="p-6 items-center">
        <p className="font-semibold">
          Total Price: {calculateTotalPrice()} BDT
        </p>
      </div>
    </div>
  );
};

export default Cart;
