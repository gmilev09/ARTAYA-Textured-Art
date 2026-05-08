import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BackgroundForms from '../components/common/BackgroundForms';

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundForms variant="diamonds" />
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-3">
            За нас
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-light text-foreground">
            ARTAYA <span className="italic font-medium">Textured Art</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-light text-foreground mb-6">
              Изкуство, което можете <span className="italic font-medium">да усетите</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                ARTAYA е бутикова арт студия, посветена на създаването на уникални текстурни картини. 
                Всяка творба е ръчно изработена с множество слоеве — акрил, гипс, златни листи и 
                различни текстурни материали.
              </p>
              <p>
                Вярваме, че изкуството не трябва само да се гледа — трябва да се усеща. 
                Нашите картини са тактилно преживяване, което трансформира всяко пространство 
                и добавя дълбочина и характер на вашия интериор.
              </p>
              <p>
                Работим както с готови творби от нашата галерия, така и с персонализирани 
                поръчки — създаваме картини по вашите желания за цветове, размер и стил.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-secondary rounded-2xl aspect-square flex items-center justify-center"
          >
            <div className="text-center p-8">
              <span className="text-7xl font-heading font-light text-primary/20">A</span>
              <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mt-2">
                Artaya Studio
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-12 border-y border-border"
        >
          <div>
            <p className="text-4xl font-heading font-semibold text-primary mb-2">100+</p>
            <p className="text-sm text-muted-foreground font-body">Създадени картини</p>
          </div>
          <div>
            <p className="text-4xl font-heading font-semibold text-primary mb-2">100%</p>
            <p className="text-sm text-muted-foreground font-body">Ръчна изработка</p>
          </div>
          <div>
            <p className="text-4xl font-heading font-semibold text-primary mb-2">5★</p>
            <p className="text-sm text-muted-foreground font-body">Доволни клиенти</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-heading font-light text-foreground mb-6">
            Готови да започнем?
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 font-body text-sm tracking-wide">
              <Link to="/gallery">
                Разгледай галерията <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-body text-sm tracking-wide">
              <Link to="/custom-order">Персонализирана поръчка</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
