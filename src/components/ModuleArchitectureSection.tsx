import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import {
  CategoryArchitectureData,
  MODULE_ARCHITECTURE,
  SubgroupData,
} from '../data/platformData';
import {
  CATEGORY_VISUALS,
  MODULE_COLOR_THEMES,
  MODULE_VISUALS,
  SUBGROUP_VISUALS,
} from '../data/moduleVisuals';
import { SelectedModuleContext } from './ActionModals';

interface ModuleArchitectureSectionProps {
  onSelectModule: (context: SelectedModuleContext) => void;
  isHeaderHidden?: boolean;
}

function getSubgroupGridClass(count: number): string {
  if (count === 1) return 'grid grid-cols-1 gap-4';
  if (count === 2 || count === 4) return 'grid grid-cols-1 md:grid-cols-2 gap-4';
  if (count === 5) return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4';
  return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
}

function getModuleSpanClass(count: number, idx: number): string {
  if (count === 5) {
    // 3 equal cards on row 1 (col-span-2 each), 2 equal cards on row 2 (col-span-3 each)
    // On md (2 cols): 5th card spans full width so there is zero orphan void
    return idx < 3 ? 'lg:col-span-2' : idx === 4 ? 'md:col-span-2 lg:col-span-3' : 'lg:col-span-3';
  }
  if (count === 3) {
    // On md (2 cols): 3rd card spans full width cleanly; on lg (3 cols): 1 col each
    return idx === 2 ? 'md:col-span-2 lg:col-span-1' : '';
  }
  return '';
}

export const ModuleArchitectureSection: React.FC<ModuleArchitectureSectionProps> = ({
  onSelectModule,
  isHeaderHidden = false,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('category-01');
  const [selectedSubgroups, setSelectedSubgroups] = useState<Record<string, string>>({});
  const [collapsedSubgroups, setCollapsedSubgroups] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveCategoryId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-120px 0px -65% 0px',
        threshold: 0.05,
      }
    );

    MODULE_ARCHITECTURE.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectSubgroup = (categoryId: string, subgroupId: string) => {
    setSelectedSubgroups((prev) => ({ ...prev, [categoryId]: subgroupId }));
    if (subgroupId !== 'all') {
      setCollapsedSubgroups((prev) => ({
        ...prev,
        [`${categoryId}:${subgroupId}`]: false,
      }));
    }
  };

  const toggleSubgroupCollapse = (categoryId: string, subgroupId: string) => {
    const key = `${categoryId}:${subgroupId}`;
    setCollapsedSubgroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAllInCategory = (cat: CategoryArchitectureData, expand: boolean) => {
    const updates: Record<string, boolean> = {};
    cat.subgroups.forEach((sg) => {
      updates[`${cat.id}:${sg.id}`] = !expand;
    });
    setCollapsedSubgroups((prev) => ({ ...prev, ...updates }));
  };

  return (
    <section
      id="module-architecture"
      className="py-16 sm:py-20 bg-white border-b border-[#E8EDF2]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="max-w-3xl space-y-3 mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm font-semibold text-[#158059] tracking-wide">
            Module Architecture
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#0F172A] tracking-tight leading-tight text-balance">
            Every category, every module — in one place.
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Explore the full GOQii HealthEngage architecture. Each category is organized
            by subgroup, with modules designed to operate independently and interoperate
            natively through shared APIs, data, and identity.
          </p>
        </div>

        {/* Sticky Category Jump Navigation */}
        <div
          className={`lg:sticky ${
            isHeaderHidden ? 'lg:top-4' : 'lg:top-[84px]'
          } z-30 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 py-3 bg-white/95 backdrop-blur-md border-y lg:border lg:rounded-xl border-[#E8EDF2] mb-12 lg:shadow-xs`}
        >
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar lg:px-2">
            {MODULE_ARCHITECTURE.map((cat) => {
              const isActive = activeCategoryId === cat.id;
              const catVisual = CATEGORY_VISUALS[cat.id];
              const CatNavIcon = catVisual?.icon || Layers;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A] ${
                    isActive
                      ? 'bg-[#0F172A] text-white'
                      : 'bg-[#F8FAFB] text-[#64748B] hover:text-[#0F172A] hover:bg-[#E8EDF2]/60'
                  }`}
                >
                  <CatNavIcon
                    className={`w-3.5 h-3.5 ${
                      isActive ? 'text-[#2BC48A]' : 'text-[#64748B]'
                    }`}
                  />
                  <span>{cat.shortLabel}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Seven Category Sections */}
        <div className="space-y-16">
          {MODULE_ARCHITECTURE.map((category, categoryIdx) => {
            const catVisual = CATEGORY_VISUALS[category.id] || {
              icon: Layers,
              color: 'emerald' as const,
            };
            const CatIcon = catVisual.icon;
            const catTheme = MODULE_COLOR_THEMES[catVisual.color];

            const activeSubgroupFilter = selectedSubgroups[category.id] || 'all';
            const visibleSubgroups =
              activeSubgroupFilter === 'all'
                ? category.subgroups
                : category.subgroups.filter((sg) => sg.id === activeSubgroupFilter);

            const anyCollapsed = category.subgroups.some(
              (sg) => !!collapsedSubgroups[`${category.id}:${sg.id}`]
            );

            return (
              <div
                key={category.id}
                id={category.id}
                className={`scroll-mt-32 ${
                  categoryIdx > 0 ? 'pt-14 border-t border-[#E8EDF2]' : ''
                }`}
              >
                {/* Category Header Block */}
                <div className="bg-[#F8FAFB] border border-[#E8EDF2] rounded-2xl p-6 sm:p-7 mb-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
                    <div className="flex items-start gap-4 max-w-3xl">
                      <span
                        className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 ${catTheme.iconBox}`}
                      >
                        <CatIcon className="w-6 h-6" />
                      </span>
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tabular-nums">
                          <span className={catTheme.textAccent}>{category.number}</span>
                          <span aria-hidden="true" className="text-[#64748B]">
                            ·
                          </span>
                          <span className="text-[#64748B] font-medium">
                            {category.totalCountLabel}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#0F172A] tracking-tight">
                          {category.title}
                        </h3>
                        <p className="text-sm text-[#64748B] leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {category.subgroups.length > 1 && (
                      <div className="flex items-center gap-2 shrink-0 self-start">
                        <button
                          type="button"
                          onClick={() => toggleAllInCategory(category, anyCollapsed)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#0F172A] bg-white border border-[#E8EDF2] hover:border-[#2BC48A] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                        >
                          {anyCollapsed ? (
                            <>
                              <ChevronDown className="w-3.5 h-3.5 text-[#158059]" />
                              Expand subgroups
                            </>
                          ) : (
                            <>
                              <ChevronUp className="w-3.5 h-3.5 text-[#64748B]" />
                              Collapse subgroups
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Subgroup Filter Navigation */}
                  {category.subgroups.length > 1 && (
                    <div
                      role="tablist"
                      aria-label={`${category.title} subgroups`}
                      className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-[#E8EDF2]"
                    >
                      <button
                        type="button"
                        role="tab"
                        aria-selected={activeSubgroupFilter === 'all'}
                        onClick={() => handleSelectSubgroup(category.id, 'all')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                          activeSubgroupFilter === 'all'
                            ? 'bg-[#0F172A] text-white'
                            : 'bg-white text-[#64748B] border border-[#E8EDF2] hover:text-[#0F172A] hover:border-[#2BC48A]'
                        }`}
                      >
                        All subgroups
                      </button>

                      {category.subgroups.map((sg) => {
                        const selected = activeSubgroupFilter === sg.id;
                        return (
                          <button
                            key={sg.id}
                            type="button"
                            role="tab"
                            aria-selected={selected}
                            onClick={() => handleSelectSubgroup(category.id, sg.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap tabular-nums ${
                              selected
                                ? 'bg-[#2BC48A] text-[#0F172A] font-semibold'
                                : 'bg-white text-[#64748B] border border-[#E8EDF2] hover:text-[#0F172A] hover:border-[#2BC48A]'
                            }`}
                          >
                            {sg.name} ({sg.modules.length})
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Subgroups & Module Cards */}
                <div className="space-y-9">
                  {visibleSubgroups.map((subgroup: SubgroupData) => {
                    const isCollapsed =
                      !!collapsedSubgroups[`${category.id}:${subgroup.id}`];
                    const subVisual = SUBGROUP_VISUALS[subgroup.id] || catVisual;
                    const SubgroupIcon = subVisual.icon;
                    const subTheme = MODULE_COLOR_THEMES[subVisual.color];
                    const moduleCount = subgroup.modules.length;
                    const isSingleCard = moduleCount === 1;

                    return (
                      <div key={subgroup.id} className="space-y-4">
                        {/* Subgroup Header Row */}
                        <div className="flex items-center justify-between gap-4 pb-2.5 border-b border-[#E8EDF2]">
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${subTheme.iconBox}`}
                            >
                              <SubgroupIcon className="w-3.5 h-3.5" />
                            </span>
                            <h4 className="text-base sm:text-lg font-semibold text-[#0F172A]">
                              {subgroup.name}
                            </h4>
                            <span className="text-xs font-medium text-[#64748B] tabular-nums">
                              · {subgroup.countLabel}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              toggleSubgroupCollapse(category.id, subgroup.id)
                            }
                            aria-expanded={!isCollapsed}
                            aria-label={`${
                              isCollapsed ? 'Expand' : 'Collapse'
                            } ${subgroup.name}`}
                            className="inline-flex items-center gap-1 text-xs font-medium text-[#64748B] hover:text-[#0F172A] px-2.5 py-1 rounded-md hover:bg-[#F8FAFB] transition-colors cursor-pointer whitespace-nowrap"
                          >
                            <span>{isCollapsed ? 'Show' : 'Hide'}</span>
                            {isCollapsed ? (
                              <ChevronDown className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronUp className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>

                        {/* Adaptive Balanced Module Grid */}
                        {!isCollapsed && (
                          <div className={getSubgroupGridClass(moduleCount)}>
                            {subgroup.modules.map((mod, modIdx) => {
                              const modVisual = MODULE_VISUALS[mod.id] || subVisual;
                              const ModIcon = modVisual.icon;
                              const modTheme = MODULE_COLOR_THEMES[modVisual.color];
                              const spanClass = getModuleSpanClass(moduleCount, modIdx);

                              if (isSingleCard) {
                                return (
                                  <button
                                    key={mod.id}
                                    type="button"
                                    onClick={() =>
                                      onSelectModule({
                                        module: mod,
                                        categoryId: category.id,
                                        categoryNumber: category.number,
                                        categoryTitle: category.title,
                                        subgroupId: subgroup.id,
                                        subgroupName: subgroup.name,
                                      })
                                    }
                                    className={`group card-interactive text-left w-full bg-white border border-[#E8EDF2] ${modTheme.hoverBorder} rounded-xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A]`}
                                  >
                                    <div className="flex items-start gap-4 min-w-0 max-w-3xl">
                                      <span
                                        className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${modTheme.iconBox} ${modTheme.iconBoxHover}`}
                                      >
                                        <ModIcon className="w-5 h-5" />
                                      </span>
                                      <div className="min-w-0 space-y-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                          <span className="text-[11px] font-medium text-[#64748B]">
                                            {category.number} · {subgroup.name}
                                          </span>
                                          {mod.comingSoon && (
                                            <span
                                              className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold border whitespace-nowrap shrink-0 ${modTheme.badgeSoft}`}
                                            >
                                              Coming Soon
                                            </span>
                                          )}
                                        </div>
                                        <h5 className="text-base sm:text-lg font-semibold text-[#0F172A] leading-snug">
                                          {mod.name}
                                        </h5>
                                        <p className="text-sm text-[#64748B] leading-relaxed">
                                          {mod.description}
                                        </p>
                                      </div>
                                    </div>

                                    <div className="pt-3 md:pt-0 border-t md:border-t-0 border-[#F1F5F9] flex items-center justify-between md:justify-end gap-3 shrink-0">
                                      <span
                                        className={`inline-block w-6 h-1 rounded-full md:hidden ${modTheme.accentBar}`}
                                        aria-hidden="true"
                                      />
                                      <span
                                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${modTheme.badgeSoft} group-hover:translate-x-0.5 transition-transform`}
                                      >
                                        Details
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                      </span>
                                    </div>
                                  </button>
                                );
                              }

                              return (
                                <button
                                  key={mod.id}
                                  type="button"
                                  onClick={() =>
                                    onSelectModule({
                                      module: mod,
                                      categoryId: category.id,
                                      categoryNumber: category.number,
                                      categoryTitle: category.title,
                                      subgroupId: subgroup.id,
                                      subgroupName: subgroup.name,
                                    })
                                  }
                                  className={`group card-interactive h-full text-left w-full bg-white border border-[#E8EDF2] ${modTheme.hoverBorder} rounded-xl p-5 flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A] ${spanClass}`}
                                >
                                  <div className="w-full">
                                    {/* Quiet metadata line + tailored module icon + optional Coming Soon indicator */}
                                    <div className="flex items-start justify-between gap-3 mb-3.5">
                                      <div className="flex items-center gap-2.5 min-w-0">
                                        <span
                                          className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${modTheme.iconBox} ${modTheme.iconBoxHover}`}
                                        >
                                          <ModIcon className="w-4 h-4" />
                                        </span>
                                        <span className="text-[11px] font-medium text-[#64748B] truncate">
                                          {category.number} · {subgroup.name}
                                        </span>
                                      </div>

                                      {mod.comingSoon && (
                                        <span
                                          className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold border whitespace-nowrap shrink-0 ${modTheme.badgeSoft}`}
                                        >
                                          Coming Soon
                                        </span>
                                      )}
                                    </div>

                                    {/* Module Name */}
                                    <h5 className="text-base font-semibold text-[#0F172A] leading-snug">
                                      {mod.name}
                                    </h5>

                                    {/* Module Description */}
                                    <p className="text-sm text-[#64748B] leading-relaxed mt-2">
                                      {mod.description}
                                    </p>
                                  </div>

                                  {/* Subtle bottom module color indicator & interactive click cue */}
                                  <div className="w-full mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                      <span
                                        className={`inline-block w-6 h-1 rounded-full ${modTheme.accentBar}`}
                                        aria-hidden="true"
                                      />
                                      <span
                                        className={`text-[11px] font-medium ${modTheme.textAccent}`}
                                      >
                                        {category.shortLabel.replace(/^\d+\s+/, '')}
                                      </span>
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#64748B] group-hover:text-[#0F172A] transition-colors">
                                      Details
                                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
