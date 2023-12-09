"use client";
import { useAuth } from "@/lib/contexts/auth-context";
import { useProducts } from "@/lib/hooks/useProducts";
import WaitLoader from "@/lib/loaders/wait-loader";
import ProductCard from "@/modules/product-card/ProductCard";

export default function Home() {
  const { state } = useProducts();
  const { currentUser } = useAuth();

  return (
    <div className="container mx-auto">
      <div className="font-semibold mb-4">
        Welcome to Naraz, {currentUser ? currentUser.displayName : "Guest User"}
      </div>
      <div className="font-semibold mb-4">
        <h2>Products</h2>
      </div>
      <div className="flex justify-between items-center flex-wrap mb-7">
        {state.loading ? (
          <WaitLoader />
        ) : (
          <>
            {state.products?.slice(0, 6).map((product: any) => (
              <div key={product.id}>
                <ProductCard {...product} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
