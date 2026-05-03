import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HERO_IMAGE = '/images/home-background.png';
const HERO_VIDEO_MP4 = '/videos/hero.mp4';
const HERO_VIDEO_WEBM = '/videos/hero.webm';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Абстрактна текстурна картина с бежови, кафяви и златни акценти"
          className="absolute inset-0 w-full h-full object-cover object-center hero-kenburns"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={HERO_IMAGE}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src={HERO_VIDEO_WEBM} type="video/webm" />
          <source src={HERO_VIDEO_MP4} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/45 to-foreground/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm font-body tracking-[0.4em] uppercase text-background/70 mb-4"
          >
            Ръчно изработени текстурни картини
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-light text-background leading-[1.1] mb-6"
          >
            Изкуство,
            <br />
            <span className="font-semibold italic">което усещаш</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base font-body text-background/70 leading-relaxed mb-8 max-w-md"
          >
            Уникални абстрактни картини с богата текстура, създадени да внесат характер и елегантност във вашето пространство.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="rounded-full px-8 font-body text-sm tracking-wide">
              <Link to="/gallery">
                Разгледай галерията
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 font-body text-sm tracking-wide border-background/70 bg-transparent text-background shadow-sm hover:bg-background/10 hover:text-background"
            >
              <Link to="/custom-order">Поръчай персонализирана</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
