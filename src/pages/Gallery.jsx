import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import PaintingCard from '../components/paintings/PaintingCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import BackgroundForms from '../components/common/BackgroundForms';

const categories = [
  { value: 'all', label: 'Всички' },
  { value: 'abstract', label: 'Абстрактни' },
  { value: 'minimalist', label: 'Минималистични' },
  { value: 'nature', label: 'Природа' },
  { value: 'geometric', label: 'Геометрични' },
  { value: 'mixed_media', label: 'Смесена техника' },
];

const fetchPaintings = async () => {
  const response = await fetch('/api/paintings');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const { data: paintings = [], isLoading } = useQuery({
    queryKey: ['paintings'],
    queryFn: fetchPaintings,
  });

  const filtered = activeCategory === 'all'
    ? paintings
    : paintings.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundForms variant="scattered" />
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-3">
            Колекция
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-light text-foreground">
            Нашата <span className="italic font-medium">галерия</span>
          </h1>
          <p className="text-muted-foreground font-body mt-4 max-w-md mx-auto">
            Всяка картина е уникална — ръчно изработена с любов и внимание към текстурата.
          </p>
        </motion.div>

        <div className="flex flex-col items-center mb-12">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-5 font-body text-xs tracking-wide gap-2 mb-4"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Филтри
          </Button>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap justify-center gap-2 pt-1">
                  {categories.map((cat) => (
                    <Button
                      key={cat.value}
                      variant={activeCategory === cat.value ? 'default' : 'outline'}
                      size="sm"
                      className="rounded-full px-5 font-body text-xs tracking-wide"
                      onClick={() => setActiveCategory(cat.value)}
                    >
                      {cat.label}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[3/4] rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-body">Няма намерени картини в тази категория.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((painting, i) => (
              <PaintingCard key={painting.id} painting={painting} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
