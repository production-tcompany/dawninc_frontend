import React from "react";

export const RelatedProducts = () => {
  const products = [
    { id: 1, name: "Grey Normal Tees", image: "path_to_grey_image" },
    { id: 2, name: "Black Normal Tees", image: "path_to_black_image" },
    { id: 3, name: "White Normal Tees", image: "path_to_white_image" },
    { id: 4, name: "Grey Normal Tees", image: "path_to_grey_image" },
    { id: 5, name: "Black Normal Tees", image: "path_to_black_image" },
    { id: 5, name: "Black Normal Tees", image: "path_to_black_image" },
    { id: 5, name: "Black Normal Tees", image: "path_to_black_image" },
    { id: 5, name: "Black Normal Tees", image: "path_to_black_image" },
    { id: 5, name: "Black Normal Tees", image: "path_to_black_image" },
    { id: 5, name: "Black Normal Tees", image: "path_to_black_image" },
    { id: 5, name: "Black Normal Tees", image: "path_to_black_image" },
    { id: 5, name: "Black Normal Tees", image: "path_to_black_image" },
    { id: 5, name: "Black Normal Tees", image: "path_to_black_image" },
    { id: 5, name: "Black Normal Tees", image: "path_to_black_image" },
  ];
  return (
    <div className="p-6">
      <h4 className="text-3xl font-normal mt-12">People also bought</h4>
      <div className="mt-4 overflow-x-auto">
        <div className="flex ">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-64 border p-4">
              <img
                src="https://i.pinimg.com/236x/7c/a6/6b/7ca66b1bfcfb87ea2e0387b375776d0b.jpg"
                alt={product.name}
                className="w-full h-auto mb-2"
              />
              <div className="text-center text-lg">{product.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
