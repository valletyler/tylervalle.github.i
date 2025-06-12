import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    message: '',
    consent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Sell Your Home Now!</h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                  required
                />
              </div>
            </div>
            
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                required
              />
            </div>
            
            <div>
              <input
                type="text"
                name="address"
                placeholder="Property Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                required
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Tell us about your situation..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 resize-vertical"
              ></textarea>
            </div>

            {/* A2P Consent Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-red-600 bg-gray-800 border-gray-600 rounded focus:ring-red-500"
                required
              />
              <label htmlFor="consent" className="text-sm text-gray-300">
                By checking this box and providing my phone number, I consent to receive automated text messages, calls, and prerecorded messages from TV Real Estate Partners and its affiliates at the number provided. I understand that consent is not a condition of purchase, and I can opt out at any time by replying STOP. Message and data rates may apply. I also agree to the{' '}
                <a href="#privacy" className="text-red-400 hover:text-red-300 underline">Privacy Policy</a> and{' '}
                <a href="#terms" className="text-red-400 hover:text-red-300 underline">Terms of Service</a>.
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-4 px-8 rounded text-lg font-semibold hover:bg-red-700 transition-colors transform hover:scale-105"
              disabled={!formData.consent}
            >
              Submit Form
            </button>
          </form>
          
          <div className="mt-12 text-center">
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                alt="Real Estate Professional"
                className="w-32 h-32 rounded-lg mx-auto object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl">Tony Villamor</h3>
              <p className="text-gray-400">Real Estate Investor</p>
              <p className="text-gray-400">TV Real Estate Partners LLC</p>
              <p className="text-gray-400">68 Executive Park South Ste 3</p>
              <p className="text-gray-400">Atlanta, GA 30329</p>
              <p className="text-red-400 font-semibold">(704) 361-9336</p>
              <p className="text-red-400">info@tvhomeoffers.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;