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
    custom_size: '',
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
      const formData = new FormData(e.target);
      // Ensure custom_size is used if preferred_size is custom
      if (form.preferred_size === 'custom') {
        formData.set('preferred_size', form.custom_size);
      }
      
      const response = await fetch('/__forms.html', {
        method: 'POST',
        // Do NOT set Content-Type header when using FormData with files
        body: formData,
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
          name="custom_order"
          data-netlify="true"
          netlify-honeypot="bot-field"
          encType="multipart/form-data"
          className="space-y-6 bg-card rounded-2xl p-6 sm:p-10 border border-border shadow-sm"
        >
          <input type="hidden" name="form-name" value="custom_order" />
          <p style={{ display: 'none' }}>
            <label>Don't fill this out: <input name="bot-field" /></label>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-body text-sm">Вашето име *</Label>
              <Input
                name="name"
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
                name="email"
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
                name="phone"
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
              <input type="hidden" name="preferred_size" value={form.preferred_size === 'custom' ? form.custom_size : form.preferred_size} />
              {form.preferred_size === 'custom' && (
                <Input
                  autoFocus
                  required
                  value={form.custom_size}
                  onChange={e => handleChange('custom_size', e.target.value)}
                  placeholder="напр. 90×120 см"
                  className="font-body mt-2"
                />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="font-body text-sm">Предпочитани цветове *</Label>
            <Input
              name="preferred_colors"
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
              name="style_description"
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
                <SelectItem value="50-100">50 – 100 €</SelectItem>
                <SelectItem value="100-200">100 – 200 €</SelectItem>
                <SelectItem value="200-300">200 – 300 €</SelectItem>
                <SelectItem value="300+">300+ €</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="budget" value={form.budget} />
          </div>

          <div className="space-y-2">
            <Label className="font-body text-sm">Референтна снимка</Label>
            <div className="border-2 border-dashed border-border rounded-xl p-6 text-center">
              <input
                type="file"
                name="reference_image"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="ref-images"
              />
              <label htmlFor="ref-images" className="cursor-pointer flex flex-col items-center gap-2">
                <Upload className="w-8 h-8 text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-body">Качете снимка за вдъхновение</span>
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
