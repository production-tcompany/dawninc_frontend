import React from "react";
import { ProductDisplay } from "../Components/ProductDisplay";
import { RelatedProducts } from "../Components/RelatedProducts";

export const Product = () => {
  return (
    <div>
      <ProductDisplay />
      <RelatedProducts />
    </div>
  );
};
