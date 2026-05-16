import LegalPageLayout from "@/components/LegalPageLayout";
import usePageMeta from "@/hooks/usePageMeta";

const Reembolso = () => {
  usePageMeta({
    title: "Confere Aqui - Política de Reembolso",
    description: "Política de Reembolso da Confere Aqui. Direito de arrependimento de 7 dias previsto no CDC, prazos e critérios de elegibilidade.",
    canonical: "https://confereaqui.com/politica-de-reembolso",
  });

  return (
    <LegalPageLayout
      eyebrow="Política de Reembolso"
      title="Política de Reembolso"
      updatedAt="04 de janeiro de 2026"
      slug="politica-de-reembolso"
    >
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">1. Seu direito ao reembolso</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          De acordo com o <strong className="text-foreground">Código de Defesa do Consumidor (Lei nº 8.078/1990)</strong>, em especial o <strong className="text-foreground">Art. 49</strong>, o consumidor que contrata serviços pela internet — ou fora do estabelecimento comercial — tem o direito de desistir da compra em até <strong className="text-foreground">7 (sete) dias corridos</strong> contados a partir da data da aquisição ou do recebimento do serviço, sem necessidade de apresentar justificativa.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui respeita integralmente esse direito. O usuário pode solicitar a devolução integral do valor pago dentro do prazo legal, independentemente do motivo, bastando manifestar sua intenção de desistir.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Além do direito de arrependimento previsto no Art. 49 do CDC, a Confere Aqui também assegura o reembolso integral quando o serviço contratado não retornar nenhum dado mínimo verificável, configurando ausência total de conteúdo confirmável no relatório adquirido.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">2. Prazo para solicitar</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Conforme o Art. 49 do CDC, o prazo para exercer o direito de arrependimento é de <strong className="text-foreground">7 (sete) dias corridos</strong> a contar da data da compra. Solicitações feitas dentro desse período serão atendidas com devolução integral do valor pago.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">3. Como pedir o reembolso</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          Todas as solicitações de reembolso devem ser enviadas para o e-mail:
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          📧 <a href="mailto:suporte@confereaqui.com" className="text-primary hover:underline font-medium">suporte@confereaqui.com</a>
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">No seu e-mail, informe:</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>E-mail utilizado na compra;</li>
          <li>Data aproximada da consulta;</li>
          <li>Identificação da transação ou comprovante de pagamento, se disponível;</li>
          <li>Motivo da solicitação.</li>
        </ul>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">4. Análise e processamento</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Após receber a solicitação, nossa equipe fará a análise em até <strong className="text-foreground">2 (dois) dias úteis</strong>. O usuário será informado por e-mail sobre o resultado.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Uma vez aprovado, o reembolso será processado conforme os procedimentos financeiros aplicáveis e pode levar até <strong className="text-foreground">3 (três) dias úteis</strong> para ser efetivado.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">5. Situações não elegíveis</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">O reembolso <strong className="text-foreground">não se aplica</strong> quando:</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>A solicitação for feita após o prazo de 7 dias;</li>
          <li>Houver uso indevido ou abusivo do serviço.</li>
        </ul>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">6. Disposições gerais</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Esta política de reembolso complementa os <a href="/termos-de-uso" className="text-primary hover:underline">Termos de Uso</a> e a <a href="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</a> da Confere Aqui. Em caso de conflito, prevalecerão as condições mais favoráveis ao consumidor, conforme a legislação brasileira vigente.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui pode atualizar esta política a qualquer momento. A versão vigente estará sempre disponível em: <a href="/politica-de-reembolso" className="text-primary hover:underline">confereaqui.com/politica-de-reembolso</a>
        </p>

    </LegalPageLayout>
  );
};

export default Reembolso;