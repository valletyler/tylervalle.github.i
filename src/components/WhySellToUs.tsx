import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhySellToUs = () => {
  const benefits = [
    'Fair & Full Market Value Offers',
    'Flexible & Fast Closing',
    'Hassle Free Way to Sell',
    'We Buy In Any Condition',
    'Ready For Any Project',
    'No Games, No Tricks, No Middleman'
  ];

  return (
    <section id="why-sell-to-us" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Sell to Us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="text-red-600 flex-shrink-0" size={24} />
              <span className="text-lg">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySellToUs;