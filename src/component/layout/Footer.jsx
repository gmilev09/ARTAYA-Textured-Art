import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex flex-col items-start mb-4">
              <span className="text-2xl md:text-3xl font-heading font-semibold tracking-widest text-background leading-tight">
                ARTAYA
              </span>
              <div className="w-full h-px bg-primary my-0.5" />
              <span className="text-[9px] font-body text-background/80 tracking-[0.35em] uppercase">
                TEXTURED ART
              </span>
            </div>
            <p className="text-sm font-body leading-relaxed text-background/60">
              Уникални текстурни картини, създадени с внимание към детайла и страст към изкуството. Всяка творба е ръчно изработена.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 text-background/90">
              Бързи връзки
            </h4>
            <div className="space-y-3">
              <Link to="/gallery" onClick={() => window.scrollTo(0,0)} className="block text-sm text-background/60 hover:text-background transition-colors">
                Галерия
              </Link>
              <Link to="/custom-order" onClick={() => window.scrollTo(0,0)} className="block text-sm text-background/60 hover:text-background transition-colors">
                Персонализирана картина
              </Link>
              <Link to="/about" onClick={() => window.scrollTo(0,0)} className="block text-sm text-background/60 hover:text-background transition-colors">
                За нас
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 text-background/90">
              Контакти
            </h4>
            <div className="space-y-3">
              <a href="mailto:hello@artaya.bg" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Mail className="w-4 h-4" /> hello@artaya.bg
              </a>
              <a href="tel:+359895737470" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Phone className="w-4 h-4" /> +359 895 737 470
              </a>
              <a href="https://www.instagram.com/artaya_textured_art/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Instagram className="w-4 h-4" /> @artaya_textured_art
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-xs text-background/40 font-body">
            © {new Date().getFullYear()} ARTAYA Textured Art. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}
