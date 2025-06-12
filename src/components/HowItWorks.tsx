import React from 'react';
import { Phone, Search, FileText, Key } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Submit The Address',
      description: 'Call us or fill out our form with your property address and basic information.',
      step: '01'
    },
    {
      icon: Search,
      title: 'Let Us Know What You\'re Up Against',
      description: 'Tell us about your situation and timeline so we can provide the best solution.',
      step: '02'
    },
    {
      icon: FileText,
      title: 'Receive Your Fair Offer Same Day',
      description: 'Get a fair, no-obligation cash offer within 24 hours of your initial contact.',
      step: '03'
    },
    {
      icon: Key,
      title: 'Close The Deal',
      description: 'Choose your closing date and we\'ll handle all the paperwork and details.',
      step: '04'
    }
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-gray-600 text-center mb-12">
          Our simple 4-step process makes selling your house fast and easy.
        </p>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/7578819/pexels-photo-7578819.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="House keys and sold sign"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <step.icon size={24} className="text-red-600" />
                  </div>
                  <span className="text-2xl font-bold text-red-600">{step.step}</span>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;