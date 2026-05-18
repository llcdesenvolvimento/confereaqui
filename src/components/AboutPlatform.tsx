import { Scale, ShieldCheck, Database } from "lucide-react";

const pillars = [
  {
    icon: Scale,
    title: "Finalidade legítima",
    desc: "Atendemos apenas usos compatíveis com a LGPD: conferência cadastral, prevenção a fraudes e apoio a decisões em transações entre particulares.",
  },
  {
    icon: ShieldCheck,
    title: "Uso responsável",
    desc: "Não vendemos listas, não fazemos prospecção e não cedemos dados a terceiros. Cada consulta é avulsa e exige confirmação expressa do usuário.",
  },
  {
    icon: Database,
    title: "Dados públicos",
    desc: "Trabalhamos somente com informações disponíveis em fontes públicas, organizando esses dados em um relatório claro e simples de consultar.",
  },
];

const AboutPlatform = () => (
  <section className="px-3 sm:px-4 py-14 sm:py-20 bg-[hsl(220,15%,98%)] border-t border-border">
    <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">
        Sobre a plataforma
      </span>
      <h2
        className="text-2xl sm:text-3xl md:text-[36px] md:leading-[1.1] font-bold text-foreground tracking-tight mb-4"
        style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
      >
        Transparência <span className="text-primary">em cada consulta.</span>
      </h2>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        Somos uma plataforma independente de organização de dados públicos. Operamos com regras claras
        sobre o que entregamos, como tratamos as informações e para que elas podem ser usadas.
      </p>
    </div>

    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
        {pillars.map(({ icon: Icon, title, desc }) => (
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
    </div>
  </section>
);

export default AboutPlatform;
