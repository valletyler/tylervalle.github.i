import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          The Easiest Way To Sell Your House
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Fair, No Pressure Cash Offers
        </p>
        <button className="bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded hover:bg-red-700 transition-colors transform hover:scale-105">
          Get Cash Offer
        </button>
      </div>
    </section>
  );
};

export default Hero;