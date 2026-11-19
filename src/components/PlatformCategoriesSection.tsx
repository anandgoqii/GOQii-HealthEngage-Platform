import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Layers } from 'lucide-react';
import { PLATFORM_CATEGORIES } from '../data/platformData';
import {
  CATEGORY_VISUALS,
  MODULE_COLOR_THEMES,
  SECTION_VISUALS,
} from '../data/moduleVisuals';
import { CategoryInterfacePreview } from './PlatformInterfacePreviews';

export const PlatformCategoriesSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    PLATFORM_CATEGORIES[0].id
  );

  const SectionIcon = SECTION_VISUALS.categories;
  const activeCategory =
    PLATFORM_CATEGORIES.find((cat) => cat.id === activeCategoryId) ||
    PLATFORM_CATEGORIES[0];
  const ActiveCatIcon = CATEGORY_VISUALS[activeCategory.id]?.icon || Layers;

  return (
    <section
      id="platform-categories"
      className="py-16 sm:py-24 bg-[#0F172A] text-white border-b border-white/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading with Categories Icon Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-7 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2BC48A] tracking-wide">
              <SectionIcon className="w-4 h-4" strokeWidth={1.75} />
              <span>Platform Categories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-white tracking-tight leading-tight text-balance">
              Seven platform pillars, built to compose.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Seven functional categories covering care, monitoring, engagement,
              insurance, pharma, intelligence, and infrastructure — adoptable
              independently or together.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Index (Left) + Live Interface Preview (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: 7 Numbered Editorial Rows with Unique Category Icons */}
          <div className="lg:col-span-7 bg-[#162033] border border-white/12 rounded-xl overflow-hidden divide-y divide-white/10">
            {PLATFORM_CATEGORIES.map((cat) => {
              const isSelected = cat.id === activeCategoryId;
              const catVisual = CATEGORY_VISUALS[cat.id];
              const CatIcon = catVisual?.icon || Layers;
              const catTheme = MODULE_COLOR_THEMES[catVisual?.color || 'emerald'];

              return (
                <div
                  key={cat.id}
                  className={`transition-colors ${
                    isSelected ? 'bg-[#1D2B44]' : 'bg-[#162033] hover:bg-[#1A263D]'
                  }`}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveCategoryId(cat.id)}
                    onMouseEnter={() => setActiveCategoryId(cat.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveCategoryId(cat.id);
                      }
                    }}
                    aria-expanded={isSelected}
                    className="group p-5 sm:p-6 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2BC48A]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex items-start gap-4 max-w-xl">
                        <span
                          className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isSelected
                              ? `${catTheme.iconBox} ring-2 ring-[#2BC48A]/60`
                              : `${catTheme.iconBox} ${catTheme.iconBoxHover}`
                          }`}
                        >
                          <CatIcon className="w-5 h-5" strokeWidth={1.75} />
                        </span>

                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2 text-xs tabular-nums">
                            <span
                              className={`font-semibold ${
                                isSelected ? 'text-[#2BC48A]' : 'text-slate-400'
                              }`}
                            >
                              {cat.number}
                            </span>
                            <span aria-hidden="true" className="text-slate-600">
                              ·
                            </span>
                            <span className="font-medium text-slate-400">
                              {cat.moduleCountLabel} · {cat.subgroupCountLabel}
                            </span>
                          </div>

                          <h3 className="text-lg font-semibold text-white leading-snug">
                            {cat.title}
                          </h3>

                          <p className="text-sm text-slate-300 leading-relaxed">
                            {cat.description}
                          </p>
                        </div>
                      </div>

                      <div className="pl-14 sm:pl-0 pt-0.5 shrink-0">
                        <a
                          href={`#${cat.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className={`inline-flex items-center gap-1 text-xs font-semibold whitespace-nowrap transition-colors ${
                            isSelected
                              ? 'text-[#2BC48A] hover:text-white'
                              : 'text-slate-200 hover:text-[#2BC48A]'
                          }`}
                        >
                          Explore modules
                          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                        </a>
                      </div>
                    </div>

                    {/* Inline Compact Preview on Tablet/Mobile (< lg) */}
                    {isSelected && (
                      <div className="lg:hidden mt-5 pt-5 border-t border-white/10">
                        <div className="bg-white rounded-lg p-4">
                          <CategoryInterfacePreview categoryId={cat.id} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Product Interface Showcase (Desktop lg+) */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-white border border-white/15 rounded-xl overflow-hidden">
              <div className="bg-[#0B1220] text-white px-5 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-9 h-9 rounded-lg bg-[#2BC48A]/15 border border-[#2BC48A]/35 flex items-center justify-center shrink-0 text-[#2BC48A]">
                    <ActiveCatIcon className="w-4 h-4" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold text-[#2BC48A] tabular-nums">
                      {activeCategory.number} · Interface Preview
                    </div>
                    <div className="text-sm font-semibold text-white mt-0.5 truncate">
                      {activeCategory.title}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-300 tabular-nums whitespace-nowrap shrink-0">
                  {activeCategory.moduleCountLabel}
                </span>
              </div>

              <div className="p-5 text-[#0F172A]">
                <CategoryInterfacePreview categoryId={activeCategory.id} />
              </div>

              <div className="px-5 py-3.5 bg-[#F8FAFB] border-t border-[#E8EDF2] flex items-center justify-between gap-3">
                <span className="text-xs text-[#64748B] tabular-nums">
                  {activeCategory.subgroupCountLabel} in catalog
                </span>
                <a
                  href={`#${activeCategory.id}`}
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#158059] hover:text-[#0F172A] transition-colors whitespace-nowrap"
                >
                  Inspect {activeCategory.shortLabel}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
