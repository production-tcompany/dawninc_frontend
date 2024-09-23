import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { apiURL } from "../Constants/Constant";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export const Login = () => {
  const navigate = useNavigate();
  //form
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //loginstate
  const [loginState, setLoginState] = useState(
    localStorage.getItem("authToken")
  );
  //const token = localStorage.getItem("authToken");

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${apiURL}/user/login`, loginData);
      const token = response.data.token;

      // Store the token in LocalStorage
      console.log(token);
      localStorage.setItem("authToken", token);

      console.log("Login successful, token stored");
      toast.success("Login successful");
      setTimeout(() => {
        navigate("/");
      }, 3000);
      // Redirect or do something after successful login
    } catch (error) {
      console.error("Error during login", error);
      toast.error("This didn't work.");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 pt-28">
      <Toaster position="bottom-right" reverseOrder={false} />
      {loginState ? (
        <div className="bg-yellow-200 text-yellow-800 p-4 rounded-md mb-8">
          <h2 className="text-lg font-bold">You are already LogedIn..</h2>
          <button
            className="flex items-center py-2 text-gray-700"
            onClick={() => {
              localStorage.removeItem("authToken");
              setLoginState(null);
            }}
          >
            <HiArrowRight className="w-6 h-6 mr-2" />
            Log Out
          </button>
        </div>
      ) : (
        <div className="w-full max-w-xs">
          <h1 className="text-lg mb-10 text-gray-700 underline underline-offset-2">
            Log in
          </h1>

          <form className="space-y-10" onSubmit={handleLogin}>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your phoneNo"
                className="w-full border-b-2 border-gray-700 outline-none py-2 text-gray-700 placeholder-black focus:placeholder-transparent focus:pl-2 transition-all"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border-b-2 border-gray-700 outline-none py-2 text-gray-700 placeholder-black focus:placeholder-transparent focus:pl-2 transition-all"
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
      )}
    </div>
  );
};
