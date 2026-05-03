import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { CartProvider, useCart } from '../../lib/CartContext';

function LayoutInner() {
  const { cart } = useCart();
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Navbar cartCount={cart.length} />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function AppLayout() {
  return (
    <CartProvider>
      <LayoutInner />
    </CartProvider>
  );
}
