import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsCart, BsFillTriangleFill } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { ShopContext } from "../Context/ShopContext";
import { Cart } from "../Util/Cart";
import logo from "../Assets/LOGO.png"

export const Navbar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const isHomePage = location.pathname === "/";
  const textColor = isHomePage ? "text-white" : "text-black";

  //cart_context
  const { open, setOpen } = useContext(ShopContext);

  return (
    <>
      {/* Mobile View */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2 md:hidden">
        <button onClick={toggleSidebar}>
          <FaRegCircle className={`w-6 h-6 ${textColor}`} />
        </button>
        <Link to="/" className="flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className="h-24"
          />
        </Link>
        <Link to="/login">
          <BsCart className={`w-6 h-6 ${textColor}`} />
        </Link>
      </nav>

      {/* Side Navigation Bar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-full bg-white z-20 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <ul className="flex flex-col items-center space-y-8 mt-8 py-20">
          <li>
            <Link to="/" className="text-black font-light">
              Home
            </Link>
          </li>
          <li className="flex justify-evenly space-x-4 w-full px-4">
            <Link to="/account" className="text-black font-light">
              Account
            </Link>
            <Link to="/login" className="text-black font-light">
              Wishlist
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setIsSidebarDropdownOpen(true)}
            onMouseLeave={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsSidebarDropdownOpen(false);
              }
            }}
          >
            <button className="flex items-center text-black font-light">
              Collections
              <BsFillTriangleFill
                className={`ml-2 md:ml-4 mt-1 transform transition-transform w-2 h-2 ${
                  isSidebarDropdownOpen ? "rotate-90" : "rotate-180"
                }`}
              />
            </button>
            {isSidebarDropdownOpen && (
              <div
                className="absolute left-0 flex flex-col space-y-2 mt-2 p-4 bg-white"
                onMouseEnter={() => setIsSidebarDropdownOpen(true)}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setTimeout(() => {
                      setIsSidebarDropdownOpen(false);
                    }, 1000);
                  }
                }}
              >
                <Link to="/collections/" className="text-black font-light">
                  Shirts
                </Link>
                <Link to="/collections/" className="text-black font-light">
                  T-shirts
                </Link>
                <Link to="/collections/" className="text-black font-light">
                  Hoodies
                </Link>
                <Link to="/collections/" className="text-black font-light">
                  Pants
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Larger Screens View */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-10 items-center justify-between px-4 py-4 md:px-12 md:py-8">
        <div className="flex items-center space-x-4 md:space-x-24">
          <Link to="/" className={`font-light ${textColor}`}>
            Home
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setTimeout(() => {
                  setIsDropdownOpen(false);
                }, 1000);
              }
            }}
          >
            <button className={`flex items-center font-light ${textColor}`}>
              Collections
              <BsFillTriangleFill
                className={`ml-2 md:ml-4 mt-1 transform transition-transform w-2 h-2 ${
                  isDropdownOpen ? "rotate-90" : "rotate-180"
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div
                className={`absolute left-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-2 p-4 whitespace-nowrap font-light ${textColor}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setIsDropdownOpen(false);
                  }
                }}
              >
                <Link to="/collections/">Shirts</Link>
                <Link to="/collections/">T-shirts</Link>
                <Link to="/collections/">Hoodies</Link>
                <Link to="/collections/">Pants</Link>
              </div>
            )}
          </div>
          <Link to="/account" className={`font-light ${textColor}`}>
            Account
          </Link>
        </div>

        <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2">
          <img
            src={logo}
            alt="Logo"
            className="h-10 md:h-28"
          />
        </div>

        <div className="flex items-center space-x-4 md:space-x-14">
          <a href="#">
            <div className="flex justify-center">
              <CiHeart className={`w-4 h-4 md:w-6 md:h-6 ${textColor}`} />
            </div>
          </a>
          <a
            href="#"
            className={`flex items-center space-x-2 md:space-x-3 font-light ${textColor}`}
            onClick={() => {
              setOpen(true);
            }}
          >
            <span>Shopping Cart</span>
            <BsCart
              className={`w-4 h-4 md:w-6 md:h-6 ml-1 md:ml-2 ${textColor}`}
            />
          </a>
        </div>
        <Cart />
      </nav>
    </>
  );
};
