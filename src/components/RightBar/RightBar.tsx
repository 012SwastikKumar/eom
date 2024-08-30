import { useState } from "react";
import Header from "../Header/Header";
import ProductCard from "./ProductCard/ProductCard";
import "./RightBar.css"; 
import Loader from "../Loader/Loader";
// import TestImage from '../../../../../images/Screenshot 2024-08-25 235210.png'

const RightBar = () => {
  // const [imgUrl, setImgUrl] = useState('../../../../../images/Screenshot 2024-08-25 235210.png')
  const prods = [
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
  const [textInput, setTextInput] = useState<string>("");
  const [products, setProducts] = useState(prods.slice(0, 4)); 
  const [loading, setLoading] = useState(false); // Loading state
  // const [products, setProducts] = useState(prods)
//   const handleSearch = (input:string) => {
//     console.log(`Received from Header: ${input}`);
//     // You can also update state or perform other actions here
//   };
const handleSearch = async (input: string) => {
  console.log(`Received from Header: ${input}`);

  // Base URL where the Flask app is running
  const url = "http://localhost:5000";


  setLoading(true); // Set loading to true when the API call starts


  try {
    // GET
    const response1 = await fetch(url);
    const data1 = await response1.json();
    console.log(data1)

    // POST
    const response = await fetch(url + '/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: input })
    });

    const data = await response.json();
    console.log(data);
    let imgArray = data.top_images;
    console.log(imgArray)

    setProducts((prevProducts) => {
      return prevProducts.map((product, index) => {
        // if (index < 4) {
          return { ...product, itemImage: imgArray[index].image_url }; // Update the image URLs for the first 4 products
        // }
        return product;
      });
    });

    // setProducts((prevProducts) => {
    //   return prevProducts.map((product, index) => {
    //     if (index === 0) {
    //       return { ...product, itemImage: imageUrl }; // Update the first product's image URL
    //     }
    //     return product;
    //   });
    // });
  } catch (error) {
    console.error('Error:', error);
  }finally {
    setLoading(false); // Set loading to false after the API call completes
  }
};




  // useEffect(() => {
  //   console.log(`Current Text Input: ${textInput}`);
  // },[textInput]);

  return (
    <div className="RightBar-Container">
      {/* {console.log("RightBar Rendered")} */}
      <Header textInput={textInput} setTextInput={setTextInput} onSearch={handleSearch}/>
      <div className="RightBar_Body">
        <p className="RightBar_Heading">Our Products</p>
        <div className="Products-Container">
        {loading ? (
          <div style={{ width: '100%', height: '100vh'}}>

            <Loader/>
          </div>
          ) : (
            products.map((product, index) => (
              <ProductCard
                key={`${product.itemImage}-${index}`}
                itemImage={product.itemImage}
                itemName={product.itemName}
                itemPrice={product.itemPrice}
                itemRating={product.itemRating}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
