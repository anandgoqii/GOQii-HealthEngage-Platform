import React, { useState } from 'react';
import { ArrowRight, BrainCircuit, Layers } from 'lucide-react';
import {
  PLATFORM_ARCHITECTURE_PILLARS,
  PLATFORM_CATEGORIES,
} from '../data/platformData';
import { CATEGORY_VISUALS, MODULE_COLOR_THEMES } from '../data/moduleVisuals';

export const PlatformArchitectureSection: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>('arch-care');

  const applicationPillars = PLATFORM_ARCHITECTURE_PILLARS.filter(
    (p) => p.tier === 'application'
  );
  const intelligencePillar = PLATFORM_ARCHITECTURE_PILLARS.find(
    (p) => p.tier === 'intelligence'
  );
  const ecosystemPillar = PLATFORM_ARCHITECTURE_PILLARS.find(
    (p) => p.tier === 'ecosystem'
  );

  const activePillar =
    PLATFORM_ARCHITECTURE_PILLARS.find((p) => p.id === activePillarId) ||
    applicationPillars[0];
  const activeCategorySummary = PLATFORM_CATEGORIES.find(
    (c) => c.id === activePillar.targetCategoryId
  );

  const activePillarIndex = applicationPillars.findIndex(
    (p) => p.id === activePillarId
  );
  const colCenters = [100, 300, 500, 700, 900];
  const activeTraceX = activePillarIndex >= 0 ? colCenters[activePillarIndex] : 500;

  const intelVisual = intelligencePillar
    ? CATEGORY_VISUALS[intelligencePillar.targetCategoryId]
    : undefined;
  const IntelIcon = intelVisual?.icon || BrainCircuit;
  const intelTheme = MODULE_COLOR_THEMES[intelVisual?.color || 'violet'];

  const ecoVisual = ecosystemPillar
    ? CATEGORY_VISUALS[ecosystemPillar.targetCategoryId]
    : undefined;
  const EcoIcon = ecoVisual?.icon || Layers;

  return (
    <section
      id="platform-architecture"
      className="py-16 sm:py-20 bg-white border-b border-[#E8EDF2]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs sm:text-sm font-semibold text-[#158059] tracking-wide mb-2">
              GOQii HealthEngage
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight">
              Platform Architecture
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md">
            Seven platform pillars connected across application capabilities, shared
            intelligence, ecosystem integrations, and platform control.
          </p>
        </div>

        {/* Architectural Topology Matrix */}
        <div className="bg-[#F8FAFB] bg-arch-grid border border-[#E8EDF2] rounded-2xl p-5 sm:p-8 lg:p-10">
          <div className="space-y-0">
            {/* ROW 1: Business and application capabilities */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
              <div className="lg:col-span-3 flex flex-col justify-center lg:pr-4">
                <span className="text-[11px] font-semibold text-[#158059] tabular-nums">
                  Layer 01
                </span>
                <h3 className="text-sm font-semibold text-[#0F172A] mt-0.5">
                  Business and application capabilities
                </h3>
              </div>

              <div className="lg:col-span-9 bg-white border border-[#E8EDF2] rounded-xl p-4 sm:p-5">
                <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-5 gap-3">
                  {applicationPillars.map((pillar, index) => {
                    const catVisual = CATEGORY_VISUALS[pillar.targetCategoryId] || {
                      icon: Layers,
                      color: 'emerald' as const,
                    };
                    const Icon = catVisual.icon;
                    const theme = MODULE_COLOR_THEMES[catVisual.color];
                    const isActive = activePillarId === pillar.id;
                    const spanClass =
                      index < 3
                        ? 'sm:col-span-2 lg:col-span-1'
                        : index === 4
                        ? 'col-span-2 sm:col-span-3 lg:col-span-1'
                        : 'sm:col-span-3 lg:col-span-1';

                    return (
                      <button
                        key={pillar.id}
                        type="button"
                        onClick={() => setActivePillarId(pillar.id)}
                        onMouseEnter={() => setActivePillarId(pillar.id)}
                        aria-pressed={isActive}
                        className={`group card-interactive text-left p-3.5 rounded-xl border cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A] ${spanClass} ${
                          isActive
                            ? 'bg-white border-[#2BC48A] ring-1 ring-[#2BC48A]/25'
                            : 'bg-white border-[#E8EDF2] hover:border-[#2BC48A]/70'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span
                            className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${theme.iconBox} ${theme.iconBoxHover}`}
                          >
                            <Icon className="w-4 h-4" />
                          </span>
                          <span
                            className={`h-1.5 w-4 rounded-full transition-colors ${
                              isActive ? 'bg-[#2BC48A]' : 'bg-[#E2E8F0] group-hover:bg-[#CBD5E1]'
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex items-center justify-between gap-1">
                          <div className="text-sm font-semibold text-[#0F172A]">
                            {pillar.label}
                          </div>
                          <ArrowRight
                            className={`w-3.5 h-3.5 transition-transform ${
                              isActive
                                ? 'text-[#158059] translate-x-0.5'
                                : 'text-[#94A3B8] group-hover:text-[#0F172A] group-hover:translate-x-0.5'
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* SVG Vertical Routing Matrix: Layer 1 -> Layer 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6" aria-hidden="true">
              <div className="hidden lg:block lg:col-span-3" />
              <div className="lg:col-span-9">
                <div className="hidden lg:block h-9 px-5">
                  <svg
                    viewBox="0 0 1000 36"
                    fill="none"
                    className="w-full h-9"
                    preserveAspectRatio="none"
                  >
                    {colCenters.map((cx) => (
                      <line
                        key={`p1-${cx}`}
                        x1={cx}
                        y1="0"
                        x2={cx}
                        y2="36"
                        stroke="#CBD5E1"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                    ))}
                    <line
                      x1={activeTraceX}
                      y1="0"
                      x2={activeTraceX}
                      y2="36"
                      stroke="#2BC48A"
                      strokeWidth="2.5"
                    />
                    <circle cx={activeTraceX} cy="18" r="3.5" fill="#2BC48A" />
                  </svg>
                </div>
                <div className="lg:hidden flex justify-center py-2">
                  <div className="w-px h-5 bg-[#2BC48A]" />
                </div>
              </div>
            </div>

            {/* ROW 2: Shared data and AI */}
            {intelligencePillar && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
                <div className="lg:col-span-3 flex flex-col justify-center lg:pr-4">
                  <span className="text-[11px] font-semibold text-[#158059] tabular-nums">
                    Layer 02
                  </span>
                  <h3 className="text-sm font-semibold text-[#0F172A] mt-0.5">
                    Shared data and AI
                  </h3>
                </div>

                <div className="lg:col-span-9">
                  <button
                    type="button"
                    onClick={() => setActivePillarId(intelligencePillar.id)}
                    onMouseEnter={() => setActivePillarId(intelligencePillar.id)}
                    aria-pressed={activePillarId === intelligencePillar.id}
                    className={`group card-interactive w-full text-left bg-white rounded-xl p-5 border cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A] ${
                      activePillarId === intelligencePillar.id
                        ? 'border-[#2BC48A] ring-1 ring-[#2BC48A]/25'
                        : 'border-[#E8EDF2] hover:border-[#2BC48A]/70'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${intelTheme.iconBox} ${intelTheme.iconBoxHover}`}
                      >
                        <IntelIcon className="w-5 h-5" />
                      </span>
                      <div>
                        <div className="text-base font-semibold text-[#0F172A]">
                          {intelligencePillar.label}
                        </div>
                        <div className="text-xs text-[#64748B] mt-0.5">
                          Data platforms and AI engines powering intelligence across GOQii HealthEngage
                        </div>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap ${intelTheme.textAccent}`}
                    >
                      5 modules · 3 subgroups
                      <ArrowRight
                        className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* SVG Vertical Routing Matrix: Layer 2 -> Layer 3 & 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6" aria-hidden="true">
              <div className="hidden lg:block lg:col-span-3" />
              <div className="lg:col-span-9">
                <div className="hidden lg:block h-9 px-5">
                  <svg
                    viewBox="0 0 1000 36"
                    fill="none"
                    className="w-full h-9"
                    preserveAspectRatio="none"
                  >
                    <line x1="250" y1="0" x2="250" y2="36" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="500" y1="0" x2="500" y2="36" stroke="#2BC48A" strokeWidth="2.5" />
                    <line x1="750" y1="0" x2="750" y2="36" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                    <circle cx="500" cy="18" r="3.5" fill="#2BC48A" />
                  </svg>
                </div>
                <div className="lg:hidden flex justify-center py-2">
                  <div className="w-px h-5 bg-[#2BC48A]" />
                </div>
              </div>
            </div>

            {/* ROW 3 & 4: Integration and device ecosystem + Platform control and orchestration */}
            {ecosystemPillar && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
                <div className="lg:col-span-3 flex flex-col justify-center lg:pr-4 space-y-2">
                  <div>
                    <span className="text-[11px] font-semibold text-[#158059] tabular-nums">
                      Layer 03
                    </span>
                    <h3 className="text-sm font-semibold text-[#0F172A] mt-0.5">
                      Integration and device ecosystem
                    </h3>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#158059] tabular-nums">
                      Layer 04
                    </span>
                    <h3 className="text-sm font-semibold text-[#0F172A] mt-0.5">
                      Platform control and orchestration
                    </h3>
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <button
                    type="button"
                    onClick={() => setActivePillarId(ecosystemPillar.id)}
                    onMouseEnter={() => setActivePillarId(ecosystemPillar.id)}
                    aria-pressed={activePillarId === ecosystemPillar.id}
                    className={`group card-interactive-dark w-full text-left bg-[#0B1220] text-white rounded-xl p-5 sm:p-6 border cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A] ${
                      activePillarId === ecosystemPillar.id
                        ? 'border-[#2BC48A] ring-1 ring-[#2BC48A]/40'
                        : 'border-[#0F172A] hover:border-[#2BC48A]/70'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-10 h-10 rounded-xl bg-[#2BC48A] text-[#0F172A] flex items-center justify-center shrink-0">
                        <EcoIcon className="w-5 h-5" />
                      </span>
                      <div>
                        <div className="text-base font-semibold text-white">
                          {ecosystemPillar.label}
                        </div>
                        <div className="text-xs text-slate-300 mt-0.5">
                          APIs, devices, integrations, and control planes for the broader ecosystem
                        </div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2BC48A] whitespace-nowrap tabular-nums">
                      7 modules · 4 subgroups
                      <ArrowRight
                        className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Selected Pillar Summary Footer */}
          {activeCategorySummary && (
            <div className="mt-6 pt-5 border-t border-[#E8EDF2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-xl p-4 sm:px-5 border">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#158059] tabular-nums">
                  <span>{activeCategorySummary.number}</span>
                  <span aria-hidden="true" className="text-[#CBD5E1]">
                    ·
                  </span>
                  <span className="text-[#0F172A]">{activePillar.label}</span>
                  <span aria-hidden="true" className="text-[#CBD5E1]">
                    ·
                  </span>
                  <span className="text-[#64748B] font-medium">
                    {activeCategorySummary.moduleCountLabel} ·{' '}
                    {activeCategorySummary.subgroupCountLabel}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  {activeCategorySummary.description}
                </p>
              </div>

              <a
                href={`#${activeCategorySummary.id}`}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Explore {activePillar.label}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
