import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>info@tvhomeoffers.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>(704) 361-9336</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 text-white flex items-center justify-center font-bold">
              TV
            </div>
            <div>
              <div className="font-bold text-gray-800">TV REAL ESTATE</div>
              <div className="text-xs text-gray-600">PARTNERS</div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-red-600 transition-colors">How We Work</a>
            <a href="#who-we-help" className="text-gray-700 hover:text-red-600 transition-colors">Who We Help</a>
            <a href="#why-sell-to-us" className="text-gray-700 hover:text-red-600 transition-colors">Why Sell To Us?</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact Us</a>
          </nav>

          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
            Get Cash Offer
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;