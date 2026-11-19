import React from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { PLATFORM_CATEGORIES } from '../data/platformData';
import { CATEGORY_VISUALS, MODULE_COLOR_THEMES } from '../data/moduleVisuals';

export const PlatformCategoriesSection: React.FC = () => {
  return (
    <section
      id="platform-categories"
      className="py-16 sm:py-20 bg-[#F8FAFB] border-b border-[#E8EDF2]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3 mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold text-[#158059] tracking-wide">
            Platform Categories
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#0F172A] tracking-tight leading-tight text-balance">
            Seven platform pillars, built to compose.
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            GOQii HealthEngage is organized into seven architectural categories that span
            care, engagement, data, and ecosystem — adoptable independently or as a
            unified platform.
          </p>
          <p className="text-xs sm:text-sm font-medium text-[#158059] pt-1">
            Scroll to any category for full module architecture.
          </p>
        </div>

        {/* 7 Category Cards Grid: 3 + 3 + full-width foundational 7th pillar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLATFORM_CATEGORIES.map((cat, index) => {
            const catVisual = CATEGORY_VISUALS[cat.id] || {
              icon: Layers,
              color: 'emerald' as const,
            };
            const Icon = catVisual.icon;
            const theme = MODULE_COLOR_THEMES[catVisual.color];
            const isFoundationCard = index === PLATFORM_CATEGORIES.length - 1;

            if (isFoundationCard) {
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`group card-interactive md:col-span-2 lg:col-span-3 bg-white border border-[#E8EDF2] ${theme.hoverBorder} rounded-2xl p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A]`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5 max-w-3xl">
                    <span
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${theme.iconBox} ${theme.iconBoxHover}`}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`text-xs font-semibold tabular-nums ${theme.textAccent}`}
                        >
                          {cat.number}
                        </span>
                        <span className="text-xs text-[#CBD5E1]" aria-hidden="true">
                          ·
                        </span>
                        <span className="text-xs font-medium text-[#64748B] tabular-nums">
                          <span className="text-[#0F172A] font-semibold">
                            {cat.moduleCountLabel}
                          </span>{' '}
                          · {cat.subgroupCountLabel}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#0F172A] leading-snug group-hover:text-[#158059] transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E8EDF2] flex items-center justify-between lg:justify-end shrink-0">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${theme.badgeSoft} group-hover:translate-x-0.5`}
                    >
                      Explore {cat.shortLabel}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              );
            }

            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={`group card-interactive h-full bg-white border border-[#E8EDF2] ${theme.hoverBorder} rounded-2xl p-6 flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A]`}
              >
                <div>
                  {/* Top row: Icon container + Category Number */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-colors ${theme.iconBox} ${theme.iconBoxHover}`}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <span
                      className={`text-xs font-semibold tabular-nums ${theme.textAccent}`}
                    >
                      {cat.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-semibold text-[#0F172A] leading-snug group-hover:text-[#158059] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mt-2.5">
                    {cat.description}
                  </p>
                </div>

                {/* Footer Metadata & Anchor Cue */}
                <div className="pt-5 mt-6 border-t border-[#E8EDF2] flex items-center justify-between gap-3">
                  <div className="text-xs font-medium text-[#64748B] tabular-nums">
                    <span className="text-[#0F172A] font-semibold">
                      {cat.moduleCountLabel}
                    </span>{' '}
                    <span aria-hidden="true">·</span> {cat.subgroupCountLabel}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${theme.badgeSoft} group-hover:translate-x-0.5`}
                  >
                    Explore
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
