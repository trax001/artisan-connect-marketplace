
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from './LanguageContext';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  artisan: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();
  const { t } = useLanguage();

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    console.log('Adding to cart:', product);
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        const updatedItems = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        console.log('Updated cart items:', updatedItems);
        toast({
          title: t('itemUpdated'),
          description: t('quantityIncreased'),
        });
        return updatedItems;
      } else {
        const newItems = [...prevItems, { ...product, quantity: 1 }];
        console.log('New cart items:', newItems);
        toast({
          title: t('itemAdded'),
          description: t('itemAddedToCart'),
        });
        return newItems;
      }
    });
  };

  const removeFromCart = (id: string) => {
    console.log('Removing from cart:', id);
    setItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== id);
      console.log('Cart after removal:', newItems);
      return newItems;
    });
    toast({
      title: t('itemRemoved'),
      description: t('itemRemovedFromCart'),
      variant: 'destructive',
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    
    console.log('Updating quantity:', id, quantity);
    setItems(prevItems => {
      const newItems = prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      console.log('Cart after quantity update:', newItems);
      return newItems;
    });
    
    toast({
      title: t('cartUpdated'),
      description: t('quantityUpdated'),
    });
  };

  const clearCart = () => {
    console.log('Clearing cart');
    setItems([]);
  };

  const getTotalItems = () => {
    const total = items.reduce((total, item) => total + item.quantity, 0);
    console.log('Total items:', total);
    return total;
  };

  const getSubtotal = () => {
    const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    console.log('Subtotal:', subtotal);
    return subtotal;
  };

  const contextValue = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getSubtotal,
  };

  console.log('CartProvider rendering with items:', items);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
