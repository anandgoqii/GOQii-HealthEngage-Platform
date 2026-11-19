import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Building2,
  Check,
  Code2,
  Cpu,
  FlaskConical,
  GitBranch,
  Globe,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { INDUSTRIES, WHY_CAPABILITIES } from '../data/platformData';

const CAPABILITY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'api-first': Code2,
  'device-interop': Cpu,
  'care-orchestration': GitBranch,
  'ai-workflows': Sparkles,
  'enterprise-security': Shield,
  'modular-deployment': Blocks,
};

const CAPABILITY_LINKS: Record<string, string> = {
  'api-first': '#category-07',
  'device-interop': '#category-07',
  'care-orchestration': '#category-01',
  'ai-workflows': '#category-06',
  'enterprise-security': '#platform-overview',
  'modular-deployment': '#platform-categories',
};

const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  insurers: ShieldCheck,
  'hospitals-clinics': Building2,
  pharma: FlaskConical,
  employers: Users,
  'health-platforms': Globe,
};

export const WhyGoqiiSection: React.FC = () => {
  return (
    <section
      id="why-goqii-healthengage"
      className="py-16 sm:py-20 bg-[#F8FAFB] border-b border-[#E8EDF2]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold text-[#158059] tracking-wide">
            Why GOQii HealthEngage
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#0F172A] tracking-tight leading-tight text-balance">
            Built like a platform. Deployed like a product.
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            GOQii HealthEngage is designed for the realities of modern health enterprises
            — composable, compliant, and operationally sound at national scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_CAPABILITIES.map((cap) => {
            const Icon = CAPABILITY_ICONS[cap.id] || Code2;
            const targetHref = CAPABILITY_LINKS[cap.id] || '#module-architecture';

            return (
              <a
                key={cap.id}
                href={targetHref}
                className="group card-interactive bg-white border border-[#E8EDF2] hover:border-[#2BC48A] rounded-2xl p-6 flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="w-11 h-11 rounded-xl bg-[#2BC48A]/12 border border-[#2BC48A]/25 text-[#158059] group-hover:bg-[#2BC48A] group-hover:text-[#0F172A] flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#94A3B8] group-hover:text-[#158059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mt-2.5">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-semibold text-[#158059]">
                  <span>View in architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
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
  return (
    <section
      id="industries"
      className="py-16 sm:py-20 bg-white border-b border-[#E8EDF2]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold text-[#158059] tracking-wide">
            Industries
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#0F172A] tracking-tight leading-tight text-balance">
            One platform. Five enterprise contexts.
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            GOQii HealthEngage powers production deployments across insurers, providers,
            pharma, employers, and digital health platforms — each with tailored
            configurations and integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          {INDUSTRIES.map((industry, index) => {
            const Icon = INDUSTRY_ICONS[industry.id] || Building2;
            const spanClass =
              index < 3
                ? 'lg:col-span-2'
                : index === 4
                ? 'md:col-span-2 lg:col-span-3'
                : 'lg:col-span-3';

            return (
              <button
                key={industry.id}
                type="button"
                onClick={() => onSelectIndustry(industry.title)}
                className={`group card-interactive h-full text-left bg-white border border-[#E8EDF2] hover:border-[#2BC48A] rounded-2xl p-6 flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A] ${spanClass}`}
              >
                <div className="w-full">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="w-11 h-11 rounded-xl bg-[#2BC48A]/14 border border-[#2BC48A]/25 text-[#158059] group-hover:bg-[#2BC48A] group-hover:text-[#0F172A] flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-semibold text-[#64748B] tabular-nums">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#0F172A] leading-snug">
                    {industry.title}
                  </h3>

                  <p className="text-sm text-[#64748B] leading-relaxed mt-2.5">
                    {industry.description}
                  </p>
                </div>

                <div className="w-full mt-6 pt-5 border-t border-[#E8EDF2]">
                  <ul className="space-y-2">
                    {industry.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium text-[#0F172A]"
                      >
                        <Check
                          className="w-4 h-4 text-[#158059] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 mt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-semibold text-[#158059]">
                    <span>Request briefing</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
