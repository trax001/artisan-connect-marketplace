
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative bg-artisan-earth text-white">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-artisan-earth to-artisan-earth/70"></div>
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-xl">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="bg-artisan-clay hover:bg-artisan-clay/90 text-white px-8 py-3 rounded-md font-medium">
                {t('exploreShop')}
              </Link>
              <Link to="/artisans" className="bg-white hover:bg-gray-100 text-artisan-earth px-8 py-3 rounded-md font-medium">
                {t('meetArtisans')}
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-artisan-clay rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-artisan-clay rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                alt={t('heroImageAlt')}
                className="rounded-lg relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
