import React from 'react';

const QuickOffer = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Receive Your Quick, Obligation-Free Offer</h2>
        <p className="text-xl mb-8">It only takes about your name and address to get started!</p>
        
        <button className="bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded hover:bg-red-700 transition-colors transform hover:scale-105">
          Get My Cash Offer Now
        </button>
      </div>
    </section>
  );
};

export default QuickOffer;