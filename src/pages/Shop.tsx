
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, Search, X } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const products = [
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
  {
    id: '5',
    name: 'Decorative Storage Basket',
    price: 39.50,
    image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
    artisan: 'Acha Marie',
    region: 'Northwest',
  },
  {
    id: '6',
    name: 'Colorful Market Basket',
    price: 52.99,
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
    artisan: 'Acha Marie',
    region: 'Northwest',
  },
];

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'baskets', name: 'Baskets & Weaving' },
  { id: 'textiles', name: 'Textiles & Fabrics' },
  { id: 'wood', name: 'Wood Carvings' },
  { id: 'leather', name: 'Leather Goods' },
  { id: 'jewelry', name: 'Jewelry' },
  { id: 'pottery', name: 'Pottery & Ceramics' },
];

const regions = [
  { id: 'all', name: 'All Regions' },
  { id: 'northwest', name: 'Northwest' },
  { id: 'southwest', name: 'Southwest' },
  { id: 'west', name: 'West' },
  { id: 'adamawa', name: 'Adamawa' },
  { id: 'central', name: 'Central' },
  { id: 'east', name: 'East' },
];

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const resetFilters = () => {
    setPriceRange([0, 200]);
    setSelectedCategory('all');
    setSelectedRegion('all');
    setSearchQuery('');
  };

  // Apply filters to products
  const filteredProducts = products.filter(product => {
    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    // Category filter
    if (selectedCategory !== 'all') {
      // In a real app, you'd check the product's category
      // This is just a placeholder
      const categoryMatches = true;
      if (!categoryMatches) return false;
    }
    
    // Region filter
    if (selectedRegion !== 'all' && product.region.toLowerCase() !== selectedRegion) {
      return false;
    }
    
    // Search filter
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Explore Handcrafted Treasures</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover unique artisanal products from Cameroon's skilled craftspeople, each item telling a story of cultural heritage and exceptional skill.
        </p>
      </div>

      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center">
          <Button 
            variant="outline" 
            className="mr-4 flex items-center gap-2"
            onClick={toggleFilters}
          >
            <Filter size={16} /> Filters
          </Button>
          <span className="text-muted-foreground">
            Showing {filteredProducts.length} products
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Select
            value="featured"
            onValueChange={() => {}}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className={`md:w-1/4 lg:w-1/5 space-y-8 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Filters</h2>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground"
              onClick={resetFilters}
            >
              Reset
            </Button>
          </div>
          
          {/* Category Filter */}
          <div>
            <h3 className="font-medium mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <div key={category.id} className="flex items-center">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategory === category.id}
                    onCheckedChange={() => setSelectedCategory(category.id)}
                  />
                  <label 
                    htmlFor={`category-${category.id}`}
                    className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Price Filter */}
          <div>
            <h3 className="font-medium mb-3">Price Range</h3>
            <Slider
              value={priceRange}
              min={0}
              max={200}
              step={1}
              onValueChange={handlePriceChange}
              className="mb-4"
            />
            <div className="flex items-center justify-between">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          
          {/* Region Filter */}
          <div>
            <h3 className="font-medium mb-3">Region</h3>
            <div className="space-y-2">
              {regions.map(region => (
                <div key={region.id} className="flex items-center">
                  <Checkbox
                    id={`region-${region.id}`}
                    checked={selectedRegion === region.id}
                    onCheckedChange={() => setSelectedRegion(region.id)}
                  />
                  <label 
                    htmlFor={`region-${region.id}`}
                    className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {region.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Close Button */}
          <div className="mt-6 md:hidden">
            <Button 
              className="w-full bg-artisan-clay hover:bg-artisan-clay/90"
              onClick={toggleFilters}
            >
              Apply Filters
            </Button>
          </div>
        </aside>
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products match your filters</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
              <Button onClick={resetFilters}>Reset All Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
