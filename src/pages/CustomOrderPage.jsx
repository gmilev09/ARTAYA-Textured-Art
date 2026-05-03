import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { CheckCircle, Upload } from 'lucide-react';

export default function CustomOrderPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_colors: '',
    preferred_size: '',
    style_description: '',
    budget: '',
    notes: '',
  });
  const [referenceFiles, setReferenceFiles] = useState([]);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    // Тук трябва да добавите логика за качване към вашия сървър или Cloudinary/S3
    const uploaded = files.map(file => URL.createObjectURL(file)); 
    setReferenceFiles(prev => [...prev, ...uploaded]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/custom-orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          reference_images: referenceFiles,
        })
      });

      if (!response.ok) throw new Error('Failed to submit');

      setIsSubmitted(true);
      toast({ title: 'Заявката е изпратена!', description: 'Ще се свържем с вас скоро.' });
    } catch (error) {
      toast({ title: 'Грешка', description: 'Опитайте отново по-късно.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
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
            Благодарим ви!
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            Вашата заявка за персонализирана картина е получена. Ще се свържем с вас в рамките на 24 часа, за да обсъдим детайлите.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-3">
            Персонализирано изкуство
          </p>
          <h1 className="text-4xl sm:text-5xl font-heading font-light text-foreground mb-4">
            Поръчай <span className="italic font-medium">уникална</span> картина
          </h1>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Опишете вашата визия и ние ще я превърнем в текстурна картина, създадена специално за вас.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-card rounded-2xl p-6 sm:p-10 border border-border shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-body text-sm">Вашето име *</Label>
              <Input
                required
                value={form.name}
                onChange={e => handleChange('name', e.target.value)}
                placeholder="Име и фамилия"
                className="font-body"
              />
            </div>
            <div className="space-y-2">
              <Label className="font-body text-sm">Имейл *</Label>
              <Input
                required
                type="email"
                value={form.email}
                onChange={e => handleChange('email', e.target.value)}
                placeholder="email@example.com"
                className="font-body"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-body text-sm">Телефон</Label>
              <Input
                value={form.phone}
                onChange={e => handleChange('phone', e.target.value)}
                placeholder="+359..."
                className="font-body"
              />
            </div>
            <div className="space-y-2">
              <Label className="font-body text-sm">Желан размер</Label>
              <Select value={form.preferred_size} onValueChange={v => handleChange('preferred_size', v)}>
                <SelectTrigger className="font-body">
                  <SelectValue placeholder="Изберете размер" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30x40">30×40 см</SelectItem>
                  <SelectItem value="40x50">40×50 см</SelectItem>
                  <SelectItem value="50x70">50×70 см</SelectItem>
                  <SelectItem value="60x80">60×80 см</SelectItem>
                  <SelectItem value="70x100">70×100 см</SelectItem>
                  <SelectItem value="80x120">80×120 см</SelectItem>
                  <SelectItem value="custom">Друг размер</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="font-body text-sm">Предпочитани цветове *</Label>
            <Input
              required
              value={form.preferred_colors}
              onChange={e => handleChange('preferred_colors', e.target.value)}
              placeholder="напр. бежово, златно, бяло, пастелно розово..."
              className="font-body"
            />
          </div>

          <div className="space-y-2">
            <Label className="font-body text-sm">Описание на желания стил *</Label>
            <Textarea
              required
              value={form.style_description}
              onChange={e => handleChange('style_description', e.target.value)}
              placeholder="Опишете вашата визия — настроение, текстура, абстрактни форми, вдъхновение..."
              className="h-32 font-body"
            />
          </div>

          <div className="space-y-2">
            <Label className="font-body text-sm">Бюджет</Label>
            <Select value={form.budget} onValueChange={v => handleChange('budget', v)}>
              <SelectTrigger className="font-body">
                <SelectValue placeholder="Изберете бюджет" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="100-200">100 – 200 лв.</SelectItem>
                <SelectItem value="200-400">200 – 400 лв.</SelectItem>
                <SelectItem value="400-600">400 – 600 лв.</SelectItem>
                <SelectItem value="600+">600+ лв.</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="font-body text-sm">Референтни снимки</Label>
            <div className="border-2 border-dashed border-border rounded-xl p-6 text-center">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="ref-images"
              />
              <label htmlFor="ref-images" className="cursor-pointer flex flex-col items-center gap-2">
                <Upload className="w-8 h-8 text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-body">Качете снимки за вдъхновение</span>
              </label>
            </div>
            {referenceFiles.length > 0 && (
               <p className="text-xs text-muted-foreground mt-2 italic">{referenceFiles.length} файла избрани</p>
            )}
          </div>

          <Button type="submit" size="lg" className="w-full rounded-full font-body text-sm tracking-wide" disabled={isSubmitting}>
            {isSubmitting ? 'Изпращане...' : 'Изпрати заявка'}
          </Button>
        </motion.form>
      </div>
    </div>
  );
}
