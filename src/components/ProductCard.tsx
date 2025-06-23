
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  artisan: string;
  region: string;
}

const ProductCard = ({ id, name, price, image, artisan, region }: ProductCardProps) => {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id,
      name,
      price,
      image,
      artisan,
    });
  };
  
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/product/${id}`} className="block relative">
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            size="icon" 
            className="bg-artisan-clay hover:bg-artisan-clay/90 rounded-full w-8 h-8"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">{t('addToCart')}</span>
          </Button>
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${id}`} className="hover:text-artisan-clay">
          <h3 className="font-medium mb-1">{name}</h3>
        </Link>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">{artisan} · {region}</span>
        </div>
        <div className="font-bold">{price.toLocaleString()} FCFA</div>
      </div>
    </div>
  );
};

export default ProductCard;
