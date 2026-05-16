import usePageMeta from "@/hooks/usePageMeta";

// V1 — versão atual de referência (campos em grid + cards laterais)
const Mock1 = () => (
  <svg viewBox="0 0 560 480" fill="none" role="img" className="w-full h-auto">
    <defs>
      <linearGradient id="m1-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#EFF4FF" />
        <stop offset="1" stopColor="#F8FAFF" />
      </linearGradient>
      <filter id="m1-sh" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="22" stdDeviation="22" floodColor="#0D2A6B" floodOpacity="0.14" />
      </filter>
      <filter id="m1-shsm" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0D2A6B" floodOpacity="0.12" />
      </filter>
    </defs>
    <rect x="20" y="40" width="520" height="420" rx="32" fill="url(#m1-bg)" />
    <circle cx="80" cy="100" r="44" fill="#0D65F4" opacity="0.10" />
    <circle cx="490" cy="400" r="60" fill="#0D65F4" opacity="0.08" />
    <g filter="url(#m1-sh)" transform="translate(60 60)">
      <rect width="440" height="320" rx="22" fill="#FFFFFF" />
      <rect x="28" y="32" width="180" height="15" rx="7.5" fill="#0F172A" />
      <rect x="28" y="54" width="110" height="10" rx="5" fill="#94A3B8" />
      <g transform="translate(300 32)">
        <rect width="112" height="30" rx="15" fill="#0D65F4" opacity="0.12" />
        <circle cx="18" cy="15" r="7" fill="#0D65F4" />
        <path d="M14.6 15.4 L17 17.8 L21.4 13.4" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <text x="32" y="19" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" fontWeight="700" fill="#0D65F4">VERIFICADO</text>
      </g>
      <rect x="28" y="92" width="384" height="1" fill="#E2E8F0" />
      <g transform="translate(28 112)">
        {[[0, 0, 80, 190], [220, 0, 60, 130], [0, 48, 64, 150], [220, 48, 72, 110], [0, 96, 92, 170], [220, 96, 68, 140], [0, 144, 76, 160], [220, 144, 84, 120]].map(
          ([x, y, w1, w2], i) => (
            <g key={i} transform={`translate(${x} ${y})`}>
              <rect width={w1} height="9" rx="4.5" fill="#CBD5E1" />
              <rect y="18" width={w2} height="11" rx="5.5" fill="#0F172A" />
            </g>
          )
        )}
      </g>
    </g>
    <g filter="url(#m1-shsm)" transform="translate(36 310)">
      <rect width="190" height="90" rx="18" fill="#FFFFFF" />
      <rect x="18" y="18" width="36" height="36" rx="11" fill="#0D65F4" opacity="0.12" />
      <rect x="27" y="29" width="18" height="3" rx="1.5" fill="#0D65F4" />
      <rect x="27" y="35" width="18" height="3" rx="1.5" fill="#0D65F4" />
      <rect x="27" y="41" width="12" height="3" rx="1.5" fill="#0D65F4" />
      <rect x="64" y="24" width="90" height="11" rx="5.5" fill="#0F172A" />
      <rect x="64" y="42" width="110" height="9" rx="4.5" fill="#94A3B8" />
      <rect x="64" y="58" width="70" height="9" rx="4.5" fill="#94A3B8" />
    </g>
    <g filter="url(#m1-shsm)" transform="translate(338 310)">
      <rect width="190" height="90" rx="18" fill="#FFFFFF" />
      <rect x="18" y="18" width="36" height="36" rx="11" fill="#10B981" opacity="0.14" />
      <path d="M30 37 L34 41 L43 31" stroke="#10B981" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="64" y="24" width="100" height="11" rx="5.5" fill="#0F172A" />
      <rect x="64" y="42" width="80" height="9" rx="4.5" fill="#94A3B8" />
      <rect x="64" y="58" width="100" height="9" rx="4.5" fill="#94A3B8" />
    </g>
  </svg>
);

// V2 — Card com sidebar de seções (visual de relatório paginado)
const Mock2 = () => (
  <svg viewBox="0 0 560 480" fill="none" role="img" className="w-full h-auto">
    <defs>
      <linearGradient id="m2-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#EFF4FF" />
        <stop offset="1" stopColor="#F8FAFF" />
      </linearGradient>
      <filter id="m2-sh" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="22" stdDeviation="22" floodColor="#0D2A6B" floodOpacity="0.14" />
      </filter>
      <filter id="m2-shsm" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0D2A6B" floodOpacity="0.12" />
      </filter>
    </defs>
    <rect x="20" y="40" width="520" height="420" rx="32" fill="url(#m2-bg)" />
    <circle cx="490" cy="100" r="44" fill="#0D65F4" opacity="0.10" />
    <circle cx="80" cy="400" r="60" fill="#0D65F4" opacity="0.08" />

    <g filter="url(#m2-sh)" transform="translate(50 70)">
      <rect width="460" height="340" rx="22" fill="#FFFFFF" />
      {/* Sidebar */}
      <rect width="140" height="340" rx="22" fill="#F8FAFF" />
      <path d="M140 0 V340" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="20" y="28" width="100" height="11" rx="5.5" fill="#0F172A" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i} transform={`translate(20 ${70 + i * 36})`}>
          <rect width="100" height="24" rx="6" fill={i === 1 ? "#0D65F4" : "transparent"} opacity={i === 1 ? 0.1 : 1} />
          <circle cx="12" cy="12" r="4" fill={i === 1 ? "#0D65F4" : "#CBD5E1"} />
          <rect x="24" y="8" width={[60, 70, 50, 65, 55, 75][i]} height="8" rx="4" fill={i === 1 ? "#0D65F4" : "#94A3B8"} />
        </g>
      ))}

      {/* Conteúdo */}
      <g transform="translate(170 28)">
        <rect width="180" height="14" rx="7" fill="#0F172A" />
        <rect y="22" width="120" height="9" rx="4.5" fill="#94A3B8" />
        <g transform="translate(210 0)">
          <rect width="68" height="26" rx="13" fill="#10B981" opacity="0.14" />
          <circle cx="15" cy="13" r="5" fill="#10B981" />
          <path d="M12.4 13.4 L14.4 15.4 L18 11.6" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <text x="26" y="17" fontFamily="Helvetica, Arial, sans-serif" fontSize="10" fontWeight="700" fill="#10B981">REGULAR</text>
        </g>

        <rect x="0" y="60" width="280" height="1" fill="#E2E8F0" />

        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(0 ${80 + i * 36})`}>
            <rect width={[64, 80, 56, 92, 70][i]} height="8" rx="4" fill="#CBD5E1" />
            <rect y="14" width={[200, 240, 180, 220, 190][i]} height="10" rx="5" fill="#0F172A" />
          </g>
        ))}
      </g>
    </g>

    {/* Selo flutuante */}
    <g filter="url(#m2-shsm)" transform="translate(380 360)">
      <rect width="160" height="64" rx="16" fill="#FFFFFF" />
      <rect x="14" y="14" width="36" height="36" rx="11" fill="#10B981" opacity="0.14" />
      <path d="M26 33 L30 37 L39 27" stroke="#10B981" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="60" y="20" width="80" height="10" rx="5" fill="#0F172A" />
      <rect x="60" y="36" width="60" height="8" rx="4" fill="#94A3B8" />
    </g>
  </svg>
);

// V3 — Lista premium estilo "rows com ícones" (visual de app fintech)
const Mock3 = () => (
  <svg viewBox="0 0 560 480" fill="none" role="img" className="w-full h-auto">
    <defs>
      <linearGradient id="m3-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#EFF4FF" />
        <stop offset="1" stopColor="#F8FAFF" />
      </linearGradient>
      <linearGradient id="m3-head" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#0D65F4" />
        <stop offset="1" stopColor="#3D86FF" />
      </linearGradient>
      <filter id="m3-sh" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="22" stdDeviation="22" floodColor="#0D2A6B" floodOpacity="0.14" />
      </filter>
    </defs>
    <rect x="20" y="40" width="520" height="420" rx="32" fill="url(#m3-bg)" />

    <g filter="url(#m3-sh)" transform="translate(80 50)">
      <rect width="400" height="380" rx="24" fill="#FFFFFF" />
      {/* Header colorido */}
      <path d="M0,24 a24,24 0 0 1 24,-24 h352 a24,24 0 0 1 24,24 v76 h-400 z" fill="url(#m3-head)" />
      <rect x="24" y="32" width="120" height="11" rx="5.5" fill="#FFFFFF" opacity="0.85" />
      <rect x="24" y="50" width="180" height="14" rx="7" fill="#FFFFFF" />
      <rect x="24" y="74" width="80" height="9" rx="4.5" fill="#FFFFFF" opacity="0.6" />

      <g transform="translate(300 38)">
        <rect width="76" height="32" rx="16" fill="#FFFFFF" opacity="0.18" />
        <circle cx="17" cy="16" r="6" fill="#FFFFFF" />
        <path d="M14 16.4 L16.4 18.8 L20 14.6" stroke="#0D65F4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <text x="28" y="20" fontFamily="Helvetica, Arial, sans-serif" fontSize="10" fontWeight="700" fill="#FFFFFF">REGULAR</text>
      </g>

      {/* Rows */}
      {[
        { color: "#0D65F4", w: 180 },
        { color: "#10B981", w: 160 },
        { color: "#F59E0B", w: 200 },
        { color: "#8B5CF6", w: 150 },
        { color: "#EC4899", w: 170 },
      ].map((row, i) => (
        <g key={i} transform={`translate(0 ${120 + i * 50})`}>
          {i > 0 && <rect x="24" y="0" width="352" height="1" fill="#F1F5F9" />}
          <g transform="translate(24 12)">
            <rect width="36" height="36" rx="11" fill={row.color} opacity="0.14" />
            <circle cx="18" cy="18" r="6" fill={row.color} />
          </g>
          <rect x="72" y="18" width={row.w} height="10" rx="5" fill="#0F172A" />
          <rect x="72" y="34" width={row.w - 60} height="8" rx="4" fill="#94A3B8" />
          <g transform="translate(340 22)">
            <path d="M0 0 L8 6 L0 12" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        </g>
      ))}
    </g>
  </svg>
);

// V4 — Card com summary bar superior + grid de stats + lista
const Mock4 = () => (
  <svg viewBox="0 0 560 480" fill="none" role="img" className="w-full h-auto">
    <defs>
      <linearGradient id="m4-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#EFF4FF" />
        <stop offset="1" stopColor="#F8FAFF" />
      </linearGradient>
      <filter id="m4-sh" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="22" stdDeviation="22" floodColor="#0D2A6B" floodOpacity="0.14" />
      </filter>
      <filter id="m4-shsm" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0D2A6B" floodOpacity="0.12" />
      </filter>
    </defs>
    <rect x="20" y="40" width="520" height="420" rx="32" fill="url(#m4-bg)" />
    <circle cx="80" cy="100" r="44" fill="#0D65F4" opacity="0.10" />

    <g filter="url(#m4-sh)" transform="translate(60 60)">
      <rect width="440" height="340" rx="22" fill="#FFFFFF" />

      {/* Header */}
      <rect x="28" y="32" width="180" height="15" rx="7.5" fill="#0F172A" />
      <rect x="28" y="54" width="110" height="10" rx="5" fill="#94A3B8" />
      <g transform="translate(300 32)">
        <rect width="112" height="30" rx="15" fill="#0D65F4" opacity="0.12" />
        <circle cx="18" cy="15" r="7" fill="#0D65F4" />
        <path d="M14.6 15.4 L17 17.8 L21.4 13.4" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <text x="32" y="19" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" fontWeight="700" fill="#0D65F4">VERIFICADO</text>
      </g>

      {/* Stat boxes */}
      <g transform="translate(28 90)">
        {[
          { x: 0, color: "#0D65F4", val: 12 },
          { x: 130, color: "#10B981", val: 8 },
          { x: 260, color: "#F59E0B", val: 3 },
        ].map((s, i) => (
          <g key={i} transform={`translate(${s.x} 0)`}>
            <rect width="124" height="62" rx="12" fill={s.color} opacity="0.08" />
            <rect x="14" y="14" width="40" height="8" rx="4" fill={s.color} opacity="0.6" />
            <text x="14" y="48" fontFamily="Helvetica, Arial, sans-serif" fontSize="22" fontWeight="700" fill={s.color}>
              {s.val}
            </text>
            <rect x="50" y="38" width="60" height="8" rx="4" fill={s.color} opacity="0.4" />
          </g>
        ))}
      </g>

      <rect x="28" y="168" width="384" height="1" fill="#E2E8F0" />

      {/* Lista compacta */}
      <g transform="translate(28 184)">
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(0 ${i * 34})`}>
            <circle cx="10" cy="10" r="10" fill="#10B981" opacity="0.14" />
            <path d="M6.4 10.4 L9 13 L13.6 8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(0 0)" />
            <rect x="28" y="6" width={[200, 240, 180, 220][i]} height="9" rx="4.5" fill="#0F172A" />
            <rect x="320" y="6" width="60" height="9" rx="4.5" fill="#94A3B8" />
          </g>
        ))}
      </g>
    </g>

    <g filter="url(#m4-shsm)" transform="translate(380 340)">
      <rect width="160" height="76" rx="18" fill="#FFFFFF" />
      <rect x="16" y="16" width="44" height="44" rx="14" fill="#10B981" opacity="0.14" />
      <path d="M30 40 L36 46 L48 32" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="72" y="22" width="74" height="11" rx="5.5" fill="#0F172A" />
      <rect x="72" y="40" width="50" height="8" rx="4" fill="#94A3B8" />
    </g>
  </svg>
);

const variations = [
  { id: 1, title: "Atual (referência)", desc: "Grid 2 colunas + cards laterais", Component: Mock1 },
  { id: 2, title: "Sidebar de seções", desc: "Visual de relatório paginado", Component: Mock2 },
  { id: 3, title: "Header colorido + rows", desc: "Estilo app/fintech, badge integrada", Component: Mock3 },
  { id: 4, title: "Stats + lista", desc: "Métricas numéricas em destaque", Component: Mock4 },
];

const MockupsV2 = () => {
  usePageMeta({
    title: "Mockups V2 — Confere Aqui",
    description: "Novas variações de mockup de relatório.",
  });

  return (
    <main className="flex-1 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Mockups V2</h1>
          <p className="text-muted-foreground">Variações sem gráfico, mais densas e estruturadas.</p>
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
                <span className="text-xs text-muted-foreground text-right max-w-[55%]">{desc}</span>
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

export default MockupsV2;
