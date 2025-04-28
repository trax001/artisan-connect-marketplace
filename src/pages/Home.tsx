
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import ArtisanCard from '@/components/ArtisanCard';

const featuredProducts = [
  {
    id: '1',
    name: 'Hand-woven Bamboo Basket',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    artisan: 'Acha Marie',
    region: 'Northwest',
  },
  {
    id: '2',
    name: 'Carved Wooden Ceremonial Mask',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
    artisan: 'Emmanuel Njoka',
    region: 'West',
  },
  {
    id: '3',
    name: 'Traditional Indigo Dyed Fabric',
    price: 79.50,
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
    artisan: 'Beatrice Fon',
    region: 'Southwest',
  },
  {
    id: '4',
    name: 'Handcrafted Leather Satchel',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
    artisan: 'Joseph Tamba',
    region: 'Adamawa',
  },
];

const categories = [
  { id: '1', name: 'Textiles & Fabrics', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9' },
  { id: '2', name: 'Wood Carvings', image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f' },
  { id: '3', name: 'Baskets & Weaving', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a' },
  { id: '4', name: 'Leather Goods', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d' },
];

const featuredArtisans = [
  { id: '1', name: 'Acha Marie', region: 'Northwest', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9', specialty: 'Basket Weaving', productCount: 12 },
  { id: '2', name: 'Emmanuel Njoka', region: 'West', image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f', specialty: 'Wood Carving', productCount: 8 },
  { id: '3', name: 'Beatrice Fon', region: 'Southwest', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a', specialty: 'Textile Arts', productCount: 15 },
];

const Home = () => {
  return (
    <div>
      <HeroSection
        title="Support Local Craftsmanship"
        subtitle="Discover unique handcrafted treasures directly from Cameroon's skilled artisans"
        ctaText="Shop Now"
        ctaLink="/shop"
        backgroundImage="https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
      />
      
      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-artisan-earth">Featured Products</h2>
            <Button asChild variant="ghost" className="text-artisan-clay hover:text-artisan-clay/80">
              <Link to="/shop" className="flex items-center gap-1">
                View All <ChevronRight size={16} />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 px-4 bg-artisan-sand/20">
        <div className="container mx-auto">
          <h2 className="text-center text-artisan-earth mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map(category => (
              <Link to={`/shop/category/${category.id}`} key={category.id} className="group">
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                    <h3 className="text-white text-xl font-medium">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Statement */}
      <section className="py-16 px-4 bg-artisan-forest text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="mb-6 text-artisan-gold">Empowering Cameroon's Rural Artisans</h2>
          <p className="text-lg mb-8">
            Every purchase you make directly supports local artisans and their communities, preserving traditional craftsmanship and creating sustainable livelihoods.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-12">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-artisan-gold mb-2">100+</span>
              <span className="text-sm uppercase tracking-wider">Artisans Supported</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-artisan-gold mb-2">15</span>
              <span className="text-sm uppercase tracking-wider">Communities Reached</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-artisan-gold mb-2">500+</span>
              <span className="text-sm uppercase tracking-wider">Unique Products</span>
            </div>
          </div>
          <Button asChild className="bg-artisan-clay hover:bg-artisan-clay/90">
            <Link to="/about">Learn About Our Mission</Link>
          </Button>
        </div>
      </section>
      
      {/* Featured Artisans */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-artisan-earth">Meet Our Artisans</h2>
            <Button asChild variant="ghost" className="text-artisan-clay hover:text-artisan-clay/80">
              <Link to="/artisans" className="flex items-center gap-1">
                View All <ChevronRight size={16} />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArtisans.map(artisan => (
              <ArtisanCard key={artisan.id} {...artisan} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Join as Artisan CTA */}
      <section className="py-16 px-4 bg-artisan-clay/10 pattern-bg">
        <div className="container mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-artisan-earth mb-4">Are You an Artisan?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join our platform to showcase your craft to a global audience. ArtisanConnect provides you the tools and exposure to grow your business.
            </p>
            <Button asChild size="lg" className="bg-artisan-clay hover:bg-artisan-clay/90 btn-hover-effect">
              <Link to="/join-as-artisan">Join as Artisan</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
