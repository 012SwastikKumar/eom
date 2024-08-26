import { FaStar, FaPlusCircle } from "react-icons/fa";
import "./ProductCard.css";

type ProductCardProps = {
  itemImage: string;
  itemName: string;
  itemPrice: number;
  itemRating: number;
};

const ProductCard = ({
  itemImage,
  itemName,
  itemPrice,
  itemRating,
}: ProductCardProps) => {
  return (
    <div className="ProductCard">
      <img
        src={itemImage}
        alt={itemName}
        className="w-full h-32 object-cover"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{itemName}</h3>
        <p className="text-gray-600">Price ${itemPrice}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2 text-teal-500">
          <FaStar />
          <span>{itemRating}</span>
        </div>
        <FaPlusCircle className="text-teal-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default ProductCard;
