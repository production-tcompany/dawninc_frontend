import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

export const RelatedProducts = ({ productId }) => {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter(
    (prod) => String(prod._id) !== String(productId)
  );
  return (
    <div className="md:p-6 md:px-14 p-4">
      <h4 className="text-xl md:text-3xl font-normal mt-12 ">
        People also bought
      </h4>
      <div className="mt-4 overflow-x-auto no-scrollbar">
        {filteredProducts.length === 0 ? (
          <div>No products available</div>
        ) : (
          <div className="flex ">
            {filteredProducts.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-64 border p-4">
                <img
                  src={product.image[0]}
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
