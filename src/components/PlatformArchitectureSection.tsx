import React, { useState } from 'react';
import { ArrowRight, BrainCircuit, Cable, Layers, Shield } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import {
  PLATFORM_ARCHITECTURE_PILLARS,
  PLATFORM_CATEGORIES,
} from '../data/platformData';
import {
  CATEGORY_VISUALS,
  SECTION_VISUALS,
} from '../data/moduleVisuals';

export const PlatformArchitectureSection: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>('arch-care');
  const prefersReducedMotion = useReducedMotion();

  const SectionIcon = SECTION_VISUALS.architecture;

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
  const isIntelOrEcoActive =
    activePillarId === 'arch-data-ai' || activePillarId === 'arch-platform';

  return (
    <section
      id="platform-architecture"
      className="py-16 sm:py-24 bg-[#EFF4F9] border-b border-[#D8E2EE]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header with Network Icon Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-6 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#158059] tracking-wide">
              <SectionIcon className="w-4 h-4" strokeWidth={1.75} />
              <span>GOQii HealthEngage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-[#0F172A] tracking-tight leading-tight">
              Platform Architecture
            </h2>
          </div>
          <div className="lg:col-span-6 lg:flex lg:justify-end">
            <p className="text-sm sm:text-base text-[#475569] max-w-lg">
              Four connected layers showing how domain applications draw on shared
              intelligence, external integrations, and platform governance.
            </p>
          </div>
        </div>

        {/* Custom Connected Systems Diagram */}
        <div className="bg-white bg-arch-grid border border-[#D8E2EE] rounded-xl p-5 sm:p-8 lg:p-10">
          <div className="space-y-0">
            {/* LAYER 01: Business and application capabilities */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-stretch">
              <div className="lg:col-span-3 flex flex-col justify-center">
                <span className="text-[11px] font-semibold text-[#158059] tabular-nums">
                  Layer 01
                </span>
                <h3 className="text-sm sm:text-base font-semibold text-[#0F172A] mt-0.5">
                  Business and application capabilities
                </h3>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  Domain experiences powered by lower-layer services.
                </p>
              </div>

              <div className="lg:col-span-9">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-white border border-[#E8EDF2] rounded-xl overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-[#E8EDF2]">
                  {applicationPillars.map((pillar, index) => {
                    const isActive = activePillarId === pillar.id;
                    const PillarIcon =
                      CATEGORY_VISUALS[pillar.targetCategoryId]?.icon || Layers;
                    const catSummary = PLATFORM_CATEGORIES.find(
                      (c) => c.id === pillar.targetCategoryId
                    );

                    return (
                      <button
                        key={pillar.id}
                        type="button"
                        onClick={() => setActivePillarId(pillar.id)}
                        onMouseEnter={() => setActivePillarId(pillar.id)}
                        aria-pressed={isActive}
                        className={`group relative text-left p-4 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2BC48A] ${
                          index === 4 ? 'col-span-2 sm:col-span-1' : ''
                        } ${
                          isActive
                            ? 'bg-[#0F172A] text-white'
                            : 'bg-white text-[#0F172A] hover:bg-[#F8FAFB]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <PillarIcon
                            strokeWidth={1.75}
                            className={`w-4 h-4 transition-colors ${
                              isActive
                                ? 'text-[#2BC48A]'
                                : 'text-[#0F172A] group-hover:text-[#158059]'
                            }`}
                          />
                          <span
                            className={`text-[11px] font-semibold tabular-nums ${
                              isActive ? 'text-[#2BC48A]' : 'text-[#64748B]'
                            }`}
                          >
                            0{index + 1}
                          </span>
                        </div>
                        <div className="text-sm font-semibold">{pillar.label}</div>
                        {catSummary && (
                          <div
                            className={`text-[11px] mt-1 tabular-nums ${
                              isActive ? 'text-slate-300' : 'text-[#64748B]'
                            }`}
                          >
                            {catSummary.moduleCountLabel}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Structured Orthogonal Connector: Layer 01 -> Layer 02 */}
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8"
              aria-hidden="true"
            >
              <div className="hidden lg:block lg:col-span-3" />
              <div className="lg:col-span-9">
                <div className="hidden lg:block h-11">
                  <svg
                    viewBox="0 0 1000 44"
                    fill="none"
                    className="w-full h-11"
                    preserveAspectRatio="none"
                  >
                    {colCenters.map((cx) => (
                      <line
                        key={`bus-${cx}`}
                        x1={cx}
                        y1="0"
                        x2={cx}
                        y2="22"
                        stroke="#CBD5E1"
                        strokeWidth="1.5"
                      />
                    ))}
                    <line
                      x1="100"
                      y1="22"
                      x2="900"
                      y2="22"
                      stroke="#CBD5E1"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="500"
                      y1="22"
                      x2="500"
                      y2="44"
                      stroke="#CBD5E1"
                      strokeWidth="1.5"
                    />
                    {!isIntelOrEcoActive && (
                      <>
                        <motion.path
                          key={`trace-${activePillar.id}`}
                          d={`M ${activeTraceX} 0 V 22 H 500 V 44`}
                          stroke="#2BC48A"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={
                            prefersReducedMotion
                              ? false
                              : { pathLength: 0.2, opacity: 0.5 }
                          }
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        />
                        <circle cx={activeTraceX} cy="22" r="4" fill="#2BC48A" />
                      </>
                    )}
                    <circle
                      cx="500"
                      cy="22"
                      r="4"
                      fill="#0F172A"
                      stroke="#2BC48A"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="lg:hidden flex justify-center py-2">
                  <div className="w-px h-6 bg-[#2BC48A]" />
                </div>
              </div>
            </div>

            {/* LAYER 02: Shared data and AI */}
            {intelligencePillar && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-stretch">
                <div className="lg:col-span-3 flex flex-col justify-center">
                  <span className="text-[11px] font-semibold text-[#158059] tabular-nums">
                    Layer 02
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-[#0F172A] mt-0.5">
                    Shared data and AI
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    Common intelligence plane across every workflow.
                  </p>
                </div>

                <div className="lg:col-span-9">
                  <button
                    type="button"
                    onClick={() => setActivePillarId(intelligencePillar.id)}
                    onMouseEnter={() => setActivePillarId(intelligencePillar.id)}
                    aria-pressed={activePillarId === intelligencePillar.id}
                    className={`group w-full text-left rounded-xl p-5 border transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A] ${
                      activePillarId === intelligencePillar.id
                        ? 'bg-[#0F172A] text-white border-[#0F172A]'
                        : 'bg-white text-[#0F172A] border-[#E8EDF2] hover:border-[#2BC48A]'
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <span
                        className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                          activePillarId === intelligencePillar.id
                            ? 'bg-[#2BC48A]/15 border-[#2BC48A]/40 text-[#2BC48A]'
                            : 'bg-[#F8FAFB] border-[#E8EDF2] text-[#158059]'
                        }`}
                      >
                        <BrainCircuit className="w-5 h-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <div className="text-base font-semibold">
                          {intelligencePillar.label}
                        </div>
                        <div
                          className={`text-xs mt-0.5 leading-relaxed ${
                            activePillarId === intelligencePillar.id
                              ? 'text-slate-300'
                              : 'text-[#64748B]'
                          }`}
                        >
                          Ingests signals from Layer 01 applications and feeds AI,
                          predictions, and analytics back into workflows
                        </div>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap tabular-nums shrink-0 ${
                        activePillarId === intelligencePillar.id
                          ? 'text-[#2BC48A]'
                          : 'text-[#158059]'
                      }`}
                    >
                      5 modules · 3 subgroups
                      <ArrowRight
                        className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Structured Connector: Layer 02 -> Layer 03 & 04 */}
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8"
              aria-hidden="true"
            >
              <div className="hidden lg:block lg:col-span-3" />
              <div className="lg:col-span-9">
                <div className="hidden lg:block h-11">
                  <svg
                    viewBox="0 0 1000 44"
                    fill="none"
                    className="w-full h-11"
                    preserveAspectRatio="none"
                  >
                    <line
                      x1="250"
                      y1="0"
                      x2="250"
                      y2="44"
                      stroke="#CBD5E1"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <motion.line
                      key={`eco-line-${activePillar.id}`}
                      x1="500"
                      y1="0"
                      x2="500"
                      y2="44"
                      stroke="#2BC48A"
                      strokeWidth="2.5"
                      initial={prefersReducedMotion ? false : { pathLength: 0.3 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <line
                      x1="750"
                      y1="0"
                      x2="750"
                      y2="44"
                      stroke="#CBD5E1"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <circle cx="500" cy="22" r="4" fill="#2BC48A" />
                  </svg>
                </div>
                <div className="lg:hidden flex justify-center py-2">
                  <div className="w-px h-6 bg-[#2BC48A]" />
                </div>
              </div>
            </div>

            {/* LAYER 03 & 04: Ecosystem & Control Planes */}
            {ecosystemPillar && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-stretch">
                <div className="lg:col-span-3 flex flex-col justify-center space-y-3">
                  <div>
                    <span className="text-[11px] font-semibold text-[#158059] tabular-nums">
                      Layer 03
                    </span>
                    <h3 className="text-sm font-semibold text-[#0F172A] mt-0.5">
                      Integration and device ecosystem
                    </h3>
                  </div>
                  <div className="pt-2 border-t border-[#E8EDF2]">
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
                    className={`group w-full text-left bg-[#0B1220] text-white rounded-xl border transition-colors cursor-pointer overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A] ${
                      activePillarId === ecosystemPillar.id
                        ? 'border-[#2BC48A]'
                        : 'border-[#0F172A] hover:border-[#2BC48A]/70'
                    }`}
                  >
                    <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10">
                      <div className="flex items-start sm:items-center gap-3.5">
                        <span className="w-10 h-10 rounded-lg bg-[#2BC48A]/15 border border-[#2BC48A]/35 flex items-center justify-center shrink-0 text-[#2BC48A]">
                          <Cable className="w-5 h-5" strokeWidth={1.75} />
                        </span>
                        <div>
                          <div className="text-base font-semibold text-white">
                            {ecosystemPillar.label}
                          </div>
                          <div className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                            Bridges external devices and enterprise systems at the base
                            while enforcing APIs, routing, and tenant governance upward
                          </div>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2BC48A] whitespace-nowrap tabular-nums shrink-0">
                        7 modules · 4 subgroups
                        <ArrowRight
                          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-xs">
                      <div className="px-5 py-3 flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 text-slate-300">
                          <Cable className="w-3.5 h-3.5 text-[#2BC48A]" strokeWidth={1.75} />
                          Layer 03 · Ecosystem
                        </span>
                        <span className="font-medium text-white">
                          API Center · Device Hub · Integrations
                        </span>
                      </div>
                      <div className="px-5 py-3 flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 text-slate-300">
                          <Shield className="w-3.5 h-3.5 text-[#2BC48A]" strokeWidth={1.75} />
                          Layer 04 · Control
                        </span>
                        <span className="font-medium text-white">
                          Admin · Dashboards · Triage · CallIQ
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Layer Relationship Specification Footer */}
          {activeCategorySummary && (
            <div className="mt-8 pt-6 border-t border-[#E8EDF2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tabular-nums">
                  <span className="text-[#158059]">
                    {activeCategorySummary.number}
                  </span>
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
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {activePillar.layerConnection}
                </p>
              </div>

              <a
                href={`#${activeCategorySummary.id}`}
                className="group inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Explore {activePillar.label}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.75} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
