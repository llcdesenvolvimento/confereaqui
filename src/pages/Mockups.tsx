import usePageMeta from "@/hooks/usePageMeta";

const MockupV1 = () => (
  <svg viewBox="0 0 560 480" fill="none" role="img" aria-label="Mockup relatório - cadastral" className="w-full h-auto">
    <defs>
      <linearGradient id="v1-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#EFF4FF" />
        <stop offset="1" stopColor="#F8FAFF" />
      </linearGradient>
      <filter id="v1-shadow" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#0D2A6B" floodOpacity="0.10" />
      </filter>
    </defs>
    <rect x="20" y="40" width="520" height="420" rx="32" fill="url(#v1-bg)" />
    <circle cx="80" cy="100" r="40" fill="#0D65F4" opacity="0.10" />
    <circle cx="490" cy="400" r="55" fill="#0D65F4" opacity="0.08" />

    <g filter="url(#v1-shadow)" transform="translate(60 60)">
      <rect width="440" height="360" rx="20" fill="#FFFFFF" />

      {/* Header com avatar */}
      <rect x="24" y="24" width="60" height="60" rx="30" fill="#0D65F4" opacity="0.12" />
      <text x="54" y="62" fontFamily="Helvetica, Arial, sans-serif" fontSize="22" fontWeight="700" fill="#0D65F4" textAnchor="middle">JS</text>

      <rect x="104" y="34" width="180" height="14" rx="7" fill="#0F172A" />
      <rect x="104" y="58" width="120" height="10" rx="5" fill="#94A3B8" />

      <g transform="translate(330 36)">
        <rect width="88" height="32" rx="16" fill="#10B981" opacity="0.12" />
        <circle cx="18" cy="16" r="6" fill="#10B981" />
        <path d="M15 16.4 L17.2 18.6 L21.4 14.2" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <text x="30" y="20" fontFamily="Helvetica, Arial, sans-serif" fontSize="10" fontWeight="700" fill="#10B981">ATIVO</text>
      </g>

      <rect x="24" y="104" width="392" height="1" fill="#E2E8F0" />

      {/* Lista de campos */}
      <g transform="translate(24 124)">
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(0 ${i * 42})`}>
            <rect width="120" height="9" rx="4.5" fill="#CBD5E1" />
            <rect y="16" width={[200, 160, 140, 220, 180][i]} height="11" rx="5.5" fill="#0F172A" />
            {i < 4 && <rect y="36" width="392" height="1" fill="#F1F5F9" />}
          </g>
        ))}
      </g>
    </g>
  </svg>
);

const MockupV2 = () => (
  <svg viewBox="0 0 560 480" fill="none" role="img" aria-label="Mockup relatório - timeline" className="w-full h-auto">
    <defs>
      <linearGradient id="v2-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#EFF4FF" />
        <stop offset="1" stopColor="#F8FAFF" />
      </linearGradient>
      <filter id="v2-shadow" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#0D2A6B" floodOpacity="0.10" />
      </filter>
    </defs>
    <rect x="20" y="40" width="520" height="420" rx="32" fill="url(#v2-bg)" />
    <circle cx="490" cy="120" r="50" fill="#0D65F4" opacity="0.08" />
    <circle cx="80" cy="380" r="45" fill="#0D65F4" opacity="0.10" />

    <g filter="url(#v2-shadow)" transform="translate(60 60)">
      <rect width="440" height="360" rx="20" fill="#FFFFFF" />

      <rect x="24" y="24" width="200" height="14" rx="7" fill="#0F172A" />
      <rect x="24" y="46" width="140" height="10" rx="5" fill="#94A3B8" />

      <rect x="24" y="78" width="392" height="1" fill="#E2E8F0" />

      {/* Timeline vertical */}
      <g transform="translate(40 100)">
        <rect x="11" y="0" width="2" height="220" fill="#E2E8F0" />

        {[
          { y: 0, color: "#0D65F4", solid: true },
          { y: 60, color: "#0D65F4", solid: true },
          { y: 120, color: "#0D65F4", solid: false },
          { y: 180, color: "#CBD5E1", solid: false },
        ].map((dot, i) => (
          <g key={i} transform={`translate(0 ${dot.y})`}>
            <circle cx="12" cy="12" r="10" fill="#FFFFFF" stroke={dot.color} strokeWidth="2.5" />
            {dot.solid && <circle cx="12" cy="12" r="5" fill={dot.color} />}
            <rect x="36" y="4" width={[140, 180, 120, 100][i]} height="10" rx="5" fill="#0F172A" />
            <rect x="36" y="22" width={[220, 180, 200, 160][i]} height="8" rx="4" fill="#94A3B8" />
          </g>
        ))}
      </g>
    </g>
  </svg>
);

const MockupV3 = () => (
  <svg viewBox="0 0 560 480" fill="none" role="img" aria-label="Mockup relatório - dashboard" className="w-full h-auto">
    <defs>
      <linearGradient id="v3-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#EFF4FF" />
        <stop offset="1" stopColor="#F8FAFF" />
      </linearGradient>
      <linearGradient id="v3-bar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#0D65F4" />
        <stop offset="1" stopColor="#3D86FF" />
      </linearGradient>
      <filter id="v3-shadow" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#0D2A6B" floodOpacity="0.10" />
      </filter>
      <filter id="v3-shadow-sm" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#0D2A6B" floodOpacity="0.10" />
      </filter>
    </defs>
    <rect x="20" y="40" width="520" height="420" rx="32" fill="url(#v3-bg)" />

    {/* Card de gráfico */}
    <g filter="url(#v3-shadow)" transform="translate(50 60)">
      <rect width="300" height="200" rx="20" fill="#FFFFFF" />
      <rect x="20" y="20" width="120" height="12" rx="6" fill="#0F172A" />
      <rect x="20" y="38" width="80" height="9" rx="4.5" fill="#94A3B8" />
      {[
        { x: 20, h: 50 },
        { x: 56, h: 70 },
        { x: 92, h: 45 },
        { x: 128, h: 90 },
        { x: 164, h: 60 },
        { x: 200, h: 100 },
        { x: 236, h: 55 },
      ].map((b, i) => (
        <rect key={i} x={b.x} y={170 - b.h} width="20" height={b.h} rx="4" fill="url(#v3-bar)" opacity={0.5 + (i % 3) * 0.2} />
      ))}
    </g>

    {/* Card donut */}
    <g filter="url(#v3-shadow)" transform="translate(370 60)">
      <rect width="160" height="200" rx="20" fill="#FFFFFF" />
      <rect x="20" y="20" width="90" height="11" rx="5.5" fill="#0F172A" />
      <g transform="translate(80 120)">
        <circle r="46" fill="none" stroke="#F1F5F9" strokeWidth="14" />
        <circle r="46" fill="none" stroke="#0D65F4" strokeWidth="14" strokeDasharray="216 290" transform="rotate(-90)" strokeLinecap="round" />
        <text textAnchor="middle" y="6" fontFamily="Helvetica, Arial, sans-serif" fontSize="20" fontWeight="700" fill="#0F172A">75%</text>
      </g>
    </g>

    {/* Lista inferior */}
    <g filter="url(#v3-shadow)" transform="translate(50 290)">
      <rect width="480" height="140" rx="20" fill="#FFFFFF" />
      <rect x="20" y="20" width="140" height="11" rx="5.5" fill="#0F172A" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(20 ${50 + i * 28})`}>
          <circle cx="8" cy="8" r="6" fill="#0D65F4" opacity={0.4 + i * 0.2} />
          <rect x="24" y="3" width={[200, 160, 180][i]} height="10" rx="5" fill="#0F172A" />
          <rect x="380" y="3" width="60" height="10" rx="5" fill="#94A3B8" />
        </g>
      ))}
    </g>
  </svg>
);

const MockupV4 = () => (
  <svg viewBox="0 0 560 480" fill="none" role="img" aria-label="Mockup relatório - PDF stack" className="w-full h-auto">
    <defs>
      <linearGradient id="v4-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#EFF4FF" />
        <stop offset="1" stopColor="#F8FAFF" />
      </linearGradient>
      <filter id="v4-shadow" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#0D2A6B" floodOpacity="0.12" />
      </filter>
      <filter id="v4-shadow-sm" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0D2A6B" floodOpacity="0.08" />
      </filter>
    </defs>
    <rect x="20" y="40" width="520" height="420" rx="32" fill="url(#v4-bg)" />

    {/* Folha de trás */}
    <g filter="url(#v4-shadow-sm)" transform="translate(160 70) rotate(-6 140 200)">
      <rect width="280" height="380" rx="14" fill="#FFFFFF" />
      <rect x="20" y="20" width="140" height="10" rx="5" fill="#CBD5E1" />
      <rect x="20" y="38" width="80" height="8" rx="4" fill="#E2E8F0" />
    </g>

    {/* Folha da frente — relatório */}
    <g filter="url(#v4-shadow)" transform="translate(140 50)">
      <rect width="280" height="380" rx="14" fill="#FFFFFF" />

      {/* Header */}
      <rect width="280" height="60" rx="14" fill="#0D65F4" />
      <rect x="20" y="22" width="100" height="9" rx="4.5" fill="#FFFFFF" opacity="0.85" />
      <rect x="20" y="38" width="60" height="7" rx="3.5" fill="#FFFFFF" opacity="0.55" />
      <g transform="translate(230 22)">
        <rect width="30" height="16" rx="3" fill="#FFFFFF" opacity="0.25" />
        <text x="15" y="12" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="8" fontWeight="700" fill="#FFFFFF">PDF</text>
      </g>

      {/* Bloco título */}
      <rect x="20" y="80" width="180" height="12" rx="6" fill="#0F172A" />
      <rect x="20" y="100" width="120" height="8" rx="4" fill="#94A3B8" />

      {/* Linhas de campos */}
      <g transform="translate(20 132)">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <g key={i} transform={`translate(0 ${i * 28})`}>
            <rect width={[70, 80, 65, 90, 70, 85, 75][i]} height="7" rx="3.5" fill="#CBD5E1" />
            <rect y="12" width={[140, 180, 120, 200, 150, 170, 130][i]} height="8" rx="4" fill="#0F172A" />
          </g>
        ))}
      </g>

      {/* Footer com selo */}
      <rect x="0" y="340" width="280" height="40" fill="#F8FAFF" />
      <g transform="translate(20 354)">
        <circle cx="6" cy="6" r="6" fill="#10B981" />
        <path d="M3.5 6.2 L5.5 8.2 L9 4.8" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <text x="18" y="9" fontFamily="Helvetica, Arial, sans-serif" fontSize="8" fontWeight="700" fill="#0F172A">Relatório assinado</text>
      </g>
    </g>
  </svg>
);

const variations = [
  { id: 1, title: "Cadastral", desc: "Avatar + lista de dados pessoais", Component: MockupV1 },
  { id: 2, title: "Timeline", desc: "Histórico em linha do tempo", Component: MockupV2 },
  { id: 3, title: "Dashboard", desc: "Gráficos + métricas", Component: MockupV3 },
  { id: 4, title: "Relatório PDF", desc: "Folha em formato documento", Component: MockupV4 },
];

const Mockups = () => {
  usePageMeta({
    title: "Mockups — Confere Aqui",
    description: "Variações de mockups de relatório.",
  });

  return (
    <main className="flex-1 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Variações de mockup</h1>
          <p className="text-muted-foreground">Diferentes visuais de relatório para o hero da home.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {variations.map(({ id, title, desc, Component }) => (
            <div
              key={id}
              className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h2 className="text-lg font-bold text-foreground">
                  {id}. {title}
                </h2>
                <span className="text-xs text-muted-foreground">{desc}</span>
              </div>
              <div className="rounded-xl overflow-hidden bg-[hsl(220,15%,98%)]">
                <Component />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Mockups;
