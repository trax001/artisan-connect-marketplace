
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/HeroSection';

const Home = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <HeroSection />
      
      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('featuredProducts')}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Placeholder for featured products */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" alt={t('productAlt')} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-medium">{t('basketTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('basketDesc')}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="font-bold">25,000 FCFA</span>
                  <button className="text-sm text-artisan-clay hover:underline">{t('viewDetails')}</button>
                </div>
              </div>
            </div>
            
            {/* More product placeholders with the same structure */}
            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f" alt={t('productAlt')} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-medium">{t('maskTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('maskDesc')}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="font-bold">45,000 FCFA</span>
                  <button className="text-sm text-artisan-clay hover:underline">{t('viewDetails')}</button>
                </div>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" alt={t('productAlt')} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-medium">{t('fabricTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('fabricDesc')}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="font-bold">30,000 FCFA</span>
                  <button className="text-sm text-artisan-clay hover:underline">{t('viewDetails')}</button>
                </div>
              </div>
            </div>
            
            {/* Product 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d" alt={t('productAlt')} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-medium">{t('jewelryTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('jewelryDesc')}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="font-bold">22,000 FCFA</span>
                  <button className="text-sm text-artisan-clay hover:underline">{t('viewDetails')}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Artisans Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('featuredArtisans')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Artisan 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" alt={t('artisanAlt')} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">Acha Marie</h3>
                <p className="text-sm text-muted-foreground mb-1">{t('basketWeaver')}</p>
                <button className="text-xs text-artisan-clay hover:underline">{t('viewProfile')}</button>
              </div>
            </div>
            
            {/* Artisan 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                <img src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f" alt={t('artisanAlt')} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">Tabi Francis</h3>
                <p className="text-sm text-muted-foreground mb-1">{t('woodCarver')}</p>
                <button className="text-xs text-artisan-clay hover:underline">{t('viewProfile')}</button>
              </div>
            </div>
            
            {/* Artisan 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                <img src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" alt={t('artisanAlt')} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">Ngwa Beatrice</h3>
                <p className="text-sm text-muted-foreground mb-1">{t('textileArtist')}</p>
                <button className="text-xs text-artisan-clay hover:underline">{t('viewProfile')}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cultural Heritage Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('culturalHeritage')}</h2>
              <p className="text-lg mb-4">
                {t('culturalDesc1')}
              </p>
              <p className="text-lg mb-6">
                {t('culturalDesc2')}
              </p>
              <button className="bg-artisan-clay hover:bg-artisan-clay/90 text-white px-6 py-3 rounded-md">
                {t('learnMore')}
              </button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
                alt={t('culturalAlt')} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
