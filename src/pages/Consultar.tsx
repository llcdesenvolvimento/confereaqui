import CPFSearchCard from "@/components/CPFSearchCard";
import LGPDBanner from "@/components/LGPDBanner";
import HowItWorks from "@/components/HowItWorks";
import WhatItDelivers from "@/components/WhatItDelivers";
import ForWhom from "@/components/ForWhom";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import usePageMeta from "@/hooks/usePageMeta";

const Consultar = () => {
  usePageMeta({
    title: "Confere Aqui - Consultar",
    description: "Informe o CPF e receba um relatório com dados públicos organizados em segundos. Serviço independente em conformidade com a LGPD.",
    canonical: "https://confereaqui.com/consultar",
  });

  return (
    <>
      <main className="flex-1">
        <div className="bg-[hsl(220,25%,94%)]">
          <CPFSearchCard />
        </div>
        <HowItWorks />
        <WhatItDelivers />
        <ForWhom />
        <Testimonials />
        <LGPDBanner />
        <FAQ />
      </main>
    </>
  );
};

export default Consultar;
