
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Returns = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">{t('returnsTitle')}</h1>
        <p className="text-lg mb-8">{t('returnsIntro')}</p>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-medium mt-8 mb-4">Return Policy</h2>
          <p>
            We want you to be completely satisfied with your purchase. If you're not entirely happy with your order, we're here to help.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Eligible Items</h3>
          <p>
            You may return most new, unused items within 30 days of delivery for a full refund of the item price (excluding shipping costs).
          </p>
          
          <p className="mb-4">
            Please note that the following items are not eligible for returns:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Custom or personalized orders</li>
            <li>Items marked as final sale</li>
            <li>Personal care items (for hygiene reasons)</li>
            <li>Items damaged through customer misuse</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Return Process</h3>
          <ol className="list-decimal pl-6 mb-6">
            <li>Contact our customer service team at returns@artisanconnect.com to initiate a return.</li>
            <li>Include your order number and the reason for the return in your email.</li>
            <li>Once approved, we will provide you with a return shipping label and instructions.</li>
            <li>Package the item securely in its original packaging if possible.</li>
            <li>Ship the item back to us using the provided return label.</li>
            <li>Once we receive and inspect the returned item, we will process your refund.</li>
          </ol>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Refunds</h3>
          <p>
            After we receive and inspect the returned item, we will notify you of the approval or rejection of your refund.
          </p>
          <p className="mb-4">
            If approved, your refund will be processed, and a credit will be automatically applied to your original method of payment within 7-14 business days, depending on your payment provider's policies.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">Exchanges</h2>
          <p className="mb-4">
            If you received a defective or damaged item, or if you wish to exchange an item for a different size or color, please contact our customer service team within 14 days of receiving your order.
          </p>
          
          <p className="mb-4">
            For exchanges, we will guide you through the process, which may include:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Sending photos of the defective/damaged item</li>
            <li>Returning the original item (we will cover return shipping for defective or incorrectly sent items)</li>
            <li>Selecting a replacement item</li>
          </ul>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">Damaged or Defective Items</h2>
          <p>
            If you receive a damaged or defective item, please contact us within 48 hours of delivery. We will work with you to resolve the issue promptly, which may include replacement, repair, or refund.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">Contact Information</h2>
          <p>
            For any questions or concerns about returns, exchanges, or refunds, please contact our customer service team:
          </p>
          <ul className="list-none pl-0 mb-6">
            <li><strong>Email:</strong> returns@artisanconnect.com</li>
            <li><strong>Phone:</strong> +237 654 321 987</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Returns;
