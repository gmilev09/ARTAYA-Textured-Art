import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layers, Sparkles, Truck } from 'lucide-react';

const steps = [
  {
    icon: Palette,
    title: 'Избор на дизайн',
    description: 'Изберете от нашата галерия или опишете вашата визия за персонализирана картина.',
  },
  {
    icon: Layers,
    title: 'Ръчно създаване',
    description: 'Всяка картина е ръчно изработена с множество слоеве texture и внимание към детайла.',
  },
  {
    icon: Sparkles,
    title: 'Финални щрихи',
    description: 'Добавяне на акценти — златни листи, метални детайли или специални текстури.',
  },
  {
    icon: Truck,
    title: 'Доставка',
    description: 'Внимателно опаковане и доставка до вашия дом в цяла България.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-3">
            Как работим
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-light text-foreground">
            От идея до <span className="italic font-medium">шедьовър</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
