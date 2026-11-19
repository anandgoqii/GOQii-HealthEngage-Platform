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
  layerConnection: string;
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
    description: 'Clinic workspaces, case plans, and provider routing',
  },
  {
    id: 'app-rpm',
    label: 'RPM',
    countLabel: '3 modules',
    targetCategoryId: 'category-02',
    description: 'Between-visit vitals and threshold alerting',
  },
  {
    id: 'app-engage',
    label: 'Engage',
    countLabel: '29 modules',
    targetCategoryId: 'category-03',
    description: 'Omnichannel outreach, lifestyle tools, and loyalty',
  },
  {
    id: 'app-insurance',
    label: 'Insurance',
    countLabel: '14 modules',
    targetCategoryId: 'category-04',
    description: 'Policyholder CRM and service resolution',
  },
  {
    id: 'app-pharma',
    label: 'Pharma',
    countLabel: '24 modules',
    targetCategoryId: 'category-05',
    description: 'Therapy education and medicine fulfillment',
  },
  {
    id: 'app-ai',
    label: 'AI',
    countLabel: '26 modules',
    targetCategoryId: 'category-06',
    description: 'Data pipelines, camera vitals, and clinical copilots',
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
  {
    id: 'arch-care',
    label: 'Care',
    tier: 'application',
    targetCategoryId: 'category-01',
    layerConnection:
      'Operates in Layer 01 atop shared governance and triage routing, while streaming clinical encounters into Layer 02 for AI-assisted workflows.',
  },
  {
    id: 'arch-remote',
    label: 'Remote',
    tier: 'application',
    targetCategoryId: 'category-02',
    layerConnection:
      'Bridges Layer 03 connected device streams into Layer 01 clinician command centers, routing threshold alerts through Layer 02 intelligence.',
  },
  {
    id: 'arch-engagement',
    label: 'Engagement',
    tier: 'application',
    targetCategoryId: 'category-03',
    layerConnection:
      'Connects Layer 01 outreach and wellness journeys with Layer 02 behavioral signals and Layer 03 external system integrations.',
  },
  {
    id: 'arch-insurance',
    label: 'Insurance',
    tier: 'application',
    targetCategoryId: 'category-04',
    layerConnection:
      'Links Layer 01 policyholder CRM and case resolution with Layer 02 enterprise analytics and Layer 04 tenant access controls.',
  },
  {
    id: 'arch-pharma',
    label: 'Pharma',
    tier: 'application',
    targetCategoryId: 'category-05',
    layerConnection:
      'Connects Layer 01 patient education and order fulfillment to Layer 02 data pipelines and Layer 03 partner integrations.',
  },
  {
    id: 'arch-data-ai',
    label: 'Data & AI',
    tier: 'intelligence',
    targetCategoryId: 'category-06',
    layerConnection:
      'Sits at Layer 02 as the intelligence bridge — unifying Layer 01 clinical and engagement records with Layer 03 device streams.',
  },
  {
    id: 'arch-platform',
    label: 'Platform',
    tier: 'ecosystem',
    targetCategoryId: 'category-07',
    layerConnection:
      'Anchors Layers 03 and 04 — exposing APIs, device connectors, and enterprise integrations upward while governing every tenant.',
  },
];

export const PLATFORM_CATEGORIES: PlatformCategorySummary[] = [
  {
    id: 'category-01',
    number: 'Category 01',
    shortLabel: 'Care Delivery',
    title: 'Care Delivery & Clinical Operations',
    description:
      'Equips providers and care teams to run daily clinical operations, guide patient journeys, and coordinate multi-provider care.',
    moduleCountLabel: '14 modules',
    subgroupCountLabel: '4 subgroups',
  },
  {
    id: 'category-02',
    number: 'Category 02',
    shortLabel: 'Remote Monitoring',
    title: 'Remote Monitoring & Vitals',
    description:
      'Extends clinical oversight beyond facility visits by capturing patient vitals and managing threshold alerts for high-risk cohorts.',
    moduleCountLabel: '3 modules',
    subgroupCountLabel: '1 subgroup',
  },
  {
    id: 'category-03',
    number: 'Category 03',
    shortLabel: 'Engagement',
    title: 'Engagement, Experience & Wellness',
    description:
      'Drives sustained participation and preventive health through targeted programs, lifestyle journeys, and auditable rewards.',
    moduleCountLabel: '29 modules',
    subgroupCountLabel: '6 subgroups',
  },
  {
    id: 'category-04',
    number: 'Category 04',
    shortLabel: 'Insurance',
    title: 'Insurance Ecosystem',
    description:
      'Supports health insurers with unified member CRM, agent tracking, and end-to-end case resolution across policy lifecycles.',
    moduleCountLabel: '1 module',
    subgroupCountLabel: '1 subgroup',
  },
  {
    id: 'category-05',
    number: 'Category 05',
    shortLabel: 'Pharma & PSP',
    title: 'Pharma & Patient Support Ecosystem',
    description:
      'Enables pharmaceutical teams to deliver patient support programs spanning disease education and medicine order fulfillment.',
    moduleCountLabel: '2 modules',
    subgroupCountLabel: '2 subgroups',
  },
  {
    id: 'category-06',
    number: 'Category 06',
    shortLabel: 'Data & AI',
    title: 'Data, AI & Automation',
    description:
      'Consolidates enterprise health records and powers AI capabilities across camera-based vitals, clinical copilots, and medical imaging.',
    moduleCountLabel: '5 modules',
    subgroupCountLabel: '3 subgroups',
  },
  {
    id: 'category-07',
    number: 'Category 07',
    shortLabel: 'Platform Layer',
    title: 'Platform & Ecosystem Layer',
    description:
      'Provides the API management, third-party device hub, enterprise connectors, and multi-tenant control plane that unite the suite.',
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
      'Fourteen modules across four subgroups covering care management, clinic operations, clinical data migration, and provider referral.',
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
      'Three RPM Platform modules covering continuous vitals tracking, threshold management, and cohort command.',
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
      'Twenty-nine modules across six subgroups covering engagement platforms, population programs, rewards, preventive lifestyle, corporate health, and messaging.',
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
      'Insurance Operations module providing unified member and agent relationship tracking through case resolution.',
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
      'Two modules across Pharma Engagement & Acquisition and Pharmacy & ePharmacy workflows.',
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
      'Five modules across Data Platforms, AI Engines, and Clinical AI for lakehouse storage, migration, and AI-assisted care.',
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
      'Seven modules across API management, connected devices, enterprise integrations, and platform control.',
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
    id: 'care-orchestration',
    title: 'Connected healthcare operations',
    description:
      'Coordinate providers, coaches, clinics, and support teams in one operational flow from initial intake through ongoing care.',
  },
  {
    id: 'device-interop',
    title: 'Better visibility across care journeys',
    description:
      'Bring together device vitals, clinical records, and member interactions so care teams spot changes early between visits.',
  },
  {
    id: 'modular-deployment',
    title: 'Scalable enterprise workflows',
    description:
      'Start with targeted programs and expand across cohorts, facilities, or regions without rebuilding underlying systems.',
  },
  {
    id: 'api-first',
    title: 'Connected data and integrations',
    description:
      'Sync clinical, HRIS, device, and partner data into your existing enterprise tools so teams act on unified records.',
  },
  {
    id: 'ai-workflows',
    title: 'Actionable intelligence',
    description:
      'Turn incoming vitals, survey feedback, and clinical history into urgent case triage, proactive outreach, and faster clinical decisions.',
  },
  {
    id: 'enterprise-security',
    title: 'Governed multi-tenant scale',
    description:
      'Support distinct business units, partners, and geographies with tenant isolation, administrative controls, and auditable tracking.',
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
