
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Shipping = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">{t('shippingTitle')}</h1>
        <p className="text-lg mb-8">{t('shippingIntro')}</p>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-medium mt-8 mb-4">Domestic Shipping (Within Cameroon)</h2>
          <p>
            We offer the following shipping options within Cameroon:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <strong>Standard Shipping (3-5 business days):</strong> 5,000 FCFA
            </li>
            <li>
              <strong>Express Shipping (1-2 business days):</strong> 10,000 FCFA
            </li>
            <li>
              <strong>Free Shipping:</strong> Available on orders over 50,000 FCFA
            </li>
          </ul>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">International Shipping</h2>
          <p>
            We ship to most countries worldwide. International shipping rates are calculated based on:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Destination country</li>
            <li>Package weight and dimensions</li>
            <li>Shipping method selected</li>
          </ul>
          
          <p className="mb-4">
            Estimated international shipping costs:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <strong>West Africa:</strong> 15,000 - 25,000 FCFA (10-15 business days)
            </li>
            <li>
              <strong>Europe:</strong> 30,000 - 45,000 FCFA (14-21 business days)
            </li>
            <li>
              <strong>North America:</strong> 35,000 - 50,000 FCFA (14-21 business days)
            </li>
            <li>
              <strong>Asia:</strong> 40,000 - 55,000 FCFA (15-25 business days)
            </li>
            <li>
              <strong>Australia/Oceania:</strong> 45,000 - 60,000 FCFA (18-25 business days)
            </li>
          </ul>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">Customs & Import Duties</h2>
          <p>
            International orders may be subject to import duties and taxes levied by the destination country. These charges are the responsibility of the recipient and are not included in our shipping rates. We recommend contacting your local customs office for more information before placing your order.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">Order Tracking</h2>
          <p>
            Once your order has been dispatched, you will receive a confirmation email with tracking information. You can use this tracking number to monitor the progress of your shipment on our website or through the courier's tracking portal.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">Shipping Delays</h2>
          <p>
            While we strive to deliver within the estimated timeframes, occasional delays may occur due to factors beyond our control, such as:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Customs inspections</li>
            <li>Weather conditions</li>
            <li>Local holidays</li>
            <li>Transportation disruptions</li>
          </ul>
          
          <p>
            We appreciate your understanding and patience in such circumstances. If you have concerns about your shipment, please contact our customer support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
