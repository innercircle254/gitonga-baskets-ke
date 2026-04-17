import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Basket } from './mockData';

interface CartItem extends Basket {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (basket: Basket) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (basket: Basket) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === basket.id);
      if (existing) {
        return prev.map(item =>
          item.id === basket.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...basket, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev =>
      prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
