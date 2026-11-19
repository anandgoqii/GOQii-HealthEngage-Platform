import React from 'react';
import {
  Activity,
  ArrowRight,
  Code2,
  Cpu,
  Database,
  Lock,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import {
  CATEGORY_VISUALS,
  getModuleIcon,
  getModuleVisual,
} from '../data/moduleVisuals';

interface CategoryPreviewProps {
  categoryId: string;
}

export const CategoryInterfacePreview: React.FC<CategoryPreviewProps> = ({
  categoryId,
}) => {
  const catVisual = CATEGORY_VISUALS[categoryId];
  const CatIcon = catVisual?.icon || Activity;

  const renderModuleRow = (
    moduleId: string,
    title: string,
    subtitle: string,
    statusLabel: string,
    isAccent = true
  ) => {
    const modVisual = getModuleVisual(moduleId);
    const ModIcon = modVisual.icon;
    return (
      <div
        key={title}
        className="px-3.5 py-2.5 flex items-center justify-between gap-3"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span
            className={`w-7 h-7 rounded-md border flex items-center justify-center shrink-0 ${modVisual.theme.iconBox}`}
          >
            <ModIcon className="w-3.5 h-3.5" strokeWidth={1.75} />
          </span>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-[#0F172A] truncate">
              {title}
            </div>
            <div className="text-[11px] text-[#64748B] truncate">
              {subtitle}
            </div>
          </div>
        </div>
        <span
          className={`text-[11px] font-medium whitespace-nowrap shrink-0 ${
            isAccent ? 'text-[#158059]' : 'text-[#64748B]'
          }`}
        >
          {statusLabel}
        </span>
      </div>
    );
  };

  switch (categoryId) {
    case 'category-01':
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8EDF2]">
            <div className="flex items-center gap-2">
              <CatIcon className="w-4 h-4 text-[#158059]" strokeWidth={1.75} />
              <span className="text-xs font-semibold text-[#0F172A]">
                MediCareManage · Clinic Operations
              </span>
            </div>
            <span className="text-[11px] font-medium text-[#64748B] tabular-nums">
              4 Subgroups
            </span>
          </div>

          {/* Care Workflow Stepper */}
          <div className="grid grid-cols-3 gap-px bg-[#E8EDF2] border border-[#E8EDF2] rounded-lg overflow-hidden">
            {[
              { id: 'clinic', label: 'OPD Intake', module: 'Clinic' },
              { id: 'carecoordinate', label: 'Care Plan', module: 'CareCoordinate' },
              { id: 'carenavigate', label: 'Navigation', module: 'CareNavigate' },
            ].map((step, i) => {
              const StepIcon = getModuleIcon(step.id);
              return (
                <div key={step.label} className="bg-white p-3">
                  <div className="flex items-center justify-between text-[11px] text-[#64748B] tabular-nums">
                    <span>0{i + 1}</span>
                    <StepIcon className="w-3.5 h-3.5 text-[#158059]" strokeWidth={1.75} />
                  </div>
                  <div className="text-xs font-semibold text-[#0F172A] mt-1.5">
                    {step.label}
                  </div>
                  <div className="text-[10px] text-[#64748B] truncate">
                    {step.module}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border border-[#E8EDF2] rounded-lg divide-y divide-[#E8EDF2] bg-white">
            {renderModuleRow(
              'medopscentral',
              'MedOpsCentral',
              'Clinical team command & task routing',
              'Active'
            )}
            {renderModuleRow(
              'healthcarecenter',
              'HealthCareCenter',
              'Facility scheduling & outpatient intake',
              'Active'
            )}
            {renderModuleRow(
              'clinicaldatamigrate',
              'ClinicalDataMigrate',
              'Structured patient record mapping',
              'Synced'
            )}
            {renderModuleRow(
              'ai-clinical-assistant',
              'AI Clinical Assistant',
              'In-consult documentation support',
              'Coming Soon',
              false
            )}
          </div>
        </div>
      );

    case 'category-02':
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8EDF2]">
            <div className="flex items-center gap-2">
              <CatIcon className="w-4 h-4 text-[#158059]" strokeWidth={1.75} />
              <span className="text-xs font-semibold text-[#0F172A]">
                RPMC · Remote Vitals Telemetry
              </span>
            </div>
            <span className="text-[11px] font-medium text-[#158059]">
              Threshold Rules Active
            </span>
          </div>

          {/* Custom Telemetry Waveform SVG */}
          <div className="bg-[#0B1220] rounded-lg p-4 text-white">
            <div className="flex items-center justify-between text-[11px] text-slate-300 mb-3">
              <span>RVM · Continuous Stream</span>
              <span className="text-[#2BC48A] font-medium">Connected Devices</span>
            </div>
            <svg
              viewBox="0 0 320 72"
              fill="none"
              className="w-full h-16"
              aria-hidden="true"
            >
              <line x1="0" y1="18" x2="320" y2="18" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
              <line x1="0" y1="36" x2="320" y2="36" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
              <line x1="0" y1="54" x2="320" y2="54" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
              <path
                d="M0 44 L28 42 L56 46 L84 30 L112 38 L140 22 L168 34 L196 28 L224 18 L252 32 L280 26 L320 24"
                stroke="#2BC48A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="224" cy="18" r="3.5" fill="#2BC48A" />
            </svg>
          </div>

          <div className="border border-[#E8EDF2] rounded-lg divide-y divide-[#E8EDF2] bg-white">
            {renderModuleRow('rpm', 'RPM', 'Between-visit device vitals & escalation', 'Active')}
            {renderModuleRow('rvm', 'RVM', 'Live readings & custom alert limits', 'Active')}
            {renderModuleRow('rpmc', 'RPMC', 'Clinician cohort command center', 'Active')}
          </div>
        </div>
      );

    case 'category-03':
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8EDF2]">
            <div className="flex items-center gap-2">
              <CatIcon className="w-4 h-4 text-[#158059]" strokeWidth={1.75} />
              <span className="text-xs font-semibold text-[#0F172A]">
                SmartEngage · Program &amp; Rewards Flow
              </span>
            </div>
            <span className="text-[11px] font-medium text-[#64748B] tabular-nums">
              6 Subgroups
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="border border-[#E8EDF2] rounded-lg p-3 bg-[#F8FAFB]">
              <div className="flex items-center justify-between text-[11px] font-medium text-[#64748B]">
                <span>WellNexus</span>
                {React.createElement(getModuleIcon('wellnexus'), {
                  className: 'w-3.5 h-3.5 text-[#158059]',
                  strokeWidth: 1.75,
                })}
              </div>
              <div className="text-xs font-semibold text-[#0F172A] mt-1">
                Challenges, Steps &amp; HRA
              </div>
              <div className="mt-2.5 h-1.5 w-full bg-[#E8EDF2] rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-[#2BC48A]" />
              </div>
            </div>
            <div className="border border-[#E8EDF2] rounded-lg p-3 bg-[#F8FAFB]">
              <div className="flex items-center justify-between text-[11px] font-medium text-[#64748B]">
                <span>RewardCore</span>
                {React.createElement(getModuleIcon('rewardcore'), {
                  className: 'w-3.5 h-3.5 text-[#158059]',
                  strokeWidth: 1.75,
                })}
              </div>
              <div className="text-xs font-semibold text-[#0F172A] mt-1">
                Eligibility &amp; Points Ledger
              </div>
              <div className="mt-2.5 text-[11px] font-medium text-[#158059]">
                Auditable Balance Engine
              </div>
            </div>
          </div>

          <div className="border border-[#E8EDF2] rounded-lg divide-y divide-[#E8EDF2] bg-white">
            {renderModuleRow('engagehub', 'EngageHub', 'Omnichannel engagement control plane', 'Active')}
            {renderModuleRow('contentmanagement', 'ContentManagement', 'Clinical & lifestyle publishing library', 'Active')}
            {renderModuleRow('nutriforge', 'NutriForge & MindShift', 'Nutrition plans & mental wellness', 'Active')}
            {renderModuleRow('feedback360', 'Feedback360', 'Structured member surveys & insights', 'Active')}
          </div>
        </div>
      );

    case 'category-04':
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8EDF2]">
            <div className="flex items-center gap-2">
              <CatIcon className="w-4 h-4 text-[#158059]" strokeWidth={1.75} />
              <span className="text-xs font-semibold text-[#0F172A]">
                CRM · Policyholder &amp; Agent Workspace
              </span>
            </div>
            <span className="text-[11px] font-medium text-[#158059]">
              Insurance Operations
            </span>
          </div>

          <div className="border border-[#E8EDF2] rounded-lg p-4 bg-[#F8FAFB] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#0F172A]">
                Unified Member &amp; Agent Record
              </span>
              <span className="text-[11px] text-[#64748B]">Case Lifecycle</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              {['Lead Intake', 'Agent Routing', 'Resolution'].map((stage, idx) => (
                <div
                  key={stage}
                  className={`py-2 px-2 rounded border text-[11px] font-medium ${
                    idx === 2
                      ? 'bg-[#0F172A] text-white border-[#0F172A]'
                      : 'bg-white text-[#0F172A] border-[#E8EDF2]'
                  }`}
                >
                  {stage}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[#E8EDF2] rounded-lg divide-y divide-[#E8EDF2] bg-white">
            {renderModuleRow('crm', 'CRM', 'One view of every member & agent relationship', 'Active')}
            {renderModuleRow('triage', 'Triage', 'Urgency routing & escalation queues', 'Active')}
            {renderModuleRow('dashboardmanagement', 'DashboardManagement', 'Operational KPI tracking', 'Active')}
          </div>
        </div>
      );

    case 'category-05':
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8EDF2]">
            <div className="flex items-center gap-2">
              <CatIcon className="w-4 h-4 text-[#158059]" strokeWidth={1.75} />
              <span className="text-xs font-semibold text-[#0F172A]">
                Pharma PSP &amp; Fulfillment Workflow
              </span>
            </div>
            <span className="text-[11px] font-medium text-[#64748B] tabular-nums">
              2 Subgroups
            </span>
          </div>

          <div className="border border-[#E8EDF2] rounded-lg divide-y divide-[#E8EDF2] bg-white">
            {renderModuleRow(
              'patient-education-system',
              'Patient Education System',
              'Disease and therapy education · Pharma Engagement',
              'Available'
            )}
            {renderModuleRow(
              'medicine-order-fulfillment',
              'Medicine Order & Fulfillment',
              'Order and fulfil medicines · Pharmacy & ePharmacy',
              'Coming Soon',
              false
            )}
          </div>

          <div className="bg-[#F8FAFB] border border-[#E8EDF2] rounded-lg p-3.5 text-xs text-[#64748B]">
            Supports specialty therapy adherence, disease education, and pharmacy fulfillment tracks.
          </div>
        </div>
      );

    case 'category-06':
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8EDF2]">
            <div className="flex items-center gap-2">
              <CatIcon className="w-4 h-4 text-[#158059]" strokeWidth={1.75} />
              <span className="text-xs font-semibold text-[#0F172A]">
                EndToEndData · Clinical AI Engines
              </span>
            </div>
            <span className="text-[11px] font-medium text-[#158059]">
              3 Subgroups
            </span>
          </div>

          <div className="bg-[#0B1220] text-white rounded-lg p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#2BC48A]">
                {React.createElement(getModuleIcon('medigenie'), {
                  className: 'w-4 h-4',
                  strokeWidth: 1.75,
                })}
                MediGenie · Care Team Copilot
              </span>
              <span className="text-[11px] text-slate-400">AI Engines</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Summarizes longitudinal records, answers clinical questions, and drafts consultation notes.
            </p>
          </div>

          <div className="border border-[#E8EDF2] rounded-lg divide-y divide-[#E8EDF2] bg-white">
            {renderModuleRow('endtoenddata', 'EndToEndData', 'Clinical & engagement data lakehouse', 'Active')}
            {renderModuleRow('datamigrate', 'DataMigrate', 'Enterprise data migration pipelines', 'Active')}
            {renderModuleRow('facevitals', 'FaceVitals', 'Camera-based heart rate, breathing & stress', 'Active')}
            {renderModuleRow('medical-imaging-ai', 'Medical Imaging AI', 'MRI / CT / X-ray interpretation', 'Coming Soon', false)}
          </div>
        </div>
      );

    default:
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8EDF2]">
            <div className="flex items-center gap-2">
              <CatIcon className="w-4 h-4 text-[#158059]" strokeWidth={1.75} />
              <span className="text-xs font-semibold text-[#0F172A]">
                API Center · Device Hub · Control Plane
              </span>
            </div>
            <span className="text-[11px] font-medium text-[#64748B] tabular-nums">
              4 Subgroups
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="border border-[#E8EDF2] rounded-lg p-3 bg-[#F8FAFB]">
              <Code2 className="w-4 h-4 text-[#158059] mb-1.5" strokeWidth={1.75} />
              <div className="text-xs font-semibold text-[#0F172A]">
                API Center
              </div>
              <div className="text-[11px] text-[#64748B] mt-0.5">
                Provision keys &amp; monitor usage
              </div>
            </div>
            <div className="border border-[#E8EDF2] rounded-lg p-3 bg-[#F8FAFB]">
              <Cpu className="w-4 h-4 text-[#158059] mb-1.5" strokeWidth={1.75} />
              <div className="text-xs font-semibold text-[#0F172A]">
                Health Device Hub
              </div>
              <div className="text-[11px] text-[#64748B] mt-0.5">
                Oura, Whoop &amp; medical streams
              </div>
            </div>
          </div>

          <div className="border border-[#E8EDF2] rounded-lg divide-y divide-[#E8EDF2] bg-white">
            {renderModuleRow('integrations', 'Integrations', 'HRIS, HIS/EMR & partner sync', 'Active')}
            {renderModuleRow('admin', 'Admin', 'Multi-tenant governance & RBAC', 'Active')}
            {renderModuleRow('dashboardmanagement', 'DashboardManagement', 'Configurable executive KPIs', 'Active')}
            {renderModuleRow('triage', 'Triage', 'Urgency routing & escalations', 'Active')}
          </div>
        </div>
      );
  }
};

export interface HeroWorkspaceTab {
  id: string;
  label: string;
  targetId: string;
  categoryLabel: string;
  modules: { id: string; name: string }[];
  headline: string;
  rows: { id: string; title: string; meta: string; status: string }[];
}

export const HERO_WORKSPACE_TABS: HeroWorkspaceTab[] = [
  {
    id: 'care',
    label: 'Care',
    targetId: 'category-01',
    categoryLabel: 'Category 01 · Care Delivery',
    modules: [
      { id: 'medicaremanage', name: 'MediCareManage' },
      { id: 'carecoordinate', name: 'CareCoordinate' },
      { id: 'clinic', name: 'Clinic' },
      { id: 'carenavigate', name: 'CareNavigate' },
    ],
    headline: 'Clinical Operations & Care Plan Queue',
    rows: [
      { id: 'medicaremanage', title: 'MediCareManage', meta: 'Longitudinal care plans & case flow', status: 'Active' },
      { id: 'carecoordinate', title: 'CareCoordinate', meta: 'Multi-provider task routing', status: 'Active' },
      { id: 'clinic', title: 'Clinic', meta: 'OPD scheduling & documentation', status: 'Active' },
    ],
  },
  {
    id: 'rpm',
    label: 'RPM',
    targetId: 'category-02',
    categoryLabel: 'Category 02 · Remote Monitoring',
    modules: [
      { id: 'rpm', name: 'RPM' },
      { id: 'rvm', name: 'RVM' },
      { id: 'rpmc', name: 'RPMC' },
      { id: 'health-device-hub', name: 'Health Device Hub' },
    ],
    headline: 'Remote Vitals & Threshold Command',
    rows: [
      { id: 'rpm', title: 'RPM', meta: 'Between-visit connected vitals', status: 'Monitoring' },
      { id: 'rvm', title: 'RVM', meta: 'Alert thresholds & arrival rules', status: 'Configured' },
      { id: 'rpmc', title: 'RPMC', meta: 'Cohort clinical command center', status: 'Active' },
    ],
  },
  {
    id: 'engage',
    label: 'Engage',
    targetId: 'category-03',
    categoryLabel: 'Category 03 · Engagement',
    modules: [
      { id: 'smartengage', name: 'SmartEngage' },
      { id: 'wellnexus', name: 'WellNexus' },
      { id: 'rewardcore', name: 'RewardCore' },
      { id: 'nutriforge', name: 'NutriForge' },
    ],
    headline: 'Population Engagement & Loyalty Engine',
    rows: [
      { id: 'smartengage', title: 'SmartEngage', meta: 'Targeted campaigns & response tracking', status: 'Running' },
      { id: 'wellnexus', title: 'WellNexus', meta: 'Challenges, step tracking & HRA', status: 'Active' },
      { id: 'rewardcore', title: 'RewardCore', meta: 'Eligibility rules & auditable ledger', status: 'Active' },
    ],
  },
  {
    id: 'insurance',
    label: 'Insurance',
    targetId: 'category-04',
    categoryLabel: 'Category 04 · Insurance',
    modules: [
      { id: 'crm', name: 'CRM' },
      { id: 'triage', name: 'Triage' },
      { id: 'dashboardmanagement', name: 'DashboardManagement' },
      { id: 'admin', name: 'Admin' },
    ],
    headline: 'Policyholder & Agent CRM Workspace',
    rows: [
      { id: 'crm', title: 'CRM', meta: 'Unified member & agent case timeline', status: 'Active' },
      { id: 'triage', title: 'Triage', meta: 'Urgency-based case escalation', status: 'Active' },
      { id: 'dashboardmanagement', title: 'DashboardManagement', meta: 'Operational KPI reporting', status: 'Active' },
    ],
  },
  {
    id: 'pharma',
    label: 'Pharma',
    targetId: 'category-05',
    categoryLabel: 'Category 05 · Pharma & PSP',
    modules: [
      { id: 'patient-education-system', name: 'Patient Education System' },
      { id: 'medicine-order-fulfillment', name: 'Medicine Order & Fulfillment' },
      { id: 'programmanagement', name: 'ProgramManagement' },
    ],
    headline: 'Patient Support & Therapy Adherence',
    rows: [
      { id: 'patient-education-system', title: 'Patient Education System', meta: 'Structured disease & therapy guides', status: 'Active' },
      { id: 'programmanagement', title: 'ProgramManagement', meta: 'PSP & PAP cohort orchestration', status: 'Active' },
      { id: 'medicine-order-fulfillment', title: 'Medicine Order & Fulfillment', meta: 'Prescription order workflow', status: 'Roadmap' },
    ],
  },
  {
    id: 'ai',
    label: 'Data & AI',
    targetId: 'category-06',
    categoryLabel: 'Category 06 · Data & AI',
    modules: [
      { id: 'endtoenddata', name: 'EndToEndData' },
      { id: 'medigenie', name: 'MediGenie' },
      { id: 'facevitals', name: 'FaceVitals' },
      { id: 'datamigrate', name: 'DataMigrate' },
    ],
    headline: 'Unified Lakehouse & Clinical AI Suite',
    rows: [
      { id: 'endtoenddata', title: 'EndToEndData', meta: 'Clinical & engagement lakehouse', status: 'Unified' },
      { id: 'medigenie', title: 'MediGenie', meta: 'Clinician consult & summary copilot', status: 'Active' },
      { id: 'facevitals', title: 'FaceVitals', meta: 'Camera-based vitals capture', status: 'Active' },
    ],
  },
];

interface HeroWorkspaceFrameProps {
  activeTabId: string;
  onSelectTab: (id: string) => void;
  onPauseChange: (paused: boolean) => void;
}

export const HeroWorkspaceFrame: React.FC<HeroWorkspaceFrameProps> = ({
  activeTabId,
  onSelectTab,
  onPauseChange,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const activeTab =
    HERO_WORKSPACE_TABS.find((t) => t.id === activeTabId) || HERO_WORKSPACE_TABS[0];

  return (
    <div
      onMouseEnter={() => onPauseChange(true)}
      onMouseLeave={() => onPauseChange(false)}
      className="border border-[#E8EDF2] rounded-xl bg-white overflow-hidden"
    >
      {/* Top Workspace Window Chrome */}
      <div className="bg-[#0B1220] text-white px-4 sm:px-5 py-3.5 flex items-center justify-between gap-4 border-b border-white/10">
        <div className="flex items-center gap-2.5 min-w-0">
          <Activity className="w-4 h-4 text-[#2BC48A] shrink-0" strokeWidth={1.75} />
          <span className="text-xs font-semibold tracking-tight truncate">
            GOQii HealthEngage Workspace
          </span>
        </div>
        <span className="text-[11px] font-medium text-slate-300 tabular-nums whitespace-nowrap shrink-0">
          7 Categories · 60+ Modules
        </span>
      </div>

      {/* Domain Switcher Bar with Category Icons */}
      <div
        role="tablist"
        aria-label="Workspace domain views"
        className="flex items-center overflow-x-auto no-scrollbar border-b border-[#E8EDF2] bg-[#F8FAFB] px-2"
      >
        {HERO_WORKSPACE_TABS.map((tab) => {
          const isActive = tab.id === activeTab.id;
          const TabIcon = CATEGORY_VISUALS[tab.targetId]?.icon || Activity;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectTab(tab.id)}
              onFocus={() => {
                onPauseChange(true);
                onSelectTab(tab.id);
              }}
              onBlur={() => onPauseChange(false)}
              className={`inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium whitespace-nowrap shrink-0 border-b-2 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2BC48A] ${
                isActive
                  ? 'border-[#2BC48A] text-[#0F172A] font-semibold bg-white'
                  : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <TabIcon
                className={`w-3.5 h-3.5 ${
                  isActive ? 'text-[#158059]' : 'text-[#64748B]'
                }`}
                strokeWidth={1.75}
              />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Split Workspace Content */}
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Compact Left Module Rail */}
        <div className="sm:col-span-4 bg-[#F8FAFB] border-b sm:border-b-0 sm:border-r border-[#E8EDF2] p-4 flex flex-col justify-between gap-4">
          <div>
            <div className="text-[11px] font-semibold text-[#158059] mb-2.5">
              Active Modules
            </div>
            <ul className="space-y-1.5">
              {activeTab.modules.map((mod, idx) => {
                const RailIcon = getModuleIcon(mod.id);
                return (
                  <li
                    key={mod.id}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs truncate ${
                      idx === 0
                        ? 'bg-white border border-[#E8EDF2] font-semibold text-[#0F172A]'
                        : 'text-[#64748B] font-medium'
                    }`}
                  >
                    <RailIcon
                      className={`w-3.5 h-3.5 shrink-0 ${
                        idx === 0 ? 'text-[#158059]' : 'text-[#64748B]'
                      }`}
                      strokeWidth={1.75}
                    />
                    <span className="truncate">{mod.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="pt-3 border-t border-[#E8EDF2] space-y-1.5 text-[11px] text-[#64748B]">
            <div className="flex items-center gap-1.5 text-[#0F172A] font-medium">
              <Database className="w-3.5 h-3.5 text-[#158059]" strokeWidth={1.75} />
              <span>FHIR / HL7 Ready</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#64748B]" strokeWidth={1.75} />
              <span>Multi-tenant RBAC</span>
            </div>
          </div>
        </div>

        {/* Main Workspace Canvas */}
        <motion.div
          key={activeTab.id}
          initial={prefersReducedMotion ? false : { opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="sm:col-span-8 p-4 sm:p-5 flex flex-col justify-between gap-4 bg-white"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="text-[11px] font-medium text-[#64748B]">
                {activeTab.categoryLabel}
              </span>
              <span className="text-[11px] font-semibold text-[#158059]">
                Unified Core
              </span>
            </div>
            <h2 className="text-sm sm:text-[15px] font-semibold text-[#0F172A] mb-3.5">
              {activeTab.headline}
            </h2>

            <div className="border border-[#E8EDF2] rounded-lg divide-y divide-[#E8EDF2]">
              {activeTab.rows.map((row) => {
                const rowVisual = getModuleVisual(row.id);
                const RowIcon = rowVisual.icon;
                return (
                  <div
                    key={row.title}
                    className="px-3.5 py-2.5 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`w-7 h-7 rounded-md border flex items-center justify-center shrink-0 ${rowVisual.theme.iconBox}`}
                      >
                        <RowIcon className="w-3.5 h-3.5" strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-[#0F172A] truncate">
                          {row.title}
                        </div>
                        <div className="text-[11px] text-[#64748B] truncate">
                          {row.meta}
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-[#158059] whitespace-nowrap shrink-0">
                      {row.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[#E8EDF2] flex items-center justify-between gap-2">
            <span className="text-[11px] text-[#64748B]">
              Connected via API Center &amp; Health Device Hub
            </span>
            <a
              href={`#${activeTab.targetId}`}
              className="group inline-flex items-center gap-1 text-xs font-semibold text-[#158059] hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0"
            >
              View modules
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.75} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
