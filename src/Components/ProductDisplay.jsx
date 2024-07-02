import React from "react";

export const ProductDisplay = () => {
  return (
    <div className="flex flex-col md:flex-row p-8">
      {/* Product Details */}
      <div className="w-full md:w-1/2 outline outline-offset-2 outline-grey-900 p-4">
        <div className="text-sm text-gray-500">
          Home / Store / Grey Normal Tees
        </div>
        <h1 className="text-3xl font-bold mt-12">Grey Normal Tees Cotton</h1>
        <div className="text-xl font-semibold mt-4">₹1099</div>
        <div className="text-grey-500 mt-6">Rating: 4.1</div>

        {/* Size Options */}
        <div className="mt-4">
          <div className="flex mt-2">
            <span className="text-lg mr-2 mt-1">Size:</span>
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className="border border-gray-300 px-4 py-2 mr-2 hover:bg-gray-200"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Option */}
        <div className="mt-4">
          <span className="text-lg">Grey</span>
          <div className="mt-2">
            <button className="w-8 h-8 bg-gray-400 rounded-full border-2 border-gray-300"></button>
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
      </div>

      {/* Product Image */}
      <div className="w-full md:w-1/2 md:mt-0 p-2 ">
        <img
          src="https://i.pinimg.com/236x/7c/a6/6b/7ca66b1bfcfb87ea2e0387b375776d0b.jpg"
          alt="Grey Normal Tees"
          className="w-full  shadow-lg"
        />
      </div>
    </div>
  );
};
