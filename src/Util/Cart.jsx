import React, { useContext, Fragment } from "react";

import { ShopContext } from "../Context/ShopContext";
import { Dialog, Transition } from "@headlessui/react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

export const Cart = () => {
  const { open, setOpen } = useContext(ShopContext);

  const products = [
    { id: 1, name: "Grey Normal Tees", image: "path_to_grey_image" },
    { id: 2, name: "Black Normal Tees", image: "path_to_black_image" },
    { id: 3, name: "White Normal Tees", image: "path_to_white_image" },
    { id: 4, name: "Grey Normal Tees", image: "path_to_grey_image" },
  ];
  return (
    <Transition.Root show={open} as={Fragment}>
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
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
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
                          {/* {getTotalCartAmount() == 0 ? (
                            <div className="flex justify-center items-center pt-20">
                              <div className="flex justify-center items-center pt-20">
                                <img
                                  className="h-24 w-30 object-cover object-center"
                                  src="https://www.clker.com/cliparts/8/B/c/H/6/H/movie-plate.svg"
                                ></img>
                              </div>
                              <div className="flex justify-center items-center pt-20">
                                <h2 className="font-bold text-black-600 hover:text-indigo-500">
                                  Plate empty
                                </h2>
                              </div>
                            </div>
                          ) : null} */}
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200 p-2"
                          >
                            {products.map((product) => {
                              return (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.url}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>
                                            {product.name}
                                          </a>
                                        </h3>
                                        <p className="ml-4">Rs.100</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.color}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">Size: </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          onClick={() => {
                                            //removeAllFromCart(product.ids);
                                          }}
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
                          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <p>Subtotal</p>
                              <p>₹1000</p>
                            </div>

                            <div className="mt-6">
                              <button className="bg-black text-white px-6 py-3 rounded mr-4 w-full hover:bg-gray-800">
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