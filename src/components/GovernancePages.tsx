import React, { useEffect, useState } from 'react';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Cpu,
  Database,
  FileCheck2,
  Globe2,
  Handshake,
  KeyRound,
  Layers,
  Lock,
  Mail,
  Network,
  Server,
  Shield,
  ShieldCheck,
  UserCheck,
  Workflow,
} from 'lucide-react';

export type PageRoute = 'home' | 'security' | 'trust' | 'privacy' | 'contact';

export type ContactInquiryTrack =
  | 'Platform Briefing'
  | 'Ecosystem Partnerships'
  | 'Security & Compliance'
  | 'Trust & Deployment'
  | 'Privacy & Data Governance';

interface GovernanceLayoutProps {
  activePage: Exclude<PageRoute, 'home'>;
  onNavigate: (page: PageRoute, options?: { track?: ContactInquiryTrack }) => void;
  onOpenSignIn: () => void;
  initialContactTrack?: ContactInquiryTrack;
}

const PAGE_TABS: { id: Exclude<PageRoute, 'home'>; label: string }[] = [
  { id: 'security', label: 'Security' },
  { id: 'trust', label: 'Trust' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'contact', label: 'Contact' },
];

const PageShellHeader: React.FC<{
  activePage: Exclude<PageRoute, 'home'>;
  eyebrow: string;
  title: string;
  subtitle: string;
  badges: string[];
  onNavigate: (page: PageRoute) => void;
}> = ({ activePage, eyebrow, title, subtitle, badges, onNavigate }) => {
  return (
    <section className="bg-[#0B1220] bg-arch-grid-dark text-white py-12 sm:py-16 border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#2BC48A]" />
            <span>Back to Platform</span>
          </button>

          <nav
            aria-label="Governance and Contact pages"
            className="inline-flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10"
          >
            {PAGE_TABS.map((tab) => {
              const isActive = activePage === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onNavigate(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#2BC48A] text-[#0F172A] font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="max-w-3xl space-y-4">
          <p className="text-xs sm:text-sm font-semibold text-[#2BC48A] tracking-wide">
            {eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight leading-[1.15] text-white text-balance">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            {badges.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-xs font-medium text-slate-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2BC48A]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SecurityPage: React.FC<{
  onNavigate: GovernanceLayoutProps['onNavigate'];
}> = ({ onNavigate }) => {
  const pillars = [
    {
      icon: Lock,
      title: 'Multi-tenant isolation & RBAC',
      description:
        'Logical tenant partitioning separates clinical, member, insurer, and pharma datasets with granular role-based access controls managed centrally via Admin governance.',
      tag: 'Access Control',
    },
    {
      icon: KeyRound,
      title: 'Encryption & credential hygiene',
      description:
        'Transport-layer encryption for all API and device streams paired with encrypted persistence at rest and scoped service credentials.',
      tag: 'Data Protection',
    },
    {
      icon: Network,
      title: 'API & integration governance',
      description:
        'Centralized key provisioning, permission scopes, webhook verification, and live usage monitoring inside the GOQii HealthEngage API Center.',
      tag: 'API Security',
    },
    {
      icon: FileCheck2,
      title: 'Comprehensive audit trails',
      description:
        'Immutable activity logs capture access events, triage escalations, administrative changes, and data exchanges across every platform workflow.',
      tag: 'Auditability',
    },
  ];

  const layers = [
    {
      icon: UserCheck,
      layer: '01 · Identity & Session Layer',
      items: [
        'Enterprise SSO workspace routing and tenant-scoped authentication',
        'Role separation across clinicians, coaches, insurers, pharma teams, and admins',
        'Policy-enforced session boundaries across Care, RPM, Engage, Insurance, and Pharma portals',
      ],
    },
    {
      icon: Server,
      layer: '02 · Application & Interoperability Layer',
      items: [
        'Schema-validated FHIR / HL7 and webhook payload exchange',
        'Authorized telemetry ingestion from certified sensors via Health Device Hub',
        'Scoped connector governance for HRIS, HIS/EMR, and partner integrations',
      ],
    },
    {
      icon: Shield,
      layer: '03 · Infrastructure & Deployment Layer',
      items: [
        'Modular deployment support across cloud, hybrid, or region-bound environments',
        'Segmented runtime environments for clinical data, analytics engines, and AI workflows',
        'Continuous operational monitoring and automated escalation via Triage',
      ],
    },
  ];

  return (
    <div className="bg-[#F8FAFB]">
      <PageShellHeader
        activePage="security"
        eyebrow="Security · GOQii HealthEngage"
        title="Security engineered across every connected health layer."
        subtitle="Multi-tenant isolation, granular role-based access control, encryption, and comprehensive auditability designed for regulated healthcare, insurer, and pharma environments."
        badges={[
          'Multi-tenant isolation',
          'Granular RBAC',
          'API Center governance',
          'End-to-end audit trails',
        ]}
        onNavigate={onNavigate}
      />

      <section className="py-14 sm:py-18 border-b border-[#E8EDF2]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs sm:text-sm font-semibold text-[#158059]">
              Core Controls
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mt-1">
              Defense-in-depth across workflows, APIs, and devices.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white border border-[#E8EDF2] hover:border-[#2BC48A] rounded-2xl p-6 sm:p-7 card-interactive"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="w-11 h-11 rounded-xl bg-[#2BC48A]/12 border border-[#2BC48A]/25 text-[#158059] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-semibold text-[#64748B] bg-[#F8FAFB] border border-[#E8EDF2] px-2.5 py-1 rounded-md">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-white border-b border-[#E8EDF2]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs sm:text-sm font-semibold text-[#158059]">
              Architectural Safeguards
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mt-1">
              Layered protection from identity to runtime.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {layers.map((layer) => {
              const Icon = layer.icon;
              return (
                <div
                  key={layer.layer}
                  className="bg-[#F8FAFB] border border-[#E8EDF2] rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-4">
                      <span className="w-9 h-9 rounded-lg bg-white border border-[#E8EDF2] text-[#158059] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </span>
                      <p className="text-xs font-semibold text-[#0F172A]">
                        {layer.layer}
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {layer.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-[#64748B] leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#2BC48A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-[#0B1220] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <p className="text-xs font-semibold text-[#2BC48A]">
                Enterprise Security Review
              </p>
              <h3 className="text-xl font-semibold text-white">
                Request our security architecture briefing and controls overview.
              </h3>
              <p className="text-sm text-slate-300">
                Connect with our enterprise architecture team for deployment topology, RBAC governance, and API security walkthroughs.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                onNavigate('contact', { track: 'Security & Compliance' })
              }
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Contact Security Team
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const TrustPage: React.FC<{
  onNavigate: GovernanceLayoutProps['onNavigate'];
}> = ({ onNavigate }) => {
  const trustPillars = [
    {
      icon: Workflow,
      title: 'FHIR / HL7 standards readiness',
      description:
        'Canonical health data structures engineered for clean interoperability across hospital HIS/EMR infrastructure, insurer core platforms, and partner ecosystems.',
    },
    {
      icon: Globe2,
      title: 'Cloud, hybrid, or region-bound deployment',
      description:
        'Modular deployment options give enterprises control over where clinical and operational workloads execute while preserving unified governance.',
    },
    {
      icon: Activity,
      title: 'Operational visibility & escalation',
      description:
        'Configurable KPIs via DashboardManagement, urgent case routing in Triage, and centralized Admin governance keep distributed care teams aligned.',
    },
    {
      icon: Cpu,
      title: 'Certified device interoperability',
      description:
        'Health Device Hub normalizes medical and lifestyle telemetry into structured, auditable longitudinal records for remote monitoring and coaching.',
    },
  ];

  const industryTrust = [
    {
      title: 'Care Delivery & Hospitals',
      detail:
        'Supports post-discharge remote monitoring, OPD workflows, care navigation, and HIS/EMR interoperability without fragmenting clinical records.',
    },
    {
      title: 'Insurers & Payers',
      detail:
        'Unifies underwriting signals, chronic care orchestration, and CRM member operations under strict multi-tenant access policies.',
    },
    {
      title: 'Pharma & Specialty Programs',
      detail:
        'Powers Patient Support Programs (PSPs) and Patient Assistance Programs (PAPs) with adherence tracking, HCP engagement, and governed outcome analytics.',
    },
  ];

  return (
    <div className="bg-[#F8FAFB]">
      <PageShellHeader
        activePage="trust"
        eyebrow="Platform Trust · GOQii HealthEngage"
        title="Built for mission-critical healthcare operations at scale."
        subtitle="Interoperable architecture, flexible regional deployment, and transparent operational governance across all 7 platform categories and 60+ modules."
        badges={[
          'FHIR / HL7 Standards-ready',
          'Cloud · Hybrid · Region-bound',
          'Policy-controlled orchestration',
          'Modular architecture',
        ]}
        onNavigate={onNavigate}
      />

      <section className="py-14 sm:py-18 border-b border-[#E8EDF2]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs sm:text-sm font-semibold text-[#158059]">
              Reliability & Interoperability
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mt-1">
              Enterprise trust rooted in transparent architecture.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {trustPillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-[#E8EDF2] hover:border-[#2BC48A] rounded-2xl p-6 sm:p-7 card-interactive"
                >
                  <span className="w-11 h-11 rounded-xl bg-[#2BC48A]/12 border border-[#2BC48A]/25 text-[#158059] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-white border-b border-[#E8EDF2]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs sm:text-sm font-semibold text-[#158059]">
              Ecosystem Assurance
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mt-1">
              Designed for regulated healthcare stakeholders.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {industryTrust.map((card) => (
              <div
                key={card.title}
                className="bg-[#F8FAFB] border border-[#E8EDF2] rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#158059]" />
                  <h3 className="text-base font-semibold text-[#0F172A]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {card.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#0B1220] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <p className="text-xs font-semibold text-[#2BC48A]">
                Deployment & Architecture Inquiry
              </p>
              <h3 className="text-xl font-semibold text-white">
                Discuss deployment models and governance requirements.
              </h3>
              <p className="text-sm text-slate-300">
                Work with our solutions team to evaluate cloud, hybrid, or region-bound rollout options for your organization.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                onNavigate('contact', { track: 'Trust & Deployment' })
              }
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Talk to Architecture Team
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const PrivacyPage: React.FC<{
  onNavigate: GovernanceLayoutProps['onNavigate'];
}> = ({ onNavigate }) => {
  const principles = [
    {
      icon: UserCheck,
      title: 'Consent-governed data workflows',
      description:
        'Member health, lifestyle, and connected device streams flow across care, insurance, and pharma modules only under explicit program authorization.',
    },
    {
      icon: Lock,
      title: 'Least-privilege & role boundaries',
      description:
        'Granular RBAC ensures clinicians, wellness coaches, claims teams, and tenant admins only access datasets necessary for their operational scope.',
    },
    {
      icon: Database,
      title: 'Authorized device telemetry',
      description:
        'Third-party wearable and medical device integrations via Health Device Hub adhere to revocable member consent and tenant-level ingestion controls.',
    },
    {
      icon: Layers,
      title: 'Tenant data sovereignty',
      description:
        'Dedicated tenant isolation and region-bound deployment options support organizational data residency and retention governance.',
    },
  ];

  const lifecycleSections = [
    {
      step: '01 · Data Categories & Operational Scope',
      body: 'Depending on the modules enabled by an enterprise customer, GOQii HealthEngage processes clinical care coordination records, remote patient monitoring vitals, wellness engagement interactions, insurance/pharma support program workflows, and authorized API integration telemetry on behalf of the enterprise tenant.',
    },
    {
      step: '02 · Purpose Limitation & Interoperability',
      body: 'Canonical FHIR / HL7 and webhook integrations share structured data strictly with enterprise-authorized systems such as HIS/EMR platforms, HRIS directories, and partner endpoints configured in Integrations and governed via Admin.',
    },
    {
      step: '03 · Tenant Governance & Retention Controls',
      body: 'Enterprise administrators maintain direct oversight over user roles, connector permissions, audit logs, and data lifecycle policies aligned with organizational and regional healthcare requirements.',
    },
  ];

  return (
    <div className="bg-[#F8FAFB]">
      <PageShellHeader
        activePage="privacy"
        eyebrow="Data Privacy · GOQii HealthEngage"
        title="Privacy-first governance for sensitive health and wellness data."
        subtitle="Member, clinical, and connected device data flows are governed by tenant boundaries, explicit authorization, and least-privilege access controls."
        badges={[
          'Consent-driven sharing',
          'Tenant data isolation',
          'Authorized device sync',
          'Role-scoped visibility',
        ]}
        onNavigate={onNavigate}
      />

      <section className="py-14 sm:py-18 border-b border-[#E8EDF2]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs sm:text-sm font-semibold text-[#158059]">
              Privacy Commitments
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mt-1">
              Purpose-bound stewardship across every module.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-[#E8EDF2] hover:border-[#2BC48A] rounded-2xl p-6 sm:p-7 card-interactive"
                >
                  <span className="w-11 h-11 rounded-xl bg-[#2BC48A]/12 border border-[#2BC48A]/25 text-[#158059] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-white border-b border-[#E8EDF2]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs sm:text-sm font-semibold text-[#158059]">
              Data Handling Architecture
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mt-1">
              How enterprise tenant data is governed.
            </h2>
          </div>

          <div className="space-y-4">
            {lifecycleSections.map((sec) => (
              <div
                key={sec.step}
                className="bg-[#F8FAFB] border border-[#E8EDF2] rounded-2xl p-6 sm:p-7"
              >
                <p className="text-xs font-semibold text-[#158059] mb-1.5">
                  {sec.step}
                </p>
                <p className="text-sm sm:text-[15px] text-[#0F172A] leading-relaxed">
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#0B1220] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <p className="text-xs font-semibold text-[#2BC48A]">
                Privacy & Data Governance Desk
              </p>
              <h3 className="text-xl font-semibold text-white">
                Questions about tenant data residency or consent workflows?
              </h3>
              <p className="text-sm text-slate-300">
                Reach our enterprise governance team to review data flow documentation and tenant configuration options.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                onNavigate('contact', { track: 'Privacy & Data Governance' })
              }
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Contact Privacy Desk
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ContactPage: React.FC<{
  onNavigate: GovernanceLayoutProps['onNavigate'];
  onOpenSignIn: () => void;
  initialTrack?: ContactInquiryTrack;
}> = ({ onNavigate, onOpenSignIn, initialTrack = 'Platform Briefing' }) => {
  const [selectedTrack, setSelectedTrack] =
    useState<ContactInquiryTrack>(initialTrack);
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [roleTitle, setRoleTitle] = useState('');
  const [industry, setIndustry] = useState('Insurers');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelectedTrack(initialTrack);
  }, [initialTrack]);

  const routingTracks: {
    track: ContactInquiryTrack;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
  }[] = [
    {
      track: 'Platform Briefing',
      icon: Layers,
      description:
        'Schedule a technical and architectural walkthrough across our 7 platform categories and 60+ modules.',
    },
    {
      track: 'Ecosystem Partnerships',
      icon: Handshake,
      description:
        'Collaborate across HIS/EMR integrations, certified medical devices, and digital health partner builds.',
    },
    {
      track: 'Security & Compliance',
      icon: Shield,
      description:
        'Request multi-tenant RBAC, API governance, encryption, and auditability documentation.',
    },
    {
      track: 'Trust & Deployment',
      icon: Building2,
      description:
        'Discuss FHIR/HL7 readiness and cloud, hybrid, or region-bound deployment topologies.',
    },
    {
      track: 'Privacy & Data Governance',
      icon: Lock,
      description:
        'Connect on member consent flows, device sync authorization, and tenant data boundaries.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fullName.trim() || !organization.trim() || !emailPattern.test(workEmail)) {
      setError('Please enter your full name, organization, and a valid work email.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8FAFB]">
      <PageShellHeader
        activePage="contact"
        eyebrow="Contact · GOQii HealthEngage"
        title="Connect with the GOQii HealthEngage enterprise team."
        subtitle="Select your inquiry focus below to reach the right architectural, partnership, security, or governance specialists."
        badges={[
          'Architecture Briefings',
          'Ecosystem Partnerships',
          'Security & Privacy Desk',
          'Enterprise Support',
        ]}
        onNavigate={onNavigate}
      />

      <section className="py-14 sm:py-18 border-b border-[#E8EDF2]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Inquiry Routing Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#158059]">
                  Direct Routing
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#0F172A] mt-1">
                  Choose an inquiry track
                </h2>
              </div>

              <div className="space-y-3">
                {routingTracks.map((item) => {
                  const Icon = item.icon;
                  const isActive = selectedTrack === item.track;
                  return (
                    <button
                      key={item.track}
                      type="button"
                      onClick={() => {
                        setSelectedTrack(item.track);
                        setSubmitted(false);
                      }}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer card-interactive ${
                        isActive
                          ? 'bg-white border-[#2BC48A] ring-1 ring-[#2BC48A]/40'
                          : 'bg-white border-[#E8EDF2] hover:border-[#2BC48A]/60'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <span
                          className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${
                            isActive
                              ? 'bg-[#2BC48A]/15 border-[#2BC48A]/35 text-[#158059]'
                              : 'bg-[#F8FAFB] border-[#E8EDF2] text-[#64748B]'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-sm font-semibold text-[#0F172A]">
                              {item.track}
                            </p>
                            {isActive && (
                              <span className="text-[11px] font-semibold text-[#158059]">
                                Selected
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#64748B] leading-relaxed mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="bg-[#0B1220] text-white rounded-2xl p-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#2BC48A]">
                    Existing Customer?
                  </p>
                  <p className="text-sm font-medium text-slate-200 mt-0.5">
                    Access your enterprise SSO workspace.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onOpenSignIn}
                  className="px-4 py-2 text-xs font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Sign in
                </button>
              </div>
            </div>

            {/* Right Column: Full Enterprise Form */}
            <div className="lg:col-span-7 bg-white border border-[#E8EDF2] rounded-2xl p-6 sm:p-8 shadow-xs">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#2BC48A]/15 text-[#158059] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-semibold text-[#158059]">
                    {selectedTrack}
                  </p>
                  <h3 className="text-xl font-semibold text-[#0F172A]">
                    Enterprise inquiry received
                  </h3>
                  <p className="text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
                    Thank you, {fullName}. Our team will follow up at{' '}
                    <span className="font-semibold text-[#0F172A]">
                      {workEmail}
                    </span>{' '}
                    regarding <span className="font-semibold text-[#0F172A]">{organization}</span>.
                  </p>
                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setNotes('');
                      }}
                      className="px-4 py-2.5 text-sm font-medium text-[#64748B] hover:text-[#0F172A] border border-[#E8EDF2] rounded-xl cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('home')}
                      className="px-5 py-2.5 text-sm font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-xl transition-colors cursor-pointer"
                    >
                      Return to Platform
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E8EDF2]">
                    <div>
                      <p className="text-xs font-semibold text-[#158059]">
                        Inquiry Form
                      </p>
                      <h3 className="text-xl font-semibold text-[#0F172A] mt-0.5">
                        {selectedTrack}
                      </h3>
                    </div>
                    <span className="w-10 h-10 rounded-xl bg-[#F8FAFB] border border-[#E8EDF2] text-[#158059] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </span>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-medium text-red-700"
                    >
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="page-contact-name"
                        className="block text-xs font-medium text-[#0F172A] mb-1.5"
                      >
                        Full name
                      </label>
                      <input
                        id="page-contact-name"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Dr. Ananya Rao"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFB] border border-[#E8EDF2] rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2BC48A] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="page-contact-email"
                        className="block text-xs font-medium text-[#0F172A] mb-1.5"
                      >
                        Work email
                      </label>
                      <input
                        id="page-contact-email"
                        type="email"
                        required
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        placeholder="name@enterprise.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFB] border border-[#E8EDF2] rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2BC48A] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="page-contact-org"
                        className="block text-xs font-medium text-[#0F172A] mb-1.5"
                      >
                        Organization
                      </label>
                      <input
                        id="page-contact-org"
                        type="text"
                        required
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Enterprise name"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFB] border border-[#E8EDF2] rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2BC48A] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="page-contact-role"
                        className="block text-xs font-medium text-[#0F172A] mb-1.5"
                      >
                        Role / Title
                      </label>
                      <input
                        id="page-contact-role"
                        type="text"
                        value={roleTitle}
                        onChange={(e) => setRoleTitle(e.target.value)}
                        placeholder="VP Architecture / CISO / Product"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFB] border border-[#E8EDF2] rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2BC48A] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="page-contact-track"
                        className="block text-xs font-medium text-[#0F172A] mb-1.5"
                      >
                        Inquiry topic
                      </label>
                      <select
                        id="page-contact-track"
                        value={selectedTrack}
                        onChange={(e) =>
                          setSelectedTrack(e.target.value as ContactInquiryTrack)
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFB] border border-[#E8EDF2] rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2BC48A] focus:bg-white"
                      >
                        {routingTracks.map((t) => (
                          <option key={t.track} value={t.track}>
                            {t.track}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="page-contact-industry"
                        className="block text-xs font-medium text-[#0F172A] mb-1.5"
                      >
                        Enterprise context
                      </label>
                      <select
                        id="page-contact-industry"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFB] border border-[#E8EDF2] rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2BC48A] focus:bg-white"
                      >
                        <option value="Insurers">Insurers</option>
                        <option value="Hospitals & Clinics">
                          Hospitals & Clinics
                        </option>
                        <option value="Pharma">Pharma</option>
                        <option value="Employers / Corporate Wellness">
                          Employers / Corporate Wellness
                        </option>
                        <option value="Health Platforms / Digital Partners">
                          Health Platforms / Digital Partners
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="page-contact-notes"
                      className="block text-xs font-medium text-[#0F172A] mb-1.5"
                    >
                      Scope, modules, or governance questions
                    </label>
                    <textarea
                      id="page-contact-notes"
                      rows={4}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Share your target modules, FHIR/HL7 integration scope, security/privacy review focus, or deployment timeline..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFB] border border-[#E8EDF2] rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2BC48A] focus:bg-white resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-xs text-[#64748B]">
                      Protected under our{' '}
                      <button
                        type="button"
                        onClick={() => onNavigate('privacy')}
                        className="font-medium text-[#158059] hover:underline cursor-pointer"
                      >
                        Privacy & Consent Controls
                      </button>
                      .
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-xl transition-colors cursor-pointer"
                    >
                      Submit inquiry
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
