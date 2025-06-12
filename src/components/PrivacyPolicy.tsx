import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div id="privacy" className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose max-w-none">
        <p className="mb-6">
          <strong>Effective Date:</strong> January 1, 2023
        </p>

        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
        <p className="mb-6">
          We collect information you provide directly to us, such as when you create an account, make a purchase, subscribe to our newsletter, or contact us for support. This may include your name, email address, postal address, phone number, and payment information.
        </p>

        <h2 className="text-2xl font-bold mb-4">SMS/Text Messaging</h2>
        <p className="mb-6">
          By providing your mobile phone number and opting in to receive text messages, you expressly consent to receive automated marketing text messages from TV Real Estate Partners and our affiliates. You understand that:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Consent is not a condition of purchase</li>
          <li>Message and data rates may apply</li>
          <li>Message frequency varies based on your interaction and preferences</li>
          <li>You can opt out at any time by replying STOP to any message</li>
          <li>You can get help by replying HELP to any message</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
        <p className="mb-6">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send you technical notices, updates, security alerts, and support messages</li>
          <li>Respond to your comments, questions, and customer service requests</li>
          <li>Communicate with you about products, services, offers, and events</li>
          <li>Monitor and analyze trends, usage, and activities</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
        <p className="mb-6">
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy or as required by law.
        </p>

        <h2 className="text-2xl font-bold mb-4">Data Security</h2>
        <p className="mb-6">
          We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-6">
          If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;