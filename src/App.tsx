/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ApplicationLayerSection } from './components/ApplicationLayerSection';
import { PlatformArchitectureSection } from './components/PlatformArchitectureSection';
import { PlatformCategoriesSection } from './components/PlatformCategoriesSection';
import { ModuleArchitectureSection } from './components/ModuleArchitectureSection';
import {
  WhyGoqiiSection,
  IndustriesSection,
} from './components/WhyAndIndustriesSections';
import {
  EnterpriseCtaSection,
  Footer,
} from './components/EnterpriseCtaAndFooter';
import {
  ContactModal,
  ModuleDetailModal,
  SelectedModuleContext,
  SignInModal,
} from './components/ActionModals';
import {
  ContactInquiryTrack,
  ContactPage,
  PageRoute,
  PrivacyPage,
  SecurityPage,
  TrustPage,
} from './components/GovernancePages';

function parseRouteFromPathname(pathname: string): PageRoute {
  const normalized = pathname.replace(/\/+$/, '').toLowerCase();
  if (normalized.endsWith('/security')) return 'security';
  if (normalized.endsWith('/trust')) return 'trust';
  if (normalized.endsWith('/privacy')) return 'privacy';
  if (normalized.endsWith('/contact')) return 'contact';
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() =>
    typeof window !== 'undefined'
      ? parseRouteFromPathname(window.location.pathname)
      : 'home'
  );
  const [contactTrack, setContactTrack] =
    useState<ContactInquiryTrack>('Platform Briefing');
  const [contactOpen, setContactOpen] = useState(false);
  const [contactMode, setContactMode] = useState<'briefing' | 'partnership'>(
    'briefing'
  );
  const [contactIndustry, setContactIndustry] = useState<string | undefined>(
    undefined
  );
  const [contactNotes, setContactNotes] = useState<string | undefined>(
    undefined
  );
  const [signInOpen, setSignInOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [selectedModule, setSelectedModule] =
    useState<SelectedModuleContext | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(parseRouteFromPathname(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (
    page: PageRoute,
    optionsOrHash?: string | { track?: ContactInquiryTrack }
  ) => {
    const hash = typeof optionsOrHash === 'string' ? optionsOrHash : undefined;
    const track =
      typeof optionsOrHash === 'object' ? optionsOrHash?.track : undefined;

    if (track) {
      setContactTrack(track);
    }

    const targetPath = page === 'home' ? '/' : `/${page}`;
    const fullUrl = hash ? `${targetPath}${hash}` : targetPath;
    if (window.location.pathname + window.location.hash !== fullUrl) {
      window.history.pushState({}, '', fullUrl);
    }

    setCurrentPage(page);

    if (hash && page === 'home') {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const id = hash.replace(/^#/, '');
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 40);
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenContact = (
    mode: 'briefing' | 'partnership',
    options?: { industry?: string; notes?: string }
  ) => {
    setContactMode(mode);
    setContactIndustry(options?.industry);
    setContactNotes(options?.notes);
    setContactOpen(true);
  };

  const handleBriefingFromModule = (moduleName: string) => {
    setSelectedModule(null);
    handleOpenContact('briefing', {
      notes: `Interested in a briefing on ${moduleName}.`,
    });
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#F8FAFB] text-[#0F172A]">
      {/* 1. Header and Navigation */}
      <Header
        onOpenContact={(mode) => handleOpenContact(mode)}
        onOpenSignIn={() => setSignInOpen(true)}
        onHiddenChange={setIsHeaderHidden}
        currentPage={currentPage}
        onNavigate={(page, hash) => navigateTo(page, hash)}
      />

      <main className="flex-1">
        {currentPage === 'security' ? (
          <SecurityPage
            onNavigate={(page, opts) => navigateTo(page, opts)}
          />
        ) : currentPage === 'trust' ? (
          <TrustPage
            onNavigate={(page, opts) => navigateTo(page, opts)}
          />
        ) : currentPage === 'privacy' ? (
          <PrivacyPage
            onNavigate={(page, opts) => navigateTo(page, opts)}
          />
        ) : currentPage === 'contact' ? (
          <ContactPage
            onNavigate={(page, opts) => navigateTo(page, opts)}
            onOpenSignIn={() => setSignInOpen(true)}
            initialTrack={contactTrack}
          />
        ) : (
          <>
            {/* 2. Hero — Connected Health Enterprise SaaS Platform */}
            {/* 3. Platform Overview and Statistics (integrated in Hero) */}
            <HeroSection
              onOpenContact={(mode) => handleOpenContact(mode)}
              onOpenSignIn={() => setSignInOpen(true)}
            />

            {/* 4. Platform Application Layer */}
            <ApplicationLayerSection />

            {/* 5. Platform Architecture */}
            <PlatformArchitectureSection />

            {/* 6. Seven Platform Categories */}
            <PlatformCategoriesSection />

            {/* 7. Complete Module Architecture */}
            <ModuleArchitectureSection
              onSelectModule={setSelectedModule}
              isHeaderHidden={isHeaderHidden}
            />

            {/* 8. Why GOQii HealthEngage */}
            <WhyGoqiiSection />

            {/* 9. Industries */}
            <IndustriesSection
              onSelectIndustry={(industryTitle) =>
                handleOpenContact('briefing', { industry: industryTitle })
              }
            />

            {/* 10. Enterprise & Partnerships CTA */}
            <EnterpriseCtaSection
              onOpenContact={(mode) => handleOpenContact(mode)}
              onOpenSignIn={() => setSignInOpen(true)}
            />
          </>
        )}
      </main>

      {/* 11. Footer */}
      <Footer
        onOpenContact={(mode) => handleOpenContact(mode)}
        onOpenSignIn={() => setSignInOpen(true)}
        currentPage={currentPage}
        onNavigate={(page, hash) => navigateTo(page, hash)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactOpen}
        mode={contactMode}
        initialIndustry={contactIndustry}
        initialNotes={contactNotes}
        onClose={() => setContactOpen(false)}
      />
      <ModuleDetailModal
        selected={selectedModule}
        onClose={() => setSelectedModule(null)}
        onRequestBriefing={handleBriefingFromModule}
      />
      <SignInModal isOpen={signInOpen} onClose={() => setSignInOpen(false)} />
    </div>
  );
}
