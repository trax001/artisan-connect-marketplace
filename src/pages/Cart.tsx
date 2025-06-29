
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

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
  const [shippingMethod, setShippingMethod] = useState(shippingOptions[0].id);
  const { t } = useLanguage();
  const { items, updateQuantity, removeFromCart, getSubtotal } = useCart();
  
  const selectedShipping = shippingOptions.find(option => option.id === shippingMethod);
  
  // Calculate totals
  const subtotal = getSubtotal();
  const shippingCost = selectedShipping?.price || 0;
  const total = subtotal + shippingCost;
  
  const handleCheckout = () => {
    console.log('Proceeding to checkout with:', { items, total, shippingMethod });
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('cart')}</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-4">{t('cartEmpty')}</h2>
          <p className="text-muted-foreground mb-8">
            {t('cartEmptyDescription')}
          </p>
          <Button asChild className="bg-artisan-clay hover:bg-artisan-clay/90">
            <Link to="/shop">{t('continueShopping')}</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg border border-border overflow-hidden">
              <div className="hidden md:grid md:grid-cols-12 p-4 bg-muted text-sm font-medium">
                <div className="col-span-6">{t('productLabel')}</div>
                <div className="col-span-2 text-center">{t('price')}</div>
                <div className="col-span-3 text-center">{t('quantity')}</div>
                <div className="col-span-1 text-center">{t('total')}</div>
              </div>
              
              {items.map((item, idx) => (
                <div key={item.id}>
                  {idx > 0 && <Separator />}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center">
                    <div className="col-span-1 md:hidden flex justify-end">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
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
                      <div className="md:hidden text-sm text-muted-foreground mb-1">{t('price')}</div>
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
                      <div className="md:hidden text-sm text-muted-foreground mb-1">{t('total')}</div>
                      {(item.price * item.quantity).toLocaleString()} FCFA
                    </div>
                    
                    <div className="hidden md:block md:col-span-1 text-center">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
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
              <h2 className="text-xl font-semibold mb-6">{t('orderSummary')}</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('subtotal')}</span>
                  <span>{subtotal.toLocaleString()} FCFA</span>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h3 className="font-medium mb-3">{t('shippingMethod')}</h3>
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
                  <span>{t('total')}</span>
                  <span>{total.toLocaleString()} FCFA</span>
                </div>
              </div>
              
              <Button 
                onClick={handleCheckout}
                className="w-full bg-artisan-clay hover:bg-artisan-clay/90 flex items-center justify-center gap-2"
              >
                {t('checkout')} <ArrowRight size={16} />
              </Button>
              
              <div className="mt-6">
                <h3 className="font-medium mb-3">{t('paymentOptions')}</h3>
                <div className="flex flex-wrap gap-3">
                  <img src="https://via.placeholder.com/60x30?text=MTN+MoMo" alt="MTN MoMo" className="h-6" />
                  <img src="https://via.placeholder.com/60x30?text=Orange+Money" alt="Orange Money" className="h-6" />
                  <img src="https://via.placeholder.com/60x30?text=PayPal" alt="PayPal" className="h-6" />
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button asChild variant="outline" className="w-full">
                <Link to="/shop">{t('continueShopping')}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
