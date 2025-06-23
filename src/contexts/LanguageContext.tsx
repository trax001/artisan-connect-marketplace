
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
    faqLink: 'FAQ',
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
    
    // About page translations
    aboutTitle: 'About ArtisanConnect',
    aboutIntro: 'ArtisanConnect is a platform dedicated to connecting talented Cameroonian artisans with customers worldwide. We believe in preserving traditional craftsmanship while providing sustainable livelihoods for local communities.',
    ourMission: 'Our Mission',
    missionText: 'Our mission is to bridge the gap between traditional Cameroonian craftsmanship and the global market, ensuring that artisans receive fair compensation for their exceptional work while preserving cultural heritage for future generations.',
    ourStory: 'Our Story',
    storyText1: 'Founded in 2020, ArtisanConnect emerged from a passion for authentic African craftsmanship and a desire to support local communities. We started by working with just five artisans in the Northwest Region of Cameroon.',
    storyText2: 'Today, we proudly collaborate with over 200 skilled artisans across all regions of Cameroon, offering a diverse range of handcrafted products that showcase the rich cultural heritage of our beautiful country.',
    ourValues: 'Our Values',
    valueAuth: 'Authenticity - Every product tells a genuine story of Cameroonian culture',
    valueSust: 'Sustainability - Supporting eco-friendly practices and materials',
    valueFair: 'Fair Trade - Ensuring artisans receive equitable compensation',
    valueComm: 'Community - Building strong relationships with local communities',
    valueEduc: 'Education - Preserving and sharing traditional crafting techniques',
    ourImpact: 'Our Impact',
    impactText1: 'Since our inception, we have facilitated over 10,000 sales, directly benefiting hundreds of families across Cameroon. Our platform has helped increase artisan incomes by an average of 150%.',
    impactText2: 'We are committed to transparency and regularly share impact reports with our community, showing how every purchase contributes to positive change in Cameroonian communities.',
    
    // Footer translations
    footerTagline: 'Connecting Cameroonian artisans with the world through authentic, handcrafted products.',
    quickLinks: 'Quick Links',
    customerSupport: 'Customer Support',
    subscribeNewsletter: 'Subscribe to Newsletter',
    newsletterDesc: 'Get updates on new products and artisan stories.',
    yourEmail: 'Your email',
    subscribe: 'Subscribe',
    allRightsReserved: 'All rights reserved.',
    shippingTitle: 'Shipping Info',
    returnsTitle: 'Returns',
    privacyTitle: 'Privacy Policy',
    termsTitle: 'Terms of Service',
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
    faqLink: 'FAQ',
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
    
    // About page translations
    aboutTitle: 'À Propos d\'ArtisanConnect',
    aboutIntro: 'ArtisanConnect est une plateforme dédiée à connecter les artisans camerounais talentueux avec des clients du monde entier. Nous croyons en la préservation de l\'artisanat traditionnel tout en fournissant des moyens de subsistance durables aux communautés locales.',
    ourMission: 'Notre Mission',
    missionText: 'Notre mission est de combler le fossé entre l\'artisanat traditionnel camerounais et le marché mondial, en s\'assurant que les artisans reçoivent une compensation équitable pour leur travail exceptionnel tout en préservant le patrimoine culturel pour les générations futures.',
    ourStory: 'Notre Histoire',
    storyText1: 'Fondé en 2020, ArtisanConnect est né d\'une passion pour l\'artisanat africain authentique et d\'un désir de soutenir les communautés locales. Nous avons commencé en travaillant avec seulement cinq artisans dans la région du Nord-Ouest du Cameroun.',
    storyText2: 'Aujourd\'hui, nous collaborons fièrement avec plus de 200 artisans qualifiés à travers toutes les régions du Cameroun, offrant une gamme diversifiée de produits artisanaux qui mettent en valeur le riche patrimoine culturel de notre beau pays.',
    ourValues: 'Nos Valeurs',
    valueAuth: 'Authenticité - Chaque produit raconte une histoire authentique de la culture camerounaise',
    valueSust: 'Durabilité - Soutenir les pratiques et matériaux respectueux de l\'environnement',
    valueFair: 'Commerce Équitable - Assurer une compensation équitable aux artisans',
    valueComm: 'Communauté - Construire des relations solides avec les communautés locales',
    valueEduc: 'Éducation - Préserver et partager les techniques artisanales traditionnelles',
    ourImpact: 'Notre Impact',
    impactText1: 'Depuis notre création, nous avons facilité plus de 10 000 ventes, bénéficiant directement à des centaines de familles à travers le Cameroun. Notre plateforme a aidé à augmenter les revenus des artisans de 150% en moyenne.',
    impactText2: 'Nous nous engageons à la transparence et partageons régulièrement des rapports d\'impact avec notre communauté, montrant comment chaque achat contribue au changement positif dans les communautés camerounaises.',
    
    // Footer translations
    footerTagline: 'Connecter les artisans camerounais avec le monde à travers des produits authentiques faits à la main.',
    quickLinks: 'Liens Rapides',
    customerSupport: 'Support Client',
    subscribeNewsletter: 'S\'abonner à la Newsletter',
    newsletterDesc: 'Recevez des mises à jour sur les nouveaux produits et les histoires d\'artisans.',
    yourEmail: 'Votre email',
    subscribe: 'S\'abonner',
    allRightsReserved: 'Tous droits réservés.',
    shippingTitle: 'Info Livraison',
    returnsTitle: 'Retours',
    privacyTitle: 'Politique de Confidentialité',
    termsTitle: 'Conditions de Service',
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
