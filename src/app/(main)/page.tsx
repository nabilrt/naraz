"use client";
import { postReducer, INITIAL_STATE } from "@/lib/reducers/productReducer";
import { ProductReducerActionProps } from "@/lib/reducers/productReducerActionProps";
import ProductCard from "@/modules/product-card/ProductCard";
import { useEffect, useReducer } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Home() {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const fetchProducts = () => {
    dispatch({ type: ProductReducerActionProps.POST_LOADING });
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ProductReducerActionProps.POST_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ProductReducerActionProps.POST_ERROR,
          payload: error.message,
        });
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
    <div className="font-semibold mb-4">
      <h2>Products</h2>
    </div>

    <div className="flex flex-wrap space-x-3">
      {state.loading ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#805ad5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      ) : (
        <>
          {state.products?.slice(0,5).map((product: any) => (
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
