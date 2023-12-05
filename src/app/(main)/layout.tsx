"use client";
import { AuthProviderContext } from "@/lib/contexts/auth-context";
import CartContextProvider from "@/lib/contexts/cart-provider";
import Footer from "@/modules/inc/foot/Footer";
import NavBar from "@/modules/inc/nav/NavBar";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthProviderContext>
        <CartContextProvider>
          <NavBar />
          <div className="p-3">{children}</div>
          <Footer />
        </CartContextProvider>
      </AuthProviderContext>
    </>
  );
}
