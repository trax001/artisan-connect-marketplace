
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Globe, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-artisan-sand shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-artisan-earth">
              <span className="text-artisan-clay">Artisan</span>Connect
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-artisan-earth hover:text-artisan-clay font-medium">
              {t('home')}
            </Link>
            <Link to="/shop" className="text-artisan-earth hover:text-artisan-clay font-medium">
              {t('shop')}
            </Link>
            <Link to="/artisans" className="text-artisan-earth hover:text-artisan-clay font-medium">
              {t('artisans')}
            </Link>
            <Link to="/blog" className="text-artisan-earth hover:text-artisan-clay font-medium">
              {t('blog')}
            </Link>
            <Link to="/about" className="text-artisan-earth hover:text-artisan-clay font-medium">
              {t('about')}
            </Link>
            <Link to="/contact" className="text-artisan-earth hover:text-artisan-clay font-medium">
              {t('contact')}
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-artisan-forest hover:text-artisan-clay"
              onClick={toggleLanguage}
              title={t('language')}
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">{t('language')}</span>
              <span className="ml-1 text-xs font-medium">{language.toUpperCase()}</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-artisan-forest hover:text-artisan-clay"
              title={t('search')}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">{t('search')}</span>
            </Button>
            
            <Link to="/account" title={t('account')}>
              <Button variant="ghost" size="icon" className="text-artisan-forest hover:text-artisan-clay">
                <User className="h-5 w-5" />
                <span className="sr-only">{t('account')}</span>
              </Button>
            </Link>
            
            <Link to="/cart" title={t('cart')}>
              <Button variant="ghost" size="icon" className="text-artisan-forest hover:text-artisan-clay relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">{t('cart')}</span>
                <span className="absolute -top-1 -right-1 bg-artisan-clay text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-artisan-forest"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-artisan-earth hover:text-artisan-clay font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                to="/shop" 
                className="text-artisan-earth hover:text-artisan-clay font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('shop')}
              </Link>
              <Link 
                to="/artisans" 
                className="text-artisan-earth hover:text-artisan-clay font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('artisans')}
              </Link>
              <Link 
                to="/blog" 
                className="text-artisan-earth hover:text-artisan-clay font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('blog')}
              </Link>
              <Link 
                to="/about" 
                className="text-artisan-earth hover:text-artisan-clay font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link 
                to="/contact" 
                className="text-artisan-earth hover:text-artisan-clay font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>
              <Link 
                to="/account" 
                className="text-artisan-earth hover:text-artisan-clay font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('account')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
