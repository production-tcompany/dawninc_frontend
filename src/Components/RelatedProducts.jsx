import React from "react";

export const RelatedProducts = () => {
  const products = [];

  return (
    <div className="md:p-6 md:px-14 p-4">
      <h4 className="text-xl md:text-3xl font-normal mt-12 ">
        People also bought
      </h4>
      <div className="mt-4 overflow-x-auto no-scrollbar">
        {products.length === 0 ? (
          <div>No products available</div>
        ) : (
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
        )}
      </div>
    </div>
  );
};
