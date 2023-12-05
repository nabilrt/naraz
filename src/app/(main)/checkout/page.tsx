"use client";

import { useAuth } from "@/lib/contexts/auth-context";
import { useCart } from "@/lib/contexts/cart-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Checkout = () => {
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

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="font-semibold mb-3">
          ORDER #{Math.floor(Math.random() * 1000)}
        </h1>
        <h4 className="mb-3">
          Thank you for your order, {currentUser && currentUser.displayName}
        </h4>
        <table className="min-w-full bg-white border border-y-blue-500 text-center mb-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Unit Price</th>
              <th className="py-2 px-4 border-b">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((item: any) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b">{item.title}</td>
                <td className="py-2 px-4 border-b">{item.quantity}</td>
                <td className="py-2 px-4 border-b">{item.price}</td>
                <td className="py-2 px-4 border-b">
                  {item.quantity * item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-6">
          <h1 className="font-semibold">
            Total Price: {calculateTotalPrice()} BDT
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
