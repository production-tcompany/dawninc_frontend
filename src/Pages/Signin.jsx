import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";

export const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 pt-28">
      {/* Page under construction message */}
      <div className="bg-yellow-200 text-yellow-800 p-4 rounded-md mb-8">
        <h2 className="text-lg font-bold">Page Under Construction</h2>
        <p>We are working hard to bring you this feature. Stay tuned!</p>
      </div>

      <div className="w-full max-w-xs">
        <h1 className="text-lg text-gray-700 mb-8 underline underline-offset-2">Signup</h1>
        <form className="space-y-8">
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border-b-2 border-gray-700 py-2 text-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border-b-2 border-gray-700 py-2 text-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your number"
              className="w-full border-b-2 border-gray-700 py-2 text-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-b-2 border-gray-700 py-2 text-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b-2 border-gray-700 py-2 text-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex items-center py-2 text-gray-800"
            >
              <HiArrowLongRight className="w-10 h-10 mr-2" />
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
