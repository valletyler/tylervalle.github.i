import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm">Copyright © 2023 tvhomeoffers.com All rights reserved</p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="hover:text-red-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-red-400 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;