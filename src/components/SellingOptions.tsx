import React from 'react';
import { Check, X } from 'lucide-react';

const SellingOptions = () => {
  const traditionalSale = [
    { feature: 'Multiple showings and open houses', included: true },
    { feature: 'Home improvements and staging', included: true },
    { feature: 'Realtor commissions', included: true },
    { feature: 'Time spent prepping home (30-60+ days)', included: true },
    { feature: 'More money you possibly more cash after closing', included: true }
  ];

  const cashInvestor = [
    { feature: 'Quick close within 7-14 days', included: true },
    { feature: 'No repairs needed for the seller', included: true },
    { feature: 'Pay as-is condition after a thorough inspection', included: true },
    { feature: 'No realtor commissions or closing costs', included: true },
    { feature: 'Fast process with absolute least cash', included: true }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Selling Options To Consider</h2>
        <p className="text-center text-red-600 mb-12">
          Take advantage of our <span className="font-semibold">Cash Buyer</span> process and <span className="font-semibold">Fast House Selling</span> service.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional Sale */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">OPTION A – TRADITIONAL SALE</h3>
            <ul className="space-y-4">
              {traditionalSale.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>{item.feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cash Investor */}
          <div className="bg-white border border-red-200 rounded-lg p-6 ring-2 ring-red-600">
            <h3 className="text-2xl font-bold mb-6 text-center">OPTION B – SELL TO A CASH INVESTOR</h3>
            <ul className="space-y-4">
              {cashInvestor.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>{item.feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellingOptions;