import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "../Constants/Constant";
import { ProductContext } from "./ProductContext";
export const CartContext = createContext(null);

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const { products } = useContext(ProductContext);

  const addToCart = async (itemId, size) => {
    if (!size) {
      //toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    if (token) {
      console.log(token);
      try {
        await axios.post(
          apiURL + "/cart/add",
          { itemId, size },
          { headers: { token } }
        );
        console.log("item sent");
      } catch (error) {
        console.log(error);
        //toast.error(error.message);
      }
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        apiURL + "/cart/get",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData);
        console.log(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      //toast.error(error.message);
    }
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          apiURL + "/cart/update",
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        //toast.error(error.message);
      }
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    if (!token && localStorage.getItem("authToken")) {
      setToken(localStorage.getItem("authToken"));
      getUserCart(localStorage.getItem("authToken"));
    }
    if (token) {
      //getUserCart(token);
    }
  }, [token]);
  const contextValue = {
    setCartItems,
    cartItems,
    addToCart,
    updateQuantity,
    getCartAmount,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
