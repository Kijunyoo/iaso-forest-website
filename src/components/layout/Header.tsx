'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: '소개말', href: '/about' },
  { label: '둘러보기', href: '/gallery' },
  { label: '스토리', href: '/story' },
  { label: '뉴스', href: '/news' },
  { label: '가이드', href: '/guide' },
  { label: '위치', href: '/location' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-iaso-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-iaso">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={
                isScrolled
                  ? 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/brand/IASO_Logo_Primary_FullColor'
                  : 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/brand/IASO_Logo_White_Version'
              }
              alt="IASO FOREST"
              className="h-12 w-auto transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-iaso-gold ${
                  isScrolled ? 'text-iaso-text' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden touch-target flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-iaso-text' : 'text-white'} size={28} />
            ) : (
              <Menu className={isScrolled ? 'text-iaso-text' : 'text-white'} size={28} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-iaso-lg animate-fade-in">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-6 py-4 text-lg font-medium text-iaso-text hover:bg-iaso-beige-50 hover:text-iaso-green"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
