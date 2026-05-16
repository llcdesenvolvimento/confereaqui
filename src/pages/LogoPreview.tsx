import { type FC } from "react";

interface IconProps {
  className?: string;
}

// 1 — Pin atual (referência)
const IconCurrent: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d="M50 8C32 8 18 22 18 40c0 22 32 52 32 52s32-30 32-52c0-18-14-32-32-32z" fill="currentColor" />
    <circle cx="50" cy="40" r="13" fill="white" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.25" />
  </svg>
);

// 2 — Lupa minimalista
const IconMagnifier: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="42" cy="42" r="26" stroke="currentColor" strokeWidth="10" />
    <line x1="62" y1="62" x2="86" y2="86" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
  </svg>
);

// 3 — Lupa com check
const IconMagnifierCheck: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="42" cy="42" r="26" fill="currentColor" />
    <path d="M30 42 L40 52 L56 32" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="62" y1="62" x2="86" y2="86" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
  </svg>
);

// 4 — Escudo com check
const IconShield: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d="M50 6 L86 22 L86 50 C86 70 70 86 50 94 C30 86 14 70 14 50 L14 22 Z" fill="currentColor" />
    <path d="M32 50 L46 62 L68 38" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// 5 — Documento com check
const IconDocCheck: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d="M22 12 H62 L82 32 V88 H22 Z" fill="currentColor" />
    <path d="M62 12 V32 H82" fill="white" opacity="0.25" />
    <path d="M34 58 L46 70 L70 44" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// 6 — Lupa sobre documento
const IconDocSearch: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d="M16 14 H52 L68 28 V72 H16 Z" fill="currentColor" opacity="0.35" />
    <circle cx="62" cy="58" r="20" fill="white" stroke="currentColor" strokeWidth="8" />
    <line x1="78" y1="74" x2="92" y2="88" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
  </svg>
);

// 7 — Pin com check
const IconPinCheck: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d="M50 8C32 8 18 22 18 40c0 22 32 52 32 52s32-30 32-52c0-18-14-32-32-32z" fill="currentColor" />
    <path d="M38 40 L46 48 L62 32" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.25" />
  </svg>
);

// 8 — Iniciais "CA" em círculo
const IconInitialsCircle: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="50" cy="50" r="44" fill="currentColor" />
    <text x="50" y="62" fontSize="36" fontWeight="900" fontFamily="Poppins, system-ui, sans-serif" fill="white" textAnchor="middle">
      CA
    </text>
  </svg>
);

// 9 — Iniciais "CA" em quadrado arredondado
const IconInitialsSquare: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <rect x="6" y="6" width="88" height="88" rx="20" fill="currentColor" />
    <text x="50" y="64" fontSize="38" fontWeight="900" fontFamily="Poppins, system-ui, sans-serif" fill="white" textAnchor="middle">
      CA
    </text>
  </svg>
);

// 10 — Olho (verificação)
const IconEye: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d="M10 50 Q50 14 90 50 Q50 86 10 50 Z" fill="currentColor" />
    <circle cx="50" cy="50" r="14" fill="white" />
    <circle cx="50" cy="50" r="6" fill="currentColor" />
  </svg>
);

// 11 — Check simples (círculo + check)
const IconCheckCircle: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="50" cy="50" r="44" fill="currentColor" />
    <path d="M30 52 L44 66 L70 36" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// 12 — Identidade / Badge
const IconBadge: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <rect x="14" y="10" width="72" height="80" rx="10" fill="currentColor" />
    <circle cx="50" cy="36" r="11" fill="white" />
    <rect x="28" y="56" width="44" height="6" rx="3" fill="white" opacity="0.85" />
    <rect x="34" y="68" width="32" height="5" rx="2.5" fill="white" opacity="0.6" />
  </svg>
);

// ============== VARIAÇÕES DO PIN COM EFEITOS ==============

const PIN_PATH = "M50 8C32 8 18 22 18 40c0 22 32 52 32 52s32-30 32-52c0-18-14-32-32-32z";

// P1 — Pin com gradient azul
const IconPinGradient: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="pinGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(220, 95%, 60%)" />
        <stop offset="100%" stopColor="hsl(220, 95%, 35%)" />
      </linearGradient>
    </defs>
    <path d={PIN_PATH} fill="url(#pinGrad1)" />
    <circle cx="50" cy="40" r="13" fill="white" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.2" />
  </svg>
);

// P2 — Pin com check no lugar do círculo
const IconPinWithCheck: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d={PIN_PATH} fill="currentColor" />
    <path d="M38 40 L46 48 L62 32" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.25" />
  </svg>
);

// P3 — Pin com glow atrás
const IconPinGlow: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <defs>
      <radialGradient id="pinGlow3" cx="50%" cy="40%" r="40%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.45" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="40" r="46" fill="url(#pinGlow3)" />
    <path d={PIN_PATH} fill="currentColor" />
    <circle cx="50" cy="40" r="13" fill="white" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.25" />
  </svg>
);

// P4 — Pin com lupa interna
const IconPinSearch: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d={PIN_PATH} fill="currentColor" />
    <circle cx="46" cy="36" r="9" fill="none" stroke="white" strokeWidth="3.5" />
    <line x1="53" y1="43" x2="60" y2="50" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.25" />
  </svg>
);

// P5 — Pin com ondas de pulse
const IconPinPulse: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="50" cy="40" r="44" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <circle cx="50" cy="40" r="34" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <path d={PIN_PATH} fill="currentColor" />
    <circle cx="50" cy="40" r="13" fill="white" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.25" />
  </svg>
);

// P6 — Pin duplo (sombra atrás)
const IconPinDouble: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d="M62 8C44 8 30 22 30 40c0 22 32 52 32 52s32-30 32-52c0-18-14-32-32-32z" fill="currentColor" opacity="0.25" />
    <path d={PIN_PATH} fill="currentColor" />
    <circle cx="50" cy="40" r="13" fill="white" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.25" />
  </svg>
);

// P7 — Pin com sombra interior
const IconPinShadow: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="pinShadow7" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
      </linearGradient>
    </defs>
    <path d={PIN_PATH} fill="url(#pinShadow7)" />
    <circle cx="50" cy="40" r="13" fill="white" />
    <path d="M50 8C32 8 18 22 18 40c0 4 1 8 2 12 c1-3 3-6 5-9 c5-7 13-12 25-12 c12 0 20 5 25 12 c2 3 4 6 5 9 c1-4 2-8 2-12 c0-18-14-32-32-32z" fill="white" opacity="0.18" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.25" />
  </svg>
);

// P8 — Pin com listras
const IconPinStripes: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <defs>
      <pattern id="stripes8" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
        <rect width="3" height="6" fill="currentColor" opacity="0.4" />
      </pattern>
      <mask id="pinMask8">
        <path d={PIN_PATH} fill="white" />
      </mask>
    </defs>
    <path d={PIN_PATH} fill="currentColor" />
    <rect x="0" y="0" width="100" height="100" fill="url(#stripes8)" mask="url(#pinMask8)" />
    <circle cx="50" cy="40" r="13" fill="white" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.25" />
  </svg>
);

// P9 — Pin contornado
const IconPinOutline: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d={PIN_PATH} fill="currentColor" />
    <path d="M50 14C35 14 24 25 24 40c0 18 26 44 26 44s26-26 26-44c0-15-11-26-26-26z" fill="none" stroke="white" strokeWidth="3" opacity="0.7" />
    <circle cx="50" cy="40" r="13" fill="white" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.25" />
  </svg>
);

// P10 — Pin com estrela
const IconPinStar: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d={PIN_PATH} fill="currentColor" />
    <path d="M50 28 L54 38 L65 38 L56 45 L60 56 L50 49 L40 56 L44 45 L35 38 L46 38 Z" fill="white" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.25" />
  </svg>
);

// P11 — Pin com forma de escudo
const IconPinShield: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d={PIN_PATH} fill="currentColor" />
    <path d="M50 22 L62 28 L62 42 C62 50 56 56 50 60 C44 56 38 50 38 42 L38 28 Z" fill="white" />
    <path d="M44 40 L48 44 L56 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.25" />
  </svg>
);

// P12 — Pin metade (duas cores)
const IconPinHalf: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <defs>
      <clipPath id="leftHalf12">
        <rect x="0" y="0" width="50" height="100" />
      </clipPath>
      <clipPath id="rightHalf12">
        <rect x="50" y="0" width="50" height="100" />
      </clipPath>
    </defs>
    <path d={PIN_PATH} fill="currentColor" clipPath="url(#leftHalf12)" />
    <path d={PIN_PATH} fill="currentColor" opacity="0.6" clipPath="url(#rightHalf12)" />
    <circle cx="50" cy="40" r="13" fill="white" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.25" />
  </svg>
);

const LogoCard = ({
  title,
  description,
  Icon,
  background = "card",
}: {
  title: string;
  description: string;
  Icon: FC<IconProps>;
  background?: "card" | "dark";
}) => {
  const isDark = background === "dark";
  return (
    <div
      className={`rounded-2xl border p-6 sm:p-7 transition-all hover:shadow-md ${
        isDark ? "bg-[hsl(220,55%,12%)] border-white/10" : "bg-card border-border"
      }`}
    >
      <div className="flex items-center gap-3 mb-5">
        <Icon className={`h-12 w-12 shrink-0 text-primary`} />
        <div
          className="flex flex-col leading-[0.95] text-[18px] font-extrabold tracking-tight uppercase"
          style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
        >
          <span className={isDark ? "text-white" : "text-foreground"}>Confere</span>
          <span className="text-primary">Aqui</span>
        </div>
      </div>
      <h3 className={`text-sm font-bold mb-1 ${isDark ? "text-white" : "text-foreground"}`}>
        {title}
      </h3>
      <p className={`text-xs leading-relaxed ${isDark ? "text-white/60" : "text-muted-foreground"}`}>
        {description}
      </p>
    </div>
  );
};

const LogoPreview = () => {
  const variations: { title: string; description: string; Icon: FC<IconProps> }[] = [
    { title: "1. Pin (atual)", description: "Marcador de localização clássico com círculo branco.", Icon: IconCurrent },
    { title: "P1. Pin com gradient", description: "Pin com gradiente azul (claro pra escuro).", Icon: IconPinGradient },
    { title: "P2. Pin com check", description: "Check no lugar do círculo branco.", Icon: IconPinWithCheck },
    { title: "P3. Pin com glow", description: "Pin com efeito de brilho atrás.", Icon: IconPinGlow },
    { title: "P4. Pin com lupa", description: "Pin contendo uma lupa interna.", Icon: IconPinSearch },
    { title: "P5. Pin com pulse", description: "Pin com ondas de pulse animadas.", Icon: IconPinPulse },
    { title: "P6. Pin duplo", description: "Dois pins sobrepostos, sugerindo confirmação.", Icon: IconPinDouble },
    { title: "P7. Pin com sombra", description: "Pin com sombra interior pra dar profundidade.", Icon: IconPinShadow },
    { title: "P8. Pin com listras", description: "Pin com textura de listras horizontais.", Icon: IconPinStripes },
    { title: "P9. Pin contornado", description: "Pin com borda dupla pra destaque.", Icon: IconPinOutline },
    { title: "P10. Pin estrela", description: "Estrela no lugar do círculo.", Icon: IconPinStar },
    { title: "P11. Pin escudo", description: "Forma de escudo combinada com pin.", Icon: IconPinShield },
    { title: "P12. Pin metade", description: "Pin com duas cores, dividido ao meio.", Icon: IconPinHalf },
  ];

  return (
    <main className="flex-1 py-8 md:py-14 px-3 sm:px-4 bg-[hsl(220,15%,98%)]">
      <div className="mx-auto max-w-6xl">
        <header className="text-center mb-10 sm:mb-12">
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Variações de Logo
          </h1>
          <p className="text-sm text-muted-foreground">
            Veja a logo com diferentes ícones. Tipografia mantida.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Sobre fundo claro
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {variations.map((v) => (
              <LogoCard key={v.title} title={v.title} description={v.description} Icon={v.Icon} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Sobre fundo escuro
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {variations.map((v) => (
              <LogoCard
                key={`${v.title}-dark`}
                title={v.title}
                description={v.description}
                Icon={v.Icon}
                background="dark"
              />
            ))}
          </div>
        </section>

        <footer className="text-center text-xs text-muted-foreground pt-8 mt-12 border-t border-border">
          Página interna de preview. Não está no menu de navegação.
        </footer>
      </div>
    </main>
  );
};

export default LogoPreview;
