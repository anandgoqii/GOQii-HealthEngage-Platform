import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ShieldCheck,
} from 'lucide-react';
import { INDUSTRIES, WHY_CAPABILITIES } from '../data/platformData';
import {
  INDUSTRY_VISUALS,
  SECTION_VISUALS,
  WHY_OUTCOME_VISUALS,
} from '../data/moduleVisuals';

const CAPABILITY_LINKS: Record<string, string> = {
  'api-first': '#category-07',
  'device-interop': '#category-02',
  'care-orchestration': '#category-01',
  'ai-workflows': '#category-06',
  'enterprise-security': '#platform-overview',
  'modular-deployment': '#platform-categories',
};

export const WhyGoqiiSection: React.FC = () => {
  const SectionIcon = SECTION_VISUALS.why;

  return (
    <section
      id="why-goqii-healthengage"
      className="py-16 sm:py-24 bg-[#0B1220] text-white border-b border-white/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Sticky Editorial Column with ShieldCheck Identity */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2BC48A] tracking-wide">
              <SectionIcon className="w-4 h-4" strokeWidth={1.75} />
              <span>Why GOQii HealthEngage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-white tracking-tight leading-[1.14] text-balance">
              Built like a platform. Deployed like a product.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Built for health enterprises that need connected operations, clearer
              visibility across care journeys, and workflows that scale across
              populations.
            </p>
          </div>

          {/* Right 2-Column Hairline-Divided Business Outcomes Matrix */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-white/10 gap-px border border-white/10 rounded-xl overflow-hidden">
              {WHY_CAPABILITIES.map((cap, idx) => {
                const targetHref = CAPABILITY_LINKS[cap.id] || '#module-architecture';
                const OutcomeIcon = WHY_OUTCOME_VISUALS[cap.id] || ShieldCheck;

                return (
                  <a
                    key={cap.id}
                    href={targetHref}
                    className="group bg-[#0B1220] hover:bg-[#111B2E] p-6 sm:p-7 flex flex-col justify-between gap-6 transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2BC48A]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="flex items-center gap-3">
                          <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/12 text-white group-hover:bg-[#2BC48A] group-hover:border-[#2BC48A] group-hover:text-[#0F172A] flex items-center justify-center transition-colors">
                            <OutcomeIcon className="w-4 h-4" strokeWidth={1.75} />
                          </span>
                          <span className="text-xs font-semibold text-[#2BC48A] tabular-nums">
                            0{idx + 1}
                          </span>
                        </div>
                        <ArrowUpRight
                          className="w-4 h-4 text-slate-500 group-hover:text-[#2BC48A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="text-lg font-semibold text-white leading-snug">
                        {cap.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed mt-2.5">
                        {cap.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2BC48A]">
                      <span>Explore capability</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                        strokeWidth={1.75}
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface IndustriesSectionProps {
  onSelectIndustry: (industryTitle: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onSelectIndustry,
}) => {
  const SectionIcon = SECTION_VISUALS.industries;

  return (
    <section
      id="industries"
      className="py-16 sm:py-24 bg-[#EEF3F8] border-b border-[#D7E2EC]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading with Building2 Icon Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end mb-12">
          <div className="lg:col-span-6 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#158059] tracking-wide">
              <SectionIcon className="w-4 h-4" strokeWidth={1.75} />
              <span>Industries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-[#0F172A] tracking-tight leading-tight text-balance">
              One platform. Five enterprise contexts.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              GOQii HealthEngage powers production deployments across insurers, providers,
              pharma, employers, and digital health platforms — each with tailored
              configurations and integrations.
            </p>
          </div>
        </div>

        {/* Structured Horizontal Enterprise Rows with Distinctive Industry Icons */}
        <div className="border-y border-[#D7E2EC] divide-y divide-[#D7E2EC]">
          {INDUSTRIES.map((industry, index) => {
            const Icon = INDUSTRY_VISUALS[industry.id] || Building2;

            return (
              <div
                key={industry.id}
                className="group py-7 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start transition-colors hover:bg-white -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-lg"
              >
                {/* Zone 1: Index, Domain Icon & Title */}
                <div className="lg:col-span-4 flex items-start gap-4">
                  <span className="text-xs font-semibold text-[#158059] tabular-nums pt-2.5 shrink-0">
                    0{index + 1}
                  </span>
                  <div className="flex items-start gap-3">
                    <span className="w-10 h-10 rounded-lg bg-white border border-[#D7E2EC] text-[#0F172A] group-hover:bg-[#2BC48A] group-hover:border-[#2BC48A] group-hover:text-[#0F172A] flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0F172A] leading-snug pt-1.5">
                      {industry.title}
                    </h3>
                  </div>
                </div>

                {/* Zone 2: Description */}
                <div className="lg:col-span-4">
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Zone 3: Highlights & Action */}
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row sm:items-center lg:items-start xl:items-center justify-between gap-4">
                  <ul className="space-y-1.5">
                    {industry.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#0F172A]"
                      >
                        <Check
                          className="w-3.5 h-3.5 text-[#158059] shrink-0"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => onSelectIndustry(industry.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0F172A] bg-white border border-[#D7E2EC] group-hover:border-[#2BC48A] group-hover:bg-[#2BC48A] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-center lg:self-start xl:self-center"
                  >
                    Request briefing
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
