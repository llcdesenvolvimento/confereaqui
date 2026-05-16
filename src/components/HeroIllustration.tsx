const HeroIllustration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="10 30 540 470"
    fill="none"
    role="img"
    aria-label="Prévia de relatório"
    preserveAspectRatio="xMidYMid meet"
    className="block w-full h-auto"
  >
    <defs>
      <linearGradient id="hero-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#EFF4FF" />
        <stop offset="1" stopColor="#F8FAFF" />
      </linearGradient>
      <filter id="hero-shadow" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="22" stdDeviation="22" floodColor="#0D2A6B" floodOpacity="0.14" />
      </filter>
      <filter id="hero-shadow-sm" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0D2A6B" floodOpacity="0.12" />
      </filter>
    </defs>

    <rect x="20" y="40" width="520" height="460" rx="32" fill="url(#hero-bg)" />
    <circle cx="80" cy="100" r="44" fill="#0D65F4" opacity="0.10" />
    <circle cx="490" cy="440" r="60" fill="#0D65F4" opacity="0.08" />

    {/* Card principal */}
    <g filter="url(#hero-shadow)" transform="translate(60 60)">
      <rect width="440" height="368" rx="22" fill="#FFFFFF" />

      <g transform="translate(28 28)">
        <rect width="40" height="40" rx="12" fill="#0D65F4" opacity="0.12" />
        <circle cx="20" cy="16" r="6" fill="#0D65F4" />
        <path d="M9,33 a11,11 0 0 1 22,0 z" fill="#0D65F4" />
      </g>
      <text x="80" y="46" fontFamily="Helvetica, Arial, sans-serif" fontSize="17" fontWeight="700" fill="#0F172A">
        Relatório Completo
      </text>
      <rect x="80" y="56" width="110" height="9" rx="4.5" fill="#94A3B8" />

      <g transform="translate(300 32)">
        <rect width="112" height="30" rx="15" fill="#0D65F4" opacity="0.12" />
        <circle cx="18" cy="15" r="7" fill="#0D65F4" />
        <path d="M14.6 15.4 L17 17.8 L21.4 13.4" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <text x="32" y="19" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" fontWeight="700" fill="#0D65F4">
          VERIFICADO
        </text>
      </g>

      <rect x="28" y="92" width="384" height="1" fill="#E2E8F0" />

      <g transform="translate(28 112)">
        {[
          [0, 0, 80, 190],
          [220, 0, 60, 130],
          [0, 48, 64, 150],
          [220, 48, 72, 110],
          [0, 96, 92, 170],
          [220, 96, 68, 140],
          [0, 144, 76, 160],
          [220, 144, 84, 120],
          [0, 192, 88, 180],
          [220, 192, 70, 130],
        ].map(([x, y, w1, w2], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <rect width={w1} height="9" rx="4.5" fill="#CBD5E1" />
            <rect y="18" width={w2} height="11" rx="5.5" fill="#0F172A" />
          </g>
        ))}
      </g>
    </g>

    {/* Card flutuante esquerdo: email */}
    <g filter="url(#hero-shadow-sm)" transform="translate(20 360)">
      <rect width="170" height="90" rx="18" fill="#FFFFFF" />
      <g transform="translate(18 18)">
        <rect width="36" height="36" rx="11" fill="#0D65F4" opacity="0.12" />
        <rect x="9" y="12" width="18" height="13" rx="2.4" fill="none" stroke="#0D65F4" strokeWidth="2" />
        <path d="M9.6 13.4 L18 19.6 L26.4 13.4" stroke="#0D65F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      <rect x="64" y="24" width="80" height="11" rx="5.5" fill="#0F172A" />
      <rect x="64" y="42" width="96" height="9" rx="4.5" fill="#94A3B8" />
      <rect x="64" y="58" width="60" height="9" rx="4.5" fill="#94A3B8" />
    </g>

    {/* Card flutuante central: endereço */}
    <g filter="url(#hero-shadow-sm)" transform="translate(195 360)">
      <rect width="170" height="90" rx="18" fill="#FFFFFF" />
      <g transform="translate(18 18)">
        <rect width="36" height="36" rx="11" fill="#F59E0B" opacity="0.14" />
        <path d="M18 8 C13.6 8, 10 11.6, 10 16 C10 21.6, 18 28, 18 28 C18 28, 26 21.6, 26 16 C26 11.6, 22.4 8, 18 8 Z" fill="#F59E0B" />
        <circle cx="18" cy="16" r="3.2" fill="#FFFFFF" />
      </g>
      <rect x="64" y="24" width="86" height="11" rx="5.5" fill="#0F172A" />
      <rect x="64" y="42" width="92" height="9" rx="4.5" fill="#94A3B8" />
      <rect x="64" y="58" width="70" height="9" rx="4.5" fill="#94A3B8" />
    </g>

    {/* Card flutuante direito: telefone */}
    <g filter="url(#hero-shadow-sm)" transform="translate(370 360)">
      <rect width="170" height="90" rx="18" fill="#FFFFFF" />
      <g transform="translate(18 18)">
        <rect width="36" height="36" rx="11" fill="#10B981" opacity="0.14" />
        <path d="M11 13 C11 11.3, 12.3 10, 14 10 L16.5 10 L18.6 14.5 L16.6 16.2 C17.6 18.6, 19.4 20.4, 21.8 21.4 L23.5 19.4 L28 21.5 L28 24 C28 25.7, 26.7 27, 25 27 C17.3 27, 11 20.7, 11 13 Z" fill="#10B981" />
      </g>
      <rect x="64" y="24" width="90" height="11" rx="5.5" fill="#0F172A" />
      <rect x="64" y="42" width="76" height="9" rx="4.5" fill="#94A3B8" />
      <rect x="64" y="58" width="92" height="9" rx="4.5" fill="#94A3B8" />
    </g>
  </svg>
);

export default HeroIllustration;
