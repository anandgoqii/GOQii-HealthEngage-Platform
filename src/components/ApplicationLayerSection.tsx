import React, { useState } from 'react';
import {
  Activity,
  ArrowRight,
  Cpu,
  Database,
  Lock,
  Plug,
  Settings2,
  Workflow,
} from 'lucide-react';
import {
  APPLICATION_LAYER_ITEMS,
  FOUNDATION_LAYER_ITEMS,
} from '../data/platformData';
import { CATEGORY_VISUALS, MODULE_COLOR_THEMES } from '../data/moduleVisuals';

const ENGINE_PLANE_ITEMS = ['Data & AI', 'Automation', 'APIs', 'Devices', 'Control'];
const TRUST_BEDROCK_ITEMS = ['FHIR / HL7 ready', 'Enterprise security'];

const FOUNDATION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'Data & AI': Database,
  Automation: Workflow,
  APIs: Plug,
  Devices: Cpu,
  Control: Settings2,
  'FHIR / HL7 ready': Activity,
  'Enterprise security': Lock,
};

export const ApplicationLayerSection: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>(
    APPLICATION_LAYER_ITEMS[0].id
  );

  const selectedItem =
    APPLICATION_LAYER_ITEMS.find((item) => item.id === selectedAppId) ||
    APPLICATION_LAYER_ITEMS[0];
  const selectedIndex = APPLICATION_LAYER_ITEMS.findIndex(
    (item) => item.id === selectedItem.id
  );

  // X positions (out of 1200) for the 6 equal columns in the SVG signal bus
  const colCenters = [100, 300, 500, 700, 900, 1100];
  const activeX = colCenters[selectedIndex] ?? 100;

  return (
    <section
      id="platform-overview"
      className="py-16 sm:py-20 bg-[#F8FAFB] border-b border-[#E8EDF2]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <p className="text-xs sm:text-sm font-semibold text-[#158059] tracking-wide">
              GOQii HealthEngage · Platform
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight">
              Application Layer
            </h2>
          </div>
          <p className="text-sm sm:text-base font-medium text-[#64748B]">
            Care · Engagement · Insurance · Pharma
          </p>
        </div>

        {/* Multi-Tier System Stack Blueprint */}
        <div className="bg-white border border-[#E8EDF2] rounded-2xl p-5 sm:p-8 shadow-xs">
          {/* Tier 1 Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-semibold text-[#0F172A]">
                01 · Application Layer
              </span>
              <span className="text-xs text-[#64748B] hidden sm:inline">
                Select a domain layer to trace platform connectivity
              </span>
            </div>
            <span className="text-xs font-medium text-[#158059]">
              Care · Engagement · Insurance · Pharma
            </span>
          </div>

          {/* Tier 1: 6 Interactive Domain Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3.5">
            {APPLICATION_LAYER_ITEMS.map((item) => {
              const catVisual = CATEGORY_VISUALS[item.targetCategoryId] || {
                icon: Activity,
                color: 'emerald' as const,
              };
              const Icon = catVisual.icon;
              const theme = MODULE_COLOR_THEMES[catVisual.color];
              const isSelected = item.id === selectedAppId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedAppId(item.id)}
                  onMouseEnter={() => setSelectedAppId(item.id)}
                  aria-pressed={isSelected}
                  className={`group card-interactive text-left rounded-xl p-4 border cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A] ${
                    isSelected
                      ? 'bg-white border-[#2BC48A] ring-1 ring-[#2BC48A]/25'
                      : 'bg-white border-[#E8EDF2] hover:border-[#2BC48A]/70'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-colors ${theme.iconBox} ${theme.iconBoxHover}`}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <span
                      className={`h-1.5 w-5 rounded-full transition-colors ${
                        isSelected ? 'bg-[#2BC48A]' : 'bg-[#E2E8F0] group-hover:bg-[#CBD5E1]'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <div className="text-base font-semibold text-[#0F172A]">
                      {item.label}
                    </div>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected
                          ? 'text-[#158059] translate-x-0.5'
                          : 'text-[#94A3B8] group-hover:text-[#0F172A] group-hover:translate-x-0.5'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-medium tabular-nums mt-0.5 ${theme.textAccent}`}
                  >
                    {item.countLabel}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Orthogonal Signal Routing Bus (Desktop) */}
          <div className="hidden xl:block my-1" aria-hidden="true">
            <svg
              viewBox="0 0 1200 56"
              fill="none"
              className="w-full h-14"
              preserveAspectRatio="none"
            >
              {/* Static structural trace lines */}
              {colCenters.map((cx) => (
                <line
                  key={`trace-${cx}`}
                  x1={cx}
                  y1="0"
                  x2={cx}
                  y2="24"
                  stroke="#E2E8F0"
                  strokeWidth="1.5"
                />
              ))}
              {/* Horizontal collector bus */}
              <line
                x1="100"
                y1="24"
                x2="1100"
                y2="24"
                stroke="#CBD5E1"
                strokeWidth="1.5"
              />
              {/* Downward taps to 5 Engine Plane modules */}
              {[120, 360, 600, 840, 1080].map((tx) => (
                <line
                  key={`tap-${tx}`}
                  x1={tx}
                  y1="24"
                  x2={tx}
                  y2="56"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                />
              ))}
              {/* Active green signal path from selected domain */}
              <path
                d={`M ${activeX} 0 V 24 H 600 V 56`}
                stroke="#2BC48A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx={activeX} cy="24" r="4" fill="#2BC48A" />
              <circle cx="600" cy="24" r="4" fill="#0F172A" stroke="#2BC48A" strokeWidth="2" />
            </svg>
          </div>

          {/* Mobile / Tablet compact connector */}
          <div className="xl:hidden my-4 flex items-center justify-center" aria-hidden="true">
            <div className="w-px h-6 bg-[#2BC48A]" />
          </div>

          {/* Live Contextual Inspector Strip */}
          <div className="mb-5 px-4 py-3 rounded-xl bg-[#F8FAFB] border border-[#E8EDF2] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
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
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#158059] hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0"
            >
              Inspect architecture
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Tier 2: Core Platform Engines */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#64748B]">
                02 · Core Platform Engines
              </span>
              <span className="text-xs text-[#64748B] hidden sm:inline">
                Shared intelligence, orchestration, and interoperability
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-5 gap-3">
              {ENGINE_PLANE_ITEMS.filter((name) =>
                FOUNDATION_LAYER_ITEMS.includes(name)
              ).map((layerName, index) => {
                const Icon = FOUNDATION_ICONS[layerName] || Cpu;
                const targetHref =
                  layerName === 'Data & AI'
                    ? '#category-06'
                    : layerName === 'Automation'
                    ? '#category-03'
                    : '#category-07';

                const spanClass =
                  index < 3
                    ? 'sm:col-span-2 lg:col-span-1'
                    : index === 4
                    ? 'col-span-2 sm:col-span-3 lg:col-span-1'
                    : 'sm:col-span-3 lg:col-span-1';

                return (
                  <a
                    key={layerName}
                    href={targetHref}
                    className={`group card-interactive flex items-center justify-between gap-2.5 px-4 py-3.5 rounded-xl bg-white border border-[#E8EDF2] hover:border-[#2BC48A] ${spanClass}`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-8 h-8 rounded-lg bg-[#2BC48A]/12 text-[#158059] group-hover:bg-[#2BC48A] group-hover:text-[#0F172A] flex items-center justify-center shrink-0 transition-colors">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#0F172A] truncate">
                        {layerName}
                      </span>
                    </div>
                    <ArrowRight
                      className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#158059] group-hover:translate-x-0.5 transition-all shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Tier 3: Standards & Enterprise Governance Bedrock */}
          <div className="mt-4 pt-4 border-t border-[#E8EDF2]">
            <div className="bg-[#0F172A] text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="text-xs font-medium text-[#2BC48A]">
                  03 · Standards & Security Foundation
                </div>
                <div className="text-xs sm:text-sm text-slate-300">
                  Unified healthcare interoperability and multi-tenant governance
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0">
                {TRUST_BEDROCK_ITEMS.filter((name) =>
                  FOUNDATION_LAYER_ITEMS.includes(name)
                ).map((layerName) => {
                  const Icon = FOUNDATION_ICONS[layerName] || Lock;
                  return (
                    <div
                      key={layerName}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white/5 border border-white/15"
                    >
                      <Icon className="w-4 h-4 text-[#2BC48A] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">
                        {layerName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
