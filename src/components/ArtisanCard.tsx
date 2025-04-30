
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface ArtisanCardProps {
  id: string;
  name: string;
  region: string;
  image: string;
  specialty: string;
  productCount: number;
}

const ArtisanCard = ({ id, name, region, image, specialty, productCount }: ArtisanCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Link to={`/artisan/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <div className="flex items-center mb-3">
            <Badge variant="outline" className="bg-muted/50">{region}</Badge>
            <span className="mx-2">•</span>
            <Badge variant="outline" className="bg-muted/50">{specialty}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {productCount} {productCount === 1 ? t('product') : t('products')}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArtisanCard;
