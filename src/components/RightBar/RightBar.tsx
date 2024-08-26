import Header from "../Header/Header";
import ProductCard from "./ProductCard/ProductCard";
import "./RightBar.css";

const RightBar = () => {
  const products = [
    {
      itemImage: "https://example.com/images/mens-blue-shirt.jpg",
      itemName: "Men’s Blue Shirt",
      itemPrice: 120.45,
      itemRating: 4.9,
    },
    {
      itemImage: "https://example.com/images/womens-red-dress.jpg",
      itemName: "Women’s Red Dress",
      itemPrice: 89.99,
      itemRating: 4.7,
    },
    {
      itemImage: "https://example.com/images/sneakers.jpg",
      itemName: "Running Sneakers",
      itemPrice: 150.0,
      itemRating: 4.8,
    },
    {
      itemImage: "https://example.com/images/wrist-watch.jpg",
      itemName: "Luxury Wrist Watch",
      itemPrice: 299.99,
      itemRating: 4.6,
    },
    {
      itemImage: "https://example.com/images/summer-hat.jpg",
      itemName: "Summer Hat",
      itemPrice: 29.95,
      itemRating: 4.2,
    },
    {
      itemImage: "https://example.com/images/denim-jacket.jpg",
      itemName: "Denim Jacket",
      itemPrice: 110.0,
      itemRating: 4.5,
    },
    {
      itemImage: "https://example.com/images/leather-bag.jpg",
      itemName: "Leather Bag",
      itemPrice: 249.99,
      itemRating: 4.9,
    },
    {
      itemImage: "https://example.com/images/sunglasses.jpg",
      itemName: "Aviator Sunglasses",
      itemPrice: 69.99,
      itemRating: 4.3,
    },
  ];

  return (
    <div className="RightBar-Container">
      <Header />
      <div className="RightBar_Body">
        <p className="RightBar_Heading">Our Products</p>
        <div className="Products-Container">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              itemImage={product.itemImage}
              itemName={product.itemName}
              itemPrice={product.itemPrice}
              itemRating={product.itemRating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
