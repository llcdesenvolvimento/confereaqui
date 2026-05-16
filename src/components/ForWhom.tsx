import { UserCheck, Store, Home, Users } from "lucide-react";
import SectionCTA from "./SectionCTA";

const items = [
  {
    icon: UserCheck,
    tag: "Pessoas",
    title: "Pessoa física conferindo seus próprios dados",
    desc: "Veja, de forma simples, quais informações constam em bases públicas a seu respeito e mantenha tudo sob controle.",
  },
  {
    icon: Store,
    tag: "Empresas",
    title: "Pequenas empresas e profissionais autônomos",
    desc: "Apoie a conferência cadastral de clientes e parceiros antes de fechar contratos ou prestar serviços.",
  },
  {
    icon: Home,
    tag: "Imóveis",
    title: "Locadores e corretores imobiliários",
    desc: "Reúna informações públicas que ajudam na avaliação cadastral antes de assinar contratos de locação.",
  },
  {
    icon: Users,
    tag: "RH",
    title: "Áreas de RH e contratação de prestadores",
    desc: "Apoie processos de conferência cadastral com base em dados públicos, sempre dentro das diretrizes da LGPD.",
  },
];

const ForWhom = () => (
  <section className="relative bg-[hsl(220,15%,98%)] border-y border-border px-3 sm:px-4 py-14 sm:py-20 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_55%)] pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.06),transparent_55%)] pointer-events-none" />

    <div className="relative mx-auto max-w-5xl">
      <div className="text-center mb-10 sm:mb-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">
          Para quem é
        </span>
        <h2
          className="text-2xl sm:text-3xl md:text-[34px] font-bold text-foreground tracking-tight mb-3"
          style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
        >
          Para quem é o serviço
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Qualquer pessoa ou empresa que precise reunir, com agilidade, informações de fontes públicas
          para apoiar decisões cotidianas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {items.map(({ icon: Icon, tag, title, desc }) => (
          <div
            key={tag}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-start justify-between mb-4 gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
              </div>
              <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                {tag}
              </span>
            </div>
            <h3 className="text-base sm:text-[17px] font-bold text-foreground leading-snug mb-2">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto mt-8 leading-relaxed">
        O uso do relatório é de responsabilidade do usuário, que deve respeitar a finalidade declarada e a legislação aplicável, em especial a LGPD (Lei nº 13.709/2018).
      </p>
      <SectionCTA />
    </div>
  </section>
);

export default ForWhom;
