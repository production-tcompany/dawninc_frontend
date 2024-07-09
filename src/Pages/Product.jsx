import React from "react";
import { useParams } from "react-router-dom";
import { ProductDisplay } from "../Components/ProductDisplay";
import { RelatedProducts } from "../Components/RelatedProducts";

export const Product = () => {
  const { id } = useParams(); // Retrieve the product ID from the route parameters

  return (
    <div>
      <ProductDisplay productId={id} /> {/* Pass the product ID as a prop */}
      <RelatedProducts productId={id} /> {/* Pass the product ID to RelatedProducts if needed */}
    </div>
  );
};
