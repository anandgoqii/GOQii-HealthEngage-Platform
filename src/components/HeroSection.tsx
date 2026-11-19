import React, { useEffect, useState } from 'react';
import { ArrowRight, Boxes, Workflow } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { HERO_STATS } from '../data/platformData';
import { SECTION_VISUALS } from '../data/moduleVisuals';
import {
  HERO_WORKSPACE_TABS,
  HeroWorkspaceFrame,
} from './PlatformInterfacePreviews';

interface HeroSectionProps {
  onOpenContact: (mode: 'briefing' | 'partnership') => void;
  onOpenSignIn: () => void;
}

const STAT_CONTEXT_NOTES: Record<string, string> = {
  'Platform categories': 'Care, monitoring, engagement, insurance, pharma, AI, and platform infrastructure',
  'Modules & services': 'Composable enterprise capabilities across 21 functional subgroups',
  'Standards-ready': 'Canonical healthcare interoperability and device telemetry models',
};

const STAT_ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  'Platform categories': Boxes,
  'Modules & services': Workflow,
  'Standards-ready': SECTION_VISUALS.hero,
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onOpenSignIn,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('care');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const prefersReducedMotion = useReducedMotion();

  const HeroIcon = SECTION_VISUALS.hero;
  const OverviewIcon = SECTION_VISUALS.overview;

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveTabId((prevId) => {
        const currentIndex = HERO_WORKSPACE_TABS.findIndex((t) => t.id === prevId);
        const nextIndex = (currentIndex + 1) % HERO_WORKSPACE_TABS.length;
        return HERO_WORKSPACE_TABS[nextIndex].id;
      });
    }, 3800);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  return (
    <section
      id="top"
      className="relative bg-white border-b border-[#E8EDF2]"
    >
      {/* Editorial Two-Column Hero */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline, Proposition, Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wide text-[#158059]">
              <span className="w-7 h-7 rounded-md bg-[#2BC48A]/12 border border-[#2BC48A]/30 flex items-center justify-center text-[#158059]">
                <HeroIcon className="w-4 h-4" strokeWidth={1.75} />
              </span>
              <span>GOQii HealthEngage</span>
            </div>

            <h1 className="text-[34px] sm:text-[44px] lg:text-[50px] font-semibold tracking-[-0.025em] text-[#0F172A] leading-[1.09] text-balance">
              Connected Health Enterprise SaaS Platform
            </h1>

            <p className="text-base sm:text-[17px] text-[#64748B] leading-[1.7] max-w-xl">
              An enterprise SaaS platform built for insurers, hospitals, pharma,
              employers, and digital health partners — helping teams orchestrate
              preventive wellness, continuous care, and partner ecosystems from one
              composable foundation.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#module-architecture"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A]"
              >
                Explore Platform
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.75} />
              </a>

              <button
                type="button"
                onClick={() => onOpenContact('briefing')}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0F172A] bg-white border border-[#E8EDF2] hover:border-[#0F172A]/40 hover:bg-[#F8FAFB] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A]"
              >
                Talk to Us
              </button>
            </div>

            {/* Secondary Sign-In Link */}
            <div>
              <button
                type="button"
                onClick={onOpenSignIn}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2BC48A] rounded"
              >
                <span>Already a customer? Sign in</span>
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.75}
                  className="w-3.5 h-3.5 text-[#158059] group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* Right Column: Realistic Product Workspace Composition */}
          <div className="lg:col-span-6 relative">
            <HeroWorkspaceFrame
              activeTabId={activeTabId}
              onSelectTab={setActiveTabId}
              onPauseChange={setIsPaused}
            />
          </div>
        </div>
      </div>

      {/* Platform Overview — Clean Horizontal Statistics Band */}
      <div className="bg-[#0F172A] text-white border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-6 pb-2 flex items-center gap-2 text-xs font-semibold text-[#2BC48A]">
            <OverviewIcon className="w-3.5 h-3.5 text-[#2BC48A]" strokeWidth={1.75} />
            <span>Platform Overview</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {HERO_STATS.map((stat, idx) => {
              const StatIcon = STAT_ICONS[stat.label] || OverviewIcon;
              return (
                <div
                  key={stat.label}
                  className={`py-6 sm:py-7 ${
                    idx === 0
                      ? 'md:pr-8'
                      : idx === 1
                      ? 'md:px-8'
                      : 'md:pl-8'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-3xl sm:text-4xl font-semibold text-white tabular-nums tracking-tight">
                      {stat.value}
                    </div>
                    <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/12 flex items-center justify-center text-[#2BC48A]">
                      <StatIcon className="w-4 h-4 text-[#2BC48A]" strokeWidth={1.75} />
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-white mt-2.5">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    {STAT_CONTEXT_NOTES[stat.label]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
