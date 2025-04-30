
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">{t('privacyTitle')}</h1>
        <p className="text-lg mb-8">{t('privacyIntro')}</p>

        <div className="prose max-w-none">
          <p>
            Last updated: April 30, 2025
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us, such as when you create an account, place an order, contact customer service, or subscribe to our newsletter.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Personal Information</h3>
          <p className="mb-4">
            This may include:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Contact information (name, email address, phone number, shipping address)</li>
            <li>Account credentials (username, password)</li>
            <li>Payment information (handled securely through our payment processors)</li>
            <li>Order history and preferences</li>
            <li>Communications with our customer service team</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Automatically Collected Information</h3>
          <p className="mb-4">
            When you visit our website, we may automatically collect certain information, including:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Device information (browser type, operating system)</li>
            <li>IP address</li>
            <li>Browsing activity on our website</li>
            <li>Cookies and similar technologies</li>
          </ul>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Process and fulfill your orders</li>
            <li>Manage your account and provide customer support</li>
            <li>Send you transaction confirmations and order updates</li>
            <li>Communicate with you about products, services, promotions, and events</li>
            <li>Personalize your experience and provide content recommendations</li>
            <li>Improve our website and services</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">Sharing Your Information</h2>
          <p className="mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Service providers:</strong> Companies that help us operate our business (payment processors, shipping carriers, marketing partners)</li>
            <li><strong>Artisans:</strong> To fulfill custom orders or provide direct communication between you and the artisan</li>
            <li><strong>Legal authorities:</strong> When required by law or to protect our rights</li>
          </ul>
          
          <p className="mb-4">
            We do not sell your personal information to third parties.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">Your Rights and Choices</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Accessing, correcting, or deleting your personal information</li>
            <li>Withdrawing your consent</li>
            <li>Objecting to or restricting certain processing of your information</li>
            <li>Requesting portability of your information</li>
          </ul>
          
          <p className="mb-4">
            To exercise these rights, please contact us at privacy@artisanconnect.com.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal information. However, no security system is impenetrable, and we cannot guarantee the absolute security of your information.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. If we make significant changes, we will notify you by email or by posting a notice on our website.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about our Privacy Policy, please contact us at:
          </p>
          <ul className="list-none pl-0 mb-6">
            <li><strong>Email:</strong> privacy@artisanconnect.com</li>
            <li><strong>Address:</strong> 237 Artisan Street, Bamenda, Northwest Region, Cameroon</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
