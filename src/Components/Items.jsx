import React from "react";
import { Link } from "react-router-dom";
import blue1 from "../Assets/productimage/BLUE 2.png";
import blue2 from "../Assets/productimage/BLUE 3.png";
// Sample data for the products
const sampleProducts = {
  hoodies: [
    {
      id: "1",
      name: "Light Project Hoodie V1",
      price: 1799,
      image: [
        "https://drive.google.com/thumbnail?id=1mqPyPd908ConYnynEWQYpdmGK6bxcRVG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-LppYEgUplrZguQIbFCMlnmcQWikHEIb&sz=w1000",
      ],
      colorCode: "#000000",
    },
    {
      id: "2",
      name: "Light Project Hoodie V2",
      price: 1799,
      image: [blue2, blue1],
      colorCode: "#020140",
    },
  ],
  shirts: [],
  tshirts: [],
  pants: [],
};

export const Items = ({ category }) => {
  let products = [];

  if (category === "allproducts") {
    products = Object.values(sampleProducts).flat();
  } else {
    products = sampleProducts[category] || [];
  }

  if (products.length === 0) {
    return <div className="p-6 pt-24">No products available</div>;
  }

  return (
    <>
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          style={{ textDecoration: "none" }}
        >
          <div className="group relative h-[530px]">
            <div className="relative">
              <img
                onClick={() => window.scrollTo(0, 0)}
                src={product.image[0]}
                alt={product.name}
                className="h-[500px] object-cover object-center transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                onClick={() => window.scrollTo(0, 0)}
                src={product.image[1]}
                alt={product.name}
                className="absolute top-0 left-0 h-[500px] object-cover object-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <div>
                <h3 className="text-gray-900">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </h3>
                <p className="mt-1 text-gray-900">₹{product.price}</p>
              </div>
            </div>
            <div
              aria-label="Choose a color"
              className="mt-4 flex justify-center items-center"
            >
              <div className="justify-items-center">
                <div
                  className="w-4 h-4 p-0.5 rounded-full ring-2 ring-gray-900"
                  style={{ backgroundColor: product.colorCode }}
                ></div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
