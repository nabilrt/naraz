import { useCart } from "@/lib/contexts/cart-provider";
import Button from "../button/button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

type ProductDataProps = {
  id: number;
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
  const { handleCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="p-2 flex flex-col items-center justify-center m-auto bg-white rounded-md shadow-lg w-[200px] border-solid border-[#000] border ">
      <img
        className="w-24 h-24 mb-6"
        src={productData.image}
        alt={productData.title}
      />
      <div className="flex flex-col items-center justify-center w-full h-56">
        <h1 className="text-sm font-semibold text-center mb-2">
          {productData.title.slice(0, 20)}
        </h1>
        <p className="text-sm font-normal text-center mb-2">
          {productData.description.slice(0, 50)}...
        </p>
        <p className="text-sm font-semibold text-center mb-2">
          Price: {productData.price} BDT
        </p>
        <div className="flex items-center mt-auto">
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
          className="mt-2"
          onClick={() => handleCart(productData, quantity)}
        >
          <FontAwesomeIcon icon={faCartPlus} size={"lg"} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
