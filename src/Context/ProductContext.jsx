import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "../Constants/Constant";
export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiURL}/product/list`);
        console.log(response.data);
        setProducts(response.data.products); // store fetched products in state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const contextValue = { products };
  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
