import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { PLATFORM_CATEGORIES } from '../data/platformData';
import { SECTION_VISUALS } from '../data/moduleVisuals';
import type { PageRoute } from './GovernancePages';

interface EnterpriseCtaAndFooterProps {
  onOpenContact: (mode: 'briefing' | 'partnership') => void;
  onOpenSignIn: () => void;
}

interface FooterProps extends EnterpriseCtaAndFooterProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, hash?: string) => void;
}

const FOOTER_LOGO_URL = 'https://appcdn.goqii.com/storeimg/20485_1795073815.png';

export const EnterpriseCtaSection: React.FC<EnterpriseCtaAndFooterProps> = ({
  onOpenContact,
  onOpenSignIn,
}) => {
  const PartnershipIcon = SECTION_VISUALS.cta;
  const ContactCueIcon = SECTION_VISUALS.contactCue;

  return (
    <section
      id="enterprise-cta"
      className="bg-[#0D3B2E] bg-arch-grid-dark text-white py-16 sm:py-24 border-b border-white/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Proposition with Handshake Icon Identity */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2BC48A] tracking-wide">
              <PartnershipIcon className="w-4 h-4" strokeWidth={1.75} />
              <span>Enterprise &amp; Partnerships</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white tracking-tight leading-[1.12] text-balance">
              Let’s architect connected health for your enterprise.
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/85 leading-relaxed max-w-2xl">
              Partner with GOQii HealthEngage to deploy a platform purpose-built for care
              delivery, engagement, insurance, pharma, and ecosystem integrations — with
              the security, scale, and interoperability your organization demands.
            </p>
          </div>

          {/* Right Structured Conversion Panel */}
          <div className="lg:col-span-5">
            <div className="border border-white/15 bg-[#092B22]/80 rounded-xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2.5 text-xs font-medium text-emerald-100 pb-3 border-b border-white/15">
                <ContactCueIcon className="w-4 h-4 text-[#2BC48A]" strokeWidth={1.75} />
                <span>Connect with our enterprise architecture team</span>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => onOpenContact('briefing')}
                  className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-lg transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Request a briefing
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.75} />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenContact('partnership')}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-white/8 hover:bg-white/14 border border-white/20 hover:border-[#2BC48A] rounded-lg transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A]"
                >
                  Talk to partnerships
                </button>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-3">
                <span className="text-xs text-emerald-100/75">
                  Enterprise SSO portal
                </span>
                <button
                  type="button"
                  onClick={onOpenSignIn}
                  className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white hover:text-[#2BC48A] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2BC48A] rounded"
                >
                  <span>Existing customer? Sign in</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2BC48A] group-hover:translate-x-0.5 transition-transform" strokeWidth={1.75} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onOpenSignIn,
  currentPage,
  onNavigate,
}) => {
  const [footerLogoFailed, setFooterLogoFailed] = useState(false);

  const handleAnchorLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash?: string
  ) => {
    if (currentPage !== 'home') {
      e.preventDefault();
      onNavigate('home', hash);
    }
  };

  return (
    <footer className="bg-[#070C15] text-slate-300 py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-white/10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-4">
            <a
              href="#top"
              onClick={(e) => handleAnchorLink(e)}
              aria-label="GOQii HealthEngage Home"
              className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2BC48A] rounded"
            >
              {footerLogoFailed ? (
                <BrandMark variant="dark" />
              ) : (
                <img
                  src={FOOTER_LOGO_URL}
                  alt="GOQii HealthEngage"
                  referrerPolicy="no-referrer"
                  onError={() => setFooterLogoFailed(true)}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              )}
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs">
              Connected Health Enterprise SaaS Platform — care delivery, remote
              monitoring, member engagement, insurance operations, pharma support
              programs, AI, APIs, and device interoperability.
            </p>
          </div>

          {/* Platform Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold text-white tracking-wide">
              Platform
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#platform-overview"
                  onClick={(e) => handleAnchorLink(e, '#platform-overview')}
                  className="text-slate-400 hover:text-[#2BC48A] transition-colors"
                >
                  Application Layer
                </a>
              </li>
              <li>
                <a
                  href="#platform-architecture"
                  onClick={(e) => handleAnchorLink(e, '#platform-architecture')}
                  className="text-slate-400 hover:text-[#2BC48A] transition-colors"
                >
                  Platform Architecture
                </a>
              </li>
              <li>
                <a
                  href="#platform-categories"
                  onClick={(e) => handleAnchorLink(e, '#platform-categories')}
                  className="text-slate-400 hover:text-[#2BC48A] transition-colors"
                >
                  Platform Categories
                </a>
              </li>
              <li>
                <a
                  href="#module-architecture"
                  onClick={(e) => handleAnchorLink(e, '#module-architecture')}
                  className="text-slate-400 hover:text-[#2BC48A] transition-colors"
                >
                  Module Architecture
                </a>
              </li>
              <li>
                <a
                  href="#why-goqii-healthengage"
                  onClick={(e) => handleAnchorLink(e, '#why-goqii-healthengage')}
                  className="text-slate-400 hover:text-[#2BC48A] transition-colors"
                >
                  Why GOQii HealthEngage
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  onClick={(e) => handleAnchorLink(e, '#industries')}
                  className="text-slate-400 hover:text-[#2BC48A] transition-colors"
                >
                  Industries
                </a>
              </li>
            </ul>
          </div>

          {/* Categories Mirror */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-white tracking-wide">
              Categories
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {PLATFORM_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    onClick={(e) => handleAnchorLink(e, `#${cat.id}`)}
                    className="text-slate-400 hover:text-[#2BC48A] transition-colors"
                  >
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance Pages */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold text-white tracking-wide">
              Governance
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="/security"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('security');
                  }}
                  className={`transition-colors ${
                    currentPage === 'security'
                      ? 'text-[#2BC48A] font-medium'
                      : 'text-slate-400 hover:text-[#2BC48A]'
                  }`}
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="/trust"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('trust');
                  }}
                  className={`transition-colors ${
                    currentPage === 'trust'
                      ? 'text-[#2BC48A] font-medium'
                      : 'text-slate-400 hover:text-[#2BC48A]'
                  }`}
                >
                  Trust
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('privacy');
                  }}
                  className={`transition-colors ${
                    currentPage === 'privacy'
                      ? 'text-[#2BC48A] font-medium'
                      : 'text-slate-400 hover:text-[#2BC48A]'
                  }`}
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className={`transition-colors ${
                    currentPage === 'contact'
                      ? 'text-[#2BC48A] font-medium'
                      : 'text-slate-400 hover:text-[#2BC48A]'
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold text-white tracking-wide">
              Access
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#module-architecture"
                  onClick={(e) => handleAnchorLink(e, '#module-architecture')}
                  className="text-slate-400 hover:text-[#2BC48A] transition-colors"
                >
                  Explore Platform
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenContact('briefing')}
                  className="text-slate-400 hover:text-[#2BC48A] transition-colors cursor-pointer text-left"
                >
                  Talk to Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenSignIn}
                  className="text-slate-400 hover:text-[#2BC48A] transition-colors cursor-pointer text-left"
                >
                  Sign in
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} GOQii HealthEngage. All rights reserved.</p>
          <p className="tabular-nums">
            7 Platform categories · 60+ Modules &amp; services · FHIR/HL7 Standards-ready
          </p>
        </div>
      </div>
    </footer>
  );
};
