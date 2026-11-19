import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandMark } from './BrandMark';
import type { PageRoute } from './GovernancePages';

interface HeaderProps {
  onOpenContact: (mode: 'briefing' | 'partnership') => void;
  onOpenSignIn: () => void;
  onHiddenChange?: (hidden: boolean) => void;
  currentPage?: PageRoute;
  onNavigate?: (page: PageRoute, hash?: string) => void;
}

const TOP_LOGO_URL = 'https://appcdn.goqii.com/storeimg/27351_1794996760.png';

export const Header: React.FC<HeaderProps> = ({
  onOpenContact,
  onOpenSignIn,
  onHiddenChange,
  currentPage = 'home',
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  const lastScrollYRef = useRef(0);
  const isHiddenRef = useRef(false);
  const mobileMenuOpenRef = useRef(false);
  const onHiddenChangeRef = useRef(onHiddenChange);

  onHiddenChangeRef.current = onHiddenChange;

  useEffect(() => {
    mobileMenuOpenRef.current = mobileMenuOpen;
    if (mobileMenuOpen && isHiddenRef.current) {
      isHiddenRef.current = false;
      setIsHidden(false);
      onHiddenChangeRef.current?.(false);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const updateHidden = (nextHidden: boolean) => {
      if (isHiddenRef.current !== nextHidden) {
        isHiddenRef.current = nextHidden;
        setIsHidden(nextHidden);
        onHiddenChangeRef.current?.(nextHidden);
      }
    };

    const handleScroll = () => {
      const currentY = Math.max(0, window.scrollY);
      const delta = currentY - lastScrollYRef.current;

      setIsScrolled(currentY > 20);

      if (currentY <= 24 || mobileMenuOpenRef.current) {
        updateHidden(false);
      } else if (delta > 2 && currentY > 48) {
        updateHidden(true);
      } else if (delta < -2) {
        updateHidden(false);
      }

      lastScrollYRef.current = currentY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Explore Platform', href: '#platform-overview' },
    { label: 'Architecture', href: '#platform-architecture' },
    { label: 'Categories', href: '#platform-categories' },
    { label: 'Modules', href: '#module-architecture' },
    { label: 'Industries', href: '#industries' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home' && onNavigate) {
      e.preventDefault();
      onNavigate('home', href);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home' && onNavigate) {
      e.preventDefault();
      onNavigate('home');
    }
  };

  return (
    <div className="bg-white">
      {/* Spacer prevents layout shift when navbar switches to fixed on scroll */}
      {isScrolled && <div className="h-[80px]" aria-hidden="true" />}

      <header
        className={`w-full transition-[transform,opacity] duration-200 ease-out px-4 sm:px-6 lg:px-8 ${
          isScrolled ? 'fixed top-3 left-0 right-0 z-50' : 'relative pt-3 pb-1 z-40'
        } ${
          isHidden
            ? '-translate-y-[120%] opacity-0 pointer-events-none'
            : 'translate-y-0 opacity-100'
        }`}
      >
        <div
          className={`max-w-[1280px] mx-auto rounded-2xl border transition-shadow duration-200 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md border-[#DCE4EC] shadow-[0_12px_28px_-8px_rgba(15,23,42,0.14),0_4px_10px_-4px_rgba(15,23,42,0.06)]'
              : 'bg-white border-[#E8EDF2] shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)]'
          }`}
        >
          <div className="px-4 sm:px-6 h-16 flex items-center justify-between gap-4 lg:gap-8">
            {/* Zone 1: Top Logo */}
            <a
              href="#top"
              onClick={handleLogoClick}
              className="inline-flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2BC48A] rounded-lg"
              aria-label="GOQii HealthEngage Home"
            >
              {logoFailed ? (
                <BrandMark variant="light" />
              ) : (
                <img
                  src={TOP_LOGO_URL}
                  alt="GOQii HealthEngage"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoFailed(true)}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              )}
            </a>

            {/* Zone 2: Navigation links */}
            <nav
              aria-label="Primary navigation"
              className="hidden lg:flex items-center gap-6 xl:gap-7"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-[#64748B] hover:text-[#158059] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#2BC48A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2BC48A]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={onOpenSignIn}
                className="text-xs xl:text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2BC48A] rounded px-1 py-1"
              >
                Already a customer?{' '}
                <span className="font-semibold text-[#0F172A] underline decoration-[#2BC48A]/60 underline-offset-4 hover:decoration-[#2BC48A]">
                  Sign in
                </span>
              </button>

              <button
                type="button"
                onClick={() => onOpenContact('briefing')}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] active:bg-[#1E9B6C] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A]"
              >
                Talk to Us
              </button>
            </div>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={
                mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#E8EDF2] text-[#0F172A] hover:bg-[#F8FAFB] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-[#E8EDF2] px-4 py-4 space-y-3 rounded-b-2xl bg-white">
              <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-2.5 text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFB] hover:text-[#158059] rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="pt-3 border-t border-[#E8EDF2] flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSignIn();
                  }}
                  className="px-4 py-2.5 text-sm font-medium text-[#0F172A] bg-[#F8FAFB] border border-[#E8EDF2] hover:border-[#2BC48A] rounded-xl transition-colors text-center cursor-pointer"
                >
                  Already a customer? Sign in
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact('briefing');
                  }}
                  className="px-4 py-2.5 text-sm font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-xl transition-colors text-center cursor-pointer"
                >
                  Talk to Us
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};
