import React, { useEffect, useState } from "react";
import { DetailsDropdown } from "../Util/DetailsDropdown";
import { CiHeart } from "react-icons/ci";

// Sample data for the product
const sampleProductData = {
  id: "1",
  name: "Light Project Hoodie V1",
  price: 1799,
  image: [
    "https://drive.google.com/thumbnail?id=1mqPyPd908ConYnynEWQYpdmGK6bxcRVG&sz=w1000",
    "https://drive.google.com/thumbnail?id=1-LppYEgUplrZguQIbFCMlnmcQWikHEIb&sz=w1000",
    "https://drive.google.com/thumbnail?id=1i5lTRONYWfWS4PdrVKoxs3ARewzw2TVI&sz=w1000",
    "https://drive.google.com/thumbnail?id=1zf4AhxUbaAM2N-KlZ7nOq3YJYXjLhSCr&sz=w1000",
  ],
  rating: "",
  sizes: ["S", "M", "L"],
  color: "Black",
  colorCode: "#000000",
};

export const ProductDisplay = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Simulate fetching product details based on the product ID
    const fetchProduct =  () => {
      // Use the sample data
      setProduct(sampleProductData);
    };

    fetchProduct();
  }, [productId]);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.image.length);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-28">
      <div className="flex flex-col justify-evenly md:flex-row p-8 ">
        {/* Product Image mobile */}
        <div className="w-full md:w-1/2 md:hidden">
          <img
            src={product.image[currentImageIndex]} // Use product image from state
            alt={product.name} // Use product name from state
            className="w-full h-auto shadow-lg"
            onClick={handleImageClick} // Change image on click
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-8">
          <div className="text-sm text-gray-500">
            Home / Store / {product.name}
          </div>
          <div className="flex justify-between mt-12">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <CiHeart className="w-4 h-4 md:w-6 md:h-6 text-black" />
          </div>

          <div className="text-xl font-semibold mt-4">₹{product.price}</div>
          <div className="text-grey-500 mt-6">Rating: {product.rating}</div>

          {/* Size Options */}
          <div className="mt-4">
            <div className="flex mt-2">
              <span className="lg:text-lg mr-2 mt-1">Size:</span>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="w-12 h-8 border border-gray-300 px-4 py-2 mr-2 flex items-center justify-center hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Option */}
          <div className="mt-4">
            <span className="text-lg">{product.color}</span>
            <div className="mt-2">
              <button
                className="w-8 h-8 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: product.colorCode }}
              ></button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6">
            <button className="bg-black text-white px-6 py-3 rounded mr-4 w-full hover:bg-gray-800">
              Buy Now
            </button>
            <button className="bg-black text-white mt-4 px-6 py-3 rounded mr-4 w-full hover:bg-gray-800">
              Add to Cart
            </button>
          </div>

          {/* Delivery Estimation */}
          <div className="mt-6">
            <div>
              <span className="text-lg">Estimated delivery</span>
            </div>

            <input
              type="text"
              placeholder="Enter Pincode"
              className="border border-gray-300 px-4 py-2 mt-2 w-full md:w-1/2 rounded"
            />
          </div>
          {/* Details Dropdown */}
          <div className="mt-6">
            <DetailsDropdown />
          </div>
        </div>

        {/* Product Image */}
        <div className="w-full md:w-1/3 md:mt-0 pl-4 hidden md:block">
          <img
            src={product.image[currentImageIndex]} // Use product image from state
            alt={product.name} // Use product name from state
            className="w-full h-auto shadow-lg"
            onClick={handleImageClick} // Change image on click
          />
        </div>
      </div>
    </div>
  );
};
