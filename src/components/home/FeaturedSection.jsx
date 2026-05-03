import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PaintingCard from '../paintings/PaintingCard';
import { Skeleton } from '@/components/ui/skeleton';

const fetchFeaturedPaintings = async () => {
  const response = await fetch('/api/paintings?featured=true&limit=6');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export default function FeaturedSection() {
  const { data: paintings = [], isLoading } = useQuery({
    queryKey: ['featured-paintings'],
    queryFn: fetchFeaturedPaintings,
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-3">
          Избрани творби
        </p>
        <h2 className="text-4xl sm:text-5xl font-heading font-light text-foreground">
          Популярни <span className="italic font-medium">картини</span>
        </h2>
      </motion.div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-[3/4] rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paintings.map((painting, i) => (
            <PaintingCard key={painting.id} painting={painting} index={i} />
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-14"
      >
        <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-body text-sm tracking-wide">
          <Link to="/gallery">
            Виж всички картини
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
