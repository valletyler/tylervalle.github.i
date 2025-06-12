import React from 'react';
import { Heart, Home, TrendingDown, ArrowDown, Briefcase, MapPin, Wrench, CreditCard, Mountain } from 'lucide-react';

const WhoWeHelp = () => {
  const services = [
    { icon: Heart, title: 'Divorce', color: 'text-red-500' },
    { icon: Home, title: 'Inheritance', color: 'text-blue-500' },
    { icon: TrendingDown, title: 'Foreclosure', color: 'text-orange-500' },
    { icon: ArrowDown, title: 'Downsizing', color: 'text-purple-500' },
    { icon: Briefcase, title: 'Bankruptcy', color: 'text-gray-500' },
    { icon: MapPin, title: 'Relocation', color: 'text-green-500' },
    { icon: Wrench, title: 'Costly Repairs', color: 'text-yellow-500' },
    { icon: CreditCard, title: 'Behind on Payments', color: 'text-red-600' },
    { icon: Mountain, title: 'Inherited Land', color: 'text-emerald-500' }
  ];

  return (
    <section id="who-we-help" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Who We Help</h2>
        <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto">
          TV Real Estate Group is a team of Real Estate Investors and Renovators. We buy single-family brick homes in bulk with various scenarios that make it impossible for homeowners to sell their home the traditional way or simply the homeowner prefers the easy way out. Check out all of the different situations that we provide solutions for.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className={`inline-block p-4 rounded-full bg-gray-100 mb-4`}>
                <service.icon size={32} className={service.color} />
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;