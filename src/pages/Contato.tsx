import { Mail, Headset, Send } from "lucide-react";
import LegalPageLayout from "@/components/LegalPageLayout";
import usePageMeta from "@/hooks/usePageMeta";

const Contato = () => {
  usePageMeta({
    title: "Confere Aqui - Contato",
    description:
      "Fale com a equipe da Confere Aqui. Atendimento todos os dias das 08h às 21h pelos canais oficiais.",
    canonical: "https://confereaqui.com/contato",
  });

  const assunto = encodeURIComponent("Contato — Confere Aqui");
  const corpo = encodeURIComponent(
    "Olá,\n\nEntro em contato pelo site Confere Aqui.\n\nMensagem:\n\n",
  );
  const linkMailto = `mailto:suporte@confereaqui.com?subject=${assunto}&body=${corpo}`;

  return (
    <LegalPageLayout
      eyebrow="Contato"
      title="Contato"
      subtitle="Tire dúvidas, peça suporte ou envie sugestões pelos canais oficiais."
      slug="contato"
    >
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">Canais de atendimento</h2>

      <a
        href="mailto:suporte@confereaqui.com"
        className="group block rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:shadow-md transition mb-4"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <Mail className="h-4 w-4 text-primary" strokeWidth={2.4} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Suporte geral
          </span>
        </div>
        <p className="text-sm font-bold text-foreground break-all group-hover:text-primary transition">
          suporte@confereaqui.com
        </p>
      </a>

      <div className="rounded-xl bg-muted/40 border border-border px-4 py-3 flex items-center gap-3 mb-4">
        <Headset className="h-4 w-4 text-primary shrink-0" strokeWidth={2.4} />
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Horário de atendimento:</strong> todos os dias, das 08h às 21h
          (horário de Brasília).
        </p>
      </div>

      <a
        href={linkMailto}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground text-sm font-bold px-6 py-3.5 shadow-lg shadow-primary/25 hover:brightness-110 transition active:scale-[0.98]"
      >
        <Send className="h-4 w-4" />
        Enviar e-mail agora
      </a>

      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">
        Para solicitações específicas
      </h2>
      <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1.5 mb-4">
        <li>
          Reembolso ou desistência de compra: consulte a{" "}
          <a href="/politica-de-reembolso" className="text-primary hover:underline">
            Política de Reembolso
          </a>
          .
        </li>
        <li>
          Remoção de dados pessoais (LGPD): use o formulário em{" "}
          <a href="/remocao-de-dados" className="text-primary hover:underline">
            Remoção de Dados
          </a>
          .
        </li>
        <li>
          Dúvidas sobre o serviço: veja o{" "}
          <a href="/faq" className="text-primary hover:underline">
            FAQ
          </a>
          .
        </li>
      </ul>
    </LegalPageLayout>
  );
};

export default Contato;
