import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { HERO_STATS } from '../data/platformData';
import {
  CATEGORY_VISUALS,
  MODULE_COLOR_THEMES,
  ModuleColorKey,
} from '../data/moduleVisuals';

interface HeroSectionProps {
  onOpenContact: (mode: 'briefing' | 'partnership') => void;
  onOpenSignIn: () => void;
}

interface HeroNode {
  id: string;
  label: string;
  targetId: string;
  detail: string;
  color: ModuleColorKey;
  colIndex: 0 | 1 | 2;
  activeSubstrates: string[];
}

const HERO_PILLARS: HeroNode[] = [
  {
    id: 'care',
    label: 'Care',
    targetId: 'category-01',
    detail: 'Care delivery, navigation, and clinical workflows',
    color: CATEGORY_VISUALS['category-01'].color,
    colIndex: 0,
    activeSubstrates: ['FHIR / HL7', 'APIs & SDKs'],
  },
  {
    id: 'rpm',
    label: 'RPM',
    targetId: 'category-02',
    detail: 'Continuous remote patient monitoring & vitals',
    color: CATEGORY_VISUALS['category-02'].color,
    colIndex: 1,
    activeSubstrates: ['Devices & IoT', 'Data & AI'],
  },
  {
    id: 'engage',
    label: 'Engage',
    targetId: 'category-03',
    detail: 'Member engagement, content, rewards & wellness',
    color: CATEGORY_VISUALS['category-03'].color,
    colIndex: 2,
    activeSubstrates: ['APIs & SDKs', 'Data & AI'],
  },
  {
    id: 'insurance',
    label: 'Insurance',
    targetId: 'category-04',
    detail: 'Insurance workflows, CRM, and member operations',
    color: CATEGORY_VISUALS['category-04'].color,
    colIndex: 0,
    activeSubstrates: ['FHIR / HL7', 'APIs & SDKs'],
  },
  {
    id: 'pharma',
    label: 'Pharma',
    targetId: 'category-05',
    detail: 'PSP, PAP, acquisition, and specialty therapies',
    color: CATEGORY_VISUALS['category-05'].color,
    colIndex: 1,
    activeSubstrates: ['Data & AI', 'FHIR / HL7'],
  },
  {
    id: 'ai',
    label: 'AI',
    targetId: 'category-06',
    detail: 'Data platforms and clinical AI engines',
    color: CATEGORY_VISUALS['category-06'].color,
    colIndex: 2,
    activeSubstrates: ['Data & AI', 'Devices & IoT'],
  },
];

const CORE_SUBSTRATES = ['Data & AI', 'APIs & SDKs', 'Devices & IoT', 'FHIR / HL7'];
const COL_X_POSITIONS: Record<0 | 1 | 2, number> = { 0: 80, 1: 240, 2: 400 };

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onOpenSignIn,
}) => {
  const [activeNodeId, setActiveNodeId] = useState<string>('care');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveNodeId((prevId) => {
        const currentIndex = HERO_PILLARS.findIndex((p) => p.id === prevId);
        const nextIndex = (currentIndex + 1) % HERO_PILLARS.length;
        return HERO_PILLARS[nextIndex].id;
      });
    }, 3200);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  const activeNode =
    HERO_PILLARS.find((node) => node.id === activeNodeId) || HERO_PILLARS[0];
  const activeColX = COL_X_POSITIONS[activeNode.colIndex];

  return (
    <section
      id="top"
      className="relative bg-white border-b border-[#E8EDF2] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand, Headline, Copy, CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#158059]">
              <span className="inline-block w-5 h-0.5 bg-[#2BC48A]" aria-hidden="true" />
              <span>GOQii HealthEngage</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold tracking-tight text-[#0F172A] leading-[1.15] text-balance">
              Connected Health Enterprise SaaS Platform
            </h1>

            <p className="text-base sm:text-[17px] text-[#64748B] leading-[1.65] max-w-xl">
              A unified platform for care delivery, remote monitoring, member engagement,
              insurance operations, pharma support programs, AI, APIs, and device
              interoperability — composable across insurers, hospitals, pharma,
              employers, and digital health partners.
            </p>

            {/* Primary and Secondary Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#module-architecture"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A]"
              >
                Explore Platform
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => onOpenContact('briefing')}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0F172A] bg-white border border-[#E8EDF2] hover:border-[#0F172A]/30 hover:bg-[#F8FAFB] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A]"
              >
                Talk to Us
              </button>
            </div>

            {/* Secondary sign-in action */}
            <div className="pt-0.5">
              <button
                type="button"
                onClick={onOpenSignIn}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2BC48A] rounded"
              >
                <span>Already a customer? Sign in</span>
                <span
                  aria-hidden="true"
                  className="text-[#158059] group-hover:translate-x-0.5 transition-transform"
                >
                  →
                </span>
              </button>
            </div>

            {/* Key Statistics */}
            <div className="pt-6 mt-2 border-t border-[#E8EDF2] grid grid-cols-3 gap-4 sm:gap-8">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-[#0F172A] tabular-nums tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-[13px] font-medium text-[#64748B] leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Connected Platform Architecture Visual */}
          <div className="lg:col-span-6">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="bg-[#F8FAFB] bg-arch-grid border border-[#E8EDF2] rounded-2xl p-5 sm:p-7 shadow-[0_8px_24px_-8px_rgba(15,23,42,0.08)]"
            >
              {/* Top Architecture Header */}
              <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-[#E8EDF2]">
                <div>
                  <p className="text-xs font-semibold text-[#158059] tracking-wide">
                    GOQii HealthEngage
                  </p>
                  <p className="text-sm font-semibold text-[#0F172A] mt-0.5">
                    Unified Connected Health Architecture
                  </p>
                </div>
                <span className="text-xs font-medium text-[#64748B] tabular-nums whitespace-nowrap">
                  7 Categories · 60+ Modules
                </span>
              </div>

              {/* Connected Pillar Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {HERO_PILLARS.map((pillar) => {
                  const Icon = CATEGORY_VISUALS[pillar.targetId].icon;
                  const theme = MODULE_COLOR_THEMES[pillar.color];
                  const isActive = pillar.id === activeNodeId;

                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onMouseEnter={() => setActiveNodeId(pillar.id)}
                      onFocus={() => {
                        setIsPaused(true);
                        setActiveNodeId(pillar.id);
                      }}
                      onBlur={() => setIsPaused(false)}
                      onClick={() => setActiveNodeId(pillar.id)}
                      className="relative group card-interactive text-left p-3.5 rounded-xl border border-[#E8EDF2] bg-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A]"
                    >
                      {/* Smoothly gliding spring active border */}
                      {isActive && (
                        <motion.span
                          layoutId="hero-pillar-ring"
                          transition={{
                            type: 'spring',
                            stiffness: 360,
                            damping: 30,
                          }}
                          className="absolute inset-0 rounded-xl border-2 border-[#2BC48A] shadow-[0_6px_16px_-4px_rgba(43,196,138,0.22)] pointer-events-none"
                          aria-hidden="true"
                        />
                      )}

                      <div className="relative z-10">
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span
                            className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${theme.iconBox} ${theme.iconBoxHover}`}
                          >
                            <Icon className="w-4 h-4" />
                          </span>
                          <span
                            className={`h-1.5 w-4 rounded-full transition-colors duration-200 ${
                              isActive
                                ? theme.accentBar
                                : 'bg-[#E2E8F0] group-hover:bg-[#CBD5E1]'
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex items-center justify-between gap-1">
                          <div className="text-sm font-semibold text-[#0F172A]">
                            {pillar.label}
                          </div>
                          <ArrowRight
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isActive
                                ? 'text-[#158059] translate-x-0.5'
                                : 'text-[#94A3B8] group-hover:text-[#0F172A] group-hover:translate-x-0.5'
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                        <div className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                          Connected Layer
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Animated Signal Bus Lines SVG */}
              <div className="py-1.5 flex justify-center" aria-hidden="true">
                <svg
                  viewBox="0 0 480 34"
                  fill="none"
                  className="w-full h-8"
                  preserveAspectRatio="none"
                >
                  {/* Structural bus traces for all 3 columns */}
                  <path
                    d="M80 0 V14 C80 16.2091 81.7909 18 84 18 H396 C398.209 18 400 16.2091 400 14 V0"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                  />
                  <line x1="240" y1="0" x2="240" y2="34" stroke="#CBD5E1" strokeWidth="1.5" />

                  {/* Animated signal path from active column down into Shared Platform Core */}
                  <motion.path
                    key={activeNode.id}
                    d={`M ${activeColX} 0 V 18 H 240 V 34`}
                    stroke="#2BC48A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={prefersReducedMotion ? false : { pathLength: 0.15, opacity: 0.4 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.circle
                    key={`node-${activeNode.id}`}
                    cx={activeColX}
                    cy="18"
                    r="3.5"
                    fill="#2BC48A"
                    initial={prefersReducedMotion ? false : { scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  />
                  <circle cx="240" cy="18" r="4" fill="#0F172A" stroke="#2BC48A" strokeWidth="2" />
                </svg>
              </div>

              {/* Shared Platform Core Strip */}
              <div className="bg-[#0F172A] text-white rounded-xl p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-h-[46px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeNode.id}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="text-xs font-medium text-[#2BC48A]">
                        Shared Platform Core · {activeNode.label}
                      </div>
                      <div className="text-sm font-medium text-white/95 mt-0.5">
                        {activeNode.detail}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  <a
                    href={`#${activeNode.targetId}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2BC48A] hover:text-white transition-colors whitespace-nowrap shrink-0"
                  >
                    View modules
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="mt-3.5 pt-3 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-medium">
                  {CORE_SUBSTRATES.map((substrate) => {
                    const isHighlighted =
                      activeNode.activeSubstrates.includes(substrate);
                    return (
                      <div
                        key={substrate}
                        className={`px-2.5 py-1.5 rounded border text-center transition-colors duration-200 ${
                          isHighlighted
                            ? 'bg-[#2BC48A]/15 border-[#2BC48A]/60 text-white'
                            : 'bg-white/5 border-white/10 text-slate-300'
                        }`}
                      >
                        {substrate}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
