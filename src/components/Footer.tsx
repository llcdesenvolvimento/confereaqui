import { Headset, Mail } from "lucide-react";

const LogoIcon = () => (
  <svg
    className="h-9 w-9 sm:h-12 sm:w-12 text-primary shrink-0"
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="footer-logo-pin-glow" cx="50%" cy="40%" r="40%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.45" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="40" r="46" fill="url(#footer-logo-pin-glow)" />
    <path
      d="M50 8C32 8 18 22 18 40c0 22 32 52 32 52s32-30 32-52c0-18-14-32-32-32z"
      fill="currentColor"
    />
    <circle cx="50" cy="40" r="13" fill="white" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.25" />
  </svg>
);

const Footer = () => (
  <footer className="relative bg-[hsl(220,55%,8%)] text-white overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.06),transparent_70%)] pointer-events-none" />

    <div className="relative mx-auto max-w-5xl px-6 sm:px-10 pt-14 pb-8">
      {/* Logo centralizada */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
        <div className="flex items-center -ml-1 mb-4">
          <LogoIcon />
          <div
            className="flex flex-col items-start leading-[0.95] text-[15px] sm:text-[18px] font-extrabold tracking-tight uppercase"
            style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
          >
            <span className="block text-white">Confere</span>
            <span className="block text-primary">Aqui</span>
          </div>
        </div>
        <p className="text-sm text-white/65 leading-relaxed max-w-sm">
          Consulte informações de maneira transparente e segura.
        </p>
      </div>

      {/* Links em 3 colunas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mb-10 text-center sm:text-left">
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40 mb-4">
            Empresa
          </h4>
          <div className="flex flex-col gap-2.5 text-sm">
            <a href="/sobre" className="text-white/80 hover:text-primary transition-colors">
              Sobre Nós
            </a>
            <a href="/faq" className="text-white/80 hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="/blog" className="text-white/80 hover:text-primary transition-colors">
              Blog
            </a>
            <a href="/contato" className="text-white/80 hover:text-primary transition-colors">
              Contato
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40 mb-4">
            Legal
          </h4>
          <div className="flex flex-col gap-2.5 text-sm">
            <a href="/termos-de-uso" className="text-white/80 hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="/politica-de-privacidade" className="text-white/80 hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="/politica-de-reembolso" className="text-white/80 hover:text-primary transition-colors">
              Política de Reembolso
            </a>
            <a href="/remocao-de-dados" className="text-white/80 hover:text-primary transition-colors">
              Solicitar Remoção de Dados
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40 mb-4">
            Suporte
          </h4>
          <div className="flex flex-col gap-2.5 text-sm">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-white/80">
              <Headset className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>08h – 21h, todos os dias</span>
            </div>
            <a
              href="mailto:suporte@confereaqui.com"
              className="flex items-center justify-center sm:justify-start gap-2 text-white/80 hover:text-primary transition-colors break-all"
            >
              <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
              suporte@confereaqui.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-6 text-center">
        <p className="text-sm sm:text-base text-white/70 font-medium">
          © {new Date().getFullYear()} Confere Aqui · Todos os direitos reservados
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
