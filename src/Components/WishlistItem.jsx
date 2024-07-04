import React from "react";

export const WishlistItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded mb-4">
      <div className="flex items-center">
        <div>
          <h2 className="text-lg font-medium">{item.index}</h2>
        </div>
        <img
          src="https://i.pinimg.com/236x/7c/a6/6b/7ca66b1bfcfb87ea2e0387b375776d0b.jpg"
          alt={item.name}
          className="w-16 h-16 mr-4"
        />
        <div>
          <h2 className="text-lg font-medium">{item.name}</h2>
          <p className="text-sm text-gray-500">Size: {item.size}</p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-xl font-semibold mr-4">₹ {item.price}</span>
        <button className="bg-black text-white px-4 py-2 rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
};
