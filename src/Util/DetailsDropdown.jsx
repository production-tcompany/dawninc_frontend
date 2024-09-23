import React, { useState } from "react";

export const DetailsDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full pt-4">
      {/* Dropdown Header */}
      <div
        className="flex justify-between items-center cursor-pointer border-b border-gray-300 pb-2"
        onClick={toggleDropdown}
      >
        <span className="text-l font-semibold">Details</span>
        <span className="text-3xl font-semibold">{isOpen ? "-" : "+"}</span>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="mt-4 text-gray-700">
          <p>{props.details}</p>
          {/*<p className="mt-2">100% cotton</p>
          <p>Double layered sleeve</p>*/}
        </div>
      )}
    </div>
  );
};
