
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Translation dictionary
const translations = {
  en: {
    // Navigation
    home: 'Home',
    shop: 'Shop',
    artisans: 'Artisans',
    blog: 'Blog',
    about: 'About',
    contact: 'Contact',
    account: 'Account',
    search: 'Search',
    cart: 'Your Cart',
    cartEmpty: 'Your cart is empty',
    cartEmptyDescription: 'Looks like you haven\'t added any items to your cart yet.',
    continueShopping: 'Continue Shopping',
    productLabel: 'Product',
    price: 'Price',
    quantity: 'Quantity',
    total: 'Total',
    orderSummary: 'Order Summary',
    subtotal: 'Subtotal',
    shippingMethod: 'Shipping Method',
    checkout: 'Checkout',
    paymentOptions: 'Payment Options',
    cartUpdated: 'Cart Updated',
    quantityUpdated: 'Quantity has been updated',
    itemRemoved: 'Item Removed',
    itemRemovedFromCart: 'Item has been removed from cart',
    checkoutStarted: 'Checkout Started',
    redirectingToCheckout: 'Redirecting to checkout...',
    
    // Home page
    heroTitle: 'Discover Authentic Cameroonian Craftsmanship',
    heroSubtitle: 'Supporting local artisans while bringing unique handcrafted treasures to your home',
    exploreShop: 'Explore Shop',
    meetArtisans: 'Meet Artisans',
    heroImageAlt: 'Handcrafted basket from Cameroon',
    featuredProducts: 'Featured Products',
    productAlt: 'Handcrafted product from Cameroon',
    basketTitle: 'Hand-woven Bamboo Basket',
    basketDesc: 'Traditional basket handcrafted by skilled artisans',
    maskTitle: 'Carved Wooden Mask',
    maskDesc: 'Authentic ceremonial mask with cultural significance',
    fabricTitle: 'Indigo Dyed Fabric',
    fabricDesc: 'Handmade textile using traditional dyeing methods',
    jewelryTitle: 'Beaded Necklace',
    jewelryDesc: 'Intricate beadwork from Northwestern artisans',
    viewDetails: 'View Details',
    featuredArtisans: 'Featured Artisans',
    artisanAlt: 'Portrait of an artisan from Cameroon',
    basketWeaver: 'Basket Weaver',
    woodCarver: 'Wood Carver',
    textileArtist: 'Textile Artist',
    viewProfile: 'View Profile',
    culturalHeritage: 'Preserving Cultural Heritage',
    culturalDesc1: 'Each product tells a story of tradition and skill passed down through generations of Cameroonian artisans.',
    culturalDesc2: 'By supporting these craftspeople, you help preserve invaluable cultural practices and provide sustainable livelihoods.',
    culturalAlt: 'Artisan working on traditional craft',
    learnMore: 'Learn More',
    
    // Product card
    addToCart: 'Add to cart',
    product: 'product',
    products: 'products',
    
    // Footer
    footerTagline: 'Empowering rural artisans in Cameroon by connecting them to global markets and preserving cultural craftsmanship.',
    quickLinks: 'Quick Links',
    customerSupport: 'Customer Support',
    subscribeNewsletter: 'Subscribe to our Newsletter',
    newsletterDesc: 'Stay updated with new artisans, products, and cultural stories.',
    yourEmail: 'Your email address',
    subscribe: 'Subscribe',
    allRightsReserved: 'All rights reserved.',
    faqLink: 'FAQ',
    
    // Shop page
    title: "Explore Handcrafted Treasures",
    subtitle: "Discover unique artisanal products from Cameroon's skilled craftspeople, each item telling a story of cultural heritage and exceptional skill.",
    filters: "Filters",
    showing: "Showing",
    searchPlaceholder: "Search products...",
    sortBy: "Sort by",
    featured: "Featured",
    priceLow: "Price: Low to High",
    priceHigh: "Price: High to Low",
    newest: "Newest",
    category: "Category",
    priceRange: "Price Range",
    region: "Region",
    reset: "Reset",
    applyFilters: "Apply Filters",
    noProductsMatch: "No products match your filters",
    adjustSearch: "Try adjusting your search or filter criteria",
    resetAllFilters: "Reset All Filters",
    
    // About page
    aboutTitle: "About ArtisanConnect",
    aboutIntro: "ArtisanConnect is a platform dedicated to connecting skilled artisans from Cameroon with customers worldwide who appreciate handcrafted, authentic goods.",
    ourMission: "Our Mission",
    missionText: "Our mission is to preserve and promote traditional Cameroonian crafts while providing sustainable income opportunities for talented artisans. We believe in fair trade practices and ensuring that the makers behind our beautiful products receive proper compensation for their skills and creativity.",
    ourStory: "Our Story",
    storyText1: "ArtisanConnect began in 2023 when our founder, Elizabeth Nkongho, recognized the challenges faced by talented craftspeople in her home country of Cameroon. Despite creating beautiful, high-quality products, many artisans struggled to reach markets beyond their local communities.",
    storyText2: "After visiting numerous villages and meeting with basket weavers, wood carvers, textile artists, and potters, Elizabeth was inspired to create a platform that would showcase their extraordinary skills to the world. ArtisanConnect was born out of a desire to bridge the gap between these gifted creators and global consumers who value authenticity, craftsmanship, and cultural heritage.",
    ourValues: "Our Values",
    valueAuth: "Authenticity: We celebrate and preserve traditional crafting techniques and cultural heritage.",
    valueSust: "Sustainability: We promote environmentally friendly practices and the use of locally sourced materials.",
    valueFair: "Fair Trade: We ensure artisans receive fair compensation for their work and skills.",
    valueComm: "Community: We foster connections between makers and consumers, creating a global community that values craftsmanship.",
    valueEduc: "Education: We share the stories behind the crafts, helping customers understand the cultural significance and skill involved in each piece.",
    ourImpact: "Our Impact",
    impactText1: "Since our founding, ArtisanConnect has worked with over 50 artisans across Cameroon, helping them reach customers in 25 countries worldwide. Through our platform, many craftspeople have been able to significantly increase their incomes, invest in their workshops, train apprentices, and contribute to their local economies.",
    impactText2: "We're proud to play a part in preserving cultural traditions while creating sustainable livelihoods for talented individuals who might otherwise be forced to abandon their crafts in search of other employment opportunities.",
    
    // Contact page
    contactTitle: "Contact Us",
    contactIntro: "We'd love to hear from you. Whether you have questions about our artisans, products, or services, our team is here to help.",
    email: "Email",
    phone: "Phone",
    address: "Address",
    hours: "Hours",
    name: "Name",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    messageSent: "Message sent",
    thanksMessage: "Thank you for your message. We will get back to you soon.",
    
    // Footer pages
    faqTitle: "Frequently Asked Questions",
    faqIntro: "Find answers to commonly asked questions about ArtisanConnect, our products, and services.",
    shippingTitle: "Shipping Policy",
    shippingIntro: "Learn about our shipping options, delivery times, and costs for domestic and international orders.",
    returnsTitle: "Returns & Exchanges",
    returnsIntro: "Information about our policies regarding returns, exchanges, and refunds.",
    privacyTitle: "Privacy Policy",
    privacyIntro: "How we collect, use, and protect your personal information when you use our website.",
    termsTitle: "Terms of Service",
    termsIntro: "The rules, guidelines, and agreements you accept when using ArtisanConnect.",

    // Artisans page
    ourArtisans: "Our Artisans",
    artisansIntro: "Meet the talented craftspeople behind our beautiful products. Each artisan brings years of experience and cultural heritage to their work.",

    // Admin Dashboard
    adminDashboard: "Admin Dashboard",
    overview: "Overview",
    ordersTab: "Orders",
    productsTab: "Products",
    customersTab: "Customers",
    analytics: "Analytics",
    totalOrders: "Total Orders",
    totalProducts: "Total Products",
    totalCustomers: "Total Customers",
    revenue: "Revenue",
    recentOrders: "Recent Orders",
    orderId: "Order ID",
    customer: "Customer",
    status: "Status",
    amount: "Amount",
    date: "Date",
    actions: "Actions",
    viewOrder: "View",
    pending: "Pending",
    processing: "Processing",
    shipped: "Shipped",
    delivered: "Delivered",
    productName: "Product Name",
    stock: "Stock",
    categoryLabel: "Category",
    manage: "Manage",
    inStock: "In Stock",
    lowStock: "Low Stock",
    outOfStock: "Out of Stock",
    customerName: "Customer Name",
    orders: "Orders",
    totalSpent: "Total Spent",
    lastOrder: "Last Order",
    viewCustomer: "View",
    salesOverview: "Sales Overview",
    topProducts: "Top Products",
    sales: "Sales"
  },
  fr: {
    // Navigation
    home: 'Accueil',
    shop: 'Boutique',
    artisans: 'Artisans',
    blog: 'Blog',
    about: 'À propos',
    contact: 'Contact',
    account: 'Compte',
    search: 'Rechercher',
    cart: 'Votre Panier',
    cartEmpty: 'Votre panier est vide',
    cartEmptyDescription: 'Il semble que vous n\'ayez encore ajouté aucun article à votre panier.',
    continueShopping: 'Continuer les Achats',
    productLabel: 'Produit',
    price: 'Prix',
    quantity: 'Quantité',
    total: 'Total',
    orderSummary: 'Résumé de Commande',
    subtotal: 'Sous-total',
    shippingMethod: 'Méthode de Livraison',
    checkout: 'Commander',
    paymentOptions: 'Options de Paiement',
    cartUpdated: 'Panier Mis à Jour',
    quantityUpdated: 'La quantité a été mise à jour',
    itemRemoved: 'Article Supprimé',
    itemRemovedFromCart: 'L\'article a été supprimé du panier',
    checkoutStarted: 'Commande Initiée',
    redirectingToCheckout: 'Redirection vers la commande...',
    
    // Home page
    heroTitle: 'Découvrez l\'Artisanat Authentique du Cameroun',
    heroSubtitle: 'Soutenir les artisans locaux tout en apportant des trésors uniques faits à la main chez vous',
    exploreShop: 'Explorer la Boutique',
    meetArtisans: 'Rencontrer les Artisans',
    heroImageAlt: 'Panier artisanal du Cameroun',
    featuredProducts: 'Produits en Vedette',
    productAlt: 'Produit artisanal du Cameroun',
    basketTitle: 'Panier en Bambou Tressé',
    basketDesc: 'Panier traditionnel fabriqué par des artisans qualifiés',
    maskTitle: 'Masque en Bois Sculpté',
    maskDesc: 'Masque cérémonial authentique à signification culturelle',
    fabricTitle: 'Tissu Teint à l\'Indigo',
    fabricDesc: 'Textile fait main utilisant des méthodes de teinture traditionnelles',
    jewelryTitle: 'Collier de Perles',
    jewelryDesc: 'Travail de perles complexe d\'artisans du Nord-Ouest',
    viewDetails: 'Voir les Détails',
    featuredArtisans: 'Artisans en Vedette',
    artisanAlt: 'Portrait d\'un artisan du Cameroun',
    basketWeaver: 'Vannier',
    woodCarver: 'Sculpteur sur Bois',
    textileArtist: 'Artiste Textile',
    viewProfile: 'Voir le Profil',
    culturalHeritage: 'Préservation du Patrimoine Culturel',
    culturalDesc1: 'Chaque produit raconte une histoire de tradition et de compétence transmise à travers des générations d\'artisans camerounais.',
    culturalDesc2: 'En soutenant ces artisans, vous contribuez à préserver des pratiques culturelles inestimables et à fournir des moyens de subsistance durables.',
    culturalAlt: 'Artisan travaillant sur un artisanat traditionnel',
    learnMore: 'En Savoir Plus',
    
    // Product card
    addToCart: 'Ajouter au panier',
    product: 'produit',
    products: 'produits',
    
    // Footer
    footerTagline: 'Autonomisation des artisans ruraux au Cameroun en les connectant aux marchés mondiaux et en préservant l\'artisanat culturel.',
    quickLinks: 'Liens Rapides',
    customerSupport: 'Service Client',
    subscribeNewsletter: 'Abonnez-vous à notre Newsletter',
    newsletterDesc: 'Restez informé des nouveaux artisans, produits et histoires culturelles.',
    yourEmail: 'Votre adresse e-mail',
    subscribe: 'S\'abonner',
    allRightsReserved: 'Tous droits réservés.',
    faqLink: 'FAQ',
    
    // Shop page
    title: "Explorez des Trésors Artisanaux",
    subtitle: "Découvrez des produits artisanaux uniques des artisans camerounais, chaque article raconte une histoire de patrimoine culturel et de compétence exceptionnelle.",
    filters: "Filtres",
    showing: "Affichage de",
    searchPlaceholder: "Rechercher des produits...",
    sortBy: "Trier par",
    featured: "En vedette",
    priceLow: "Prix: Croissant",
    priceHigh: "Prix: Décroissant",
    newest: "Plus récent",
    category: "Catégorie",
    priceRange: "Gamme de prix",
    region: "Région",
    reset: "Réinitialiser",
    applyFilters: "Appliquer les filtres",
    noProductsMatch: "Aucun produit ne correspond à vos filtres",
    adjustSearch: "Essayez d'ajuster votre recherche ou vos critères de filtre",
    resetAllFilters: "Réinitialiser tous les filtres",
    
    // About page
    aboutTitle: "À propos d'ArtisanConnect",
    aboutIntro: "ArtisanConnect est une plateforme dédiée à connecter les artisans qualifiés du Cameroun avec des clients du monde entier qui apprécient les produits artisanaux authentiques.",
    ourMission: "Notre Mission",
    missionText: "Notre mission est de préserver et de promouvoir l'artisanat traditionnel camerounais tout en offrant des opportunités de revenus durables aux artisans talentueux. Nous croyons aux pratiques du commerce équitable et veillons à ce que les créateurs de nos beaux produits reçoivent une juste rémunération pour leurs compétences et leur créativité.",
    ourStory: "Notre Histoire",
    storyText1: "ArtisanConnect a commencé en 2023 lorsque notre fondatrice, Elizabeth Nkongho, a reconnu les défis auxquels sont confrontés les artisans talentueux de son pays d'origine, le Cameroun. Malgré la création de produits beaux et de haute qualité, de nombreux artisans ont du mal à atteindre des marchés au-delà de leurs communautés locales.",
    storyText2: "Après avoir visité de nombreux villages et rencontré des vanniers, sculpteurs sur bois, artistes textiles et potiers, Elizabeth a été inspirée pour créer une plateforme qui mettrait en valeur leurs compétences extraordinaires dans le monde entier. ArtisanConnect est né du désir de combler le fossé entre ces créateurs doués et les consommateurs mondiaux qui valorisent l'authenticité, l'artisanat et le patrimoine culturel.",
    ourValues: "Nos Valeurs",
    valueAuth: "Authenticité: Nous célébrons et préservons les techniques artisanales traditionnelles et le patrimoine culturel.",
    valueSust: "Durabilité: Nous promouvons des pratiques respectueuses de l'environnement et l'utilisation de matériaux locaux.",
    valueFair: "Commerce Équitable: Nous veillons à ce que les artisans reçoivent une rémunération équitable pour leur travail et leurs compétences.",
    valueComm: "Communauté: Nous favorisons les connexions entre les créateurs et les consommateurs, créant une communauté mondiale qui valorise l'artisanat.",
    valueEduc: "Éducation: Nous partageons les histoires derrière l'artisanat, aidant les clients à comprendre la signification culturelle et les compétences impliquées dans chaque pièce.",
    ourImpact: "Notre Impact",
    impactText1: "Depuis notre fondation, ArtisanConnect a travaillé avec plus de 50 artisans à travers le Cameroun, les aidant à atteindre des clients dans 25 pays du monde. Grâce à notre plateforme, de nombreux artisans ont pu augmenter considérablement leurs revenus, investir dans leurs ateliers, former des apprentis et contribuer à leurs économies locales.",
    impactText2: "Nous sommes fiers de jouer un rôle dans la préservation des traditions culturelles tout en créant des moyens de subsistance durables pour des personnes talentueuses qui pourraient autrement être forcées d'abandonner leur artisanat à la recherche d'autres opportunités d'emploi.",
    
    // Contact page
    contactTitle: "Contactez-Nous",
    contactIntro: "Nous aimerions avoir de vos nouvelles. Que vous ayez des questions sur nos artisans, nos produits ou nos services, notre équipe est là pour vous aider.",
    email: "Email",
    phone: "Téléphone",
    address: "Adresse",
    hours: "Heures d'ouverture",
    name: "Nom",
    subject: "Sujet",
    message: "Message",
    sendMessage: "Envoyer le Message",
    messageSent: "Message envoyé",
    thanksMessage: "Merci pour votre message. Nous vous répondrons bientôt.",
    
    // Footer pages
    faqTitle: "Foire Aux Questions",
    faqIntro: "Trouvez des réponses aux questions fréquemment posées sur ArtisanConnect, nos produits et services.",
    shippingTitle: "Politique d'Expédition",
    shippingIntro: "Informez-vous sur nos options d'expédition, les délais de livraison et les coûts pour les commandes nationales et internationales.",
    returnsTitle: "Retours & Échanges",
    returnsIntro: "Informations sur nos politiques concernant les retours, les échanges et les remboursements.",
    privacyTitle: "Politique de Confidentialité",
    privacyIntro: "Comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site web.",
    termsTitle: "Conditions d'Utilisation",
    termsIntro: "Les règles, directives et accords que vous acceptez lorsque vous utilisez ArtisanConnect.",

    // Artisans page
    ourArtisans: "Nos Artisans",
    artisansIntro: "Rencontrez les talentueux artisans derrière nos beaux produits. Chaque artisan apporte des années d'expérience et d'héritage culturel à son travail.",

    // Admin Dashboard
    adminDashboard: "Tableau de Bord Admin",
    overview: "Aperçu",
    ordersTab: "Commandes",
    productsTab: "Produits",
    customersTab: "Clients",
    analytics: "Analyses",
    totalOrders: "Total des Commandes",
    totalProducts: "Total des Produits",
    totalCustomers: "Total des Clients",
    revenue: "Revenus",
    recentOrders: "Commandes Récentes",
    orderId: "ID Commande",
    customer: "Client",
    status: "Statut",
    amount: "Montant",
    date: "Date",
    actions: "Actions",
    viewOrder: "Voir",
    pending: "En Attente",
    processing: "En Cours",
    shipped: "Expédié",
    delivered: "Livré",
    productName: "Nom du Produit",
    stock: "Stock",
    categoryLabel: "Catégorie",
    manage: "Gérer",
    inStock: "En Stock",
    lowStock: "Stock Faible",
    outOfStock: "Rupture de Stock",
    customerName: "Nom du Client",
    orders: "Commandes",
    totalSpent: "Total Dépensé",
    lastOrder: "Dernière Commande",
    viewCustomer: "Voir",
    salesOverview: "Aperçu des Ventes",
    topProducts: "Produits Populaires",
    sales: "Ventes"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check if there's a language preference stored in localStorage
    const storedLanguage = localStorage.getItem('language');
    return (storedLanguage === 'fr' ? 'fr' : 'en') as Language;
  });

  // Function to translate text based on current language
  const t = (key: string): string => {
    const currentTranslations = translations[language];
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  useEffect(() => {
    // Store language preference in localStorage when it changes
    localStorage.setItem('language', language);
    
    // Update html lang attribute
    document.documentElement.lang = language;
    
    // Dispatch event for any non-context aware components
    window.dispatchEvent(new StorageEvent('storage', { key: 'language', newValue: language }));
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
