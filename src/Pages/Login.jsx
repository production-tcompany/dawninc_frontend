import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from "react-icons/hi2";

export const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-10">
      <div className="w-full max-w-xs">
        <h1 className="text-lg mb-10 text-gray-700 underline underline-offset-2">
            Log in

        </h1>
        <form className="space-y-10">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-b-2 border-gray-700 outline-none py-2 text-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border-b-2 border-gray-700 outline-none py-2 text-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex items-center py-2 text-gray-700"
            >
              <HiArrowLongRight className="w-10 h-10 mr-2" />
              Log in
            </button>
          </div>
        </form>
        <div className="mt-4">
          <Link to="/signup" className="text-gray-700 underline underline-offset-2">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};
