
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

// Mocked cart data for this example
const initialCartItems = [
  {
    id: '1',
    name: 'Hand-woven Bamboo Basket',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    artisan: 'Acha Marie',
    quantity: 1,
  },
  {
    id: '3',
    name: 'Traditional Indigo Dyed Fabric',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
    artisan: 'Beatrice Fon',
    quantity: 2,
  },
];

const shippingOptions = [
  {
    id: 'standard',
    name: 'Standard Shipping',
    price: 2500,
    description: '7-14 business days',
  },
  {
    id: 'express',
    name: 'Express Shipping',
    price: 5000,
    description: '3-5 business days',
  },
  {
    id: 'sameday',
    name: 'Same Day Delivery',
    price: 10000,
    description: 'Same day delivery (order before 12pm)',
  },
  {
    id: 'pickup',
    name: 'Local Pickup',
    price: 0,
    description: 'Pickup at store in Bamenda',
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [shippingMethod, setShippingMethod] = useState(shippingOptions[0].id);
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const selectedShipping = shippingOptions.find(option => option.id === shippingMethod);
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = selectedShipping?.price || 0;
  const total = subtotal + shippingCost;
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button asChild className="bg-artisan-clay hover:bg-artisan-clay/90">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg border border-border overflow-hidden">
              <div className="hidden md:grid md:grid-cols-12 p-4 bg-muted text-sm font-medium">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-1 text-center">Total</div>
              </div>
              
              {cartItems.map((item, idx) => (
                <div key={item.id}>
                  {idx > 0 && <Separator />}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center">
                    <div className="col-span-1 md:hidden flex justify-end">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-5 w-5 text-muted-foreground" />
                      </Button>
                    </div>
                    
                    <div className="md:col-span-6 flex items-center gap-4">
                      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">
                          <Link to={`/product/${item.id}`} className="hover:text-artisan-clay">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">By {item.artisan}</p>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 text-center md:text-center">
                      <div className="md:hidden text-sm text-muted-foreground mb-1">Price</div>
                      {item.price.toLocaleString()} FCFA
                    </div>
                    
                    <div className="md:col-span-3 flex items-center justify-center">
                      <div className="flex items-center border rounded">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="md:col-span-1 text-right md:text-center">
                      <div className="md:hidden text-sm text-muted-foreground mb-1">Total</div>
                      {(item.price * item.quantity).toLocaleString()} FCFA
                    </div>
                    
                    <div className="hidden md:block md:col-span-1 text-center">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-5 w-5 text-muted-foreground" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{subtotal.toLocaleString()} FCFA</span>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h3 className="font-medium mb-3">Shipping Method</h3>
                  <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                    {shippingOptions.map(option => (
                      <div key={option.id} className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value={option.id} id={`shipping-${option.id}`} />
                        <Label htmlFor={`shipping-${option.id}`} className="flex-grow">
                          <div className="flex justify-between items-center">
                            <span>{option.name}</span>
                            <span>{option.price.toLocaleString()} FCFA</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{option.description}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div className="pt-4 border-t border-border flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>{total.toLocaleString()} FCFA</span>
                </div>
              </div>
              
              <Button asChild className="w-full bg-artisan-clay hover:bg-artisan-clay/90 flex items-center justify-center gap-2">
                <Link to="/checkout">
                  Checkout <ArrowRight size={16} />
                </Link>
              </Button>
              
              <div className="mt-6">
                <h3 className="font-medium mb-3">Payment Options</h3>
                <div className="flex flex-wrap gap-3">
                  <img src="https://via.placeholder.com/60x30?text=MTN+MoMo" alt="MTN MoMo" className="h-6" />
                  <img src="https://via.placeholder.com/60x30?text=Orange+Money" alt="Orange Money" className="h-6" />
                  <img src="https://via.placeholder.com/60x30?text=PayPal" alt="PayPal" className="h-6" />
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button asChild variant="outline" className="w-full">
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
