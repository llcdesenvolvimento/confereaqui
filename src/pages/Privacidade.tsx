import LegalPageLayout from "@/components/LegalPageLayout";
import usePageMeta from "@/hooks/usePageMeta";

const Privacidade = () => {
  usePageMeta({
    title: "Confere Aqui - Política de Privacidade",
    description:
      "Política de Privacidade da Confere Aqui. Saiba como tratamos dados pessoais, quais são seus direitos como titular e as medidas de proteção adotadas em conformidade com a LGPD.",
    canonical: "https://confereaqui.com/politica-de-privacidade",
  });

  return (
    <LegalPageLayout
      eyebrow="Política de Privacidade"
      title="Política de Privacidade"
      updatedAt="18 de maio de 2026"
      slug="politica-de-privacidade"
    >
      {/* 1 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">1. Introdução</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        A Confere Aqui é uma plataforma digital especializada na organização e disponibilização de informações públicas com base no número de CPF de pessoas físicas. O serviço é prestado de acordo com as leis brasileiras, especialmente a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018), e tem como objetivo facilitar o acesso a informações públicas de forma estruturada e segura, para finalidades legítimas como verificação cadastral, prevenção a fraudes, análise de risco e apoio à tomada de decisão entre particulares.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você utiliza nossos serviços. Também explica seus direitos como titular de dados pessoais.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        A Confere Aqui <strong className="text-foreground">não trata dados pessoais sensíveis</strong> nos termos da LGPD (informações sobre saúde, religião, orientação sexual, opinião política, filiação sindical ou origem racial). Trabalhamos exclusivamente com dados cadastrais, de contato, relacionamentos públicos e participações societárias, obtidos de fontes públicas e parceiros autorizados.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Ao utilizar nosso serviço, você concorda com esta Política de Privacidade e com os <a href="/termos-de-uso" className="text-primary hover:underline">Termos de Uso</a> da plataforma. Suas informações pessoais serão tratadas conforme descrito abaixo.
      </p>

      {/* 2 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">2. Coleta e uso de informações</h2>
      <h3 className="text-base font-bold text-foreground mt-5 mb-2">Dados que coletamos</h3>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li><strong className="text-foreground">Dados de identificação:</strong> nome, e-mail e CPF, quando necessários para realizar a consulta.</li>
        <li><strong className="text-foreground">Dados de pagamento:</strong> informações mínimas exigidas para o processamento da cobrança via Pix.</li>
        <li><strong className="text-foreground">Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas e tempo de permanência.</li>
        <li><strong className="text-foreground">Dados de consulta:</strong> CPF consultado, tipo de relatório ou módulo solicitado, data e horário da consulta.</li>
      </ul>
      <h3 className="text-base font-bold text-foreground mt-5 mb-2">Como utilizamos os dados</h3>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li>Processar e entregar os serviços de consulta contratados;</li>
        <li>Enviar o relatório solicitado para o e-mail informado;</li>
        <li>Processar pagamentos de forma segura;</li>
        <li>Melhorar nossos serviços e a experiência do usuário;</li>
        <li>Cumprir obrigações legais e regulamentares;</li>
        <li>Comunicar sobre atualizações importantes dos serviços.</li>
      </ul>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        <strong className="text-foreground">Importante:</strong> os dados consultados via CPF são extraídos de bases públicas e o <strong className="text-foreground">conteúdo detalhado dos relatórios não fica armazenado em nossos servidores após a consulta</strong>. O relatório é exibido na tela ao final da consulta e enviado uma única vez ao e-mail informado — não mantemos cópias dos resultados, nem reutilizamos esse conteúdo para enriquecer bases internas ou outras finalidades. Mantemos apenas registros mínimos necessários para fins de segurança, prevenção a fraudes e cumprimento de obrigações legais (como data/hora da consulta, endereço IP e dados de pagamento).
      </p>

      {/* 3 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">3. Tipos de informações nos relatórios</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Nossa plataforma oferece relatórios estruturados a partir de informações públicas vinculadas ao CPF informado. A composição exata depende do módulo contratado e do que estiver disponível nas fontes integradas no momento da consulta. Categorias não contratadas não são exibidas.
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li><strong className="text-foreground">Relatório Consolidado:</strong> dados cadastrais (nome, filiação, data de nascimento, situação cadastral), e-mails e demais informações cadastrais públicas vinculadas ao CPF.</li>
        <li><strong className="text-foreground">Telefones:</strong> telefones identificados em registros públicos.</li>
        <li><strong className="text-foreground">Participações Societárias:</strong> empresas e quadros societários em que o CPF figura como sócio ou administrador.</li>
        <li><strong className="text-foreground">Vínculos:</strong> vínculos identificados em registros públicos.</li>
      </ul>

      {/* 4 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">4. Finalidade dos relatórios e responsabilidade do usuário</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        Os relatórios oferecidos pela plataforma são voltados exclusivamente para finalidades legítimas, tais como:
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li>Verificação cadastral de clientes, fornecedores ou parceiros comerciais;</li>
        <li>Prevenção e detecção de fraudes;</li>
        <li>Análise e proteção ao crédito entre particulares;</li>
        <li>Gestão de risco e <em>due diligence</em>;</li>
        <li>Cumprimento de obrigações contratuais ou pré-contratuais.</li>
      </ul>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">Ao utilizar nossos serviços, você declara que:</p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li>Possui base legal válida para consultar o CPF de terceiros;</li>
        <li>Utilizará as informações obtidas de forma legítima, conforme a LGPD e demais leis aplicáveis;</li>
        <li>Não utilizará os relatórios para finalidades ilícitas, discriminatórias, perseguição, exposição vexatória ou qualquer forma de constrangimento;</li>
        <li>É o único responsável pelo uso que fizer das informações consultadas.</li>
      </ul>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        <strong className="text-foreground">Atenção:</strong> a plataforma não verifica individualmente a base legal de cada consulta realizada. O usuário é integralmente responsável por garantir que possui autorização legal para acessar as informações de terceiros e por qualquer uso indevido dos dados obtidos.
      </p>

      {/* 5 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">5. Base legal para tratamento de dados</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        O tratamento dos seus dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD:
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li><strong className="text-foreground">Execução de contrato:</strong> para processar e entregar os serviços de consulta contratados.</li>
        <li><strong className="text-foreground">Legítimo interesse:</strong> para melhorar nossos serviços, prevenir fraudes e garantir a segurança da plataforma.</li>
        <li><strong className="text-foreground">Cumprimento de obrigação legal ou regulatória:</strong> para atender exigências legais aplicáveis ao serviço.</li>
        <li><strong className="text-foreground">Exercício regular de direitos:</strong> incluindo a hipótese de proteção ao crédito prevista no art. 7º, X da LGPD.</li>
      </ul>

      {/* 6 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">6. Precisão das informações e limitação de responsabilidade</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Os relatórios exibem informações extraídas de bases de dados públicas e de parceiros autorizados, refletindo o que consta nessas fontes no momento da consulta. Embora nos esforcemos para garantir a qualidade e a atualização dos dados, as informações podem, em determinados casos, apresentar inconsistências, estar desatualizadas ou incompletas devido às características das próprias bases de origem.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Isso é inerente a qualquer serviço de consulta de dados no mercado. Em geral, as informações exibidas refletem o que consta nas mesmas bases utilizadas por bancos, bureaus de crédito e outras empresas do setor. Assim, quando há alguma inconsistência ou defasagem, é provável que essa divergência esteja presente também em outras fontes do mercado, não sendo uma alteração ou erro exclusivo da Confere Aqui.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        <strong className="text-foreground">Importante:</strong> o uso das informações é de responsabilidade exclusiva do usuário, que deve sempre complementá-las com outros elementos de análise, verificação documental e avaliação criteriosa antes de tomar decisões com base nos relatórios. A plataforma não se responsabiliza por decisões tomadas exclusivamente com base nos dados fornecidos.
      </p>

      {/* 7 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">7. Compartilhamento de dados</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        Não vendemos, não alugamos e não comercializamos suas informações pessoais. Seus dados podem ser compartilhados apenas nas seguintes situações:
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li><strong className="text-foreground">Processadores de pagamento:</strong> Pagar.me, responsável por processar as transações financeiras.</li>
        <li><strong className="text-foreground">Prestadores de serviços:</strong> empresas que nos auxiliam na operação da plataforma (hospedagem em nuvem, envio de e-mails transacionais, monitoramento e antifraude).</li>
        <li><strong className="text-foreground">Cumprimento legal:</strong> quando exigido por lei, ordem judicial ou autoridades competentes.</li>
        <li><strong className="text-foreground">Proteção de direitos:</strong> para proteger nossos direitos, propriedade ou segurança e os de terceiros.</li>
      </ul>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Todos os terceiros que recebem dados pessoais são obrigados contratualmente a mantê-los seguros e a utilizá-los apenas para os fins específicos autorizados.
      </p>

      {/* 8 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">8. Cookies e dados de navegação</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        Utilizamos cookies e tecnologias similares para melhorar a experiência de navegação e coletar informações estatísticas sobre o uso do site. Os tipos de cookies utilizados incluem:
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li><strong className="text-foreground">Cookies essenciais:</strong> necessários para o funcionamento básico do site.</li>
        <li><strong className="text-foreground">Cookies de performance:</strong> para análise de uso e melhoria dos serviços.</li>
        <li><strong className="text-foreground">Cookies de funcionalidade:</strong> para lembrar suas preferências.</li>
      </ul>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Você pode aceitar ou recusar o uso de cookies nas configurações do seu navegador. Também coletamos dados de log, como endereço IP, tipo de navegador, páginas acessadas e tempo de visita, sempre de forma agregada e proporcional à finalidade de segurança e melhoria do serviço.
      </p>

      {/* 9 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">9. Retenção de dados</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        Mantemos seus dados pessoais apenas pelo tempo necessário para as finalidades descritas nesta política:
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li><strong className="text-foreground">Conteúdo do relatório:</strong> não é armazenado após a entrega ao usuário.</li>
        <li><strong className="text-foreground">Dados de pagamento e registros fiscais:</strong> conforme exigências legais e fiscais aplicáveis (até cinco anos).</li>
        <li><strong className="text-foreground">Dados de contato do comprador:</strong> até que você solicite a exclusão ou deixe de utilizar o serviço.</li>
        <li><strong className="text-foreground">Logs de acesso e segurança:</strong> por até seis meses, para fins de auditoria e prevenção a fraudes.</li>
      </ul>

      {/* 10 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">10. Seus direitos sob a LGPD</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        Como titular de dados pessoais, você possui os seguintes direitos:
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li><strong className="text-foreground">Confirmação e acesso:</strong> saber se tratamos seus dados e ter acesso a eles.</li>
        <li><strong className="text-foreground">Correção:</strong> solicitar a correção de dados incompletos ou incorretos.</li>
        <li><strong className="text-foreground">Anonimização ou exclusão:</strong> solicitar a eliminação de dados desnecessários.</li>
        <li><strong className="text-foreground">Portabilidade:</strong> solicitar a transferência dos dados a outro fornecedor de serviço ou produto, observados os requisitos legais.</li>
        <li><strong className="text-foreground">Informação sobre compartilhamento:</strong> saber com quem compartilhamos seus dados.</li>
        <li><strong className="text-foreground">Revogação do consentimento:</strong> retirar o consentimento quando aplicável.</li>
        <li><strong className="text-foreground">Oposição:</strong> se opor ao tratamento realizado com base no legítimo interesse, quando cabível.</li>
      </ul>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Para exercer seus direitos, entre em contato pelo e-mail: <a href="mailto:suporte@confereaqui.com" className="text-primary hover:underline">suporte@confereaqui.com</a>.
      </p>

      {/* 11 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">11. Segurança das informações</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        Adotamos medidas técnicas e organizacionais de segurança reconhecidas pelo mercado para proteger suas informações contra acessos não autorizados, alterações, divulgações ou destruições indevidas:
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li>Criptografia de dados em trânsito;</li>
        <li>Controles de acesso rigorosos aos sistemas;</li>
        <li>Monitoramento contínuo de segurança;</li>
        <li>Backups regulares e seguros;</li>
        <li>Práticas internas e treinamento da equipe em segurança da informação.</li>
      </ul>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        <strong className="text-foreground">Importante:</strong> embora utilizemos as melhores práticas de segurança, nenhum sistema é totalmente imune a riscos. Recomendamos que você também tome precauções para proteger suas informações.
      </p>

      {/* 12 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">12. Links para terceiros</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Nosso site pode conter links para serviços ou sites de terceiros, como gateways de pagamento. Não temos controle sobre suas políticas de privacidade e recomendamos que você leia os respectivos termos antes de prosseguir.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Ao efetuar o pagamento, o usuário declara estar de acordo com esta Política de Privacidade, com os Termos de Uso da Confere Aqui e também com os termos da <strong className="text-foreground">Pagar.me</strong>, empresa responsável pelo processamento dos pagamentos.
      </p>

      {/* 13 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">13. Alterações nesta Política</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Esta Política de Privacidade poderá ser atualizada a qualquer momento para refletir alterações na legislação, nos serviços ou em práticas internas. As modificações entrarão em vigor a partir da publicação nesta página. Recomendamos que você revise periodicamente esta política para se manter informado sobre como protegemos suas informações. A data da última revisão estará sempre indicada no topo deste documento.
      </p>

      {/* 14 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">14. Contato</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Para dúvidas, sugestões ou solicitações relacionadas à privacidade e proteção de dados, ou para exercer seus direitos como titular de dados pessoais, escreva para:
      </p>
      <div className="mt-2 mb-2">
        <a href="mailto:suporte@confereaqui.com" className="text-primary hover:underline text-sm font-medium">
          📩 suporte@confereaqui.com
        </a>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
        Assunto sugerido: <strong className="text-foreground">"LGPD — [tipo de solicitação]"</strong>. Responderemos sua solicitação em até <strong className="text-foreground">15 dias úteis</strong>, conforme previsto na LGPD.
      </p>
    </LegalPageLayout>
  );
};

export default Privacidade;
