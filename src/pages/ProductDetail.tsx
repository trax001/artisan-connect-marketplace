import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Minus, Plus, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { t } = useLanguage();
  
  // This would be fetched from an API in a real app
  const product = {
    id: id || '1',
    name: 'Hand-woven Bamboo Basket',
    price: 25000,
    images: [
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
      'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
    ],
    description: 'Handcrafted by skilled artisans in the Northwest region of Cameroon, this beautiful bamboo basket combines traditional weaving techniques with modern design. Each basket is unique, showcasing intricate patterns and natural materials that tell a story of cultural heritage and craftsmanship.',
    details: [
      'Material: Locally-sourced bamboo',
      'Dimensions: 30cm x 30cm x 15cm',
      'Weight: 0.5kg',
      'Care: Wipe with a damp cloth, avoid direct sunlight',
    ],
    artisan: {
      id: '1',
      name: 'Acha Marie',
      region: 'Northwest',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    },
    category: 'Baskets & Weaving',
    inStock: true,
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        artisan: product.artisan.name,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="mb-4">
            <img 
              src={selectedImage} 
              alt={product.name} 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button 
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`rounded-md overflow-hidden flex-shrink-0 border-2 ${selectedImage === image ? 'border-artisan-clay' : 'border-transparent'}`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} view ${index + 1}`} 
                  className="w-20 h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Information */}
        <div className="lg:w-1/2">
          <nav className="flex text-sm mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-artisan-clay">Home</Link>
              </li>
              <li className="text-muted-foreground">/</li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-artisan-clay">Shop</Link>
              </li>
              <li className="text-muted-foreground">/</li>
              <li>
                <Link to={`/shop/category/${product.category}`} className="text-muted-foreground hover:text-artisan-clay">{product.category}</Link>
              </li>
              <li className="text-muted-foreground">/</li>
              <li className="text-foreground font-medium truncate max-w-[150px]">{product.name}</li>
            </ol>
          </nav>
          
          <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-6">
            <Link to={`/artisan/${product.artisan.id}`} className="flex items-center">
              <Avatar className="h-6 w-6 mr-2">
                <AvatarImage src={product.artisan.image} alt={product.artisan.name} />
                <AvatarFallback className="bg-artisan-clay text-white text-xs">
                  {product.artisan.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{product.artisan.name}</span>
            </Link>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{product.artisan.region} Region, Cameroon</span>
          </div>
          
          <div className="text-2xl font-bold mb-6">{product.price.toLocaleString()} FCFA</div>
          
          <Tabs defaultValue="description" className="mb-8">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-4">
              <p className="text-muted-foreground">{product.description}</p>
            </TabsContent>
            
            <TabsContent value="details" className="mt-4">
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-muted-foreground flex items-start">
                    <span className="mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-4">
              <p className="text-muted-foreground mb-2">
                Shipping within Cameroon: 1-3 business days
              </p>
              <p className="text-muted-foreground mb-2">
                International shipping: 7-14 business days
              </p>
              <p className="text-muted-foreground">
                Please note that each item is handcrafted, so slight variations may occur.
              </p>
            </TabsContent>
          </Tabs>
          
          <div className="flex items-center mb-6 space-x-4">
            <div className="flex items-center border rounded">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={increaseQuantity}
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
            
            <Button 
              className="flex-1 bg-artisan-clay hover:bg-artisan-clay/90"
              onClick={handleAddToCart}
            >
              {t('addToCart')}
            </Button>
            
            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
          </div>
          
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Payment Options</h3>
            <div className="flex flex-wrap gap-2">
              <img src="https://via.placeholder.com/60x30?text=MTN+MoMo" alt="MTN MoMo" className="h-6" />
              <img src="https://via.placeholder.com/60x30?text=Orange+Money" alt="Orange Money" className="h-6" />
              <img src="https://via.placeholder.com/60x30?text=PayPal" alt="PayPal" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
