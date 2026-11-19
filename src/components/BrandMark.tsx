import React from 'react';

interface BrandMarkProps {
  variant?: 'light' | 'dark';
}

export const BrandMark: React.FC<BrandMarkProps> = ({ variant = 'light' }) => {
  const isDark = variant === 'dark';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          width="32"
          height="32"
          rx="8"
          fill={isDark ? '#152036' : '#0F172A'}
        />
        <rect
          x="0.5"
          y="0.5"
          width="31"
          height="31"
          rx="7.5"
          stroke={isDark ? 'rgba(255,255,255,0.12)' : 'rgba(15,23,42,0.12)'}
        />
        <path
          d="M7 16.5H11.2L13.6 11.2L17.1 21L19.9 14.5L21.8 16.5H25"
          stroke="#2BC48A"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="25" cy="16.5" r="1.7" fill="#2BC48A" />
      </svg>
      <span
        className={`text-[15px] sm:text-base font-semibold tracking-tight ${
          isDark ? 'text-white' : 'text-[#0F172A]'
        }`}
      >
        GOQii <span className={isDark ? 'text-[#2BC48A]' : 'text-[#158059]'}>HealthEngage</span>
      </span>
    </span>
  );
};
