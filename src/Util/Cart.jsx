import React, { useContext, Fragment, useEffect, useState } from "react";

import { ShopContext } from "../Context/ShopContext";
import { Dialog, Transition } from "@headlessui/react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { ProductContext } from "../Context/ProductContext";
import { Toaster, toast } from "react-hot-toast";

export const Cart = () => {
  const { open, setOpen } = useContext(ShopContext);
  const { products } = useContext(ProductContext);
  const { cartItems, updateQuantity, getCartAmount } = useContext(CartContext);

  const [cartData, setCartData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex  h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className=" mt-16 flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping Cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <HiArrowLongRight className="w-10 h-10 mr-2" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root outline outline-offset-8 outline-grey-900">
                          {getCartAmount() == 0 ? (
                            <div className="flex justify-center items-center pt-20">
                              <div className="flex justify-center items-center pt-20"></div>
                              <div className="flex justify-center items-center pt-20">
                                <h2 className="font-bold text-black-600 hover:text-indigo-500">
                                  Cart Empty
                                </h2>
                              </div>
                            </div>
                          ) : null}
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200 p-2 "
                          >
                            {cartData.map((item, index) => {
                              const productData = products.find(
                                (product) => product._id === item._id
                              );
                              if (!productData) {
                                return null;
                              }

                              return (
                                <li key={index} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={productData.image[0]}
                                      alt={productData.name}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={productData.name}>
                                            {productData.name}
                                          </a>
                                        </h3>
                                        <p className="ml-4">
                                          Rs.{productData.price}
                                        </p>
                                      </div>
                                      {/* <p className="mt-1 text-sm text-gray-500">
                                        {productData.color}
                                      </p> */}
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Size:{item.size}{" "}
                                      </p>

                                      <div className="flex">
                                        <input
                                          onChange={(e) =>
                                            e.target.value === "" ||
                                            e.target.value === "0"
                                              ? null
                                              : updateQuantity(
                                                  item._id,
                                                  item.size,
                                                  Number(e.target.value)
                                                )
                                          }
                                          className="border max-w-10 sm:max-w-20 px-1 ml-3 sm:px-2 py-1"
                                          type="number"
                                          min={1}
                                          defaultValue={item.quantity}
                                        />

                                        <button
                                          type="button"
                                          onClick={() =>
                                            updateQuantity(
                                              item._id,
                                              item.size,
                                              0
                                            )
                                          }
                                          className="font-medium text-grey-600 hover:text-grey-900"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                          <div className="border-t border-gray-200 px-4 py-6 sm:px-6 bottom-0.5">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <p>Subtotal</p>
                              <p>₹{getCartAmount()}</p>
                            </div>

                            <div className="mt-6">
                              <button
                                onClick={() =>
                                  cartItems
                                    ? navigate("/placeorders")
                                    : toast.error("Cart Empty")
                                }
                                className="bg-black text-white px-6 py-3 rounded mr-4 w-full hover:bg-gray-800"
                              >
                                Checkout
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
