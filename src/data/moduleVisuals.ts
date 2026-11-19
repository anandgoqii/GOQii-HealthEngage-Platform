import type { ComponentType } from 'react';
import {
  Activity,
  AlertTriangle,
  Apple,
  ArrowRightLeft,
  Award,
  BellRing,
  BookOpen,
  BotMessageSquare,
  Boxes,
  Brain,
  BrainCircuit,
  BrainCog,
  BriefcaseMedical,
  Building2,
  Cable,
  CalendarCheck2,
  CalendarClock,
  ChartColumn,
  ChartSpline,
  ClipboardCheck,
  ClipboardPlus,
  Code2,
  Command,
  Compass,
  Cpu,
  Crown,
  Database,
  DatabaseZap,
  Dumbbell,
  FileBarChart,
  Flame,
  FlaskConical,
  FolderKanban,
  FolderSync,
  Gauge,
  GitMerge,
  Globe,
  GraduationCap,
  Handshake,
  HardHat,
  Headset,
  HeartHandshake,
  HeartPulse,
  History,
  Hospital,
  Layers,
  LayoutDashboard,
  Lock,
  LockKeyhole,
  MapPinned,
  Megaphone,
  MessageCircle,
  MessageCircleHeart,
  MessageSquareQuote,
  Monitor,
  Navigation,
  Network,
  PackageCheck,
  PhoneCall,
  Pill,
  Plug,
  Radio,
  RefreshCw,
  Route,
  ScanFace,
  ScanSearch,
  Send,
  Settings2,
  Shield,
  ShieldCheck,
  Siren,
  SmilePlus,
  Sparkle,
  SquareActivity,
  Stethoscope,
  Target,
  UserCheck,
  UserRoundCog,
  Users,
  Wand2,
  Watch,
  Workflow,
} from 'lucide-react';

export type ModuleColorKey =
  | 'emerald'
  | 'sky'
  | 'indigo'
  | 'teal'
  | 'amber'
  | 'rose'
  | 'violet'
  | 'cyan';

export interface ColorThemeTokens {
  iconBox: string;
  iconBoxHover: string;
  accentBar: string;
  hoverBorder: string;
  textAccent: string;
  badgeSoft: string;
}

export const MODULE_COLOR_THEMES: Record<ModuleColorKey, ColorThemeTokens> = {
  emerald: {
    iconBox: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconBoxHover: 'group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600',
    accentBar: 'bg-emerald-500',
    hoverBorder: 'hover:border-emerald-400',
    textAccent: 'text-emerald-700',
    badgeSoft: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  teal: {
    iconBox: 'bg-teal-50 text-teal-700 border-teal-200',
    iconBoxHover: 'group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600',
    accentBar: 'bg-teal-500',
    hoverBorder: 'hover:border-teal-400',
    textAccent: 'text-teal-700',
    badgeSoft: 'bg-teal-50 text-teal-700 border-teal-200',
  },
  sky: {
    iconBox: 'bg-sky-50 text-sky-700 border-sky-200',
    iconBoxHover: 'group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600',
    accentBar: 'bg-sky-500',
    hoverBorder: 'hover:border-sky-400',
    textAccent: 'text-sky-700',
    badgeSoft: 'bg-sky-50 text-sky-700 border-sky-200',
  },
  indigo: {
    iconBox: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    iconBoxHover: 'group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600',
    accentBar: 'bg-indigo-500',
    hoverBorder: 'hover:border-indigo-400',
    textAccent: 'text-indigo-700',
    badgeSoft: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  violet: {
    iconBox: 'bg-violet-50 text-violet-700 border-violet-200',
    iconBoxHover: 'group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600',
    accentBar: 'bg-violet-500',
    hoverBorder: 'hover:border-violet-400',
    textAccent: 'text-violet-700',
    badgeSoft: 'bg-violet-50 text-violet-700 border-violet-200',
  },
  cyan: {
    iconBox: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    iconBoxHover: 'group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600',
    accentBar: 'bg-cyan-500',
    hoverBorder: 'hover:border-cyan-400',
    textAccent: 'text-cyan-700',
    badgeSoft: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  },
  amber: {
    iconBox: 'bg-amber-50 text-amber-700 border-amber-200',
    iconBoxHover: 'group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600',
    accentBar: 'bg-amber-500',
    hoverBorder: 'hover:border-amber-400',
    textAccent: 'text-amber-700',
    badgeSoft: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  rose: {
    iconBox: 'bg-rose-50 text-rose-700 border-rose-200',
    iconBoxHover: 'group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600',
    accentBar: 'bg-rose-500',
    hoverBorder: 'hover:border-rose-400',
    textAccent: 'text-rose-700',
    badgeSoft: 'bg-rose-50 text-rose-700 border-rose-200',
  },
};

export type IconComponent = ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

export interface VisualSpec {
  icon: IconComponent;
  color: ModuleColorKey;
}

/** Major website section icon identities */
export const SECTION_VISUALS: Record<string, IconComponent> = {
  hero: Activity,
  overview: LayoutDashboard,
  application: Layers,
  architecture: Network,
  categories: Boxes,
  modules: Workflow,
  why: ShieldCheck,
  industries: Building2,
  cta: Handshake,
  contactCue: MessageCircle,
};

/** Seven platform category icons — unique identity per category */
export const CATEGORY_VISUALS: Record<string, VisualSpec> = {
  'category-01': { icon: HeartPulse, color: 'emerald' },
  'category-02': { icon: SquareActivity, color: 'teal' },
  'category-03': { icon: Users, color: 'sky' },
  'category-04': { icon: ShieldCheck, color: 'indigo' },
  'category-05': { icon: Pill, color: 'rose' },
  'category-06': { icon: BrainCircuit, color: 'violet' },
  'category-07': { icon: Cable, color: 'amber' },
};

/** Application Layer domain & foundation icons */
export const APPLICATION_DOMAIN_VISUALS: Record<string, IconComponent> = {
  'app-care': HeartPulse,
  'app-rpm': SquareActivity,
  'app-engage': Users,
  'app-insurance': ShieldCheck,
  'app-pharma': Pill,
  'app-ai': BrainCircuit,
};

export const FOUNDATION_ENGINE_VISUALS: Record<string, IconComponent> = {
  'Data & AI': DatabaseZap,
  Automation: Workflow,
  APIs: Code2,
  Devices: Cpu,
  Control: Settings2,
  'FHIR / HL7 ready': Activity,
  'Enterprise security': Lock,
};

/** Why GOQii HealthEngage benefit icons */
export const WHY_OUTCOME_VISUALS: Record<string, IconComponent> = {
  'care-orchestration': GitMerge,
  'device-interop': SquareActivity,
  'modular-deployment': Layers,
  'api-first': DatabaseZap,
  'ai-workflows': BrainCircuit,
  'enterprise-security': LockKeyhole,
};

/** Industries icons */
export const INDUSTRY_VISUALS: Record<string, IconComponent> = {
  insurers: ShieldCheck,
  'hospitals-clinics': Hospital,
  pharma: FlaskConical,
  employers: Users,
  'health-platforms': Globe,
};

/** Subgroup icons */
export const SUBGROUP_VISUALS: Record<string, VisualSpec> = {
  'care-management': { icon: Stethoscope, color: 'emerald' },
  'clinical-provider-ops': { icon: BriefcaseMedical, color: 'sky' },
  'clinical-data-migration': { icon: ArrowRightLeft, color: 'cyan' },
  'provider-network-referral': { icon: MapPinned, color: 'amber' },
  'rpm-platform': { icon: SquareActivity, color: 'teal' },
  'engagement-platforms': { icon: Megaphone, color: 'sky' },
  'program-population-engagement': { icon: Target, color: 'emerald' },
  'rewards-loyalty': { icon: Award, color: 'amber' },
  'lifestyle-preventive-health': { icon: HeartHandshake, color: 'emerald' },
  'corporate-health-intelligence': { icon: ChartColumn, color: 'indigo' },
  'communication-engagement': { icon: MessageCircle, color: 'sky' },
  'insurance-operations': { icon: ShieldCheck, color: 'indigo' },
  'pharma-engagement-acquisition': { icon: GraduationCap, color: 'emerald' },
  'pharmacy-epharmacy': { icon: PackageCheck, color: 'teal' },
  'data-platforms': { icon: Database, color: 'cyan' },
  'ai-engines': { icon: BrainCircuit, color: 'violet' },
  'ai-engines-clinical': { icon: ScanSearch, color: 'emerald' },
  'api-developer-ecosystem': { icon: Code2, color: 'indigo' },
  'connected-devices-iot': { icon: Watch, color: 'teal' },
  'integration-interoperability': { icon: Plug, color: 'sky' },
  'platform-control-orchestration': { icon: Shield, color: 'amber' },
};

/** All 61 individual module icons — unique, semantically mapped per module */
export const MODULE_VISUALS: Record<string, VisualSpec> = {
  // Category 01 — Care Delivery & Clinical Operations (14 modules)
  medicaremanage: { icon: ClipboardPlus, color: 'emerald' },
  carenavigate: { icon: Compass, color: 'sky' },
  carecoordinate: { icon: GitMerge, color: 'teal' },
  coach: { icon: MessageCircleHeart, color: 'rose' },
  memberconnectagent: { icon: Headset, color: 'sky' },
  memberconnectadmin: { icon: UserRoundCog, color: 'indigo' },

  clinic: { icon: CalendarClock, color: 'cyan' },
  mdp: { icon: Users, color: 'sky' },
  medopscentral: { icon: Command, color: 'indigo' },
  healthcarecenter: { icon: Hospital, color: 'teal' },
  'ai-clinical-assistant': { icon: BotMessageSquare, color: 'violet' },

  clinicaldatamigrate: { icon: ArrowRightLeft, color: 'cyan' },

  'provider-network-directory': { icon: MapPinned, color: 'amber' },
  'specialist-discovery-routing': { icon: Route, color: 'emerald' },

  // Category 02 — Remote Monitoring & Vitals (3 modules)
  rpm: { icon: SquareActivity, color: 'emerald' },
  rvm: { icon: Gauge, color: 'rose' },
  rpmc: { icon: Monitor, color: 'sky' },

  // Category 03 — Engagement, Experience & Wellness (29 modules)
  smartengage: { icon: Megaphone, color: 'emerald' },
  engagehub: { icon: Radio, color: 'indigo' },
  contentmanagement: { icon: BookOpen, color: 'sky' },
  feedback360: { icon: MessageSquareQuote, color: 'teal' },
  'carenavigator-ai-agent': { icon: Navigation, color: 'violet' },
  'member-engagement-ai-agent': { icon: Sparkle, color: 'rose' },

  programmanagement: { icon: FolderKanban, color: 'indigo' },
  ppmanagement: { icon: Target, color: 'sky' },
  wellnexus: { icon: Flame, color: 'amber' },
  'predictive-intervention-engine': { icon: ChartSpline, color: 'teal' },
  'churn-prediction-reengagement': { icon: RefreshCw, color: 'rose' },
  'personalized-program-generator': { icon: Wand2, color: 'violet' },

  rewardcore: { icon: Award, color: 'amber' },
  loyaltystack: { icon: Crown, color: 'indigo' },

  'workout-studio': { icon: Dumbbell, color: 'sky' },
  mindshift: { icon: Brain, color: 'violet' },
  nutriforge: { icon: Apple, color: 'emerald' },
  healthmanage: { icon: HeartPulse, color: 'rose' },

  'employee-health-risk-index': { icon: FileBarChart, color: 'amber' },
  'absenteeism-analytics': { icon: CalendarCheck2, color: 'sky' },
  'occupational-health-tracking': { icon: HardHat, color: 'teal' },
  'mental-health-monitoring': { icon: SmilePlus, color: 'rose' },
  'workplace-risk-assessment': { icon: AlertTriangle, color: 'amber' },
  'corporate-health-roi-dashboard': { icon: ChartColumn, color: 'indigo' },

  'omnichannel-communication-hub': { icon: MessageCircle, color: 'sky' },
  'campaign-automation': { icon: Send, color: 'indigo' },
  'notification-engine': { icon: BellRing, color: 'amber' },
  'interaction-timeline': { icon: History, color: 'teal' },
  'feedback-survey-engine': { icon: ClipboardCheck, color: 'cyan' },

  // Category 04 — Insurance Ecosystem (1 module)
  crm: { icon: UserCheck, color: 'indigo' },

  // Category 05 — Pharma & Patient Support Ecosystem (2 modules)
  'patient-education-system': { icon: GraduationCap, color: 'rose' },
  'medicine-order-fulfillment': { icon: PackageCheck, color: 'teal' },

  // Category 06 — Data, AI & Automation (5 modules)
  endtoenddata: { icon: Database, color: 'cyan' },
  datamigrate: { icon: FolderSync, color: 'sky' },
  facevitals: { icon: ScanFace, color: 'rose' },
  medigenie: { icon: BrainCog, color: 'violet' },
  'medical-imaging-ai': { icon: ScanSearch, color: 'teal' },

  // Category 07 — Platform & Ecosystem Layer (7 modules)
  'api-center': { icon: Code2, color: 'indigo' },
  'health-device-hub': { icon: Watch, color: 'cyan' },
  integrations: { icon: Plug, color: 'sky' },
  admin: { icon: Shield, color: 'emerald' },
  dashboardmanagement: { icon: LayoutDashboard, color: 'amber' },
  triage: { icon: Siren, color: 'rose' },
  calliq: { icon: PhoneCall, color: 'violet' },
};

/** Helper to retrieve module icon consistently anywhere in the app */
export function getModuleIcon(moduleId: string, subgroupId?: string): IconComponent {
  if (MODULE_VISUALS[moduleId]) return MODULE_VISUALS[moduleId].icon;
  if (subgroupId && SUBGROUP_VISUALS[subgroupId]) return SUBGROUP_VISUALS[subgroupId].icon;
  return Layers;
}

/** Helper to retrieve module icon, color key, and color theme tokens */
export function getModuleVisual(
  moduleId: string,
  subgroupId?: string
): { icon: IconComponent; color: ModuleColorKey; theme: ColorThemeTokens } {
  const spec =
    MODULE_VISUALS[moduleId] ||
    (subgroupId ? SUBGROUP_VISUALS[subgroupId] : undefined) || {
      icon: Layers,
      color: 'emerald' as ModuleColorKey,
    };
  return {
    icon: spec.icon,
    color: spec.color,
    theme: MODULE_COLOR_THEMES[spec.color],
  };
}
