import React from "react";
import { WishlistItem } from "../Components/WishlistItem";

export const Wishlist = () => {
  const items = [
    {
      image: "https://via.placeholder.com/64", // Replace with actual image URL
      name: "Beige normal Tees",
      size: "M",
      price: 1099,
    },
    {
      image: "https://via.placeholder.com/64", // Replace with actual image URL
      name: "White normal Tees",
      size: "S",
      price: 999,
    },
    {
      image: "https://via.placeholder.com/64", // Replace with actual image URL
      name: "Beige normal Tees",
      size: "XL",
      price: 1099,
    },
  ];
  return (
    <div className="max-w-full mx-auto p-16 mt-44">
      <div className="flex justify-between">
        <h1 className="text-2xl font-normal mb-4">Wishlist</h1>
        <button className="text-grey-900 mb-4">Remove All</button>
      </div>

      {items.map((item, index) => (
        <WishlistItem key={index} item={item} />
      ))}
    </div>
  );
};
