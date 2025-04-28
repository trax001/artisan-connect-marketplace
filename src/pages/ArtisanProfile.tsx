
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from '@/components/ProductCard';

const ArtisanProfile = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would be fetched from an API in a real app
  const artisan = {
    id: id || '1',
    name: 'Acha Marie',
    region: 'Northwest',
    location: 'Bamenda',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    specialty: 'Basket Weaving',
    bio: 'Acha Marie has been weaving traditional baskets for over 25 years, learning the craft from her grandmother. She uses locally-sourced bamboo and natural dyes to create her distinctive pieces, which combine traditional techniques with contemporary designs. Her work has been featured in several international exhibitions.',
    story: 'Growing up in a small village in the Northwest region of Cameroon, I was surrounded by skilled women who could transform simple materials into beautiful objects. My grandmother was the most skilled basket weaver in our community, and I would sit by her side for hours, watching her hands move with a precision born from decades of practice. When I was 12, she began to teach me the techniques that had been passed down through generations of women in our family.',
  };

  // These would be fetched from an API in a real app
  const products = [
    {
      id: '1',
      name: 'Hand-woven Bamboo Basket',
      price: 45.99,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      artisan: artisan.name,
      region: artisan.region,
    },
    {
      id: '2',
      name: 'Decorative Storage Basket',
      price: 39.50,
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
      artisan: artisan.name,
      region: artisan.region,
    },
    {
      id: '3',
      name: 'Colorful Market Basket',
      price: 52.99,
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
      artisan: artisan.name,
      region: artisan.region,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/artisans" className="text-artisan-clay hover:underline mb-6 inline-block">
        ← Back to All Artisans
      </Link>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <div className="flex flex-col items-center text-center mb-6">
              <Avatar className="w-32 h-32 border-4 border-white shadow-md mb-4">
                <AvatarImage src={artisan.image} alt={artisan.name} />
                <AvatarFallback className="bg-artisan-clay text-white font-medium text-3xl">
                  {artisan.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h1 className="text-2xl font-semibold mb-1">{artisan.name}</h1>
              <p className="text-artisan-clay">{artisan.specialty}</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {artisan.location}, {artisan.region} Region, Cameroon
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mb-6">
              <h3 className="font-medium mb-2">About</h3>
              <p className="text-sm text-muted-foreground">{artisan.bio}</p>
            </div>
            
            <Button className="w-full bg-artisan-clay hover:bg-artisan-clay/90">
              Contact Artisan
            </Button>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <Tabs defaultValue="products">
            <TabsList className="mb-8">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="story">Artisan's Story</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>
            
            <TabsContent value="products">
              <h2 className="text-2xl font-semibold mb-6">Products by {artisan.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="story">
              <h2 className="text-2xl font-semibold mb-6">My Story</h2>
              <div className="prose max-w-none">
                <p className="mb-4">{artisan.story}</p>
                <p>
                  Today, I am proud to continue this tradition while adapting to create pieces that appeal to a global audience. Each basket I create carries the stories, techniques, and cultural heritage of my ancestors, while also reflecting my own creative vision and the changing needs of our modern world.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">My Craft Process</h3>
                <p>
                  I begin each piece by harvesting bamboo from sustainable sources near my home. The bamboo is carefully split and prepared, then soaked to make it pliable. Using techniques passed down through generations, I weave intricate patterns that tell stories of our culture and history. Each basket takes between 3-7 days to complete, depending on its complexity.
                </p>
                <div className="my-6">
                  <img 
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                    alt="Basket weaving process" 
                    className="rounded-lg w-full object-cover h-80"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="gallery">
              <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <img 
                    key={item}
                    src={`https://images.unsplash.com/photo-${item % 2 === 0 ? '1618160702438-9b02ab6515c9' : '1485833077593-4278bba3f11f'}`}
                    alt={`Gallery image ${item}`}
                    className="rounded-lg w-full h-64 object-cover"
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfile;
