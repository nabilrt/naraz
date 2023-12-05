"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <ul className="p-4 flex space-x-3 w-[100%] shadow-md bg-purple-300">
        <li><img src="/naraz.png" alt="" height={30} width={35} /></li>
        <li className="mt-1">
          <Link href="/">Home</Link>
        </li>
        <li className="mt-1">
          <Link href="/products">Products</Link>
        </li>

        <li className="pl-[1200px] mt-1">
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
