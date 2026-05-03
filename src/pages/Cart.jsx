import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Trash2, ShoppingBag, ArrowLeft, CheckCircle } from 'lucide-react';
import { useCart } from '../lib/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const { toast } = useToast();
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    customer_address: '',
    customer_city: '',
    notes: '',
  });

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Замени с твоя API ендпоинт за поръчки
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          items: cart.map(p => ({
            painting_id: p.id,
            title: p.title,
            price: p.price,
            image_url: p.image_url,
          })),
          total,
        })
      });

      if (!response.ok) throw new Error('Failed to place order');

      clearCart();
      setOrderPlaced(true);
      toast({ title: 'Поръчката е приета!', description: 'Ще се свържем с вас скоро.' });
    } catch (error) {
      toast({ title: 'Грешка', description: 'Моля опитайте отново по-късно.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
            Поръчката е приета!
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            Благодарим ви! Ще се свържем с вас за потвърждение и детайли по доставката.
          </p>
          <Button asChild variant="outline" className="rounded-full font-body">
            <Link to="/gallery">Продължи разглеждането</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-6" />
          <h2 className="text-2xl font-heading text-foreground mb-2">Кошницата е празна</h2>
          <p className="text-muted-foreground font-body mb-6">Разгледайте нашата галерия и добавете картини.</p>
          <Button asChild className="rounded-full font-body">
            <Link to="/gallery">Към галерията</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Link
        to="/gallery"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Продължи пазаруването
      </Link>

      <h1 className="text-3xl sm:text-4xl font-heading font-light text-foreground mb-8">
        Кошница
      </h1>

      <div className="space-y-4 mb-8">
        <AnimatePresence>
          {cart.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border"
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-lg font-medium text-foreground truncate">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body">{item.dimensions}</p>
              </div>
              <p className="text-lg font-heading font-semibold text-primary whitespace-nowrap">
                {item.price?.toFixed(0)} лв.
              </p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFromCart(item.id)}
                className="text-muted-foreground hover:text-destructive flex-shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between border-t border-border pt-6 mb-8">
        <span className="text-lg font-body text-muted-foreground">Общо:</span>
        <span className="text-2xl font-heading font-semibold text-foreground">{total.toFixed(0)} лв.</span>
      </div>

      {!showCheckout ? (
        <Button
          size="lg"
          className="w-full rounded-full font-body text-sm tracking-wide"
          onClick={() => setShowCheckout(true)}
        >
          Продължи към поръчка
        </Button>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleOrder}
          className="space-y-4 bg-card rounded-2xl p-6 sm:p-8 border border-border"
        >
          <h3 className="text-xl font-heading font-semibold mb-4">Данни за доставка</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-body text-sm">Име *</Label>
              <Input required value={form.customer_name} onChange={e => handleChange('customer_name', e.target.value)} className="font-body" />
            </div>
            <div className="space-y-2">
              <Label className="font-body text-sm">Имейл *</Label>
              <Input required type="email" value={form.customer_email} onChange={e => handleChange('customer_email', e.target.value)} className="font-body" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-body text-sm">Телефон *</Label>
              <Input required value={form.customer_phone} onChange={e => handleChange('customer_phone', e.target.value)} className="font-body" />
            </div>
            <div className="space-y-2">
              <Label className="font-body text-sm">Град *</Label>
              <Input required value={form.customer_city} onChange={e => handleChange('customer_city', e.target.value)} className="font-body" />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="font-body text-sm">Адрес за доставка *</Label>
            <Input required value={form.customer_address} onChange={e => handleChange('customer_address', e.target.value)} className="font-body" />
          </div>
          <div className="space-y-2">
            <Label className="font-body text-sm">Бележки</Label>
            <Textarea value={form.notes} onChange={e => handleChange('notes', e.target.value)} className="font-body" />
          </div>
          <Button type="submit" size="lg" className="w-full rounded-full font-body text-sm tracking-wide" disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            ) : (
              'Завърши поръчката'
            )}
          </Button>
        </motion.form>
      )}
    </div>
  );
}
