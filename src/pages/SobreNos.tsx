import LegalPageLayout from "@/components/LegalPageLayout";
import usePageMeta from "@/hooks/usePageMeta";

const SobreNos = () => {
  usePageMeta({
    title: "Confere Aqui - Sobre Nós",
    description: "Conheça a Confere Aqui: empresa privada e independente que organiza informações públicas em relatórios de CPF, com transparência e em conformidade com a LGPD.",
    canonical: "https://confereaqui.com/sobre",
  });

  return (
    <LegalPageLayout
      eyebrow="Sobre Nós"
      title="Sobre Nós"
      updatedAt="04 de janeiro de 2026"
      slug="sobre"
    >
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">1. Quem somos</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui é uma plataforma digital que reúne informações públicas, disponíveis legalmente, para oferecer relatórios a partir do número de CPF de pessoas físicas. Atuamos com transparência, agilidade e respeito à legislação brasileira, especialmente à <strong className="text-foreground">Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD)</strong>.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Nosso objetivo é tornar o acesso à informação mais fácil, confiável e acessível para finalidades como verificação cadastral, prevenção a fraudes, conferência de dados pessoais e apoio à tomada de decisão. Por meio de uma interface simples e intuitiva, oferecemos um serviço ágil de consulta e organização de dados cadastrais e de contato, sempre com responsabilidade e respeito à privacidade.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui é uma empresa privada e independente. Atuamos de forma autônoma, sem vínculo institucional com órgãos públicos ou bureaus de crédito.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">2. O que oferecemos</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Disponibilizamos relatórios consolidados gerados a partir de um CPF informado, organizando dados cadastrais e informações de relacionamento com o mercado de pessoas físicas em um formato prático e fácil de interpretar.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Os relatórios podem incluir, conforme a disponibilidade nas fontes consultadas, dados como nome completo, data de nascimento, idade, nome da mãe, situação cadastral do CPF, histórico profissional, endereços eletrônicos e outros registros vinculados.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Após a aquisição do relatório principal, módulos complementares podem ser contratados de forma independente, sempre mediante confirmação expressa do usuário.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">3. Como funciona</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          O processo é simples e foi pensado para ser concluído em poucos passos:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Digite o número do CPF que deseja consultar e selecione a finalidade da consulta;</li>
          <li>Visualize uma prévia gratuita com as primeiras informações disponíveis;</li>
          <li>Realize o pagamento via Pix para liberar o relatório consolidado;</li>
          <li>Após a confirmação do Pix, o conteúdo é liberado na tela em segundos e uma cópia é enviada para o e-mail informado.</li>
        </ul>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">4. Compromisso com a segurança e a privacidade</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Todos os dados são tratados com sigilo e segurança. Utilizamos criptografia em trânsito e boas práticas de segurança da informação para proteger as comunicações entre o usuário e a Plataforma.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          O detalhamento completo sobre coleta, finalidades de uso e direitos dos titulares está disponível na nossa <a href="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</a>.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">5. Dados públicos e não sensíveis</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Trabalhamos <strong className="text-foreground">exclusivamente com dados públicos</strong> e informações de relacionamento com o mercado, <strong className="text-foreground">acessíveis a qualquer cidadão</strong> dentro das diretrizes legais brasileiras. A Plataforma organiza e apresenta essas informações de forma automatizada, <strong className="text-foreground">sem qualquer modificação ou interferência</strong> nos dados originais.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          <strong className="text-foreground">Não tratamos dados sensíveis</strong> nos termos da LGPD, tais como:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Informações sobre saúde;</li>
          <li>Convicção religiosa ou filosófica;</li>
          <li>Orientação sexual;</li>
          <li>Opinião política;</li>
          <li>Filiação sindical.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Os relatórios reúnem exclusivamente dados cadastrais, de contato e de relacionamento com o mercado, obtidos de fontes públicas.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">6. Sobre a precisão das informações</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Os relatórios refletem as informações disponíveis nas bases de dados consultadas no momento da pesquisa. Embora trabalhemos com fontes consideradas lícitas e nos esforcemos para garantir a maior precisão possível, as informações podem, em casos pontuais, estar desatualizadas ou conter inconsistências decorrentes das bases de origem.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">Importante:</strong> o relatório é um instrumento de apoio à decisão e não deve ser utilizado como única fonte de informação. Recomendamos que seja complementado com outros elementos de análise e, sempre que necessário, com verificação documental.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">7. Conformidade legal</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          Atuamos em conformidade com a legislação brasileira aplicável, com destaque para:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li><strong className="text-foreground">Lei Geral de Proteção de Dados</strong> — Lei nº 13.709/2018 (LGPD);</li>
          <li><strong className="text-foreground">Marco Civil da Internet</strong> — Lei nº 12.965/2014;</li>
          <li><strong className="text-foreground">Código de Defesa do Consumidor</strong> — Lei nº 8.078/1990.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Qualquer titular de dados pode solicitar, a qualquer momento, a remoção de suas informações por meio da nossa <a href="/remocao-de-dados" className="text-primary hover:underline">página de Remoção de Dados</a>. As condições de uso do serviço estão disponíveis nos <a href="/termos-de-uso" className="text-primary hover:underline">Termos de Uso</a>.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">8. Transparência e suporte</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          Caso tenha dúvidas sobre o nosso funcionamento, sobre os dados utilizados ou queira falar com a nossa equipe, o atendimento é feito exclusivamente pelos canais oficiais:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Suporte geral: <a href="mailto:suporte@confereaqui.com" className="text-primary hover:underline">suporte@confereaqui.com</a></li>
          <li>Horário de atendimento: todos os dias, das 08h às 21h (horário de Brasília).</li>
        </ul>

    </LegalPageLayout>
  );
};

export default SobreNos;
