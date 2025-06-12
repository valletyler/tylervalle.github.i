import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeHelp from './components/WhoWeHelp';
import HowItWorks from './components/HowItWorks';
import QuickOffer from './components/QuickOffer';
import WhySellToUs from './components/WhySellToUs';
import SellingOptions from './components/SellingOptions';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms'>('home');

  if (currentView === 'privacy') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <PrivacyPolicy />
        <button 
          onClick={() => setCurrentView('home')}
          className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors z-50"
        >
          Back to Home
        </button>
        <Footer />
      </div>
    );
  }

  if (currentView === 'terms') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <TermsOfService />
        <button 
          onClick={() => setCurrentView('home')}
          className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors z-50"
        >
          Back to Home
        </button>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhoWeHelp />
      <HowItWorks />
      <QuickOffer />
      <WhySellToUs />
      <SellingOptions />
      <FAQ />
      <Testimonials />
      <ContactForm />
      <Footer />
      
      {/* Hidden elements for privacy and terms links */}
      <div style={{ display: 'none' }}>
        <div id="privacy-trigger" onClick={() => setCurrentView('privacy')}></div>
        <div id="terms-trigger" onClick={() => setCurrentView('terms')}></div>
      </div>
    </div>
  );
}

// Add click handlers for privacy and terms links
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.getAttribute('href') === '#privacy') {
      e.preventDefault();
      (document.getElementById('privacy-trigger') as HTMLElement)?.click();
    }
    if (target.getAttribute('href') === '#terms') {
      e.preventDefault();
      (document.getElementById('terms-trigger') as HTMLElement)?.click();
    }
  });
});

export default App;