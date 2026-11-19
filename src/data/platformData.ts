export interface HeroStat {
  value: string;
  label: string;
}

export interface ApplicationLayerMetric {
  id: string;
  label: string;
  countLabel: string;
  targetCategoryId: string;
  description: string;
}

export interface ArchitecturePillar {
  id: string;
  label: string;
  tier: 'application' | 'intelligence' | 'ecosystem';
  targetCategoryId: string;
}

export interface PlatformCategorySummary {
  id: string;
  number: string;
  shortLabel: string;
  title: string;
  description: string;
  moduleCountLabel: string;
  subgroupCountLabel: string;
}

export interface ModuleItem {
  id: string;
  name: string;
  description: string;
  comingSoon?: boolean;
}

export interface SubgroupData {
  id: string;
  name: string;
  countLabel: string;
  modules: ModuleItem[];
}

export interface CategoryArchitectureData {
  id: string;
  number: string;
  shortLabel: string;
  title: string;
  description: string;
  totalCountLabel: string;
  subgroups: SubgroupData[];
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export const HERO_STATS: HeroStat[] = [
  { value: '7', label: 'Platform categories' },
  { value: '60+', label: 'Modules & services' },
  { value: 'FHIR/HL7', label: 'Standards-ready' },
];

export const APPLICATION_LAYER_ITEMS: ApplicationLayerMetric[] = [
  {
    id: 'app-care',
    label: 'Care',
    countLabel: '34 modules',
    targetCategoryId: 'category-01',
    description: 'Care delivery, navigation, and clinical workflows',
  },
  {
    id: 'app-rpm',
    label: 'RPM',
    countLabel: '3 modules',
    targetCategoryId: 'category-02',
    description: 'Remote patient monitoring and vitals intelligence',
  },
  {
    id: 'app-engage',
    label: 'Engage',
    countLabel: '29 modules',
    targetCategoryId: 'category-03',
    description: 'Engagement, content, rewards, and wellness',
  },
  {
    id: 'app-insurance',
    label: 'Insurance',
    countLabel: '14 modules',
    targetCategoryId: 'category-04',
    description: 'Insurer workflows, CRM, and member operations',
  },
  {
    id: 'app-pharma',
    label: 'Pharma',
    countLabel: '24 modules',
    targetCategoryId: 'category-05',
    description: 'PSP, PAP, acquisition, and specialty therapy analytics',
  },
  {
    id: 'app-ai',
    label: 'AI',
    countLabel: '26 modules',
    targetCategoryId: 'category-06',
    description: 'Data platforms and clinical AI engines',
  },
];

export const FOUNDATION_LAYER_ITEMS: string[] = [
  'Data & AI',
  'Automation',
  'APIs',
  'Devices',
  'Control',
  'FHIR / HL7 ready',
  'Enterprise security',
];

export const PLATFORM_ARCHITECTURE_PILLARS: ArchitecturePillar[] = [
  { id: 'arch-care', label: 'Care', tier: 'application', targetCategoryId: 'category-01' },
  { id: 'arch-remote', label: 'Remote', tier: 'application', targetCategoryId: 'category-02' },
  { id: 'arch-engagement', label: 'Engagement', tier: 'application', targetCategoryId: 'category-03' },
  { id: 'arch-insurance', label: 'Insurance', tier: 'application', targetCategoryId: 'category-04' },
  { id: 'arch-pharma', label: 'Pharma', tier: 'application', targetCategoryId: 'category-05' },
  { id: 'arch-data-ai', label: 'Data & AI', tier: 'intelligence', targetCategoryId: 'category-06' },
  { id: 'arch-platform', label: 'Platform', tier: 'ecosystem', targetCategoryId: 'category-07' },
];

export const PLATFORM_CATEGORIES: PlatformCategorySummary[] = [
  {
    id: 'category-01',
    number: 'Category 01',
    shortLabel: 'Care Delivery',
    title: 'Care Delivery & Clinical Operations',
    description: 'Care delivery, navigation, and clinical workflows for providers and care teams.',
    moduleCountLabel: '14 modules',
    subgroupCountLabel: '4 subgroups',
  },
  {
    id: 'category-02',
    number: 'Category 02',
    shortLabel: 'Remote Monitoring',
    title: 'Remote Monitoring & Vitals',
    description: 'Continuous remote patient monitoring across vitals, devices, and care protocols.',
    moduleCountLabel: '3 modules',
    subgroupCountLabel: '1 subgroup',
  },
  {
    id: 'category-03',
    number: 'Category 03',
    shortLabel: 'Engagement',
    title: 'Engagement, Experience & Wellness',
    description: 'Member engagement, content, rewards, and preventive wellness journeys.',
    moduleCountLabel: '29 modules',
    subgroupCountLabel: '6 subgroups',
  },
  {
    id: 'category-04',
    number: 'Category 04',
    shortLabel: 'Insurance',
    title: 'Insurance Ecosystem',
    description: 'Insurance workflows, CRM, and member operations for health insurers.',
    moduleCountLabel: '1 module',
    subgroupCountLabel: '1 subgroup',
  },
  {
    id: 'category-05',
    number: 'Category 05',
    shortLabel: 'Pharma & PSP',
    title: 'Pharma & Patient Support Ecosystem',
    description: 'PSP, PAP, acquisition, and analytics for pharma and specialty therapies.',
    moduleCountLabel: '2 modules',
    subgroupCountLabel: '2 subgroups',
  },
  {
    id: 'category-06',
    number: 'Category 06',
    shortLabel: 'Data & AI',
    title: 'Data, AI & Automation',
    description: 'Data platforms and AI engines powering intelligence across GOQii HealthEngage.',
    moduleCountLabel: '5 modules',
    subgroupCountLabel: '3 subgroups',
  },
  {
    id: 'category-07',
    number: 'Category 07',
    shortLabel: 'Platform Layer',
    title: 'Platform & Ecosystem Layer',
    description: 'APIs, devices, integrations, and control planes for the broader ecosystem.',
    moduleCountLabel: '7 modules',
    subgroupCountLabel: '4 subgroups',
  },
];

export const MODULE_ARCHITECTURE: CategoryArchitectureData[] = [
  {
    id: 'category-01',
    number: 'Category 01',
    shortLabel: '01 Care Delivery',
    title: 'Care Delivery & Clinical Operations',
    description:
      'Clinical operations across care teams, providers, and facilities — coordinated by shared data, identity, and governance.',
    totalCountLabel: '14 modules · 4 subgroups',
    subgroups: [
      {
        id: 'care-management',
        name: 'Care Management',
        countLabel: '6 modules',
        modules: [
          {
            id: 'medicaremanage',
            name: 'MediCareManage',
            description: 'Longitudinal care plans and case management.',
          },
          {
            id: 'carenavigate',
            name: 'CareNavigate',
            description: 'Guided member navigation across the care network.',
          },
          {
            id: 'carecoordinate',
            name: 'CareCoordinate',
            description: 'Multi-provider coordination and task routing.',
          },
          {
            id: 'coach',
            name: 'Coach',
            description: 'Coach-led programs with structured protocols.',
          },
          {
            id: 'memberconnectagent',
            name: 'MemberConnectAgent',
            description: 'Agent console for high-touch member support.',
          },
          {
            id: 'memberconnectadmin',
            name: 'MemberConnectAdmin',
            description: 'Administrative controls for engagement teams.',
          },
        ],
      },
      {
        id: 'clinical-provider-ops',
        name: 'Clinical & Provider Operations',
        countLabel: '5 modules',
        modules: [
          {
            id: 'clinic',
            name: 'Clinic',
            description:
              'Run the clinic day to day. Schedule appointments, manage OPD and keep clinical documentation in one place.',
          },
          {
            id: 'mdp',
            name: 'MDP',
            description: 'Multi-disciplinary practice orchestration.',
          },
          {
            id: 'medopscentral',
            name: 'MedOpsCentral',
            description: 'Operational command for medical teams.',
          },
          {
            id: 'healthcarecenter',
            name: 'HealthCareCenter',
            description: 'Facility-level operations and intake.',
          },
          {
            id: 'ai-clinical-assistant',
            name: 'AI Clinical Assistant',
            description: 'In-consult AI support for clinicians.',
            comingSoon: true,
          },
        ],
      },
      {
        id: 'clinical-data-migration',
        name: 'Clinical Data & Migration',
        countLabel: '1 module',
        modules: [
          {
            id: 'clinicaldatamigrate',
            name: 'ClinicalDataMigrate',
            description:
              'Move clinical records between systems at scale. Map, validate and migrate patient data without losing a field.',
          },
        ],
      },
      {
        id: 'provider-network-referral',
        name: 'Provider Network & Referral',
        countLabel: '2 modules',
        modules: [
          {
            id: 'provider-network-directory',
            name: 'Provider Network Directory',
            description: 'Directory of in-network providers.',
            comingSoon: true,
          },
          {
            id: 'specialist-discovery-routing',
            name: 'Specialist Discovery & Routing',
            description: 'Route patients to the right specialist.',
            comingSoon: true,
          },
        ],
      },
    ],
  },
  {
    id: 'category-02',
    number: 'Category 02',
    shortLabel: '02 Remote Monitoring',
    title: 'Remote Monitoring & Vitals',
    description:
      'Continuous vitals capture, trend intelligence, and clinician-grade monitoring for chronic, post-acute, and high-risk cohorts.',
    totalCountLabel: '3 modules · 1 subgroup',
    subgroups: [
      {
        id: 'rpm-platform',
        name: 'RPM Platform',
        countLabel: '3 modules',
        modules: [
          {
            id: 'rpm',
            name: 'RPM',
            description:
              'Monitor patients remotely between visits. Track vitals from connected devices, flag readings that cross a threshold and act before they escalate.',
          },
          {
            id: 'rvm',
            name: 'RVM',
            description:
              'Manage remote vitals and the thresholds behind them. See every reading as it arrives and set the limits that trigger an alert.',
          },
          {
            id: 'rpmc',
            name: 'RPMC',
            description: 'Clinical command center for RPM cohorts.',
          },
        ],
      },
    ],
  },
  {
    id: 'category-03',
    number: 'Category 03',
    shortLabel: '03 Engagement',
    title: 'Engagement, Experience & Wellness',
    description:
      'Personalized engagement, content, rewards, and preventive programs that drive sustained behaviour change across populations.',
    totalCountLabel: '29 modules · 6 subgroups',
    subgroups: [
      {
        id: 'engagement-platforms',
        name: 'Engagement Platforms',
        countLabel: '6 modules',
        modules: [
          {
            id: 'smartengage',
            name: 'SmartEngage',
            description:
              'Launch campaigns and communications, then measure what actually moves engagement. Reach the right members with the right message — and see what worked.',
          },
          {
            id: 'engagehub',
            name: 'EngageHub',
            description: 'Omnichannel engagement control plane.',
          },
          {
            id: 'contentmanagement',
            name: 'ContentManagement',
            description:
              'Publish the articles, videos and guides members see. Create, organise and schedule clinical and lifestyle content from one library.',
          },
          {
            id: 'feedback360',
            name: 'Feedback360',
            description:
              'Run surveys and collect feedback across your audience. Turn what members tell you into decisions, all in one place.',
          },
          {
            id: 'carenavigator-ai-agent',
            name: 'CareNavigator AI Agent',
            description: 'Conversational AI navigator for care journeys.',
            comingSoon: true,
          },
          {
            id: 'member-engagement-ai-agent',
            name: 'Member Engagement AI Agent',
            description: 'AI agent for proactive member engagement.',
            comingSoon: true,
          },
        ],
      },
      {
        id: 'program-population-engagement',
        name: 'Program & Population Engagement',
        countLabel: '6 modules',
        modules: [
          {
            id: 'programmanagement',
            name: 'ProgramManagement',
            description: 'Configurable health program framework.',
          },
          {
            id: 'ppmanagement',
            name: 'P&PManagement',
            description: 'Programs & population segmentation.',
          },
          {
            id: 'wellnexus',
            name: 'WellNexus',
            description:
              'Engage people in their health with challenges, steps and HRA. Build lasting habits for employees, members, patients or customers — powered by real activity.',
          },
          {
            id: 'predictive-intervention-engine',
            name: 'Predictive Intervention Engine',
            description: 'Forecast and trigger timely interventions.',
            comingSoon: true,
          },
          {
            id: 'churn-prediction-reengagement',
            name: 'Churn Prediction & Re-engagement',
            description: 'Predict churn and trigger re-engagement.',
            comingSoon: true,
          },
          {
            id: 'personalized-program-generator',
            name: 'Personalized Program Generator',
            description: 'AI-generated personalized health programs.',
            comingSoon: true,
          },
        ],
      },
      {
        id: 'rewards-loyalty',
        name: 'Rewards & Loyalty',
        countLabel: '2 modules',
        modules: [
          {
            id: 'rewardcore',
            name: 'RewardCore',
            description:
              'Design reward programs and the rules behind them. Configure how members earn, set eligibility, points and caps — all from one engine. The engine that issues and tracks every reward. Manage balances, credits and redemptions with a complete, auditable ledger.',
          },
          {
            id: 'loyaltystack',
            name: 'LoyaltyStack',
            description: 'Tiered loyalty and retention mechanics.',
          },
        ],
      },
      {
        id: 'lifestyle-preventive-health',
        name: 'Lifestyle & Preventive Health',
        countLabel: '4 modules',
        modules: [
          {
            id: 'workout-studio',
            name: 'Workout Studio',
            description: 'On-demand and live fitness sessions.',
          },
          {
            id: 'mindshift',
            name: 'MindShift',
            description: 'Mental wellness and mindfulness programs.',
          },
          {
            id: 'nutriforge',
            name: 'NutriForge',
            description:
              'Plan nutrition that people can follow. Build meal plans, track intake and guide members towards healthier eating.',
          },
          {
            id: 'healthmanage',
            name: 'HealthManage',
            description: 'Self-managed health tracking.',
          },
        ],
      },
      {
        id: 'corporate-health-intelligence',
        name: 'Corporate Health Intelligence',
        countLabel: '6 modules',
        modules: [
          {
            id: 'employee-health-risk-index',
            name: 'Employee Health Risk Index',
            description: 'Workforce health risk index.',
            comingSoon: true,
          },
          {
            id: 'absenteeism-analytics',
            name: 'Absenteeism Analytics',
            description: 'Analyze workforce absenteeism.',
            comingSoon: true,
          },
          {
            id: 'occupational-health-tracking',
            name: 'Occupational Health Tracking',
            description: 'Track occupational health activity.',
            comingSoon: true,
          },
          {
            id: 'mental-health-monitoring',
            name: 'Mental Health Monitoring',
            description: 'Monitor workforce mental health.',
            comingSoon: true,
          },
          {
            id: 'workplace-risk-assessment',
            name: 'Workplace Risk Assessment',
            description: 'Assess workplace-specific risks.',
            comingSoon: true,
          },
          {
            id: 'corporate-health-roi-dashboard',
            name: 'Corporate Health ROI Dashboard',
            description: 'ROI dashboard for corporate health.',
            comingSoon: true,
          },
        ],
      },
      {
        id: 'communication-engagement',
        name: 'Communication & Engagement',
        countLabel: '5 modules',
        modules: [
          {
            id: 'omnichannel-communication-hub',
            name: 'Omnichannel Communication Hub',
            description: 'Unified member communication hub.',
            comingSoon: true,
          },
          {
            id: 'campaign-automation',
            name: 'Campaign Automation',
            description: 'Automate multi-channel campaigns.',
            comingSoon: true,
          },
          {
            id: 'notification-engine',
            name: 'Notification Engine',
            description: 'Deliver notifications at scale.',
            comingSoon: true,
          },
          {
            id: 'interaction-timeline',
            name: 'Interaction Timeline',
            description: 'Timeline of all member interactions.',
            comingSoon: true,
          },
          {
            id: 'feedback-survey-engine',
            name: 'Feedback & Survey Engine',
            description: 'Capture feedback and surveys.',
            comingSoon: true,
          },
        ],
      },
    ],
  },
  {
    id: 'category-04',
    number: 'Category 04',
    shortLabel: '04 Insurance',
    title: 'Insurance Ecosystem',
    description:
      'Insurer-grade workflows across member operations, underwriting signals, and CRM.',
    totalCountLabel: '1 module · 1 subgroup',
    subgroups: [
      {
        id: 'insurance-operations',
        name: 'Insurance Operations',
        countLabel: '1 module',
        modules: [
          {
            id: 'crm',
            name: 'CRM',
            description:
              'One view of every member and agent relationship. Track interactions, manage leads and follow every case through to resolution.',
          },
        ],
      },
    ],
  },
  {
    id: 'category-05',
    number: 'Category 05',
    shortLabel: '05 Pharma & PSP',
    title: 'Pharma & Patient Support Ecosystem',
    description:
      'Comprehensive pharma programs for patient support, adherence, access, acquisition, and outcome analytics.',
    totalCountLabel: '2 modules · 2 subgroups',
    subgroups: [
      {
        id: 'pharma-engagement-acquisition',
        name: 'Pharma Engagement & Acquisition',
        countLabel: '1 module',
        modules: [
          {
            id: 'patient-education-system',
            name: 'Patient Education System',
            description: 'Disease and therapy education.',
          },
        ],
      },
      {
        id: 'pharmacy-epharmacy',
        name: 'Pharmacy & ePharmacy',
        countLabel: '1 module',
        modules: [
          {
            id: 'medicine-order-fulfillment',
            name: 'Medicine Order & Fulfillment',
            description: 'Order and fulfil medicines.',
            comingSoon: true,
          },
        ],
      },
    ],
  },
  {
    id: 'category-06',
    number: 'Category 06',
    shortLabel: '06 Data & AI',
    title: 'Data, AI & Automation',
    description:
      'Unified data and AI substrate — from ingestion and migration to clinical-grade AI engines.',
    totalCountLabel: '5 modules · 3 subgroups',
    subgroups: [
      {
        id: 'data-platforms',
        name: 'Data Platforms',
        countLabel: '2 modules',
        modules: [
          {
            id: 'endtoenddata',
            name: 'EndToEndData',
            description: 'Lakehouse across clinical and engagement data.',
          },
          {
            id: 'datamigrate',
            name: 'DataMigrate',
            description: 'Enterprise data migration framework.',
          },
        ],
      },
      {
        id: 'ai-engines',
        name: 'AI Engines',
        countLabel: '2 modules',
        modules: [
          {
            id: 'facevitals',
            name: 'FaceVitals',
            description:
              'Measure vitals with nothing but a camera. Capture heart rate, breathing and stress from a short face scan — no device required.',
          },
          {
            id: 'medigenie',
            name: 'MediGenie',
            description:
              'An AI copilot for care teams. Ask clinical questions, summarise records and draft notes in seconds.',
          },
        ],
      },
      {
        id: 'ai-engines-clinical',
        name: 'AI Engines — Clinical AI',
        countLabel: '1 module',
        modules: [
          {
            id: 'medical-imaging-ai',
            name: 'Medical Imaging AI (MRI/CT/X-ray)',
            description: 'AI interpretation of medical imaging.',
            comingSoon: true,
          },
        ],
      },
    ],
  },
  {
    id: 'category-07',
    number: 'Category 07',
    shortLabel: '07 Platform Layer',
    title: 'Platform & Ecosystem Layer',
    description:
      'Foundational layer for APIs, device interoperability, integrations, and platform orchestration.',
    totalCountLabel: '7 modules · 4 subgroups',
    subgroups: [
      {
        id: 'api-developer-ecosystem',
        name: 'API & Developer Ecosystem',
        countLabel: '1 module',
        modules: [
          {
            id: 'api-center',
            name: 'GOQii HealthEngage API Center',
            description:
              'Manage every API that powers the suite. Provision access, monitor usage and keep integrations running from one place.',
          },
        ],
      },
      {
        id: 'connected-devices-iot',
        name: 'Connected Devices & IoT Layer',
        countLabel: '1 module',
        modules: [
          {
            id: 'health-device-hub',
            name: 'Health Device Hub',
            description:
              'Connect third-party health devices like Oura and Whoop. Bring real activity and medical data into the platform, securely.',
          },
        ],
      },
      {
        id: 'integration-interoperability',
        name: 'Integration & Interoperability',
        countLabel: '1 module',
        modules: [
          {
            id: 'integrations',
            name: 'Integrations',
            description:
              'Connect the suite to the systems you already use. Sync data in and out with HRIS, partner and enterprise tools.',
          },
        ],
      },
      {
        id: 'platform-control-orchestration',
        name: 'Platform Control & Orchestration',
        countLabel: '4 modules',
        modules: [
          {
            id: 'admin',
            name: 'Admin',
            description: 'Tenant administration and governance.',
          },
          {
            id: 'dashboardmanagement',
            name: 'DashboardManagement',
            description: 'Configurable dashboards and KPIs.',
          },
          {
            id: 'triage',
            name: 'Triage',
            description:
              'Sort incoming cases by urgency. Route each one to the right team and escalate what cannot wait.',
          },
          {
            id: 'calliq',
            name: 'CallIQ',
            description: 'Call intelligence and conversation analytics.',
            comingSoon: true,
          },
        ],
      },
    ],
  },
];

export const WHY_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'api-first',
    title: 'API-first architecture',
    description:
      'Every capability is a composable API — FHIR, HL7, webhooks, and SDKs for modern builds.',
  },
  {
    id: 'device-interop',
    title: 'Device interoperability',
    description:
      'Certified medical and lifestyle device integration with a canonical data model.',
  },
  {
    id: 'care-orchestration',
    title: 'Care orchestration',
    description:
      'Longitudinal journeys across providers, coaches, and automation with policy controls.',
  },
  {
    id: 'ai-workflows',
    title: 'AI-powered workflows',
    description:
      'Embedded AI for triage, vitals, adherence, and clinical decision support.',
  },
  {
    id: 'enterprise-security',
    title: 'Enterprise security',
    description:
      'Multi-tenant isolation, granular RBAC, encryption, and comprehensive audit trails.',
  },
  {
    id: 'modular-deployment',
    title: 'Modular deployment',
    description:
      'Adopt modules independently or as a full platform — cloud, hybrid, or region-bound.',
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'insurers',
    title: 'Insurers',
    description:
      'Drive member engagement, reduce claims cost, and deliver continuous care across policy lifecycles.',
    highlights: [
      'Member engagement at scale',
      'Chronic care orchestration',
      'Underwriting signals',
    ],
  },
  {
    id: 'hospitals-clinics',
    title: 'Hospitals & Clinics',
    description:
      'Extend care beyond the facility with RPM, clinical navigation, and HIS-integrated workflows.',
    highlights: [
      'RPM & post-discharge',
      'OPD and clinic ops',
      'HIS / EMR interoperability',
    ],
  },
  {
    id: 'pharma',
    title: 'Pharma',
    description:
      'Operate specialty PSPs and PAPs with adherence, access, HCP engagement, and outcome analytics.',
    highlights: [
      'PSP & PAP programs',
      'Adherence and outcomes',
      'HCP engagement',
    ],
  },
  {
    id: 'employers',
    title: 'Employers / Corporate Wellness',
    description:
      'Population-scale wellness with preventive, mental health, and benefits-linked programs.',
    highlights: [
      'Preventive wellness',
      'Mental health support',
      'Workforce analytics',
    ],
  },
  {
    id: 'health-platforms',
    title: 'Health Platforms / Digital Partners',
    description:
      'Compose on GOQii HealthEngage APIs, devices, and data to accelerate digital health products.',
    highlights: [
      'API-first integration',
      'Device interoperability',
      'White-label journeys',
    ],
  },
];
