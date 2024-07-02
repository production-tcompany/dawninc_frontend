import React, { useState } from "react";

export const DetailsDropdown = () => {
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
        <span className="text-l">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="mt-4 text-gray-700">
          <p>
            The Seventh White layered tee is made from 100% cotton, a truly
            innovative design created to achieve a two layered T-shirt look in
            one garment. Featuring a double layered sleeve and a center back
            seam, the silhouette is oversized and boxy. The garment also
            features a raw hem on the short sleeve to create a contrast against
            the longer sleeved layer beneath.
          </p>
          <p className="mt-2">100% cotton</p>
          <p>Double layered sleeve</p>
        </div>
      )}
    </div>
  );
};
