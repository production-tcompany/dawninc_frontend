import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { BsCart, BsFillTriangleFill } from "react-icons/bs";
import { FaRegCircle } from 'react-icons/fa';

export const Navbar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  const isHomePage = location.pathname === "/";
  const textColor = isHomePage ? "text-white" : "text-black";

  return (
    <>
      {/* Mobile View */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2 md:hidden">
        <button onClick={toggleSidebar} className="text-white font-light">
          <FaRegCircle className={`w-6 h-6 ${textColor}`} />
        </button>
        <Link to="/" className="flex justify-center">
          <img src="https://s3-alpha-sig.figma.com/img/cb9f/6ae9/78c2aa35bcf4dae3731048b842aca7d3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cjo5h3NHV~lhJ7hsz3Wmb2ghy9aZ3dCHxN3PrIZ-AQpB0l5SHFaZ6KN4ucFXNjGuvYTu7T-wD4x6OQL9KtOXhZ1mpIlkmBY6uthw3UaT2rytAEcGuJLoEFCFVaJ76UscKhcGPcV1BJdXv8e-EutYn2PTMemweULpD8GvJ5K7K1sHVXmCehFGl62j8JZ-C3az4jmQt6rBCCOYs3Ht93Urf8z9X8d1Ifg4TIYJsEuNTLYFmi0c7YRmKX4BtvFVaQhDeZEl0rimm~NaPQgR7LXOLM3vrJxylXiXsIa8XPKAat16D63Ou-VEr-qVOfMZZOjJQFZj7EMn45f8oR0Zm~b7bA__" alt="Logo" className="h-24" />
        </Link>
        <Link to="/">
          <BsCart className={`w-6 h-6 ${textColor}`} />
        </Link>
      </nav>

      {/* Side Navigation Bar */}
      <div ref={sidebarRef} className={`fixed top-0 left-0 w-64 h-full bg-white z-20 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <ul className="flex flex-col items-center space-y-8 mt-8 py-20">
          <li><Link to="/" className="text-black font-light">Home</Link></li>
          <li className="flex justify-evenly space-x-4 w-full px-4">
            <Link to="/" className="text-black font-light">Account</Link>
            <Link to="/" className="text-black font-light">Wishlist</Link>
          </li>
          <li className="relative">
            <button onClick={toggleDropdown} className="flex items-center text-black font-light">
              Collections
              <BsFillTriangleFill
                className={`ml-2 md:ml-4 mt-1 transform transition-transform w-2 h-2 ${isDropdownOpen ? 'rotate-90' : 'rotate-180'}`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 flex flex-col space-y-2 mt-2 p-4 bg-white">
                <Link to="/collections" className="text-black font-light">Shirts</Link>
                <Link to="/collections" className="text-black font-light">T-shirts</Link>
                <Link to="/collections" className="text-black font-light">Hoodies</Link>
                <Link to="/collections" className="text-black font-light">Pants</Link>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Larger Screens View */}
      <nav className="hidden md:flex absolute top-0 left-0 right-0 z-10 items-center justify-between px-4 py-4 md:px-12 md:py-0">
        <div className="flex items-center space-x-4 md:space-x-24">
          <Link to="/" className={`font-light ${textColor}`}>Home</Link>
          <div className="relative group">
            <button onClick={toggleDropdown} className={`flex items-center font-light ${textColor}`}>
              Collections
              <BsFillTriangleFill
                className={`ml-2 md:ml-4 mt-1 transform transition-transform w-2 h-2 ${isDropdownOpen ? 'rotate-90' : 'rotate-180'}`}
              />
            </button>
            {isDropdownOpen && (
              <div className={`absolute left-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-2 p-4 whitespace-nowrap font-light ${textColor}`}>
                <Link to="/collections" >Shirts</Link>
                <Link to="/collections" >T-shirts</Link>
                <Link to="/collections" >Hoodies</Link>
                <Link to="/collections" >Pants</Link>
              </div>
            )}
          </div>
          <Link to="/account" className={`font-light ${textColor}`}>Account</Link>
        </div>

        <div className="flex justify-center">
          <img src="https://s3-alpha-sig.figma.com/img/cb9f/6ae9/78c2aa35bcf4dae3731048b842aca7d3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cjo5h3NHV~lhJ7hsz3Wmb2ghy9aZ3dCHxN3PrIZ-AQpB0l5SHFaZ6KN4ucFXNjGuvYTu7T-wD4x6OQL9KtOXhZ1mpIlkmBY6uthw3UaT2rytAEcGuJLoEFCFVaJ76UscKhcGPcV1BJdXv8e-EutYn2PTMemweULpD8GvJ5K7K1sHVXmCehFGl62j8JZ-C3az4jmQt6rBCCOYs3Ht93Urf8z9X8d1Ifg4TIYJsEuNTLYFmi0c7YRmKX4BtvFVaQhDeZEl0rimm~NaPQgR7LXOLM3vrJxylXiXsIa8XPKAat16D63Ou-VEr-qVOfMZZOjJQFZj7EMn45f8oR0Zm~b7bA__" alt="Logo" className="h-10 md:h-28" />
        </div>

        <div className="flex items-center space-x-4 md:space-x-14">
          <a href="#">
            <div className="flex justify-center">
              <CiHeart className={`w-4 h-4 md:w-6 md:h-6 ${textColor}`} />
            </div>
          </a>
          <a href="#" className={`flex items-center space-x-2 md:space-x-3 font-light ${textColor}`}>
            <span>Shopping Cart</span>
            <BsCart className={`w-4 h-4 md:w-6 md:h-6 ml-1 md:ml-2 ${textColor}`} />
          </a>
        </div>
      </nav>
    </>
  );
};
