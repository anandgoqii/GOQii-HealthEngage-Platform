import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, ExternalLink, Layers, X } from 'lucide-react';
import { MODULE_COLOR_THEMES, MODULE_VISUALS, SUBGROUP_VISUALS } from '../data/moduleVisuals';
import { ModuleItem } from '../data/platformData';

export interface SelectedModuleContext {
  module: ModuleItem;
  categoryId: string;
  categoryNumber: string;
  categoryTitle: string;
  subgroupId: string;
  subgroupName: string;
}

interface ContactModalProps {
  isOpen: boolean;
  mode: 'briefing' | 'partnership';
  initialIndustry?: string;
  initialNotes?: string;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  mode,
  initialIndustry,
  initialNotes,
  onClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [industry, setIndustry] = useState(initialIndustry || 'Insurers');
  const [notes, setNotes] = useState(initialNotes || '');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (initialIndustry) setIndustry(initialIndustry);
      if (initialNotes !== undefined) setNotes(initialNotes);
    } else {
      setSubmitted(false);
      setError('');
    }
  }, [isOpen, initialIndustry, initialNotes]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const title =
    mode === 'partnership' ? 'Talk to partnerships' : 'Request a briefing';
  const subtitle =
    mode === 'partnership'
      ? 'Connect with the GOQii HealthEngage partnerships team for ecosystem and integration collaborations.'
      : 'Schedule a technical and architectural walkthrough of the GOQii HealthEngage platform.';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fullName.trim() || !organization.trim() || !emailPattern.test(workEmail)) {
      setError('Please enter your name, organization, and a valid work email.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1220]/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#E8EDF2] rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E8EDF2]">
          <div>
            <p className="text-xs font-semibold text-[#158059]">GOQii HealthEngage</p>
            <h3
              id="contact-modal-title"
              className="text-xl font-semibold text-[#0F172A] mt-0.5"
            >
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-lg border border-[#E8EDF2] flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFB] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#2BC48A]/15 text-[#158059] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-[#0F172A]">
              Request received
            </h4>
            <p className="text-sm text-[#64748B] max-w-sm mx-auto leading-relaxed">
              Thank you, {fullName}. Our enterprise team will reach out to{' '}
              <span className="font-medium text-[#0F172A]">{workEmail}</span> regarding{' '}
              {organization}.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 px-5 py-2.5 text-sm font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-lg transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
            <p className="text-sm text-[#64748B] leading-relaxed">{subtitle}</p>

            {error && (
              <div
                role="alert"
                className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs font-medium text-red-700"
              >
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium text-[#0F172A] mb-1.5"
                >
                  Full name
                </label>
                <input
                  id="contact-name"
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
                  htmlFor="contact-email"
                  className="block text-xs font-medium text-[#0F172A] mb-1.5"
                >
                  Work email
                </label>
                <input
                  id="contact-email"
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
                  htmlFor="contact-org"
                  className="block text-xs font-medium text-[#0F172A] mb-1.5"
                >
                  Organization
                </label>
                <input
                  id="contact-org"
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
                  htmlFor="contact-industry"
                  className="block text-xs font-medium text-[#0F172A] mb-1.5"
                >
                  Enterprise context
                </label>
                <select
                  id="contact-industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFB] border border-[#E8EDF2] rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2BC48A] focus:bg-white"
                >
                  <option value="Insurers">Insurers</option>
                  <option value="Hospitals & Clinics">Hospitals & Clinics</option>
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
                htmlFor="contact-notes"
                className="block text-xs font-medium text-[#0F172A] mb-1.5"
              >
                Platform modules or scope of interest
              </label>
              <textarea
                id="contact-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Share your target modules, integration requirements, or deployment timeline..."
                className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFB] border border-[#E8EDF2] rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2BC48A] focus:bg-white resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-sm font-medium text-[#64748B] hover:text-[#0F172A] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-lg transition-colors cursor-pointer"
              >
                Submit request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

interface ModuleDetailModalProps {
  selected: SelectedModuleContext | null;
  onClose: () => void;
  onRequestBriefing: (moduleName: string) => void;
}

export const ModuleDetailModal: React.FC<ModuleDetailModalProps> = ({
  selected,
  onClose,
  onRequestBriefing,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selected) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected, onClose]);

  if (!selected) return null;

  const visual =
    MODULE_VISUALS[selected.module.id] ||
    SUBGROUP_VISUALS[selected.subgroupId] || {
      icon: Layers,
      color: 'emerald' as const,
    };
  const ModIcon = visual.icon;
  const theme = MODULE_COLOR_THEMES[visual.color];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1220]/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="module-detail-title"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#E8EDF2] rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E8EDF2]">
          <div className="flex items-start gap-3.5">
            <span
              className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${theme.iconBox}`}
            >
              <ModIcon className="w-5 h-5" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#64748B]">
                <span className={`font-semibold ${theme.textAccent}`}>
                  {selected.categoryNumber}
                </span>
                <span aria-hidden="true">·</span>
                <span>{selected.subgroupName}</span>
              </div>
              <h3
                id="module-detail-title"
                className="text-xl font-semibold text-[#0F172A] mt-1"
              >
                {selected.module.name}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close module details"
            className="w-9 h-9 rounded-lg border border-[#E8EDF2] flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFB] cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="py-5 space-y-4">
          <div className="flex items-center justify-between gap-3 text-xs">
            <span className="font-medium text-[#64748B]">
              {selected.categoryTitle}
            </span>
            {selected.module.comingSoon ? (
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border ${theme.badgeSoft}`}
              >
                Coming Soon
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-[#2BC48A]/12 text-[#158059] border border-[#2BC48A]/25">
                Available
              </span>
            )}
          </div>

          <p className="text-sm sm:text-[15px] text-[#0F172A] leading-relaxed">
            {selected.module.description}
          </p>

          <div className="p-4 rounded-xl bg-[#F8FAFB] border border-[#E8EDF2] text-xs text-[#64748B] leading-relaxed">
            Operates independently or composes natively with GOQii HealthEngage shared APIs, FHIR/HL7 data models, and multi-tenant identity.
          </div>
        </div>

        <div className="pt-4 border-t border-[#E8EDF2] flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 text-sm font-medium text-[#64748B] hover:text-[#0F172A] cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => onRequestBriefing(selected.module.name)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-lg transition-colors cursor-pointer"
          >
            Request a briefing
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [tenantDomain, setTenantDomain] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setError('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!tenantDomain.trim() || !emailPattern.test(email)) {
      setError('Please enter your tenant workspace ID and a valid work email.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1220]/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="signin-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#E8EDF2] rounded-2xl w-full max-w-md p-6 sm:p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E8EDF2]">
          <div>
            <p className="text-xs font-semibold text-[#158059]">GOQii HealthEngage</p>
            <h3
              id="signin-modal-title"
              className="text-xl font-semibold text-[#0F172A] mt-0.5"
            >
              Customer Sign in
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sign in dialog"
            className="w-9 h-9 rounded-lg border border-[#E8EDF2] flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFB] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-6 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-[#2BC48A]/15 text-[#158059] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-semibold text-[#0F172A]">
              Workspace verified
            </h4>
            <p className="text-sm text-[#64748B] leading-relaxed">
              SSO routing prepared for{' '}
              <span className="font-semibold text-[#0F172A]">{tenantDomain}</span>.
              Proceed to the GOQii HealthEngage portal to complete authentication.
            </p>
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="https://demo.healthengage.goqii.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-lg transition-colors"
              >
                Continue to Portal
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={onClose}
                className="text-xs font-medium text-[#64748B] hover:text-[#0F172A] py-1.5 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Sign in to your organization’s GOQii HealthEngage workspace via enterprise
              SSO.
            </p>

            {error && (
              <div
                role="alert"
                className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs font-medium text-red-700"
              >
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="signin-tenant"
                className="block text-xs font-medium text-[#0F172A] mb-1.5"
              >
                Organization / Tenant ID
              </label>
              <input
                id="signin-tenant"
                type="text"
                required
                value={tenantDomain}
                onChange={(e) => setTenantDomain(e.target.value)}
                placeholder="enterprise-org"
                className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFB] border border-[#E8EDF2] rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2BC48A] focus:bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="signin-email"
                className="block text-xs font-medium text-[#0F172A] mb-1.5"
              >
                Work email
              </label>
              <input
                id="signin-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@enterprise.com"
                className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFB] border border-[#E8EDF2] rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2BC48A] focus:bg-white"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-sm font-medium text-[#64748B] hover:text-[#0F172A] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-semibold text-[#0F172A] bg-[#2BC48A] hover:bg-[#24B07B] rounded-lg transition-colors cursor-pointer"
              >
                Continue
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

