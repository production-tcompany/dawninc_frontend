import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { BsCart, BsFillTriangleFill } from "react-icons/bs";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-4 md:px-12 md:py-0">
      <div className="flex items-center space-x-4 md:space-x-24">
        <Link to="/" className="text-white font-light">Home</Link>
        <div className="relative group">
          <button onClick={toggleDropdown} className="flex items-center text-white font-light">
            Collections
            <BsFillTriangleFill
              className={`ml-2 md:ml-4 mt-1 transform transition-transform w-2 h-2 ${
                isDropdownOpen ? 'rotate-90' : 'rotate-180'
              }`}
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-2 p-4 whitespace-nowrap">
              <Link to="/collections/" className="text-white font-light">Shirts</Link>
              <Link to="/collections" className="text-white font-light">T-shirts</Link>
              <Link to="/collections" className="text-white font-light">Hoodies</Link>
              <Link to="/collections" className="text-white font-light">Pants</Link>
            </div>
          )}
        </div>
        <Link to="/" className="text-white font-light">Account</Link>
      </div>

      <div className="flex justify-center">
        <img src="https://s3-alpha-sig.figma.com/img/cb9f/6ae9/78c2aa35bcf4dae3731048b842aca7d3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cjo5h3NHV~lhJ7hsz3Wmb2ghy9aZ3dCHxN3PrIZ-AQpB0l5SHFaZ6KN4ucFXNjGuvYTu7T-wD4x6OQL9KtOXhZ1mpIlkmBY6uthw3UaT2rytAEcGuJLoEFCFVaJ76UscKhcGPcV1BJdXv8e-EutYn2PTMemweULpD8GvJ5K7K1sHVXmCehFGl62j8JZ-C3az4jmQt6rBCCOYs3Ht93Urf8z9X8d1Ifg4TIYJsEuNTLYFmi0c7YRmKX4BtvFVaQhDeZEl0rimm~NaPQgR7LXOLM3vrJxylXiXsIa8XPKAat16D63Ou-VEr-qVOfMZZOjJQFZj7EMn45f8oR0Zm~b7bA__" alt="Logo" className="h-10 md:h-28" />
      </div>

      <div className="flex items-center space-x-4 md:space-x-14">
        <a href="#" className="text-white">
          <div className="flex justify-center">
            <CiHeart className="w-4 h-4 md:w-6 md:h-6" />
          </div>
        </a>
        <a href="#" className="flex items-center text-white space-x-2 md:space-x-3 font-light">
          <span>Shopping Cart</span>
          <BsCart className="w-4 h-4 md:w-6 md:h-6 ml-1 md:ml-2" />
        </a>
      </div>
    </nav>
  );
};
