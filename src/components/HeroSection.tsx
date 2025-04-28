
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}) => {
  return (
    <section 
      className="relative min-h-[70vh] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="container mx-auto px-4 py-16 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="mb-6">{title}</h1>
          <p className="text-xl mb-8 opacity-90">{subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-artisan-clay hover:bg-artisan-clay/90 text-white btn-hover-effect"
              size="lg"
            >
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/20 btn-hover-effect"
              size="lg"
            >
              <Link to="/join-as-artisan">Join as Artisan</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
