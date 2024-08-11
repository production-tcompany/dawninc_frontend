import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

export const Login = () => {
  const [emailPlaceholder, setEmailPlaceholder] = useState("Enter your email");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(
    "Enter your password"
  );
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 pt-28">
      {/* Page under construction message */}
      <div className="bg-yellow-200 text-yellow-800 p-4 rounded-md mb-8">
        <h2 className="text-lg font-bold">Page Under Construction</h2>
        <p>We are working hard to bring you this feature. Stay tuned!</p>
      </div>

      <div className="w-full max-w-xs">
        <h1 className="text-lg mb-10 text-gray-700 underline underline-offset-2">
          Log in
        </h1>
        <form className="space-y-10">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-b-2 border-gray-700 outline-none py-2 text-gray-700 placeholder-black focus:placeholder-transparent focus:pl-2 transition-all"
              onFocus={() => setEmailPlaceholder("")}
              onBlur={() => setEmailPlaceholder("Enter your email")}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border-b-2 border-gray-700 outline-none py-2 text-gray-700 placeholder-black focus:placeholder-transparent focus:pl-2 transition-all"
              onFocus={() => setPasswordPlaceholder("")}
              onBlur={() => setPasswordPlaceholder("Enter your password")}
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex items-center py-2 text-gray-700"
            >
              <HiArrowRight className="w-6 h-6 mr-2" />
              Log in
            </button>
          </div>
        </form>
        <div className="mt-4">
          <Link
            to="/signup"
            className="text-gray-700 underline underline-offset-2"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};
