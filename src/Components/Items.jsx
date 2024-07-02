import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Items = () => {
  return (
    <Link to="/product" style={{ textDecoration: "none" }}>
      <div key="12" className="group relative ">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
          <img
            onClick={window.scrollTo(0, 0)}
            src="https://i.pinimg.com/236x/7c/a6/6b/7ca66b1bfcfb87ea2e0387b375776d0b.jpg"
            alt="photo"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-900">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                test1
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-900">₹100</p>
          </div>
          <div></div>
        </div>
        <div
          aria-label="Choose a color"
          className="mt-4 flex justify-center items-center"
        >
          <div className="justify-items-center">
            <img
              class="w-8 h-8 p-0.5 rounded-full ring-2 ring-gray-900 "
              src="https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-101806.jpg?size=338&ext=jpg&ga=GA1.1.1788614524.1719792000&semt=ais_user"
              alt="Bordered avatar"
            ></img>
          </div>
        </div>
      </div>
    </Link>
  );
};
