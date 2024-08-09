import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsCart, BsFillTriangleFill } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { Cart } from "../Util/Cart";
import logo from "../Assets/LOGO.png";

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

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile View */}
      <nav className=" fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-8 md:hidden bg-white">
        <button onClick={toggleSidebar}>
          <HiMenuAlt4 className={`w-8 h-8 ${textColor}`} />
        </button>

        <a href="/" className="flex justify-center">
          <img src={logo} alt="Logo" className="h-24" />
        </a>

        <a href="/login">
          <BsCart className={`w-6 h-6 mb-1 ${textColor}`} />
        </a>
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
            <Link
              to="/"
              onClick={handleLinkClick}
              className="text-black font-light"
            >
              Home
            </Link>
          </li>
          <li className="flex justify-evenly space-x-4 w-full px-4">
            <Link
              to="/login"
              onClick={handleLinkClick}
              className="text-black font-light"
            >
              Account
            </Link>
            <Link
              to="/login"
              onClick={handleLinkClick}
              className="text-black font-light"
            >
              Wishlist
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={handleLinkClick}
              className="text-black font-light"
            >
              Track your order
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-black font-light"
            >
              Collections
              <BsFillTriangleFill
                className={`ml-2 md:ml-4 mt-1 transform transition-transform w-2 h-2 ${
                  isSidebarDropdownOpen ? "rotate-90" : "rotate-180"
                }`}
              />
            </button>
            {isSidebarDropdownOpen && (
              <div className="absolute left-0 flex flex-col space-y-2 mt-2 p-4 bg-white">
                <Link
                  to="/collections/shirts"
                  onClick={handleLinkClick}
                  className="text-black font-light"
                >
                  Shirts
                </Link>
                <Link
                  to="/collections/tshirts"
                  onClick={handleLinkClick}
                  className="text-black font-light"
                >
                  T-shirts
                </Link>
                <Link
                  to="/collections/hoodies"
                  onClick={handleLinkClick}
                  className="text-black font-light"
                >
                  Hoodies
                </Link>
                <Link
                  to="/collections/pants"
                  onClick={handleLinkClick}
                  className="text-black font-light"
                >
                  Pants
                </Link>
              </div>
            )}
          </li>
          <li className="absolute bottom-6 left-0 w-full flex flex-col items-center space-y-4 border-t-2 pt-6">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="text-black font-light"
            >
              Help
            </Link>
            <Link
              to="/"
              onClick={handleLinkClick}
              className="text-black font-light"
            >
              FAQs
            </Link>
          </li>
        </ul>
      </div>

      {/* Larger Screens View */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-30 items-center justify-between px-4 py-4 md:px-8 md:py-8 bg-white">
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
                <Link to="/collections/shirts">Shirts</Link>
                <Link to="/collections/tshirts">T-shirts</Link>
                <Link to="/collections/hoodies">Hoodies</Link>
                <Link to="/collections/pants">Pants</Link>
              </div>
            )}
          </div>
          <Link to="/login" className={`font-light ${textColor}`}>
            Account
          </Link>
        </div>

        <a
          href="/"
          className="flex justify-center absolute left-1/2 transform -translate-x-1/2"
        >
          <img src={logo} alt="Logo" className="h-10 md:h-24" />
        </a>

        <div className="flex items-center md:space-x-4 lg:space-x-24">
          <Link to="/login" className={`font-light ${textColor}`}>
            Track your order
          </Link>
          <Link to="/login">
            <div className="flex justify-center">
              <CiHeart className={`w-4 h-4 md:w-6 md:h-6 ${textColor}`} />
            </div>
          </Link>

          <a
            href="/login"
            className={`flex items-center space-x-2 md:space-x-3 font-light ${textColor}`}
            onClick={() => {}}
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
