import React, { useState, useEffect } from 'react';
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
    price: 25000,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    artisan: 'Acha Marie',
    region: 'Northwest',
  },
  {
    id: '2',
    name: 'Carved Wooden Ceremonial Mask',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
    artisan: 'Emmanuel Njoka',
    region: 'West',
  },
  {
    id: '3',
    name: 'Traditional Indigo Dyed Fabric',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
    artisan: 'Beatrice Fon',
    region: 'Southwest',
  },
  {
    id: '4',
    name: 'Handcrafted Leather Satchel',
    price: 80000,
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
    artisan: 'Joseph Tamba',
    region: 'Adamawa',
  },
  {
    id: '5',
    name: 'Decorative Storage Basket',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
    artisan: 'Acha Marie',
    region: 'Northwest',
  },
  {
    id: '6',
    name: 'Colorful Market Basket',
    price: 26500,
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
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState('featured');
  
  // Language state for translations
  const [language, setLanguage] = useState<'en' | 'fr'>(() => {
    // Check if there's a language preference stored in localStorage
    const storedLanguage = localStorage.getItem('language');
    return (storedLanguage === 'fr' ? 'fr' : 'en') as 'en' | 'fr';
  });

  // Language switch effect to sync with Navigation component
  useEffect(() => {
    const handleLanguageChange = (event: StorageEvent) => {
      if (event.key === 'language') {
        setLanguage((event.newValue as 'en' | 'fr') || 'en');
      }
    };
    
    window.addEventListener('storage', handleLanguageChange);
    return () => window.removeEventListener('storage', handleLanguageChange);
  }, []);

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const resetFilters = () => {
    setPriceRange([0, 100000]);
    setSelectedCategory('all');
    setSelectedRegion('all');
    setSearchQuery('');
    setSortOption('featured');
  };

  // Filter and sort products whenever filters change
  useEffect(() => {
    let result = [...products];
    
    // Price filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Category filter (placeholder for real implementation)
    if (selectedCategory !== 'all') {
      // In a real app, you'd check the product's category
      // This is just a placeholder
    }
    
    // Region filter
    if (selectedRegion !== 'all') {
      result = result.filter(product => 
        product.region.toLowerCase() === selectedRegion
      );
    }
    
    // Search filter - improved to be case insensitive and check product name and artisan
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchLower) || 
        product.artisan.toLowerCase().includes(searchLower)
      );
    }
    
    // Sort products
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Assuming we had a date field, this would sort by date
        break;
      // default 'featured' keeps original order
    }
    
    setFilteredProducts(result);
  }, [priceRange, selectedCategory, selectedRegion, searchQuery, sortOption]);

  // Translation object
  const translations = {
    en: {
      title: "Explore Handcrafted Treasures",
      subtitle: "Discover unique artisanal products from Cameroon's skilled craftspeople, each item telling a story of cultural heritage and exceptional skill.",
      filters: "Filters",
      showing: "Showing",
      products: "products",
      searchPlaceholder: "Search products...",
      sortBy: "Sort by",
      featured: "Featured",
      priceLow: "Price: Low to High",
      priceHigh: "Price: High to Low",
      newest: "Newest",
      category: "Category",
      priceRange: "Price Range",
      region: "Region",
      reset: "Reset",
      applyFilters: "Apply Filters",
      noProductsMatch: "No products match your filters",
      adjustSearch: "Try adjusting your search or filter criteria",
      resetAllFilters: "Reset All Filters",
    },
    fr: {
      title: "Explorez des Trésors Artisanaux",
      subtitle: "Découvrez des produits artisanaux uniques des artisans camerounais, chaque article raconte une histoire de patrimoine culturel et de compétence exceptionnelle.",
      filters: "Filtres",
      showing: "Affichage de",
      products: "produits",
      searchPlaceholder: "Rechercher des produits...",
      sortBy: "Trier par",
      featured: "En vedette",
      priceLow: "Prix: Croissant",
      priceHigh: "Prix: Décroissant",
      newest: "Plus récent",
      category: "Catégorie",
      priceRange: "Gamme de prix",
      region: "Région",
      reset: "Réinitialiser",
      applyFilters: "Appliquer les filtres",
      noProductsMatch: "Aucun produit ne correspond à vos filtres",
      adjustSearch: "Essayez d'ajuster votre recherche ou vos critères de filtre",
      resetAllFilters: "Réinitialiser tous les filtres",
    }
  };
  
  const t = translations[language];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center">
          <Button 
            variant="outline" 
            className="mr-4 flex items-center gap-2"
            onClick={toggleFilters}
          >
            <Filter size={16} /> {t.filters}
          </Button>
          <span className="text-muted-foreground">
            {t.showing} {filteredProducts.length} {t.products}
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder={t.searchPlaceholder}
              className="pl-10"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Select
            value={sortOption}
            onValueChange={setSortOption}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={t.sortBy} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">{t.featured}</SelectItem>
              <SelectItem value="price-low">{t.priceLow}</SelectItem>
              <SelectItem value="price-high">{t.priceHigh}</SelectItem>
              <SelectItem value="newest">{t.newest}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className={`md:w-1/4 lg:w-1/5 space-y-8 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">{t.filters}</h2>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground"
              onClick={resetFilters}
            >
              {t.reset}
            </Button>
          </div>
          
          {/* Category Filter */}
          <div>
            <h3 className="font-medium mb-3">{t.category}</h3>
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
            <h3 className="font-medium mb-3">{t.priceRange}</h3>
            <Slider
              value={priceRange}
              min={0}
              max={100000}
              step={1000}
              onValueChange={handlePriceChange}
              className="mb-4"
            />
            <div className="flex items-center justify-between">
              <span>{priceRange[0].toLocaleString()} FCFA</span>
              <span>{priceRange[1].toLocaleString()} FCFA</span>
            </div>
          </div>
          
          {/* Region Filter */}
          <div>
            <h3 className="font-medium mb-3">{t.region}</h3>
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
              {t.applyFilters}
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
              <h3 className="text-xl font-medium mb-2">{t.noProductsMatch}</h3>
              <p className="text-muted-foreground mb-6">{t.adjustSearch}</p>
              <Button onClick={resetFilters}>{t.resetAllFilters}</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
