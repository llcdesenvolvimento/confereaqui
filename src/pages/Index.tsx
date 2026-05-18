import { Link } from "react-router-dom";
import usePageMeta from "@/hooks/usePageMeta";
import HowItWorks from "@/components/HowItWorks";
import HeroIllustration from "@/components/HeroIllustration";
import WhatItDelivers from "@/components/WhatItDelivers";
import ForWhom from "@/components/ForWhom";
import Testimonials from "@/components/Testimonials";
import AboutPlatform from "@/components/AboutPlatform";
import ContactSection from "@/components/ContactSection";

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
              className="text-[32px] leading-[1.05] sm:text-[40px] md:text-[44px] lg:text-[48px] md:leading-[1.1] font-bold text-foreground tracking-normal mb-4"
              style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
            >
              Consulte <span className="text-primary">informações completas</span> de forma rápida, simples e segura
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Consulte dados cadastrais de maneira rápida e organizada. Informações completas
              para sua tomada de decisão.
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
      <AboutPlatform />
      <ContactSection />
    </main>
  );
};

export default Index;
