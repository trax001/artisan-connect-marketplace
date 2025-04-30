
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-artisan-forest text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <h3 className="text-xl font-bold">
                <span className="text-artisan-gold">Artisan</span>Connect
              </h3>
            </Link>
            <p className="text-sm mb-4">
              Empowering rural artisans in Cameroon by connecting them to global markets and preserving cultural craftsmanship.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-artisan-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-artisan-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-artisan-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-artisan-gold transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4 text-artisan-gold">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="hover:text-artisan-gold transition-colors">{t('shop')}</Link>
              </li>
              <li>
                <Link to="/artisans" className="hover:text-artisan-gold transition-colors">{t('artisans')}</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-artisan-gold transition-colors">{t('blog')}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-artisan-gold transition-colors">{t('about')}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-artisan-gold transition-colors">{t('contact')}</Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4 text-artisan-gold">{t('customerSupport')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="hover:text-artisan-gold transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-artisan-gold transition-colors">{t('shippingTitle')}</Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-artisan-gold transition-colors">{t('returnsTitle')}</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-artisan-gold transition-colors">{t('privacyTitle')}</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-artisan-gold transition-colors">{t('termsTitle')}</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4 text-artisan-gold">{t('subscribeNewsletter')}</h4>
            <p className="text-sm mb-4">
              {t('newsletterDesc')}
            </p>
            <form className="space-y-2">
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder={t('yourEmail')}
                  className="bg-artisan-forest border-artisan-gold/50 placeholder:text-white/50 text-white"
                  required
                />
                <Button className="bg-artisan-gold hover:bg-artisan-gold/80 text-artisan-earth">
                  {t('subscribe')}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} ArtisanConnect. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
