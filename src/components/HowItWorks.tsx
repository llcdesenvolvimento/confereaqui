import { Search, QrCode, FileText, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";


const steps: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Realize a consulta",
    description: "Realize a consulta e visualize uma prévia da consulta com as primeiras informações disponíveis.",
    icon: Search,
  },
  {
    title: "Efetue o pagamento",
    description: "Após visualizar a prévia da consulta, você pode prosseguir para o pagamento via PIX para acessar o relatório por R$ 18,90.",
    icon: QrCode,
  },
  {
    title: "Acesse o Relatório",
    description: "Após a confirmação do pagamento, as informações aparecerão na sua tela e também serão enviadas para seu e-mail.",
    icon: FileText,
  },
];

interface HowItWorksProps {
  ctaText?: string;
  ctaHref?: string;
  hideCta?: boolean;
}

const HowItWorks = ({ ctaText = "Consultar Agora", ctaHref = "/consultar", hideCta = false }: HowItWorksProps) => (
  <section className="bg-white py-10 sm:py-14 md:py-20 px-3 sm:px-4">
    <div className="mx-auto max-w-5xl">
      <div className="text-center mb-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          Passo a passo
        </span>
      </div>
      <h2
        className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-foreground text-center mb-2 tracking-tight"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        Entenda como funciona
      </h2>
      <p className="text-sm text-muted-foreground text-center mb-8 sm:mb-12">Consulte em 3 passos simples</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl bg-card border border-border p-7 md:p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <span
                className="absolute -top-6 -right-2 text-[140px] md:text-[160px] font-extrabold leading-none text-primary/[0.06] tabular-nums pointer-events-none select-none"
                style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
              >
                {i + 1}
              </span>

              <div className="relative">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
                </div>
                <h3 className="text-[17px] font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {!hideCta && (
        <div className="mt-10 sm:mt-12 flex justify-center">
          {ctaHref.startsWith("#") ? (
            <a
              href={ctaHref}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(ctaHref.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-7 sm:px-14 py-4 text-[18px] sm:text-[20px] font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 hover:brightness-110 active:scale-[0.98]"
            >
              {ctaText}
            </a>
          ) : (
            <Link
              to={ctaHref}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-7 sm:px-14 py-4 text-[18px] sm:text-[20px] font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 hover:brightness-110 active:scale-[0.98]"
            >
              {ctaText}
            </Link>
          )}
        </div>
      )}
    </div>
  </section>
);

export default HowItWorks;
