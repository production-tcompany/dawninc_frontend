import React from "react";

export const WishlistItem = ({ item, index }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start justify-between p-4 border rounded mb-4">
      <div className="flex items-center mb-4 sm:mb-0">
        <h2 className="text-lg font-medium pr-4">{index + 1}.</h2>
        <img
          src="https://i.pinimg.com/236x/7c/a6/6b/7ca66b1bfcfb87ea2e0387b375776d0b.jpg" // Replace with actual image URL
          alt={item.name}
          className="w-16 h-16 mr-4"
        />
        <div>
          <h2 className="text-lg font-medium">{item.name}</h2>
          <p className="text-sm text-gray-500">Size: {item.size}</p>
          <div className="flex items-center">
            <span className="h-4 w-4 bg-black rounded-full mr-2 inline-block"></span>
          </div>
          <a
            href="#"
            className="font-semibold underline underline-offset-2 mt-2 inline-block"
          >
            Remove from wishlist
          </a>
        </div>
      </div>
      <div className="flex w-full sm:w-auto justify-between sm:justify-start sm:ml-auto ">
        <span className="text-xl font-semibold ml-8 mr-8 mt-2">
          ₹ {item.price}
        </span>
        <button className="bg-black text-white px-4 py-2 rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
};
