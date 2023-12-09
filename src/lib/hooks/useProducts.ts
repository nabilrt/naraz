import { useEffect, useReducer } from "react";
import {
  INITIAL_STATE,
  postReducer,
} from "../reducers/product-reducer/productReducer";
import { ProductReducerActionProps } from "../reducers/product-reducer/productReducerActionProps";

export const useProducts = () => {
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

  return { state };
};
