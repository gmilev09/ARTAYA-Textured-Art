import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'accepted') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    // Hide the banner without saving to localStorage.
    // It will show up again when the site is refreshed.
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-background border-t border-border shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row items-center justify-center gap-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-7xl mx-auto text-center sm:text-left">
        <div className="text-sm text-muted-foreground flex-1">
          <p className="font-semibold text-foreground text-base mb-1">Ние използваме бисквитки</p>
          <p>
            Този сайт използва бисквитки, за да ви осигури най-доброто потребителско изживяване. 
            Научете повече в нашата <Link to="/cookies-policy" onClick={() => window.scrollTo(0,0)} className="underline hover:text-foreground">Политика за бисквитки</Link>.
            Като изберете &quot;Приемам&quot;, вие се съгласявате с използването им.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto shrink-0 justify-center sm:justify-start">
          <Button variant="outline" onClick={handleReject} className="flex-1 sm:flex-none">
            Отказвам
          </Button>
          <Button onClick={handleAccept} className="flex-1 sm:flex-none">
            Приемам
          </Button>
        </div>
      </div>
    </div>
  );
}
