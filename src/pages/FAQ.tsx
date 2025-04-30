
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();

  // FAQ questions and answers
  const faqItems = [
    {
      question: "How can I track my order?",
      answer: "Once your order is dispatched, you'll receive a tracking number via email. You can use this number to track your package on our website or directly through the courier's website."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including major credit cards (Visa, MasterCard), PayPal, and mobile money options like MTN Mobile Money and Orange Money."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary depending on your location. Domestic shipping within Cameroon typically takes 3-5 business days. International shipping can take 10-21 business days, depending on the destination country and customs processing."
    },
    {
      question: "Are your products handmade?",
      answer: "Yes, all our products are authentically handcrafted by skilled artisans in Cameroon. Each piece is unique and may have slight variations, which is a characteristic of handmade items."
    },
    {
      question: "How do I know which size to order?",
      answer: "Each product page includes detailed dimensions and size information. If you need additional guidance, please contact our customer support team who can provide specific recommendations based on your needs."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can calculate shipping costs at checkout before completing your purchase."
    },
    {
      question: "How do I care for my artisanal products?",
      answer: "Care instructions vary depending on the product material. Each item comes with specific care instructions. Generally, handcrafted items should be handled with care, kept away from direct sunlight for prolonged periods, and cleaned gently."
    },
    {
      question: "Can I customize an order?",
      answer: "Yes, we offer customization for many of our products. Please contact us directly with your specific requirements, and we'll connect you with the appropriate artisan to discuss possibilities and pricing."
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">{t('faqTitle')}</h1>
        <p className="text-lg mb-8">{t('faqIntro')}</p>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-muted pb-6">
              <h3 className="font-medium text-lg mb-2">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
