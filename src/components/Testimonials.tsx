import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Charlotte, NC',
      text: 'Working with TV Real Estate was the best decision I made. They were professional, fast, and gave me a fair offer for my house. The process was so much easier than I expected.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      location: 'Raleigh, NC',
      text: 'I inherited a property that needed a lot of work. TV Real Estate bought it as-is and handled everything. I couldn\'t be happier with how smooth the transaction was.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">OUR CLIENT</h2>
          <h3 className="text-3xl font-bold text-red-600">TESTIMONIAL</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;