import { Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="px-3 sm:px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">
          Contato
        </span>
        <h2
          className="text-2xl sm:text-3xl md:text-[36px] md:leading-[1.1] font-bold text-foreground tracking-tight mb-4"
          style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
        >
          Fale com a <span className="text-primary">nossa equipe.</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Tire dúvidas, peça suporte ou envie sugestões pelos canais oficiais.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
          <a
            href="mailto:suporte@confereaqui.com"
            className="group block rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" strokeWidth={2.4} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Suporte geral
              </span>
            </div>
            <p className="text-sm font-bold text-foreground break-all group-hover:text-primary transition">
              suporte@confereaqui.com
            </p>
          </a>

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" strokeWidth={2.4} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Horário de atendimento
              </span>
            </div>
            <p className="text-sm font-bold text-foreground leading-snug">
              Todos os dias, das 08h às 21h
              <span className="block text-xs font-normal text-muted-foreground mt-1">
                (horário de Brasília)
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
