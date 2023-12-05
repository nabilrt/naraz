"use client"
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
      <CartContextProvider>
        <NavBar />
        <div className="p-3">{children}</div>
        <Footer />
      </CartContextProvider>
    </>
  );
}
