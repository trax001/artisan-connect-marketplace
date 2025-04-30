
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">{t('termsTitle')}</h1>
        <p className="text-lg mb-8">{t('termsIntro')}</p>

        <div className="prose max-w-none">
          <p>
            Last updated: April 30, 2025
          </p>
          
          <p className="mb-4">
            Please read these Terms of Service carefully before using ArtisanConnect. By accessing or using our website, you agree to be bound by these Terms.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">1. Account Registration</h2>
          <p className="mb-4">
            To access certain features of our website, you may need to register for an account. When registering, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">2. Products and Orders</h2>
          <p className="mb-4">
            2.1. <strong>Product Information:</strong> We strive to accurately display our products, including colors and dimensions. However, we cannot guarantee that your device's display will accurately reflect the actual appearance of the products.
          </p>
          
          <p className="mb-4">
            2.2. <strong>Handcrafted Items:</strong> As our products are handcrafted, each item may have slight variations in color, pattern, or size. These variations are part of the unique character of artisanal products and are not considered defects.
          </p>
          
          <p className="mb-4">
            2.3. <strong>Order Acceptance:</strong> Your order is an offer to buy our product(s). We reserve the right to accept or decline your order for any reason, including product availability, errors in pricing or product information, or suspected fraudulent activity.
          </p>
          
          <p className="mb-4">
            2.4. <strong>Pricing and Payment:</strong> All prices are listed in FCFA (Central African CFA franc) and are subject to change without notice. Payment must be made in full before an order is processed.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">3. Shipping and Delivery</h2>
          <p className="mb-4">
            3.1. <strong>Delivery Times:</strong> Shipping and delivery times are estimates and not guaranteed. Factors outside our control, such as customs processing or local delivery conditions, may cause delays.
          </p>
          
          <p className="mb-4">
            3.2. <strong>Shipping Costs:</strong> Shipping costs are calculated based on destination, weight, and dimensions. These costs are displayed during checkout before payment is required.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">4. Returns and Refunds</h2>
          <p className="mb-4">
            Please refer to our Returns & Exchange Policy for detailed information about our return process, eligible items, and refund procedures.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">5. Intellectual Property</h2>
          <p className="mb-4">
            5.1. <strong>Our Content:</strong> All content on our website, including text, graphics, logos, images, and software, is the property of ArtisanConnect or our artisans and is protected by copyright, trademark, and other intellectual property laws.
          </p>
          
          <p className="mb-4">
            5.2. <strong>Limited License:</strong> We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">6. User Conduct</h2>
          <p className="mb-4">
            You agree not to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Use our website in any way that violates any applicable laws or regulations</li>
            <li>Impersonate another person or entity, or falsely state or misrepresent your affiliation with a person or entity</li>
            <li>Interfere with or disrupt the operation of our website or servers</li>
            <li>Collect or store personal data about other users without their consent</li>
            <li>Use our website to transmit any viruses or other malicious code</li>
          </ul>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">7. Disclaimer of Warranties</h2>
          <p className="mb-4">
            Our website and products are provided "as is" without any warranties, express or implied. To the fullest extent permitted by law, we disclaim all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">8. Limitation of Liability</h2>
          <p className="mb-4">
            To the fullest extent permitted by law, ArtisanConnect shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our website or products.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">9. Changes to Terms</h2>
          <p className="mb-4">
            We may modify these Terms from time to time. The most current version will always be posted on our website. Your continued use of our website after any changes indicates your acceptance of the modified Terms.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">10. Governing Law</h2>
          <p className="mb-4">
            These Terms are governed by and construed in accordance with the laws of Cameroon, without regard to its conflict of law principles.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">11. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul className="list-none pl-0 mb-6">
            <li><strong>Email:</strong> legal@artisanconnect.com</li>
            <li><strong>Address:</strong> 237 Artisan Street, Bamenda, Northwest Region, Cameroon</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Terms;
