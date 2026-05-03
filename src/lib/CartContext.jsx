import React, { useState, useEffect, createContext, useContext } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('artaya_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('artaya_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (painting) => {
    setCart(prev => {
      if (prev.find(item => item.id === painting.id)) return prev;
      return [...prev, painting];
    });
  };

  const removeFromCart = (paintingId) => {
    setCart(prev => prev.filter(item => item.id !== paintingId));
  };

  const clearCart = () => setCart([]);

  const isInCart = (paintingId) => cart.some(item => item.id === paintingId);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}
