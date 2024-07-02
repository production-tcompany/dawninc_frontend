import React from "react";

export const Fotter = () => {
  return (
    <footer className="bg-white py-12 px-4 md:py-24 md:px-96">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          <div className="text-center">
            <h3 className="text-sm font-normal mb-2">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 text-xs">Help</a></li>
              <li><a href="#" className="text-gray-600 text-xs">FAQs</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-normal mb-2">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 text-xs">About</a></li>
              <li><a href="#" className="text-gray-600 text-xs">Contact</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-normal mb-2">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 text-xs">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 text-xs">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-normal mb-2">Social</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 text-xs">Instagram</a></li>
              <li><a href="#" className="text-gray-600 text-xs">Facebook</a></li>
              <li><a href="#" className="text-gray-600 text-xs">X</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
