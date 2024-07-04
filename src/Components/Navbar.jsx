import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsCart, BsFillTriangleFill } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
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

  const toggleDropdown = () => {
    setIsSidebarDropdownOpen(!isSidebarDropdownOpen);
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
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-6 md:hidden">
        <button onClick={toggleSidebar}>
          <HiMenuAlt4 className={`w-8 h-8 ${textColor}`} />
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
        className={`fixed top-0 left-0 w-56 h-full bg-white z-20 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <ul className="flex flex-col items-center space-y-12 mt-8 py-20">
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
          <li>
            <Link to="/orders" className="text-black font-light">
              Track your order
            </Link>
          </li>
          <li className="relative">
            <button onClick={toggleDropdown} className="flex items-center text-black font-light">
              Collections
              <BsFillTriangleFill
                className={`ml-2 md:ml-4 mt-1 transform transition-transform w-2 h-2 ${
                  isSidebarDropdownOpen ? "rotate-90" : "rotate-180"
                }`}
              />
            </button>
            {isSidebarDropdownOpen && (
              <div
                className="absolute left-0 flex flex-col space-y-2 mt-2 p-4 bg-white">
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
          <li className="absolute bottom-6 left-0 w-full flex flex-col items-center space-y-4 border-t-2 pt-6">
            <Link to="/help" className="text-black font-light">
              Help
            </Link>
            <Link to="/faq" className="text-black font-light">
              FAQs
            </Link>
          </li>
        </ul>
      </div>

      {/* Larger Screens View */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-10 items-center justify-between px-4 py-4 md:px-12 md:py-8">
        <div className="flex items-center md:space-x-4 lg:space-x-24">
          <Link to="/" className={`font-light ${textColor}`}>
            Home
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
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
                className={`absolute left-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-2 p-2 whitespace-nowrap font-light ${textColor}`}
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

        <div className="flex items-center md:space-x-4 lg:space-x-24">
          <Link to="/orders" className={`font-light ${textColor}`}>
            Track your order
          </Link>
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
