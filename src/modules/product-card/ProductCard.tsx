import { useCart } from "@/lib/contexts/cart-provider";
import Button from "../button/button";
import { useState } from "react";

type ProductDataProps = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductCard = (productData: ProductDataProps) => {
  const { cartItem, setCartItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleCart = async (quantity: number) => {
    const updatedCartItem = [...cartItem];
    const existingProduct = updatedCartItem.find(
      (item) => item.id === productData.id
    );

    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + quantity;
    } else {
      updatedCartItem.push({ ...productData, quantity: quantity });
    }

    await setCartItem(updatedCartItem);
  };

  return (
    <div className="p-2 flex flex-col items-center justify-center m-auto bg-white rounded-md shadow-lg">
      <img
        className="w-24 h-24 mb-6"
        src={productData.image}
        alt={productData.title}
      />
      <div className="flex flex-col items-center justify-center w-full h-56">
        <h1 className="text-sm font-semibold text-center mb-2">
          {productData.title}
        </h1>
        <p className="text-sm font-normal text-center mb-2">
          {productData.description.substring(0, 50)}...
        </p>
        <p className="text-sm font-semibold text-center mb-2">
          Price: {productData.price} BDT
        </p>
        <div className="flex items-center mb-3">
          <button
            className="bg-gray-200 px-3 py-1 rounded-l"
            onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
          >
            -
          </button>
          <input
            type="number"
            className="border text-center w-8"
            value={quantity || 1}
            readOnly
          />
          <button
            className="bg-gray-200 px-3 py-1 rounded-r"
            onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
          >
            +
          </button>
        </div>
        <Button
          variant="primary"
          className="mb-4"
          onClick={() => handleCart(quantity)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
