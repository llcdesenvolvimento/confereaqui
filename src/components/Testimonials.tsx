import SectionCTA from "./SectionCTA";

const Testimonials = () => (
  <section className="px-3 sm:px-4 py-14 sm:py-20">
    <div className="mx-auto max-w-5xl">
      <div className="text-center mb-10 sm:mb-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">
          Depoimentos
        </span>
        <h2
          className="text-2xl sm:text-3xl md:text-[34px] font-bold text-foreground tracking-tight mb-3"
          style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
        >
          O que dizem nossos usuários
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Mensagens reais de quem utilizou a plataforma.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div
            key={n}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-video bg-muted">
              <img
                src={`/depoimentos/depoimento-${n}.png`}
                alt={`Depoimento ${n}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <SectionCTA />
    </div>
  </section>
);

export default Testimonials;
