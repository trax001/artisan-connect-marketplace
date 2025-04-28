
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  artisan: string;
  region: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  artisan,
  region,
}) => {
  return (
    <Card className="rounded-lg overflow-hidden border border-muted transition-all duration-300 hover:shadow-md h-full flex flex-col">
      <Link to={`/product/${id}`} className="block overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4 flex-grow">
        <Link to={`/artisan/${artisan.toLowerCase().replace(/\s+/g, '-')}`}>
          <p className="text-xs text-artisan-clay font-medium uppercase tracking-wider mb-1">
            {artisan} · {region}
          </p>
        </Link>
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-lg mb-2 hover:text-artisan-clay transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0 flex items-center justify-between mt-auto">
        <p className="font-semibold text-lg">
          ${price.toFixed(2)}
        </p>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-artisan-clay hover:text-white border-artisan-clay text-artisan-clay"
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">Add to cart</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
