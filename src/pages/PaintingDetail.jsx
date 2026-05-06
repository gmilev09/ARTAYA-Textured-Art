import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Check, ArrowLeft, Ruler, Paintbrush, ChevronLeft, ChevronRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useCart } from '../lib/CartContext';

const fetchPaintingById = async (id) => {
  const response = await fetch(`/api/paintings/${id}`);
  if (!response.ok) throw new Error('Painting not found');
  return response.json();
};

export default function PaintingDetail() {
  const { id: paintingId } = useParams();
  const { addToCart, isInCart } = useCart();
  const [activeIndex, setActiveIndex] = useState(0);

  const { data: painting, isLoading } = useQuery({
    queryKey: ['painting', paintingId],
    queryFn: () => fetchPaintingById(paintingId),
    enabled: !!paintingId,
  });

  const images = useMemo(() => {
    if (!painting) return [];
    const list = [painting.image_url, ...(painting.additional_images || [])].filter(Boolean);
    return Array.from(new Set(list));
  }, [painting]);

  useEffect(() => {
    setActiveIndex(0);
  }, [paintingId]);

  useEffect(() => {
    if (images.length <= 1) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length]);

  if (isLoading) {
    return (
      <div className="min-h-screen py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <Skeleton className="aspect-[3/4] rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!painting) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-heading mb-4">Картината не е намерена</h2>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/gallery">Към галерията</Link>
          </Button>
        </div>
      </div>
    );
  }

  const inCart = isInCart(painting.id);
  const categoryLabels = {
    abstract: 'Абстрактна',
    minimalist: 'Минималистична',
    nature: 'Природа',
    geometric: 'Геометрична',
    mixed_media: 'Смесена техника',
  };

  const hasMany = images.length > 1;
  const goPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="min-h-screen py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link
        to="/gallery"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Обратно към галерията
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative group rounded-xl overflow-hidden bg-secondary aspect-[3/4]">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[activeIndex] || 'empty'}
                src={images[activeIndex]}
                alt={painting.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {hasMany && (
              <>
                <button
                  type="button"
                  aria-label="Предишна снимка"
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 hover:bg-background transition-opacity"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  aria-label="Следваща снимка"
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 hover:bg-background transition-opacity"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Покажи снимка ${i + 1}`}
                      onClick={() => setActiveIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === activeIndex ? 'w-6 bg-foreground' : 'w-1.5 bg-foreground/40 hover:bg-foreground/70'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {hasMany && (
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 mt-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Снимка ${i + 1}`}
                  aria-current={i === activeIndex}
                  className={`rounded-lg overflow-hidden bg-secondary aspect-square ring-2 transition-all ${
                    i === activeIndex
                      ? 'ring-primary'
                      : 'ring-transparent hover:ring-border opacity-80 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {painting.category && (
              <Badge variant="secondary" className="font-body text-xs tracking-wide">
                {categoryLabels[painting.category] || painting.category}
              </Badge>
            )}
            {painting.status === 'available' && (
              <Badge className="font-body text-xs bg-emerald-100 text-emerald-800 border border-emerald-200 hover:bg-emerald-100">
                Налична
              </Badge>
            )}
            {painting.status === 'reserved' && (
              <Badge className="font-body text-xs bg-amber-100 text-amber-800 border border-amber-200 hover:bg-amber-100">
                Резервирана
              </Badge>
            )}
            {painting.status === 'sold' && (
              <Badge variant="destructive" className="font-body text-xs">
                Продадена
              </Badge>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light text-foreground mb-2">
            {painting.title}
          </h1>

          <p className="text-3xl font-heading font-semibold text-primary mb-6">
            {painting.price?.toFixed(0)} лв.
          </p>

          {painting.description && (
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              {painting.description}
            </p>
          )}

          <div className="space-y-3 mb-8">
            {painting.dimensions && (
              <div className="flex items-center gap-3 text-sm font-body">
                <Ruler className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Размер:</span>
                <span className="text-foreground font-medium">{painting.dimensions}</span>
              </div>
            )}
            {painting.materials && (
              <div className="flex items-center gap-3 text-sm font-body">
                <Paintbrush className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Материали:</span>
                <span className="text-foreground font-medium">{painting.materials}</span>
              </div>
            )}
          </div>

          {painting.status === 'available' && (
            <Button
              size="lg"
              className="rounded-full px-10 font-body text-sm tracking-wide w-full sm:w-auto"
              onClick={() => addToCart(painting)}
              disabled={inCart}
            >
              {inCart ? (
                <>
                  <Check className="w-4 h-4 mr-2" /> Добавена в кошницата
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 mr-2" /> Добави в кошницата
                </>
              )}
            </Button>
          )}

          <div className="mt-auto pt-8 border-t border-border mt-8">
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              Всяка картина е уникална и ръчно изработена. Цветовете могат леко да се различават от снимката.
              Доставка в рамките на 5-7 работни дни в цяла България.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
