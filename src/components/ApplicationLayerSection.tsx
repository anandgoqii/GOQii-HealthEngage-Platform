import React, { useState } from 'react';
import { ArrowRight, Cpu, Lock } from 'lucide-react';
import {
  APPLICATION_LAYER_ITEMS,
  FOUNDATION_LAYER_ITEMS,
} from '../data/platformData';
import {
  APPLICATION_DOMAIN_VISUALS,
  FOUNDATION_ENGINE_VISUALS,
  SECTION_VISUALS,
} from '../data/moduleVisuals';

const ENGINE_PLANE_ITEMS = ['Data & AI', 'Automation', 'APIs', 'Devices', 'Control'];
const TRUST_BEDROCK_ITEMS = ['FHIR / HL7 ready', 'Enterprise security'];

const DOMAIN_ENGINE_MAP: Record<string, string[]> = {
  'app-care': ['Data & AI', 'APIs', 'Control'],
  'app-rpm': ['Data & AI', 'Devices', 'Control'],
  'app-engage': ['Data & AI', 'Automation', 'APIs'],
  'app-insurance': ['Automation', 'APIs', 'Control'],
  'app-pharma': ['Data & AI', 'Automation', 'APIs'],
  'app-ai': ['Data & AI', 'APIs', 'Devices'],
};

export const ApplicationLayerSection: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>(
    APPLICATION_LAYER_ITEMS[0].id
  );

  const SectionIcon = SECTION_VISUALS.application;
  const selectedItem =
    APPLICATION_LAYER_ITEMS.find((item) => item.id === selectedAppId) ||
    APPLICATION_LAYER_ITEMS[0];
  const selectedIndex = APPLICATION_LAYER_ITEMS.findIndex(
    (item) => item.id === selectedItem.id
  );
  const activeEngines = DOMAIN_ENGINE_MAP[selectedItem.id] || ['Data & AI', 'APIs'];

  const colCenters = [100, 300, 500, 700, 900, 1100];
  const activeX = colCenters[selectedIndex] ?? 100;

  return (
    <section
      id="platform-overview"
      className="py-16 sm:py-24 bg-[#EAF7F1] border-b border-[#CDE6DA]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header with Application Layer Icon Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#158059] tracking-wide">
              <SectionIcon className="w-4 h-4" strokeWidth={1.75} />
              <span>GOQii HealthEngage · Platform</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-[#0F172A] tracking-tight leading-tight">
              Application Layer
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-sm sm:text-base text-[#475569]">
              Visual overview of domain apps, core engines, and standards
            </p>
          </div>
        </div>

        {/* Single Unified Architectural Stack Frame */}
        <div className="bg-white border border-[#CDE6DA] rounded-xl overflow-hidden">
          {/* Tier 1 Bar Header */}
          <div className="px-5 sm:px-6 py-3.5 bg-[#F8FAFB] border-b border-[#E8EDF2] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-3 text-xs">
              <span className="font-semibold text-[#0F172A] tabular-nums">
                01 · Application Layer
              </span>
              <span className="text-[#CBD5E1] hidden sm:inline" aria-hidden="true">
                |
              </span>
              <span className="text-[#64748B] hidden sm:inline">
                Select a domain to trace connected core engines
              </span>
            </div>
            <span className="text-xs font-medium text-[#158059]">
              Care · Engagement · Insurance · Pharma
            </span>
          </div>

          {/* Tier 1: 6-Column Ruled Domain Matrix with Domain Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E8EDF2]">
            {APPLICATION_LAYER_ITEMS.map((item, idx) => {
              const isSelected = item.id === selectedAppId;
              const DomainIcon = APPLICATION_DOMAIN_VISUALS[item.id] || SectionIcon;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedAppId(item.id)}
                  onMouseEnter={() => setSelectedAppId(item.id)}
                  aria-pressed={isSelected}
                  className={`group relative text-left p-5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2BC48A] ${
                    idx >= 3 ? 'xl:border-t-0 sm:border-t border-[#E8EDF2]' : ''
                  } ${
                    isSelected
                      ? 'bg-[#F8FAFB]'
                      : 'bg-white hover:bg-[#F8FAFB]/60'
                  }`}
                >
                  {/* Top Active Rule Indicator */}
                  <span
                    className={`absolute top-0 left-0 right-0 h-[3px] transition-colors ${
                      isSelected
                        ? 'bg-[#2BC48A]'
                        : 'bg-transparent group-hover:bg-[#E8EDF2]'
                    }`}
                    aria-hidden="true"
                  />

                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#2BC48A] border-[#2BC48A] text-[#0F172A]'
                          : 'bg-[#F8FAFB] border-[#E8EDF2] text-[#0F172A] group-hover:border-[#2BC48A]'
                      }`}
                    >
                      <DomainIcon className="w-4 h-4" strokeWidth={1.75} />
                    </span>
                    <span className="text-[11px] font-semibold text-[#64748B] tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <div className="text-base font-semibold text-[#0F172A]">
                      {item.label}
                    </div>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected
                          ? 'text-[#158059] translate-x-0.5'
                          : 'text-[#94A3B8] group-hover:text-[#0F172A]'
                      }`}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-xs font-medium text-[#158059] tabular-nums mt-1">
                    {item.countLabel}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Connected Capability SVG Bus (Desktop xl+) */}
          <div className="hidden xl:block border-t border-[#E8EDF2] bg-white" aria-hidden="true">
            <svg
              viewBox="0 0 1200 32"
              fill="none"
              className="w-full h-8"
              preserveAspectRatio="none"
            >
              {colCenters.map((cx) => (
                <line
                  key={`cap-trace-${cx}`}
                  x1={cx}
                  y1="0"
                  x2={cx}
                  y2="16"
                  stroke="#E8EDF2"
                  strokeWidth="1.5"
                />
              ))}
              <line x1="100" y1="16" x2="1100" y2="16" stroke="#CBD5E1" strokeWidth="1.5" />
              <line x1="600" y1="16" x2="600" y2="32" stroke="#CBD5E1" strokeWidth="1.5" />
              <path
                d={`M ${activeX} 0 V 16 H 600 V 32`}
                stroke="#2BC48A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx={activeX} cy="16" r="3.5" fill="#2BC48A" />
              <circle cx="600" cy="16" r="4" fill="#0F172A" stroke="#2BC48A" strokeWidth="2" />
            </svg>
          </div>

          {/* Live Domain-to-Engine Connectivity Inspector Strip */}
          <div className="px-5 sm:px-6 py-4 bg-[#F8FAFB] border-y border-[#E8EDF2] flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <span className="font-semibold text-[#0F172A]">
                {selectedItem.label}
              </span>
              <span className="text-[#CBD5E1]" aria-hidden="true">
                ·
              </span>
              <span className="font-medium text-[#158059] tabular-nums">
                {selectedItem.countLabel}
              </span>
              <span className="text-[#CBD5E1]" aria-hidden="true">
                ·
              </span>
              <span className="text-[#64748B]">{selectedItem.description}</span>
            </div>
            <a
              href={`#${selectedItem.targetCategoryId}`}
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#158059] hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0"
            >
              Inspect architecture
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.75} />
            </a>
          </div>

          {/* Tier 2: Core Platform Engines Ruled Plane */}
          <div>
            <div className="px-5 sm:px-6 py-3 border-b border-[#E8EDF2] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#64748B] tabular-nums">
                02 · Core Platform Engines
              </span>
              <span className="text-xs text-[#64748B] hidden sm:inline">
                Shared intelligence, orchestration, and interoperability
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#E8EDF2]">
              {ENGINE_PLANE_ITEMS.filter((name) =>
                FOUNDATION_LAYER_ITEMS.includes(name)
              ).map((layerName) => {
                const Icon = FOUNDATION_ENGINE_VISUALS[layerName] || Cpu;
                const isEngaged = activeEngines.includes(layerName);
                const targetHref =
                  layerName === 'Data & AI'
                    ? '#category-06'
                    : layerName === 'Automation'
                    ? '#category-03'
                    : '#category-07';

                return (
                  <a
                    key={layerName}
                    href={targetHref}
                    className={`group flex items-center justify-between gap-3 px-5 py-4 transition-colors ${
                      isEngaged
                        ? 'bg-white'
                        : 'bg-[#F8FAFB]/40 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon
                        strokeWidth={1.75}
                        className={`w-4 h-4 shrink-0 transition-colors ${
                          isEngaged
                            ? 'text-[#158059]'
                            : 'text-[#64748B] group-hover:text-[#0F172A]'
                        }`}
                      />
                      <span
                        className={`text-xs sm:text-sm font-semibold truncate transition-colors ${
                          isEngaged
                            ? 'text-[#0F172A]'
                            : 'text-[#64748B] group-hover:text-[#0F172A]'
                        }`}
                      >
                        {layerName}
                      </span>
                    </div>
                    <ArrowRight
                      strokeWidth={1.75}
                      className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                        isEngaged
                          ? 'text-[#158059] group-hover:translate-x-0.5'
                          : 'text-[#CBD5E1] group-hover:text-[#0F172A] group-hover:translate-x-0.5'
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Tier 3: Standards & Security Foundation Band */}
          <div className="bg-[#0B1220] text-white px-5 sm:px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <div className="text-xs font-semibold text-[#2BC48A] tabular-nums">
                03 · Standards &amp; Security Foundation
              </div>
              <div className="text-xs sm:text-sm text-slate-300">
                Unified healthcare interoperability and multi-tenant governance
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {TRUST_BEDROCK_ITEMS.filter((name) =>
                FOUNDATION_LAYER_ITEMS.includes(name)
              ).map((layerName) => {
                const Icon = FOUNDATION_ENGINE_VISUALS[layerName] || Lock;
                return (
                  <div
                    key={layerName}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white whitespace-nowrap"
                  >
                    <Icon className="w-4 h-4 text-[#2BC48A] shrink-0" strokeWidth={1.75} />
                    <span>{layerName}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
