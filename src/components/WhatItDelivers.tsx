import { UserCheck, ShieldCheck, FileSearch } from "lucide-react";
import SectionCTA from "./SectionCTA";

const items = [
  {
    icon: FileSearch,
    title: "Conferência cadastral",
    desc: "Antes de fechar negócios, prestar serviços ou assinar contratos.",
  },
  {
    icon: UserCheck,
    title: "Verificação de informações",
    desc: "Acesso organizado a informações disponíveis em fontes públicas.",
  },
  {
    icon: ShieldCheck,
    title: "Apoio à tomada de decisão",
    desc: "Mais clareza em transações financeiras e relações comerciais.",
  },
];

const WhatItDelivers = () => (
  <section className="px-3 sm:px-4 py-14 sm:py-20">
    <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">
        O que entrega
      </span>
      <h2
        className="text-2xl sm:text-3xl md:text-[36px] md:leading-[1.1] font-bold text-foreground tracking-tight mb-4"
        style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
      >
        Pra cada situação,<br className="sm:hidden" />{" "}
        <span className="text-primary">a informação certa.</span>
      </h2>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        Um relatório único, com as informações de fontes públicas reunidas em formato simples
        de ler. Sem precisar consultar várias páginas, planilhas ou cadastros separados.
      </p>
    </div>

    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="text-center px-2">
            <div className="mx-auto mb-5 inline-flex h-16 w-16 sm:h-[72px] sm:w-[72px] items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/25">
              <Icon className="h-8 w-8 sm:h-9 sm:w-9 text-primary-foreground" strokeWidth={2} />
            </div>
            <h3
              className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2"
              style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
            >
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
              {desc}
            </p>
          </div>
        ))}
      </div>
      <SectionCTA />
    </div>
  </section>
);

export default WhatItDelivers;
