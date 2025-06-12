import React from 'react';

const TermsOfService = () => {
  return (
    <div id="terms" className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose max-w-none">
        <p className="mb-6">
          <strong>Effective Date:</strong> January 1, 2023
        </p>

        <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing and using the services provided by TV Real Estate Partners LLC ("Company," "we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className="text-2xl font-bold mb-4">SMS/Text Messaging Terms</h2>
        <p className="mb-6">
          By providing your mobile phone number and consenting to receive text messages, you agree to the following:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>You will receive automated marketing text messages from TV Real Estate Partners and affiliated companies</li>
          <li>Message frequency may vary and depends on your interaction and preferences</li>
          <li>Message and data rates may apply according to your mobile carrier's plan</li>
          <li>We use industry-standard security measures to protect your information</li>
          <li>You can opt out at any time by texting STOP to any message from us</li>
          <li>You can request help by texting HELP to any message from us</li>
          <li>Your consent is not required as a condition of purchasing any goods or services</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Service Description</h2>
        <p className="mb-6">
          TV Real Estate Partners provides real estate investment services, including but not limited to:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Property evaluation and cash offers</li>
          <li>Real estate consultation services</li>
          <li>Property acquisition and disposition</li>
          <li>Investment property analysis</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
        <p className="mb-6">
          You agree to:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Provide accurate and complete information</li>
          <li>Maintain the confidentiality of any account information</li>
          <li>Use our services only for lawful purposes</li>
          <li>Not interfere with or disrupt our services</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
        <p className="mb-6">
          In no event shall TV Real Estate Partners be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
        </p>

        <h2 className="text-2xl font-bold mb-4">TCPA Compliance</h2>
        <p className="mb-6">
          We comply with the Telephone Consumer Protection Act (TCPA) and all applicable federal and state regulations regarding automated communications. Our A2P (Application-to-Person) messaging practices include:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Express written consent before sending automated messages</li>
          <li>Clear opt-out mechanisms in every message</li>
          <li>Proper message identification and contact information</li>
          <li>Compliance with carrier guidelines and regulations</li>
          <li>Regular auditing of messaging practices</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
        <p className="mb-6">
          These terms shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="mb-6">
          For questions about these Terms of Service, please contact us at:
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>TV Real Estate Partners LLC</strong></p>
          <p>68 Executive Park South Ste 3</p>
          <p>Atlanta, GA 30329</p>
          <p>Phone: (704) 361-9336</p>
          <p>Email: info@tvhomeoffers.com</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;