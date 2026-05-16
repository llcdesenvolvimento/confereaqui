import { ShieldCheck } from "lucide-react";

const LGPDBanner = () => (
  <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-3 sm:px-4">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.06),transparent_65%)] pointer-events-none" />

    <div className="relative mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-5">
        <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
        Privacidade e LGPD
      </span>

      <h2
        className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        Transparência no Uso<br className="sm:hidden" /> de Dados
      </h2>

      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
        As informações exibidas vêm de fontes públicas e são tratadas em conformidade com a{" "}
        <strong className="text-foreground">Lei nº 13.709/2018</strong> — a Lei Geral de Proteção de Dados Pessoais.
      </p>

      <div className="flex justify-center text-sm">
        <a
          href="/termos-de-uso#finalidades-permitidas"
          className="text-primary font-semibold underline-offset-4 hover:underline"
        >
          Ver finalidades permitidas
        </a>
      </div>
    </div>
  </section>
);

export default LGPDBanner;
