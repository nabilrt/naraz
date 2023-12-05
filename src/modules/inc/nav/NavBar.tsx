"use client";

import { useAuth } from "@/lib/contexts/auth-context";
import { useCart } from "@/lib/contexts/cart-provider";
import Button from "@/modules/button/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const { cartItem } = useCart();
  const { currentUser, signOut } = useAuth();
  let router = useRouter();

  const handleSignout = () => {
    signOut();
    router.push("/");
  };

  return (
    <div>
      <ul className="p-4 flex space-x-3 w-[100%] shadow-md bg-purple-300">
        <li>
          <img src="/naraz.png" alt="" height={30} width={35} />
        </li>
        <li className="mt-1">
          <Link href="/">Home</Link>
        </li>
        {!currentUser && (
          <>
            <li className="mt-1">
              <Link href="/login">Login</Link>
            </li>
            <li className="mt-1">
              <Link href="/sign-up">Sign Up</Link>
            </li>
          </>
        )}
        <li className="mt-1">
          <Link href="/cart">
            Cart{" "}
            {cartItem && cartItem.length > 0 ? <>({cartItem.length})</> : <></>}
          </Link>
        </li>
        {currentUser && (
          <Button variant="secondary" onClick={handleSignout}>
            Logout
          </Button>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
