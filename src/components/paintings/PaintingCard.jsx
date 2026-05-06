import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Images } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function PaintingCard({ painting, index = 0 }) {
  const statusLabel = {
    available: 'Налична',
    sold: 'Продадена',
    reserved: 'Резервирана',
  };
  const statusBadgeClass = {
    available: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    reserved: 'bg-amber-100 text-amber-800 border border-amber-200',
    sold: 'bg-rose-100 text-rose-800 border border-rose-200',
  };
  const status = painting.status || 'available';

  const images = useMemo(() => {
    const list = [painting.image_url, ...(painting.additional_images || [])].filter(Boolean);
    return Array.from(new Set(list));
  }, [painting.image_url, painting.additional_images]);

  const [hoverIndex, setHoverIndex] = useState(0);
  const hasMany = images.length > 1;

  const handleEnter = () => {
    if (hasMany) setHoverIndex(1 % images.length);
  };
  const handleLeave = () => setHoverIndex(0);
  const handleMove = (e) => {
    if (!hasMany) return;
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const ratio = Math.min(0.999, Math.max(0, (e.clientX - rect.left) / rect.width));
    setHoverIndex(Math.floor(ratio * images.length));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/painting/${painting.id}`} className="group block">
        <div
          className="relative overflow-hidden rounded-lg bg-secondary aspect-[3/4]"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onMouseMove={handleMove}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={images[hoverIndex] || painting.image_url}
              src={images[hoverIndex] || painting.image_url}
              alt={painting.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </AnimatePresence>

          {hasMany && (
            <>
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/85 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-body text-foreground shadow-sm">
                <Images className="w-3.5 h-3.5" />
                <span className="font-medium">{images.length}</span>
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all ${
                      i === hoverIndex ? 'w-4 bg-background' : 'w-1 bg-background/60'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          <div className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-xs font-body font-medium shadow-sm backdrop-blur-sm ${statusBadgeClass[status] || statusBadgeClass.available}`}>
            {statusLabel[status]}
          </div>

          {painting.status && painting.status !== 'available' && (
            <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
              <Badge className="bg-background/90 text-foreground font-body text-sm px-4 py-1.5">
                {statusLabel[painting.status]}
              </Badge>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
