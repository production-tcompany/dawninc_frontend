import React from 'react';
import { Link } from 'react-router-dom';

export const Account = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-6 sm:py-12 text-gray-600">
      <div className="max-w-4xl w-full p-8 pt-24">
        <div className="flex justify-evenly">
            <div className="flex flex-col gap-14 justify-start">
                {/* Account Details */}
                <div>
                    <h2 className="font-semibold mb-4 underline underline-offset-2">Account</h2>
                    <p className="mb-2">John Mathew</p>
                    <p className="mb-2">9999448400</p>
                    <p className="mb-2">johnmathew999@gmail.com</p>
                </div>
                {/* Orders */}
                <div className="mt-14">
                    <h2 className="font-semibold mb-4 underline underline-offset-2">Orders</h2>
                    <p className="text-gray-500">No orders yet</p>
                </div>
          </div>
          {/* Address Details */}
          <div>
            <h2 className="font-semibold mb-4 underline underline-offset-2">Address</h2>
            <p className="mb-2">John Mathew</p>
            <p className="mb-2">Elm street</p>
            <p className="mb-2">California</p>
            <p className="mb-2">USA</p>
            <Link to="/" className="mt-2 font-semibold underline underline-offset-2">Edit Address</Link>
          </div>
        </div>

        

        {/* Logout */}
        <div className="mt-20 flex justify-center">
          <a href="#" className="font-semibold underline underline-offset-2">Log out</a>
        </div>
      </div>
    </div>
  );
};
