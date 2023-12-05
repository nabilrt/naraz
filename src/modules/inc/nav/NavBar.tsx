"use client";

import { useCart } from "@/lib/contexts/cart-provider";
import Link from "next/link";

const NavBar = () => {
  const { cartItem } = useCart();

  return (
    <div>
      <ul className="p-4 flex space-x-3 w-[100%] shadow-md bg-purple-300">
        <li>
          <img src="/naraz.png" alt="" height={30} width={35} />
        </li>
        <li className="mt-1">
          <Link href="/">Home</Link>
        </li>
        <li className="mt-1">
          <Link href="/products">Products</Link>
        </li>

        <li className="pl-[1200px] mt-1">
          <Link href="/cart">
            Cart{" "}
            {cartItem && cartItem.length > 0 ? <>({cartItem.length})</> : <></>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
