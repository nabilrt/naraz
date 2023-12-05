"use client";
import { useAuth } from "@/lib/contexts/auth-context";
import { useCart } from "@/lib/contexts/cart-provider";
import Button from "@/modules/button/button";
import CartItem from "@/modules/cart-item/CartItem";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Cart = () => {
  const { cartItem } = useCart();
  const { currentUser } = useAuth();
  let router = useRouter();

  const calculateTotalPrice = () => {
    if (cartItem.length === 0) return 0;

    const total = cartItem.reduce((acc: number, item: any) => {
      return acc + item.price * item.quantity;
    }, 0);

    return total.toFixed(2);
  };

  const handleCheckout = () => {
    if (!currentUser) {
      toast.error("Please login to checkout", {
        duration: 2000,

        // Styling
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      router.push("/checkout");
    }
  };

  return (
    <div className="container mx-auto ">
      <h1 className="font-semibold mb-4 ml-4">Cart</h1>
      {cartItem.map((item: any) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="items-center">
        {cartItem.length === 0 ? (
          <p className="mb-4 ml-4">Cart is empty</p>
        ) : (
          <>
            <p className="font-semibold mb-4 ml-4">
              Total Price: {calculateTotalPrice()} BDT
            </p>

            <Button
              variant="primary"
              className="mt-4 mb-4 ml-4"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
