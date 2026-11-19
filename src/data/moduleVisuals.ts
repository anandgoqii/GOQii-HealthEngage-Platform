import type { ComponentType } from 'react';
import {
  Activity,
  AlertTriangle,
  Apple,
  ArrowRightLeft,
  Award,
  BarChart3,
  Bell,
  BookOpen,
  Bot,
  Brain,
  BrainCircuit,
  Building2,
  CalendarClock,
  ClipboardCheck,
  ClipboardList,
  Code2,
  Command,
  Compass,
  Cpu,
  Crown,
  Database,
  Dumbbell,
  Flame,
  FolderSync,
  Gauge,
  GitMerge,
  GraduationCap,
  HardHat,
  Headphones,
  HeartHandshake,
  HeartPulse,
  History,
  Layers,
  LayoutDashboard,
  MapPin,
  Megaphone,
  MessageCircle,
  MessageSquareQuote,
  Monitor,
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
  Shield,
  ShieldCheck,
  Siren,
  SmilePlus,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  UserCheck,
  UserCog,
  Users,
  Wand2,
  Watch,
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
    iconBox: 'bg-[#2BC48A]/14 text-[#158059] border-[#2BC48A]/30',
    iconBoxHover: 'group-hover:bg-[#2BC48A] group-hover:text-[#0F172A] group-hover:border-[#2BC48A]',
    accentBar: 'bg-[#2BC48A]',
    hoverBorder: 'hover:border-[#2BC48A]',
    textAccent: 'text-[#158059]',
    badgeSoft: 'bg-[#2BC48A]/10 text-[#158059] border-[#2BC48A]/25',
  },
  sky: {
    iconBox: 'bg-sky-50 text-sky-700 border-sky-200/80',
    iconBoxHover: 'group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600',
    accentBar: 'bg-sky-500',
    hoverBorder: 'hover:border-sky-400',
    textAccent: 'text-sky-700',
    badgeSoft: 'bg-sky-50 text-sky-700 border-sky-200',
  },
  indigo: {
    iconBox: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
    iconBoxHover: 'group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600',
    accentBar: 'bg-indigo-500',
    hoverBorder: 'hover:border-indigo-400',
    textAccent: 'text-indigo-700',
    badgeSoft: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  teal: {
    iconBox: 'bg-teal-50 text-teal-700 border-teal-200/80',
    iconBoxHover: 'group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600',
    accentBar: 'bg-teal-500',
    hoverBorder: 'hover:border-teal-400',
    textAccent: 'text-teal-700',
    badgeSoft: 'bg-teal-50 text-teal-700 border-teal-200',
  },
  amber: {
    iconBox: 'bg-amber-50 text-amber-700 border-amber-200/80',
    iconBoxHover: 'group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600',
    accentBar: 'bg-amber-500',
    hoverBorder: 'hover:border-amber-400',
    textAccent: 'text-amber-700',
    badgeSoft: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  rose: {
    iconBox: 'bg-rose-50 text-rose-700 border-rose-200/80',
    iconBoxHover: 'group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600',
    accentBar: 'bg-rose-500',
    hoverBorder: 'hover:border-rose-400',
    textAccent: 'text-rose-700',
    badgeSoft: 'bg-rose-50 text-rose-700 border-rose-200',
  },
  violet: {
    iconBox: 'bg-violet-50 text-violet-700 border-violet-200/80',
    iconBoxHover: 'group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600',
    accentBar: 'bg-violet-500',
    hoverBorder: 'hover:border-violet-400',
    textAccent: 'text-violet-700',
    badgeSoft: 'bg-violet-50 text-violet-700 border-violet-200',
  },
  cyan: {
    iconBox: 'bg-cyan-50 text-cyan-700 border-cyan-200/80',
    iconBoxHover: 'group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600',
    accentBar: 'bg-cyan-500',
    hoverBorder: 'hover:border-cyan-400',
    textAccent: 'text-cyan-700',
    badgeSoft: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  },
};

export interface VisualSpec {
  icon: ComponentType<{ className?: string }>;
  color: ModuleColorKey;
}

export const CATEGORY_VISUALS: Record<string, VisualSpec> = {
  'category-01': { icon: Stethoscope, color: 'emerald' },
  'category-02': { icon: HeartPulse, color: 'rose' },
  'category-03': { icon: HeartHandshake, color: 'teal' },
  'category-04': { icon: ShieldCheck, color: 'sky' },
  'category-05': { icon: Pill, color: 'indigo' },
  'category-06': { icon: BrainCircuit, color: 'violet' },
  'category-07': { icon: Layers, color: 'amber' },
};

export const SUBGROUP_VISUALS: Record<string, VisualSpec> = {
  'care-management': { icon: ClipboardList, color: 'emerald' },
  'clinical-provider-ops': { icon: Stethoscope, color: 'sky' },
  'clinical-data-migration': { icon: ArrowRightLeft, color: 'cyan' },
  'provider-network-referral': { icon: MapPin, color: 'amber' },
  'rpm-platform': { icon: HeartPulse, color: 'rose' },
  'engagement-platforms': { icon: Megaphone, color: 'sky' },
  'program-population-engagement': { icon: Target, color: 'teal' },
  'rewards-loyalty': { icon: Award, color: 'amber' },
  'lifestyle-preventive-health': { icon: Dumbbell, color: 'emerald' },
  'corporate-health-intelligence': { icon: BarChart3, color: 'indigo' },
  'communication-engagement': { icon: MessageCircle, color: 'violet' },
  'insurance-operations': { icon: ShieldCheck, color: 'sky' },
  'pharma-engagement-acquisition': { icon: GraduationCap, color: 'indigo' },
  'pharmacy-epharmacy': { icon: PackageCheck, color: 'teal' },
  'data-platforms': { icon: Database, color: 'cyan' },
  'ai-engines': { icon: Sparkles, color: 'violet' },
  'ai-engines-clinical': { icon: ScanSearch, color: 'rose' },
  'api-developer-ecosystem': { icon: Code2, color: 'indigo' },
  'connected-devices-iot': { icon: Cpu, color: 'teal' },
  'integration-interoperability': { icon: Plug, color: 'sky' },
  'platform-control-orchestration': { icon: Shield, color: 'amber' },
};

export const MODULE_VISUALS: Record<string, VisualSpec> = {
  // Category 01 — Care Delivery & Clinical Operations
  medicaremanage: { icon: ClipboardList, color: 'emerald' },
  carenavigate: { icon: Compass, color: 'sky' },
  carecoordinate: { icon: GitMerge, color: 'teal' },
  coach: { icon: UserCheck, color: 'indigo' },
  memberconnectagent: { icon: Headphones, color: 'amber' },
  memberconnectadmin: { icon: UserCog, color: 'violet' },

  clinic: { icon: Building2, color: 'sky' },
  mdp: { icon: Users, color: 'teal' },
  medopscentral: { icon: Command, color: 'indigo' },
  healthcarecenter: { icon: HeartPulse, color: 'rose' },
  'ai-clinical-assistant': { icon: Bot, color: 'violet' },

  clinicaldatamigrate: { icon: ArrowRightLeft, color: 'cyan' },

  'provider-network-directory': { icon: MapPin, color: 'amber' },
  'specialist-discovery-routing': { icon: Route, color: 'emerald' },

  // Category 02 — Remote Monitoring & Vitals
  rpm: { icon: Activity, color: 'rose' },
  rvm: { icon: Gauge, color: 'amber' },
  rpmc: { icon: Monitor, color: 'sky' },

  // Category 03 — Engagement, Experience & Wellness
  smartengage: { icon: Megaphone, color: 'sky' },
  engagehub: { icon: Radio, color: 'indigo' },
  contentmanagement: { icon: BookOpen, color: 'amber' },
  feedback360: { icon: MessageSquareQuote, color: 'teal' },
  'carenavigator-ai-agent': { icon: Bot, color: 'violet' },
  'member-engagement-ai-agent': { icon: Sparkles, color: 'emerald' },

  programmanagement: { icon: Layers, color: 'indigo' },
  ppmanagement: { icon: Target, color: 'sky' },
  wellnexus: { icon: Flame, color: 'emerald' },
  'predictive-intervention-engine': { icon: TrendingUp, color: 'amber' },
  'churn-prediction-reengagement': { icon: RefreshCw, color: 'rose' },
  'personalized-program-generator': { icon: Wand2, color: 'violet' },

  rewardcore: { icon: Award, color: 'amber' },
  loyaltystack: { icon: Crown, color: 'indigo' },

  'workout-studio': { icon: Dumbbell, color: 'rose' },
  mindshift: { icon: Brain, color: 'violet' },
  nutriforge: { icon: Apple, color: 'emerald' },
  healthmanage: { icon: HeartPulse, color: 'teal' },

  'employee-health-risk-index': { icon: BarChart3, color: 'amber' },
  'absenteeism-analytics': { icon: CalendarClock, color: 'sky' },
  'occupational-health-tracking': { icon: HardHat, color: 'teal' },
  'mental-health-monitoring': { icon: SmilePlus, color: 'violet' },
  'workplace-risk-assessment': { icon: AlertTriangle, color: 'rose' },
  'corporate-health-roi-dashboard': { icon: TrendingUp, color: 'emerald' },

  'omnichannel-communication-hub': { icon: MessageCircle, color: 'sky' },
  'campaign-automation': { icon: Send, color: 'indigo' },
  'notification-engine': { icon: Bell, color: 'amber' },
  'interaction-timeline': { icon: History, color: 'teal' },
  'feedback-survey-engine': { icon: ClipboardCheck, color: 'emerald' },

  // Category 04 — Insurance Ecosystem
  crm: { icon: Users, color: 'sky' },

  // Category 05 — Pharma & Patient Support Ecosystem
  'patient-education-system': { icon: GraduationCap, color: 'indigo' },
  'medicine-order-fulfillment': { icon: PackageCheck, color: 'teal' },

  // Category 06 — Data, AI & Automation
  endtoenddata: { icon: Database, color: 'cyan' },
  datamigrate: { icon: FolderSync, color: 'sky' },
  facevitals: { icon: ScanFace, color: 'emerald' },
  medigenie: { icon: Sparkles, color: 'violet' },
  'medical-imaging-ai': { icon: ScanSearch, color: 'rose' },

  // Category 07 — Platform & Ecosystem Layer
  'api-center': { icon: Code2, color: 'indigo' },
  'health-device-hub': { icon: Watch, color: 'teal' },
  integrations: { icon: Plug, color: 'sky' },
  admin: { icon: Shield, color: 'emerald' },
  dashboardmanagement: { icon: LayoutDashboard, color: 'amber' },
  triage: { icon: Siren, color: 'rose' },
  calliq: { icon: PhoneCall, color: 'violet' },
};
