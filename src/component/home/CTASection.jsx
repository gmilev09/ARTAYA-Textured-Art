import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center bg-foreground rounded-2xl p-12 sm:p-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-4">
            Персонализирано изкуство
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light text-background leading-tight mb-6">
            Мечтаете за <span className="italic font-medium">уникална</span> картина?
          </h2>
          <p className="text-background/60 font-body max-w-lg mx-auto mb-8 leading-relaxed">
            Създаваме персонализирани текстурни картини по вашите желания — цветове, размер и стил, които перфектно допълват вашия интериор.
          </p>
          <Button asChild size="lg" className="rounded-full px-10 font-body text-sm tracking-wide bg-primary hover:bg-primary/90">
            <Link to="/custom-order">
              Заяви своята картина
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
