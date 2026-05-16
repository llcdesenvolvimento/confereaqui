import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const faqs = [
  {
    q: "Como funciona a consulta de dados?",
    a: "Nossa plataforma realiza consultas seguras em bases de dados atualizadas. Você insere o CPF e a finalidade de busca, efetua o pagamento e recebe o resultado assim que o pagamento for confirmado.",
  },
  {
    q: "Quanto tempo demora para receber o resultado?",
    a: "O processamento é em tempo real. Após a confirmação do pagamento, o relatório aparece na tela e é enviado para o seu e-mail.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "O pagamento é feito exclusivamente via <strong>PIX</strong>. Após preencher o formulário, um QR Code é gerado para pagamento instantâneo. Cada consulta é cobrada individualmente, sem assinaturas ou mensalidades.",
  },
  {
    q: "E se eu não encontrar as informações?",
    a: "Se a consulta não retornar nenhum dado verificável, você recebe <strong>reembolso total</strong>.",
  },
  {
    q: "Como posso obter suporte?",
    a: "Oferecemos suporte dedicado via e-mail em <strong>suporte@confereaqui.com</strong>. Caso tenha qualquer necessidade, basta entrar em contato e nossa equipe estará pronta para te ajudar.",
  },
  {
    q: "Posso fazer uma consulta por qualquer motivo?",
    a: "Não. Ao realizar a consulta, você deverá selecionar a <strong>finalidade</strong> da busca. As consultas só podem ser feitas para finalidades específicas previstas na LGPD, como confirmação de identidade, análise de crédito, execução de contrato e demais hipóteses legais aplicáveis.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 px-3 sm:px-4">
      <div className="mx-auto max-w-xl">
        {/* Header */}
        <div className="text-center mb-6">
          <h2
            className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-foreground text-center mb-2 tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-muted-foreground">
            Tudo o que você precisa saber antes de consultar
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2.5">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`group relative rounded-2xl bg-card overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "shadow-xl shadow-primary/10 ring-1 ring-primary/25"
                    : "border border-border hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                {isOpen && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-[hsl(220_95%_42%)]" />
                )}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left gap-3"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold tabular-nums transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-br from-primary to-[hsl(220_95%_42%)] text-primary-foreground shadow-md shadow-primary/30 scale-105"
                          : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-sm sm:text-[15px] font-bold leading-snug transition-colors ${
                        isOpen ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {faq.q}
                    </span>
                  </div>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-primary/10 rotate-180"
                        : "bg-muted/50 group-hover:bg-primary/10"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-colors ${
                        isOpen ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                      }`}
                      strokeWidth={2.4}
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pl-[3.875rem]">
                      <p
                        className="text-sm text-muted-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: faq.a }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-6 px-5 sm:px-7">
          <a
            href="/consultar"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-[17px] sm:text-[19px] font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 hover:brightness-110 active:scale-[0.98]"
          >
            <Search className="h-5 w-5" />
            Consultar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
