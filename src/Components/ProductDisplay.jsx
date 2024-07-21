import React, { useEffect, useState } from "react";
import { DetailsDropdown } from "../Util/DetailsDropdown";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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
    const fetchProduct = () => {
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
      <div className="flex flex-col justify-evenly md:flex-row p-4 sm:p-0">
        {/* Product Image mobile */}
        <div className="md:w-1/2 md:hidden flex justify-center relative">
          <IoIosArrowBack
            className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleImageClick}
            size={30}
          />
          <img
            src={product.image[currentImageIndex]} // Use product image from state
            alt={product.name} // Use product name from state
            className="max-h-full shadow-lg"
            onClick={handleImageClick} // Change image on click
          />
          <IoIosArrowForward
            className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleImageClick}
            size={30}
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 md:px-8 md:py-4 px-0 pt-4 py-0">
          <div className="text-sm text-gray-500">
            Home / Store / {product.name}
          </div>
          <div className="flex justify-between mt-4">
            <h1 className="text-xl md:text-2xl">{product.name}</h1>
            <CiHeart className="w-6 h-6 text-black" />
          </div>

          <div className="text-xl mt-4">₹{product.price}</div>
          <div className="text-grey-500 mt-4">Rating: {product.rating}</div>

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
            <button className="bg-white text-black px-6 py-3 outline outline-black  outline-1 rounded mr-4 w-full hover:bg-gray-800">
              BUY NOW
            </button>
            <button className="bg-white text-black mt-4 px-6 py-3 outline outline-black outline-1 rounded mr-4 w-full hover:bg-gray-800">
              ADD TO CART
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

        <div className="w-full md:w-1/3 md:mt-0 pl-16 hidden md:block relative">
          <div>
            <IoIosArrowBack
              className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={handleImageClick}
              size={30}
            />

            <img
              src={product.image[currentImageIndex]} // Use product image from state
              alt={product.name} // Use product name from state
              className="lg:h-[530px] h-96 shadow-lg"
              onClick={handleImageClick} // Change image on click
            />
            <IoIosArrowForward
              className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={handleImageClick}
              size={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
