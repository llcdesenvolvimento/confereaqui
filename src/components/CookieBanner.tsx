import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "pi_cookie_consent_v1";

const CookieBanner = () => {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const armazenado = window.localStorage.getItem(STORAGE_KEY);
    if (!armazenado) {
      const t = setTimeout(() => setVisivel(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const aceitar = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisivel(false);
  };

  const recusar = () => {
    window.localStorage.setItem(STORAGE_KEY, "rejected");
    setVisivel(false);
  };

  if (!visivel) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-[60] px-3 sm:px-4 pb-3 sm:pb-4 pointer-events-none"
    >
      <div className="mx-auto max-w-3xl pointer-events-auto rounded-2xl bg-card border border-border shadow-2xl shadow-black/10 p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Cookie className="h-4.5 w-4.5 text-primary" strokeWidth={2.2} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-foreground leading-snug mb-0.5">
                Este site utiliza cookies
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Usamos cookies essenciais para o funcionamento da plataforma e, com seu consentimento,
                cookies de medição para melhorar sua experiência. Saiba mais na nossa{" "}
                <a href="/politica-de-privacidade" className="text-primary font-semibold hover:underline">
                  Política de Privacidade
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={recusar}
              className="text-xs font-semibold text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg transition"
            >
              Recusar
            </button>
            <button
              onClick={aceitar}
              className="inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-lg shadow-md shadow-primary/20 hover:brightness-110 transition active:scale-95"
            >
              Aceitar
            </button>
            <button
              onClick={recusar}
              aria-label="Fechar"
              className="hidden sm:inline-flex items-center justify-center h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
