import { useCart } from "@/lib/contexts/cart-provider";
import Button from "../button/button";
import { useState } from "react";

type ProductDataProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
};

const CartItem = (productData: ProductDataProps) => {
  const { UpdateCartItem, RemoveCartItem } = useCart();
  const [quantity, setQuantity] = useState<number>(productData.quantity);

  return (
    <div className="p-3">
      <div className="flex p-4 border border-gray-200 rounded-md shadow-md w-[45%]">
        <div className="flex-shrink-0">
          <img
            src={productData.image}
            alt={productData.title}
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="ml-4 flex-grow">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="text-lg font-semibold">{productData.title}</h3>
                <div className="flex items-center mb-3">
                  <button
                    className="bg-gray-200 px-3 py-1 rounded-l"
                    onClick={() =>
                      setQuantity((prevQuantity) => prevQuantity - 1)
                    }
                    disabled={quantity === 0}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="border text-center w-8"
                    value={quantity}
                    readOnly
                  />
                  <button
                    className="bg-gray-200 px-3 py-1 rounded-r"
                    onClick={() =>
                      setQuantity((prevQuantity) => prevQuantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="text-gray-600">{`Total: ${(
                productData.price * productData.quantity
              ).toFixed(2)} BDT`}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">{`Unit Price: ${productData.price} BDT`}</p>

              {quantity > 0 && (
                <Button
                  variant="secondary"
                  onClick={() => UpdateCartItem(productData.id, quantity)}
                >
                  Update
                </Button>
              )}

              <Button
                variant="danger"
                onClick={() => RemoveCartItem(productData.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
