import { useCart } from "@/lib/contexts/cart-provider";
import Button from "../button/button";

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

  const handleCart = () => {
    setCartItem([...cartItem, productData]);
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
        <p className="text-sm font-semibold text-center mb-3">
          Price: {productData.price} BDT
        </p>
        <Button variant="primary" className="mb-4" onClick={handleCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;