import { Link } from "react-router-dom";
import usePageMeta from "@/hooks/usePageMeta";
import HowItWorks from "@/components/HowItWorks";
import HeroIllustration from "@/components/HeroIllustration";
import WhatItDelivers from "@/components/WhatItDelivers";
import ForWhom from "@/components/ForWhom";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  usePageMeta({
    title: "Confere Aqui",
    description: "Plataforma independente para organização de dados públicos em relatórios estruturados. Operamos em conformidade com a LGPD.",
    canonical: "https://confereaqui.com/",
  });

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="px-3 sm:px-4 pt-4 sm:pt-10 pb-10 sm:pb-14">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Texto + CTA */}
          <div className="text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">
              Consulta Online
            </span>
            <h1
              className="text-[38px] leading-[1] sm:text-[48px] md:text-[52px] lg:text-[58px] md:leading-[1.05] font-bold text-foreground tracking-tight mb-4"
              style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
            >
              Encontre <br className="sm:hidden" /><span className="text-primary">informações <br className="sm:hidden" />completas</span> <br className="sm:hidden" />em segundos
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Consulte dados de forma rápida, segura e simplificada. Obtenha informações
              confiáveis e organizadas em poucos segundos.
            </p>

            <Link
              to="/consultar"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-7 sm:px-14 py-4 text-[18px] sm:text-[20px] font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 hover:brightness-110 active:scale-[0.98]"
            >
              Consultar Agora
            </Link>

          </div>

          {/* Ilustração */}
          <div className="w-full flex justify-center md:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </section>

      <HowItWorks />
      <WhatItDelivers />
      <ForWhom />
      <Testimonials />

      {/* CTA final */}
      <section className="bg-[hsl(220,15%,98%)] border-t border-border px-3 sm:px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">
            Começar agora
          </span>
          <h2
            className="text-2xl sm:text-[28px] font-bold text-foreground tracking-tight mb-3"
            style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
          >
            Pronto para consultar?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-7 max-w-xl mx-auto">
            Realize a consulta e acesse um relatório com as informações disponíveis.
          </p>

          <Link
            to="/consultar"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-7 sm:px-14 py-4 text-[18px] sm:text-[20px] font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 hover:brightness-110 active:scale-[0.98]"
          >
            Consultar Agora
          </Link>

        </div>
      </section>
    </main>
  );
};

export default Index;
