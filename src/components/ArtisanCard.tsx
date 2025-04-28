
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ArtisanCardProps {
  id: string;
  name: string;
  region: string;
  image: string;
  specialty: string;
  productCount: number;
}

const ArtisanCard: React.FC<ArtisanCardProps> = ({
  id,
  name,
  region,
  image,
  specialty,
  productCount,
}) => {
  return (
    <Link to={`/artisan/${id}`}>
      <Card className="rounded-lg overflow-hidden border border-muted transition-all duration-300 hover:shadow-md hover:border-artisan-clay/50">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <Avatar className="w-24 h-24 border-4 border-white shadow-md">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-artisan-clay text-white font-medium text-xl">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <h3 className="mt-4 font-medium text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground">{region}, Cameroon</p>
          <div className="mt-2 px-3 py-1 bg-artisan-sand/30 rounded-full text-xs">
            {specialty}
          </div>
          <p className="mt-3 text-sm">{productCount} products</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArtisanCard;
