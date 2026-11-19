import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Layers,
  Search,
  X,
} from 'lucide-react';
import {
  CategoryArchitectureData,
  MODULE_ARCHITECTURE,
  SubgroupData,
} from '../data/platformData';
import {
  CATEGORY_VISUALS,
  getModuleVisual,
  MODULE_COLOR_THEMES,
  SECTION_VISUALS,
  SUBGROUP_VISUALS,
} from '../data/moduleVisuals';
import { SelectedModuleContext } from './ActionModals';

interface ModuleArchitectureSectionProps {
  onSelectModule: (context: SelectedModuleContext) => void;
  isHeaderHidden?: boolean;
}

function getMatrixGridClass(count: number): string {
  if (count === 1) return 'grid grid-cols-1 bg-[#E8EDF2] gap-px';
  if (count === 2 || count === 4) {
    return 'grid grid-cols-1 md:grid-cols-2 bg-[#E8EDF2] gap-px';
  }
  if (count === 5) {
    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 bg-[#E8EDF2] gap-px';
  }
  if (count === 3 || count === 6) {
    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#E8EDF2] gap-px';
  }
  return 'grid grid-cols-1 md:grid-cols-2 bg-[#E8EDF2] gap-px';
}

function getMatrixCellSpanClass(count: number, idx: number): string {
  if (count === 5) {
    return idx < 3
      ? 'lg:col-span-2'
      : idx === 4
      ? 'md:col-span-2 lg:col-span-3'
      : 'lg:col-span-3';
  }
  if (count === 3) {
    return idx === 2 ? 'md:col-span-2 lg:col-span-1' : '';
  }
  if (
    count !== 1 &&
    count !== 2 &&
    count !== 3 &&
    count !== 4 &&
    count !== 5 &&
    count !== 6 &&
    count % 2 === 1 &&
    idx === count - 1
  ) {
    return 'md:col-span-2';
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
  const [searchQuery, setSearchQuery] = useState<string>('');

  const SectionIcon = SECTION_VISUALS.modules;
  const normalizedQuery = searchQuery.trim().toLowerCase();

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

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return MODULE_ARCHITECTURE;
    return MODULE_ARCHITECTURE.map((cat) => {
      const matchingSubgroups = cat.subgroups
        .map((sg) => ({
          ...sg,
          modules: sg.modules.filter(
            (mod) =>
              mod.name.toLowerCase().includes(normalizedQuery) ||
              mod.description.toLowerCase().includes(normalizedQuery) ||
              sg.name.toLowerCase().includes(normalizedQuery)
          ),
        }))
        .filter((sg) => sg.modules.length > 0);
      return { ...cat, subgroups: matchingSubgroups };
    }).filter((cat) => cat.subgroups.length > 0);
  }, [normalizedQuery]);

  const totalMatchingModules = useMemo(
    () =>
      filteredCategories.reduce(
        (sum, cat) =>
          sum +
          cat.subgroups.reduce((sSum, sg) => sSum + sg.modules.length, 0),
        0
      ),
    [filteredCategories]
  );

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
      className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Directory Header with Workflow Icon Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10">
          <div className="lg:col-span-7 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#158059] tracking-wide">
              <SectionIcon className="w-4 h-4" strokeWidth={1.75} />
              <span>Module Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-[#0F172A] tracking-tight leading-tight text-balance">
              Every category, every module — in one place.
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl">
              A detailed reference for every subgroup and module across the suite. Select a
              category or filter by subgroup to inspect what each module does and its
              availability.
            </p>
          </div>

          {/* Directory Search Filter */}
          <div className="lg:col-span-5">
            <label htmlFor="module-directory-search" className="sr-only">
              Search module directory
            </label>
            <div className="relative">
              <Search
                className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <input
                id="module-directory-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter modules by name or capability..."
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-white border border-[#E2E8F0] rounded-lg text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:border-[#2BC48A] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear module filter"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#64748B] hover:text-[#0F172A] cursor-pointer"
                >
                  <X className="w-4 h-4" strokeWidth={1.75} />
                </button>
              )}
            </div>
            {normalizedQuery && (
              <p className="text-xs text-[#64748B] mt-1.5 tabular-nums">
                Showing {totalMatchingModules} matching{' '}
                {totalMatchingModules === 1 ? 'module' : 'modules'} across{' '}
                {filteredCategories.length}{' '}
                {filteredCategories.length === 1 ? 'category' : 'categories'}
              </p>
            )}
          </div>
        </div>

        {/* Sticky Category Jump Navigation Bar with Category Icons */}
        <div
          className={`lg:sticky ${
            isHeaderHidden ? 'lg:top-3' : 'lg:top-[76px]'
          } z-30 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-2 py-2.5 bg-white/95 backdrop-blur-md border-y lg:border lg:rounded-lg border-[#E8EDF2] mb-12`}
        >
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {MODULE_ARCHITECTURE.map((cat) => {
              const isActive = activeCategoryId === cat.id;
              const CatNavIcon = CATEGORY_VISUALS[cat.id]?.icon || Layers;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A] ${
                    isActive
                      ? 'bg-[#0F172A] text-white'
                      : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFB]'
                  }`}
                >
                  <CatNavIcon
                    className={`w-3.5 h-3.5 ${
                      isActive ? 'text-[#2BC48A]' : 'text-[#64748B]'
                    }`}
                    strokeWidth={1.75}
                  />
                  <span>{cat.shortLabel}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Empty Search State */}
        {filteredCategories.length === 0 ? (
          <div className="border border-[#E8EDF2] rounded-xl p-10 text-center space-y-3 bg-[#F8FAFB]">
            <p className="text-base font-semibold text-[#0F172A]">
              No modules match &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-sm text-[#64748B]">
              Try searching a module name like MediCareManage, RPM, SmartEngage, or API Center.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 text-xs font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-lg transition-colors cursor-pointer"
            >
              Reset filter
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredCategories.map((category, categoryIdx) => {
              const catVisual = CATEGORY_VISUALS[category.id];
              const CatIcon = catVisual?.icon || Layers;
              const catTheme = MODULE_COLOR_THEMES[catVisual?.color || 'emerald'];
              const activeSubgroupFilter = selectedSubgroups[category.id] || 'all';
              const visibleSubgroups =
                activeSubgroupFilter === 'all' || normalizedQuery
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
                  {/* Editorial Category Header with Category Icon */}
                  <div className="pb-6 mb-8 border-b border-[#E8EDF2]">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                      <div className="flex items-start gap-4 max-w-3xl">
                        <span
                          className={`w-11 h-11 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${catTheme.iconBox}`}
                        >
                          <CatIcon className="w-5 h-5" strokeWidth={1.75} />
                        </span>
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tabular-nums">
                            <span className="text-[#158059]">{category.number}</span>
                            <span aria-hidden="true" className="text-[#CBD5E1]">
                              ·
                            </span>
                            <span className="text-[#64748B] font-medium">
                              {category.totalCountLabel}
                            </span>
                          </div>
                          <h3 className="text-2xl sm:text-[28px] font-semibold text-[#0F172A] tracking-tight leading-snug">
                            {category.title}
                          </h3>
                          <p className="text-sm text-[#64748B] leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      {category.subgroups.length > 1 && !normalizedQuery && (
                        <button
                          type="button"
                          onClick={() => toggleAllInCategory(category, anyCollapsed)}
                          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#0F172A] bg-white border border-[#E2E8F0] hover:border-[#2BC48A] rounded-lg transition-colors cursor-pointer whitespace-nowrap self-start lg:self-end"
                        >
                          {anyCollapsed ? (
                            <>
                              <ChevronDown className="w-3.5 h-3.5 text-[#158059]" strokeWidth={1.75} />
                              Expand subgroups
                            </>
                          ) : (
                            <>
                              <ChevronUp className="w-3.5 h-3.5 text-[#64748B]" strokeWidth={1.75} />
                              Collapse subgroups
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Segmented Subgroup Filter Tabs */}
                    {category.subgroups.length > 1 && !normalizedQuery && (
                      <div
                        role="tablist"
                        aria-label={`${category.title} subgroups`}
                        className="flex flex-wrap items-center gap-1.5 mt-5"
                      >
                        <button
                          type="button"
                          role="tab"
                          aria-selected={activeSubgroupFilter === 'all'}
                          onClick={() => handleSelectSubgroup(category.id, 'all')}
                          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                            activeSubgroupFilter === 'all'
                              ? 'bg-[#0F172A] text-white'
                              : 'bg-white text-[#64748B] border border-[#E2E8F0] hover:text-[#0F172A]'
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
                              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer whitespace-nowrap tabular-nums ${
                                selected
                                  ? 'bg-[#2BC48A] text-[#0F172A] font-semibold'
                                  : 'bg-white text-[#64748B] border border-[#E2E8F0] hover:text-[#0F172A]'
                              }`}
                            >
                              {sg.name} ({sg.modules.length})
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Subgroups & Hairline-Divided Module Specification Matrices */}
                  <div className="space-y-10">
                    {visibleSubgroups.map((subgroup: SubgroupData) => {
                      const isCollapsed =
                        !normalizedQuery &&
                        !!collapsedSubgroups[`${category.id}:${subgroup.id}`];
                      const sgVisual = SUBGROUP_VISUALS[subgroup.id];
                      const SubgroupIcon = sgVisual?.icon || CatIcon;
                      const sgTheme =
                        MODULE_COLOR_THEMES[sgVisual?.color || catVisual?.color || 'emerald'];
                      const moduleCount = subgroup.modules.length;
                      const isSingleRow = moduleCount === 1;

                      return (
                        <div key={subgroup.id} className="space-y-3.5">
                          {/* Subgroup Header Row with Subgroup Icon */}
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-2.5">
                              <SubgroupIcon
                                className={`w-4 h-4 shrink-0 ${sgTheme.textAccent}`}
                                strokeWidth={1.75}
                              />
                              <h4 className="text-base sm:text-lg font-semibold text-[#0F172A]">
                                {subgroup.name}
                              </h4>
                              <span className="text-xs font-medium text-[#64748B] tabular-nums">
                                · {subgroup.countLabel}
                              </span>
                            </div>

                            {!normalizedQuery && (
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
                                  <ChevronDown className="w-3.5 h-3.5" strokeWidth={1.75} />
                                ) : (
                                  <ChevronUp className="w-3.5 h-3.5" strokeWidth={1.75} />
                                )}
                              </button>
                            )}
                          </div>

                          {/* 1px Hairline-Divided Module Directory Matrix with Unique Module Icons */}
                          {!isCollapsed && (
                            <div className="border border-[#E8EDF2] rounded-xl overflow-hidden">
                              <div className={getMatrixGridClass(moduleCount)}>
                                {subgroup.modules.map((mod, modIdx) => {
                                  const modVisual = getModuleVisual(mod.id, subgroup.id);
                                  const ModIcon = modVisual.icon;
                                  const modTheme = modVisual.theme;
                                  const spanClass = getMatrixCellSpanClass(
                                    moduleCount,
                                    modIdx
                                  );

                                  if (isSingleRow) {
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
                                        className="group bg-white hover:bg-[#F8FAFB] text-left w-full p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2BC48A]"
                                      >
                                        <div className="flex items-start gap-4 max-w-3xl">
                                          <span
                                            className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 transition-colors mt-0.5 ${modTheme.iconBox} ${modTheme.iconBoxHover}`}
                                          >
                                            <ModIcon
                                              className="w-5 h-5 transition-transform duration-150 group-hover:scale-105"
                                              strokeWidth={1.75}
                                            />
                                          </span>
                                          <div className="space-y-1">
                                            <div className="flex flex-wrap items-center gap-2.5">
                                              <h5 className="text-base sm:text-lg font-semibold text-[#0F172A]">
                                                {mod.name}
                                              </h5>
                                              {mod.comingSoon && (
                                                <span className="text-[11px] font-semibold text-[#158059]">
                                                  · Coming Soon
                                                </span>
                                              )}
                                            </div>
                                            <p className="text-sm text-[#64748B] leading-relaxed">
                                              {mod.description}
                                            </p>
                                          </div>
                                        </div>

                                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#158059] group-hover:text-[#0F172A] whitespace-nowrap shrink-0 transition-colors pl-14 md:pl-0">
                                          Details
                                          <ArrowUpRight
                                            className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                            strokeWidth={1.75}
                                          />
                                        </span>
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
                                      className={`group bg-white hover:bg-[#F8FAFB] text-left w-full p-5 flex flex-col justify-between gap-4 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2BC48A] ${spanClass}`}
                                    >
                                      <div>
                                        <div className="flex items-start justify-between gap-3 mb-3.5">
                                          <span
                                            className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${modTheme.iconBox} ${modTheme.iconBoxHover}`}
                                          >
                                            <ModIcon
                                              className="w-4 h-4 transition-transform duration-150 group-hover:scale-105"
                                              strokeWidth={1.75}
                                            />
                                          </span>
                                          <ArrowUpRight
                                            className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#158059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                                            strokeWidth={1.75}
                                            aria-hidden="true"
                                          />
                                        </div>

                                        <h5 className="text-base font-semibold text-[#0F172A] leading-snug">
                                          {mod.name}
                                        </h5>

                                        <p className="text-sm text-[#64748B] leading-relaxed mt-2">
                                          {mod.description}
                                        </p>
                                      </div>

                                      <div className="flex items-center justify-between gap-2 text-[11px] font-medium pt-1">
                                        <span className="text-[#64748B]">
                                          {subgroup.name}
                                        </span>
                                        {mod.comingSoon ? (
                                          <span className="font-semibold text-[#158059]">
                                            Coming Soon
                                          </span>
                                        ) : (
                                          <span className="text-[#0F172A] opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                                            Inspect
                                          </span>
                                        )}
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
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
        )}
      </div>
    </section>
  );
};
