import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedSection from '../components/home/FeaturedSection';
import ProcessSection from '../components/home/ProcessSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
