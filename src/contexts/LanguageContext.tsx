import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  t: (key: string) => string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  en: {
    home: 'Home',
    shop: 'Shop',
    productDetail: 'Product Detail',
    artisans: 'Artisans',
    artisanProfile: 'Artisan Profile',
    cart: 'Cart',
    blog: 'Blog',
    about: 'About',
    contact: 'Contact',
    account: 'Account',
    notFound: 'Page Not Found',
    ourArtisans: 'Our Artisans',
    artisansIntro: 'Meet the talented artisans behind our unique products. Each piece tells a story of tradition, skill, and passion.',
    productLabel: 'Product',
    price: 'Price',
    quantity: 'Quantity',
    total: 'Total',
    cartEmpty: 'Your cart is empty',
    cartEmptyDescription: 'Looks like you haven\'t added anything to your cart yet.',
    continueShopping: 'Continue Shopping',
    orderSummary: 'Order Summary',
    subtotal: 'Subtotal',
    shippingMethod: 'Shipping Method',
    checkout: 'Checkout',
    paymentOptions: 'Payment Options',
    addToCart: 'Add to Cart',
    cartUpdated: 'Cart Updated',
    quantityUpdated: 'Quantity updated',
    itemRemoved: 'Item Removed',
    itemRemovedFromCart: 'Item removed from cart',
    checkoutStarted: 'Checkout Started',
    redirectingToCheckout: 'Redirecting to checkout...',
    faq: 'FAQ',
    shipping: 'Shipping',
    returns: 'Returns',
    privacy: 'Privacy',
    terms: 'Terms',
    adminDashboard: 'Admin Dashboard',
    
    // Cart-related translations
    itemAdded: 'Item Added',
    itemAddedToCart: 'Item has been added to your cart',
    itemUpdated: 'Item Updated',
    quantityIncreased: 'Quantity increased in cart',
  },
  fr: {
    home: 'Accueil',
    shop: 'Boutique',
    productDetail: 'Détail du Produit',
    artisans: 'Artisans',
    artisanProfile: 'Profil d\'Artisan',
    cart: 'Panier',
    blog: 'Blog',
    about: 'À Propos',
    contact: 'Contact',
    account: 'Compte',
    notFound: 'Page Non Trouvée',
    ourArtisans: 'Nos Artisans',
    artisansIntro: 'Rencontrez les artisans talentueux derrière nos produits uniques. Chaque pièce raconte une histoire de tradition, de compétence et de passion.',
    productLabel: 'Produit',
    price: 'Prix',
    quantity: 'Quantité',
    total: 'Total',
    cartEmpty: 'Votre panier est vide',
    cartEmptyDescription: 'Il semble que vous n\'avez encore rien ajouté à votre panier.',
    continueShopping: 'Continuer les Achats',
    orderSummary: 'Résumé de la Commande',
    subtotal: 'Sous-total',
    shippingMethod: 'Méthode d\'Expédition',
    checkout: 'Paiement',
    paymentOptions: 'Options de Paiement',
    addToCart: 'Ajouter au Panier',
    cartUpdated: 'Panier Mis à Jour',
    quantityUpdated: 'Quantité mise à jour',
    itemRemoved: 'Article Supprimé',
    itemRemovedFromCart: 'Article supprimé du panier',
    checkoutStarted: 'Paiement Démaré',
    redirectingToCheckout: 'Redirection vers le paiement...',
    faq: 'FAQ',
    shipping: 'Livraison',
    returns: 'Retours',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    adminDashboard: 'Tableau de Bord Admin',
    
    // Cart-related translations
    itemAdded: 'Article Ajouté',
    itemAddedToCart: 'L\'article a été ajouté à votre panier',
    itemUpdated: 'Article Mis à Jour',
    quantityIncreased: 'Quantité augmentée dans le panier',
  },
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
