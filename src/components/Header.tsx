import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const LogoIcon = () => (
  <svg
    className="h-9 w-9 sm:h-12 sm:w-12 text-primary shrink-0"
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="logo-pin-glow" cx="50%" cy="40%" r="40%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.45" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="40" r="46" fill="url(#logo-pin-glow)" />
    <path
      d="M50 8C32 8 18 22 18 40c0 22 32 52 32 52s32-30 32-52c0-18-14-32-32-32z"
      fill="currentColor"
    />
    <circle cx="50" cy="40" r="13" fill="white" />
    <ellipse cx="50" cy="92" rx="14" ry="3" fill="currentColor" opacity="0.25" />
  </svg>
);

const NAV_LINKS: { label: string; to: string }[] = [
  { label: "Início", to: "/" },
  { label: "Consultar", to: "/consultar" },
  { label: "Sobre Nós", to: "/sobre" },
  { label: "FAQ", to: "/faq" },
  { label: "Blog", to: "/blog" },
  { label: "Contato", to: "/contato" },
  { label: "Termos de Uso", to: "/termos-de-uso" },
  { label: "Política de Privacidade", to: "/politica-de-privacidade" },
  { label: "Política de Reembolso", to: "/politica-de-reembolso" },
  { label: "Solicitar Remoção de Dados", to: "/remocao-de-dados" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border py-3 sm:py-4 px-3 sm:px-5">
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-3">
        <div
          aria-label="Confere Aqui"
          className="flex items-center -ml-1"
        >
          <LogoIcon />
          <div
            className="flex flex-col leading-[0.95] text-[15px] sm:text-[18px] font-extrabold tracking-tight uppercase"
            style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
          >
            <span className="text-foreground">Confere</span>
            <span className="text-primary">Aqui</span>
          </div>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Abrir menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground hover:bg-muted hover:text-primary transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[82%] max-w-sm p-0">
            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>

            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                aria-label="Confere Aqui — Início"
                className="flex items-center -ml-1"
              >
                <LogoIcon />
                <div
                  className="flex flex-col leading-[0.95] text-[15px] font-extrabold tracking-tight uppercase"
                  style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
                >
                  <span className="text-foreground">Confere</span>
                  <span className="text-primary">Aqui</span>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="px-3 py-3">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-[15px] font-semibold text-foreground/85 hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
