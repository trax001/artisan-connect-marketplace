
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
    cart: 'Cart',
    language: 'Language',
    
    // Shop page
    title: "Explore Handcrafted Treasures",
    subtitle: "Discover unique artisanal products from Cameroon's skilled craftspeople, each item telling a story of cultural heritage and exceptional skill.",
    filters: "Filters",
    showing: "Showing",
    products: "products",
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
    
    // Product card
    addToCart: "Add to cart",
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
    cart: 'Panier',
    language: 'Langue',
    
    // Shop page
    title: "Explorez des Trésors Artisanaux",
    subtitle: "Découvrez des produits artisanaux uniques des artisans camerounais, chaque article raconte une histoire de patrimoine culturel et de compétence exceptionnelle.",
    filters: "Filtres",
    showing: "Affichage de",
    products: "produits",
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
    
    // Product card
    addToCart: "Ajouter au panier",
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
