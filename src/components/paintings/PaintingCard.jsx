import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function PaintingCard({ painting, index = 0 }) {
  const statusLabel = {
    sold: 'Продадена',
    reserved: 'Резервирана',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/painting/${painting.id}`} className="group block">
        <div className="relative overflow-hidden rounded-lg bg-secondary aspect-[3/4]">
          <img
            src={painting.image_url}
            alt={painting.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {painting.status && painting.status !== 'available' && (
            <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
              <Badge className="bg-background/90 text-foreground font-body text-sm px-4 py-1.5">
                {statusLabel[painting.status]}
              </Badge>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="font-heading text-xl font-medium text-foreground group-hover:text-primary transition-colors">
            {painting.title}
          </h3>
          <p className="text-sm text-muted-foreground font-body">
            {painting.dimensions} {painting.materials && `· ${painting.materials}`}
          </p>
          <p className="text-lg font-heading font-semibold text-primary">
            {painting.price?.toFixed(0)} лв.
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
