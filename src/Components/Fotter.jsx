import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

export const Fotter = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <footer className="bg-white py-12 px-4 md:py-24 md:px-96">
      <div className="container mx-auto">
        <div className="md:hidden px-8">
          <div className="py-2">
            <div className="flex justify-between items-center" onClick={() => toggleSection('support')}>
              <span className="font-normal">Support</span>
              <FaChevronRight className={`${openSection === 'support' ? 'rotate-90' : ''}`}/>
            </div>
            {openSection === 'support' && (
              <ul className="space-y-2 mt-2">
                <li><a href="/" className="text-gray-600 text-sm">Help</a></li>
                <li><a href="/" className="text-gray-600 text-sm">FAQs</a></li>
              </ul>
            )}
          </div>
          <div className="py-2">
            <div className="flex justify-between items-center" onClick={() => toggleSection('company')}>
              <span className="font-normal">Company</span>
              <FaChevronRight className={`${openSection === 'legal' ? 'rotate-90' : ''}`}/>
            </div>
            {openSection === 'company' && (
              <ul className="space-y-2 mt-2">
                <li><a href="/" className="text-gray-600 text-sm">About</a></li>
                <li><a href="/" className="text-gray-600 text-sm">Contact</a></li>
              </ul>
            )}
          </div>
          <div className="py-2">
            <div className="flex justify-between items-center" onClick={() => toggleSection('legal')}>
              <span className="font-normal">Legal</span>
              <FaChevronRight className={`${openSection === 'legal' ? 'rotate-90' : ''}`}/>
            </div>
            {openSection === 'legal' && (
              <ul className="space-y-2 mt-2">
                <li><a href="/" className="text-gray-600 text-sm">Terms & Conditions</a></li>
                <li><a href="/" className="text-gray-600 text-sm">Privacy Policy</a></li>
              </ul>
            )}
          </div>
          <div className="py-2">
            <div className="flex justify-between items-center" onClick={() => toggleSection('social')}>
              <span className="font-normal">Social</span>
              <FaChevronRight className={`${openSection === 'social' ? 'rotate-90' : ''}`}/>
            </div>
            {openSection === 'social' && (
              <ul className="space-y-2 mt-2">
                <li><a href="https://www.instagram.com/dawninc?igsh=cjZ5endlMTAyZDZi" className="text-gray-600 text-sm">Instagram</a></li>
                <li><a href="/" className="text-gray-600 text-sm">Facebook</a></li>
                <li><a href="/" className="text-gray-600 text-sm">X</a></li>
              </ul>
            )}
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-4 md:gap-20 md:justify-center">
          <div className="text-center">
            <h3 className="text-sm font-normal mb-2">Support</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 text-xs">Help</a></li>
              <li><a href="/" className="text-gray-600 text-xs">FAQs</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-normal mb-2">Company</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 text-xs">About</a></li>
              <li><a href="/" className="text-gray-600 text-xs">Contact</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-normal mb-2">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 text-xs">Terms & Conditions</a></li>
              <li><a href="/" className="text-gray-600 text-xs">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-normal mb-2">Social</h3>
            <ul className="space-y-2">
              <li><a href="https://www.instagram.com/dawninc?igsh=cjZ5endlMTAyZDZi" className="text-gray-600 text-xs">Instagram</a></li>
              <li><a href="/" className="text-gray-600 text-xs">Facebook</a></li>
              <li><a href="/" className="text-gray-600 text-xs">X</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
