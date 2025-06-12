import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Home,
  DollarSign,
  Users,
  Clock,
  Shield,
  FileText,
  CheckCircle,
  Star,
  ChevronDown,
  ChevronUp,
  Play
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    consent: false
  });
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Home className="w-8 h-8 text-red-600" />,
      title: "Divorce",
      description: "Navigate property division during divorce proceedings with expert guidance."
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "Inheritance",
      description: "Handle inherited properties with care and maximize their value."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Foreclosure",
      description: "Stop foreclosure proceedings and protect your home investment."
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      title: "Downsizing",
      description: "Transition to a smaller home while maximizing your current property's value."
    },
    {
      icon: <FileText className="w-8 h-8 text-red-600" />,
      title: "Bankruptcy",
      description: "Navigate bankruptcy proceedings while protecting your real estate assets."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-red-600" />,
      title: "Relocation",
      description: "Relocate quickly with our fast home buying and selling services."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-red-600" />,
      title: "Cash Buyers",
      description: "Connect with verified cash buyers for quick, hassle-free transactions."
    },
    {
      icon: <Home className="w-8 h-8 text-red-600" />,
      title: "Behind on Payments",
      description: "Get help when you're behind on mortgage payments before it's too late."
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "Inherited Land",
      description: "Turn inherited land into cash with our specialized buying services."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Submit Your Address",
      description: "Enter your property details to get started with our quick evaluation process."
    },
    {
      number: "02",
      title: "Let Us Know When You're At",
      description: "Tell us your timeline and specific situation so we can tailor our approach."
    },
    {
      number: "03",
      title: "Receive Your Fair Offer",
      description: "Get a competitive cash offer based on current market conditions."
    },
    {
      number: "04",
      title: "Close The Deal",
      description: "Complete the sale quickly with our streamlined closing process."
    }
  ];

  const whySellReasons = [
    "Fair & Fast Market Value Offers",
    "No Broker Fees to Pay",
    "We'll Buy in Any Condition",
    "Flexible & Fast Closing",
    "Ready For Any Project",
    "No Games, No Tricks, No Middleman"
  ];

  const sellingOptions = [
    {
      title: "OPTION A - TRADITIONAL SALE",
      points: [
        "List with a real estate agent",
        "Multiple showings over days/weeks and wait",
        "Repair requirements",
        "Potential buyer financing (may fall through)",
        "Close after process takes 30-60+ days",
        "More hassle but potentially more cash at closing"
      ]
    },
    {
      title: "OPTION B - SELL TO A CASH INVESTOR",
      points: [
        "No real estate agent required",
        "Quick, clean process with less waiting time",
        "No repairs needed (we buy as-is condition)",
        "Guaranteed cash offer with no financing contingencies & definite close",
        "Less potential complications less cash at closing"
      ]
    }
  ];

  const faqs = [
    {
      question: "Do you charge any fees or commissions?",
      answer: "No, we don't charge any fees or commissions. Our service is completely free to homeowners."
    },
    {
      question: "How is the offer calculated?",
      answer: "Our offers are based on current market conditions, property condition, and local comparable sales."
    },
    {
      question: "Do I need to clean or repair anything?",
      answer: "No, we buy houses in any condition. You don't need to make any repairs or clean anything."
    },
    {
      question: "How long does the process take?",
      answer: "We can close in as little as 7 days, or on your timeline - whatever works best for you."
    },
    {
      question: "What if I'm behind on payments?",
      answer: "We can help even if you're behind on payments. Contact us to discuss your specific situation."
    },
    {
      question: "Do you buy in any area?",
      answer: "We buy houses throughout the region. Contact us to confirm we service your area."
    },
    {
      question: "What types of properties do you buy?",
      answer: "We buy all types of residential properties including single-family homes, condos, townhomes, and multi-family properties."
    },
    {
      question: "Is there any obligation?",
      answer: "No obligation whatsoever. Get your free offer and decide if it's right for you."
    },
    {
      question: "How do I get started?",
      answer: "Simply fill out our form or give us a call. We'll schedule a time to see your property and provide an offer."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Working with TV Real Estate was a game changer! I needed to sell quickly due to a job relocation, and they made it happen in just 10 days. Professional, honest, and fair pricing. I couldn't be happier with the service!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      text: "I was skeptical at first, but TV Real Estate exceeded all my expectations. They bought my house as-is, no repairs needed, and closed exactly when they said they would. Highly recommend!",
      rating: 5
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please provide consent to receive communications.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-white">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
                <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center font-bold text-lg mr-3">
                  TV
                </div>
                <span className="text-xl font-bold text-gray-900">REAL ESTATE</span>
              </div>
              <button 
                onClick={() => setCurrentPage('home')}
                className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, such as when you fill out our contact form, 
              request a property evaluation, or communicate with us via phone, email, or text message.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A2P 10DLC Compliance</h2>
            <p className="text-gray-700 mb-4">
              By providing your phone number and consenting to receive communications, you agree to receive 
              text messages from TV Real Estate regarding your property inquiry and related services. 
              Message and data rates may apply. Message frequency varies.
            </p>
            <p className="text-gray-700 mb-4">
              You can opt out at any time by replying STOP to any text message. For help, reply HELP. 
              We use Application-to-Person (A2P) messaging through registered 10-digit long code (10DLC) 
              numbers in compliance with carrier requirements and TCPA regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Provide property evaluations and purchase offers</li>
              <li>Communicate with you about your property and our services</li>
              <li>Send you updates about the selling process</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy or as required by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Text Message Terms</h2>
            <p className="text-gray-700 mb-4">
              By consenting to receive text messages, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>You are the subscriber or authorized user of the provided phone number</li>
              <li>Standard message and data rates apply</li>
              <li>We may send you informational and promotional messages</li>
              <li>You can opt out by texting STOP at any time</li>
              <li>Carriers are not liable for delayed or undelivered messages</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: info@tvrealestate.com<br />
              Phone: (555) 291-8000<br />
              Address: 123 Real Estate Blvd, Your City, State 12345
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-white">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
                <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center font-bold text-lg mr-3">
                  TV
                </div>
                <span className="text-xl font-bold text-gray-900">REAL ESTATE</span>
              </div>
              <button 
                onClick={() => setCurrentPage('home')}
                className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By using our website and services, you agree to be bound by these Terms and Conditions. 
              If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SMS/Text Messaging Terms</h2>
            <p className="text-gray-700 mb-4">
              By providing your mobile phone number and checking the consent box, you expressly consent 
              to receive text messages from TV Real Estate at the number provided. This consent is not 
              required as a condition of purchase.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Message Details:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>You may receive up to 10 messages per month</li>
              <li>Messages may include property updates, appointment reminders, and promotional offers</li>
              <li>Message and data rates may apply</li>
              <li>Delivery is subject to carrier limitations and network availability</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Opt-Out Instructions</h2>
            <p className="text-gray-700 mb-4">
              You may opt out of receiving text messages at any time by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Replying STOP to any text message</li>
              <li>Calling us at (555) 291-8000</li>
              <li>Emailing us at info@tvrealestate.com</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">TCPA Compliance</h2>
            <p className="text-gray-700 mb-4">
              We comply with the Telephone Consumer Protection Act (TCPA) and all applicable regulations. 
              By providing your phone number and consent, you certify that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>You are the subscriber or authorized user of the phone number provided</li>
              <li>You consent to receive autodialed and/or prerecorded calls and text messages</li>
              <li>You understand that consent is not required for purchase</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Property Evaluation Services</h2>
            <p className="text-gray-700 mb-4">
              Our property evaluation and purchase offers are provided for informational purposes. 
              All offers are subject to property inspection and verification of information provided.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              TV Real Estate shall not be liable for any indirect, incidental, special, or consequential 
              damages arising from the use of our services or website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms and Conditions:
            </p>
            <p className="text-gray-700">
              TV Real Estate<br />
              123 Real Estate Blvd<br />
              Your City, State 12345<br />
              Phone: (555) 291-8000<br />
              Email: info@tvrealestate.com
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center font-bold text-lg mr-3">
                TV
              </div>
              <span className="text-xl font-bold text-gray-900">REAL ESTATE</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <span className="text-red-600 font-medium">(555) 291-8000</span>
              {['Home', 'Why Sell Fast', 'How It Works', 'Who We Help', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition-colors">
                Get Cash Offer
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {['Home', 'Why Sell Fast', 'How It Works', 'Who We Help', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-gray-700 hover:text-red-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition-colors">
                Get Cash Offer
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-black opacity-60"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 pt-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Easiest Way To Sell Your House
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Fair, No Pressure Cash Offers
          </p>
          <button className="bg-red-600 text-white px-8 py-4 rounded font-semibold hover:bg-red-700 transition-all transform hover:scale-105 text-lg">
            Get Cash Offer
          </button>
        </div>
      </section>

      {/* Who We Help Section */}
      <section id="who-we-help" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Help</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Real Estate Group, we work with home sellers in various life situations and circumstances. We buy single-family homes, multi-family homes, condos, and vacant land. We provide solutions for people going through difficult situations such as:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our process is simple and straightforward. We make selling your house as easy as possible with our 4-step process.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sold House"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Receive Your Quick, Obligation-Free Offer</h2>
          <p className="text-lg mb-8">It only takes 2 minutes to get your cash offer, so get started!</p>
          <button className="bg-red-600 text-white px-8 py-4 rounded font-semibold hover:bg-red-700 transition-colors text-lg">
            Get My Cash Offer Now
          </button>
        </div>
      </section>

      {/* Why Sell to Us Section */}
      <section id="why-sell-fast" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Sell to Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whySellReasons.map((reason, index) => (
              <div key={index} className="flex items-center">
                <div className="text-red-600 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selling Options Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Selling Options To Consider</h2>
            <p className="text-lg text-red-600 font-semibold">
              Take advantage of the cash option you have in your current selling situation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sellingOptions.map((option, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{option.title}</h3>
                <ul className="space-y-3">
                  {option.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-700 rounded-lg">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                >
                  <span className="font-semibold">{faq.question}</span>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">OUR CLIENT</h2>
            <h3 className="text-3xl font-bold text-red-600 mb-8">TESTIMONIAL</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="font-bold">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <button className="bg-red-600 text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors text-xl mb-8">
              Sell Your Home Now!
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Property Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                placeholder="Tell us about your property and situation..."
              />
            </div>

            {/* A2P Compliant Consent Checkbox */}
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 mr-3 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  required
                />
                <label className="text-sm text-gray-300">
                  <span className="font-semibold text-white">CONSENT TO RECEIVE TEXT MESSAGES:</span> By checking this box and providing my phone number, I consent to receive text messages from TV Real Estate regarding my property inquiry and related services. I understand that:
                  <ul className="mt-2 ml-4 list-disc text-xs space-y-1">
                    <li>Message and data rates may apply</li>
                    <li>Message frequency varies but will not exceed 10 messages per month</li>
                    <li>I can opt out at any time by replying STOP to any text message</li>
                    <li>This consent is not required as a condition of purchase</li>
                    <li>For help, I can reply HELP or call (555) 291-8000</li>
                  </ul>
                  <span className="block mt-2 text-xs">
                    By providing consent, I acknowledge that I am the subscriber or authorized user of the phone number provided and agree to receive autodialed and/or prerecorded messages. See our{' '}
                    <button 
                      type="button"
                      onClick={() => setCurrentPage('privacy')}
                      className="text-red-400 hover:text-red-300 underline"
                    >
                      Privacy Policy
                    </button>
                    {' '}and{' '}
                    <button 
                      type="button"
                      onClick={() => setCurrentPage('terms')}
                      className="text-red-400 hover:text-red-300 underline"
                    >
                      Terms & Conditions
                    </button>
                    {' '}for more information.
                  </span>
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-red-600 text-white px-6 py-4 rounded font-bold hover:bg-red-700 transition-colors text-lg"
            >
              Submit Form
            </button>
          </form>

          {/* Agent Info */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gray-800 p-6 rounded-lg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Real Estate Investor"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Real Estate Investor</h3>
              <div className="text-gray-300 space-y-1">
                <p>TV Real Estate Investing LLC</p>
                <p>123 Business Parkway Suite A</p>
                <p>Your City, State 12345</p>
                <p className="font-semibold text-red-400">(555) 291-8000</p>
                <p>info@tvrealestate.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Copyright © 2024 tvhomeoffers.com All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <button 
              onClick={() => setCurrentPage('privacy')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-gray-600">|</span>
            <button 
              onClick={() => setCurrentPage('terms')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;