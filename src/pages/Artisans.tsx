
import React from 'react';
import ArtisanCard from '@/components/ArtisanCard';
import { useLanguage } from '@/contexts/LanguageContext';

const Artisans = () => {
  const { t } = useLanguage();
  
  // This would be fetched from an API in a real app
  const artisans = [
    {
      id: '1',
      name: 'Acha Marie',
      region: 'Northwest',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      specialty: 'Basket Weaving',
      productCount: 12,
    },
    {
      id: '2',
      name: 'Tabi Francis',
      region: 'Southwest',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
      specialty: 'Wood Carving',
      productCount: 8,
    },
    {
      id: '3',
      name: 'Ngwa Beatrice',
      region: 'West',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
      specialty: 'Pottery',
      productCount: 15,
    },
    {
      id: '4',
      name: 'Neba John',
      region: 'Littoral',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
      specialty: 'Textile Arts',
      productCount: 10,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-10">{t('ourArtisans')}</h1>
      <p className="mb-8 text-lg max-w-3xl">
        {t('artisansIntro')}
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {artisans.map((artisan) => (
          <ArtisanCard key={artisan.id} {...artisan} />
        ))}
      </div>
    </div>
  );
};

export default Artisans;
