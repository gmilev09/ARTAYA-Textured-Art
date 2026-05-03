import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Check, ArrowLeft, Ruler, Paintbrush } from 'lucide-react';
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

  const { data: painting, isLoading } = useQuery({
    queryKey: ['painting', paintingId],
    queryFn: () => fetchPaintingById(paintingId),
    enabled: !!paintingId,
  });

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
          <div className="rounded-xl overflow-hidden bg-secondary aspect-[3/4]">
            <img
              src={painting.image_url}
              alt={painting.title}
              className="w-full h-full object-cover"
            />
          </div>
          {painting.additional_images?.length > 0 && (
            <div className="grid grid-cols-3 gap-3 mt-3">
              {painting.additional_images.map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden bg-secondary aspect-square">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
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
            {painting.status !== 'available' && (
              <Badge variant="destructive" className="font-body text-xs">
                {painting.status === 'sold' ? 'Продадена' : 'Резервирана'}
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
