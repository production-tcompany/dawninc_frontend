import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import axios from "axios";
import { apiURL } from "../Constants/Constant";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

export const Signup = () => {
  const navigate = useNavigate();
  //input values
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [phno, setPhno] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: `${fname}${lname}`,
      email: email,
      password,
    };

    try {
      const response = await axios.post(`${apiURL}/user/register`, userData);
      const token = response.data.token;

      // Store the token in LocalStorage
      console.log(token);
      localStorage.setItem("authToken", token);

      console.log("Login successful, token stored");
      console.log(userData);
      // Clear it
      setFname("");
      setLname("");
      setPhno("");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="flex flex-col items-center justify-center min-h-screen p-10 pt-28">
        {/* Page under construction message 
      <div className="bg-yellow-200 text-yellow-800 p-4 rounded-md mb-8">
        <h2 className="text-lg font-bold">Page Under Construction</h2>
        <p>We are working hard to bring you this feature. Stay tuned!</p>
      </div>
      */}

        <div className="w-full max-w-xs">
          <h1 className="text-lg text-gray-700 mb-8 underline underline-offset-2">
            Signup
          </h1>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                placeholder="First Name"
                className="w-full border-b-2 py-2 border-gray-700 outline-none text-gray-700 placeholder-black focus:placeholder-transparent focus:pl-2 transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                placeholder="Last Name"
                className="w-full border-b-2 border-gray-700 py-2 text-gray-700 outline-none placeholder-black focus:placeholder-transparent focus:pl-2 transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                value={phno}
                onChange={(e) => setPhno(e.target.value)}
                placeholder="Enter your number"
                className="w-full border-b-2 border-gray-700 py-2 text-gray-700 outline-none placeholder-black focus:placeholder-transparent focus:pl-2 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border-b-2 border-gray-700 py-2 text-gray-700 outline-none placeholder-black focus:placeholder-transparent focus:pl-2 transition-all"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full border-b-2 border-gray-700 py-2 text-gray-700 outline-none placeholder-black focus:placeholder-transparent focus:pl-2 transition-all"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center py-2 text-gray-800"
              >
                <HiArrowRight className="w-6 h-6 mr-2" />
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
