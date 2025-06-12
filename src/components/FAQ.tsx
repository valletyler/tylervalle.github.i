import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What condition / Rehab do we purchase?',
      answer: 'We purchase houses in any condition, from move-in ready to properties that need extensive repairs. No repairs are required on your part.'
    },
    {
      question: 'How fast can we close?',
      answer: 'We can close in as little as 7-14 days, depending on your timeline and preferences. We work around your schedule.'
    },
    {
      question: 'Do I need paperwork?',
      answer: 'We handle all the paperwork and legal documentation. You just need to provide basic property information and sign the necessary documents.'
    },
    {
      question: 'What about property taxes?',
      answer: 'We can work with you on property tax situations and often can help resolve outstanding tax issues as part of the transaction.'
    },
    {
      question: 'Do we have to pay realtor fees?',
      answer: 'No realtor fees or commissions! We buy directly from you, eliminating all traditional selling costs and fees.'
    },
    {
      question: 'What is a selling AS-IS sale?',
      answer: 'Selling AS-IS means you sell the property in its current condition without making any repairs or improvements. We buy it exactly as it stands.'
    },
    {
      question: 'Can we help with inherited homes?',
      answer: 'Yes, we specialize in inherited properties and can help navigate the probate process and paperwork involved.'
    },
    {
      question: 'Do I need repairs?',
      answer: 'No repairs needed! We buy houses in any condition, saving you time and money on costly renovations.'
    },
    {
      question: 'How does the process work?',
      answer: 'Simply contact us, we\'ll evaluate your property, make a fair cash offer, and close on your timeline. It\'s that simple!'
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg">
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-800 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-red-600" size={24} />
                ) : (
                  <ChevronDown className="text-red-600" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;