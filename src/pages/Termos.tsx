import { useEffect } from "react";
import LegalPageLayout from "@/components/LegalPageLayout";
import usePageMeta from "@/hooks/usePageMeta";

const Termos = () => {
  usePageMeta({
    title: "Confere Aqui - Termos de Uso",
    description:
      "Termos e condições de uso da Confere Aqui. Regras de utilização, responsabilidades do usuário e diretrizes de conformidade com a LGPD e a legislação vigente.",
    canonical: "https://confereaqui.com/termos-de-uso",
  });

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <LegalPageLayout
      eyebrow="Termos de Uso"
      title="Termos de Uso"
      updatedAt="18 de maio de 2026"
      slug="termos-de-uso"
    >
      {/* 1 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">1. Introdução</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Bem-vindo à <strong className="text-foreground">Confere Aqui</strong>, plataforma comprometida com a privacidade dos titulares de dados e com a segurança dos usuários, em conformidade com a <strong className="text-foreground">Lei Geral de Proteção de Dados Pessoais (LGPD) — Lei nº 13.709/2018</strong>. Atuamos exclusivamente na <strong className="text-foreground">organização de informações públicas</strong> disponíveis em fontes legalmente acessíveis, oferecendo consultas estruturadas a partir do CPF informado.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        A Confere Aqui disponibiliza relatórios sobre pessoas físicas, com base no <strong className="text-foreground">número de CPF</strong>, voltados à <strong className="text-foreground">verificação cadastral, prevenção a fraudes, análise de risco e apoio à tomada de decisão</strong> em relações legítimas entre particulares.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Estes Termos de Uso ("<strong className="text-foreground">Termos</strong>") definem as regras para o acesso e a utilização dos serviços disponibilizados pela Confere Aqui ("<strong className="text-foreground">Plataforma</strong>", "<strong className="text-foreground">nós</strong>" ou "<strong className="text-foreground">nosso</strong>") por meio do site ("<strong className="text-foreground">Serviços</strong>"). Ao acessar ou utilizar os Serviços, você concorda integralmente com estes Termos. <strong className="text-foreground">Leia este documento com atenção antes de utilizar qualquer recurso.</strong>
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Caso não concorde com algum dos pontos, por favor não utilize os Serviços. Este instrumento constitui um <strong className="text-foreground">contrato legal vinculante</strong> entre você (usuário) e a Confere Aqui, aplicável a qualquer forma de acesso, navegação, uso ou interação com os Serviços.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Estes Termos podem ser atualizados a qualquer tempo. Quaisquer alterações serão comunicadas pelos canais oficiais, sendo responsabilidade do usuário acompanhar a versão vigente em <a href="/termos-de-uso" className="text-primary hover:underline">confereaqui.com/termos-de-uso</a>. <strong className="text-foreground">O uso continuado dos Serviços após eventuais alterações implica concordância com a nova versão</strong>.
      </p>

      {/* 2 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">2. Critérios de capacidade legal</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        O acesso e a utilização dos Serviços são restritos a pessoas com <strong className="text-foreground">idade mínima de 18 anos</strong> e que possuam <strong className="text-foreground">plena capacidade civil</strong> para contratar. Ao utilizar a Plataforma, o usuário declara atender a esses requisitos e que sua utilização se dá em conformidade com a legislação aplicável.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        É vedada a utilização da Plataforma por terceiros em nome de outro indivíduo, salvo mediante <strong className="text-foreground">autorização legal expressa</strong>. Caso o usuário esteja representando uma empresa ou organização, declara possuir poderes para agir em seu nome e vinculá-la aos presentes Termos.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        O usuário assume <strong className="text-foreground">responsabilidade integral</strong> por todas as ações realizadas durante o uso dos Serviços, incluindo as consultas iniciadas, as finalidades declaradas e a destinação dada às informações obtidas.
      </p>

      {/* 3 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">3. Objeto dos Serviços</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        A Confere Aqui disponibiliza ao usuário <strong className="text-foreground">informações de natureza pública e de acesso permitido</strong> sobre pessoas físicas (CPF), organizadas de forma automatizada e apresentadas em uma interface clara e prática. Os dados consultados provêm de bases públicas, registros abertos e fontes legalmente acessíveis nos termos da legislação brasileira.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        As informações são apresentadas como <strong className="text-foreground">dados brutos</strong>, tal como retornadas pelas bases consultadas, <strong className="text-foreground">sem qualquer alteração de conteúdo ou juízo de valor</strong> pela Confere Aqui. Nosso papel se limita a reunir, organizar tecnicamente e exibir esses dados de forma estruturada.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        Os relatórios <strong className="text-foreground">não incluem dados sensíveis</strong> nos termos da LGPD, tais como:
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li>Informações sobre saúde;</li>
        <li>Origem racial ou étnica;</li>
        <li>Convicções religiosas, filosóficas ou políticas;</li>
        <li>Filiação a sindicato ou a organização de caráter religioso, filosófico ou político;</li>
        <li>Orientação sexual;</li>
        <li>Dados genéticos ou biométricos.</li>
      </ul>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        O escopo do serviço se limita a <strong className="text-foreground">dados cadastrais e de relacionamento com o mercado</strong>.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        A Confere Aqui empenha-se em entregar os dados disponíveis nas fontes que utiliza, mas <strong className="text-foreground">não garante a precisão, a integralidade ou a disponibilidade</strong> de todas as informações em cada consulta. Algumas informações podem não aparecer no relatório (por exemplo, nome da mãe, telefones ou empresas) porque podem não estar vinculadas ao CPF nas bases consultadas — isso é inerente ao trabalho com dados públicos.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        A Plataforma apenas reúne, organiza, indexa e apresenta informações de fontes públicas. <strong className="text-foreground">Não geramos, criamos, falsificamos, manipulamos ou inserimos artificialmente dados.</strong>
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        <strong className="text-foreground">Não nos responsabilizamos por consultas realizadas com dados incorretos inseridos pelo usuário.</strong> Nessas situações, a consulta será considerada válida e efetuada normalmente; para refazê-la com os dados corretos, será necessário um novo pagamento.
      </p>

      {/* 4 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">4. Conformidade com a LGPD e responsabilidades do usuário</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        A Confere Aqui opera em conformidade com a LGPD, respeitando a privacidade e os direitos dos titulares de dados. Ao utilizar nossos Serviços, o usuário declara que:
      </p>

      <h3 id="finalidades-permitidas" className="text-base font-bold text-foreground mt-5 mb-2 scroll-mt-24">4.1. Seleção obrigatória de finalidade da consulta</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        Em conformidade com a LGPD, ao realizar qualquer consulta na Plataforma, o usuário <strong className="text-foreground">deve obrigatoriamente selecionar uma das finalidades permitidas</strong> para o tratamento de dados pessoais. Essa seleção garante a legalidade e a transparência no uso das informações obtidas. As finalidades permitidas são:
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li><strong className="text-foreground">Legítimo interesse</strong> — consulta de dados pessoais para atender a interesses legítimos do controlador ou de terceiros, respeitando direitos e liberdades fundamentais do titular;</li>
        <li><strong className="text-foreground">Confirmação de identidade</strong> — verificação de dados pessoais para prevenção de fraudes e garantia da autenticidade da identidade apresentada;</li>
        <li><strong className="text-foreground">Ciclo de crédito</strong> — análise de dados relacionados ao histórico financeiro, incluindo cobrança, verificação de situação e avaliação para concessão de crédito;</li>
        <li><strong className="text-foreground">Execução de contrato</strong> — consulta de informações e procedimentos preliminares relacionados a contratos dos quais o titular seja parte ou possa vir a ser.</li>
      </ul>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Ao escolher uma finalidade, o usuário <strong className="text-foreground">declara, sob as penas da lei</strong>, que a consulta será realizada exclusivamente para o propósito indicado e que possui base legal ou legítimo interesse para tal tratamento. <strong className="text-foreground">Utilizar as informações para finalidades distintas das declaradas configura violação à LGPD e pode acarretar responsabilização civil e criminal.</strong>
      </p>

      <h3 className="text-base font-bold text-foreground mt-5 mb-2">4.2. Obrigações do usuário</h3>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li><strong className="text-foreground">Capacidade civil:</strong> possuir plena capacidade legal para contratar e utilizar os Serviços;</li>
        <li><strong className="text-foreground">Conformidade com a LGPD:</strong> reconhecer que a Confere Aqui opera em conformidade com a LGPD e que nenhum dado fornecido durante a pesquisa é acessado ou armazenado de forma que infrinja essa legislação;</li>
        <li><strong className="text-foreground">Uso legal das informações:</strong> garantir que as informações obtidas sejam utilizadas de forma lícita, ética e legal, respeitando as normas aplicáveis. <strong className="text-foreground">É estritamente proibido empregar os dados para práticas ilegais, discriminatórias ou que comprometam a privacidade de terceiros;</strong></li>
        <li><strong className="text-foreground">Legitimidade no tratamento:</strong> declarar que possui os direitos necessários, legitimidade e finalidade legítima para tratar os dados obtidos, incluindo o consentimento exigido por lei, quando aplicável;</li>
        <li><strong className="text-foreground">Proibição de compartilhamento:</strong> não compartilhar com terceiros as informações obtidas, salvo autorização expressa;</li>
        <li><strong className="text-foreground">Finalidade legítima:</strong> declarar, sob as penas da lei, que possui base legal ou legítimo interesse para a consulta, especialmente para fins de análise cadastral, prevenção a fraudes e avaliação de risco em relações contratuais ou pré-contratuais — isentando a Plataforma de responsabilidade decorrente da má utilização dos dados;</li>
        <li><strong className="text-foreground">Ausência de dados sensíveis:</strong> reconhecer que os relatórios são compostos por dados cadastrais e de relacionamento com o mercado e <strong className="text-foreground">não abrangem dados sensíveis</strong> definidos pela LGPD.</li>
      </ul>

      <h3 className="text-base font-bold text-foreground mt-5 mb-2">4.3. Confidencialidade das informações</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        <strong className="text-foreground">As informações apresentadas nos relatórios são confidenciais</strong> e devem ser utilizadas exclusivamente para a finalidade declarada pelo usuário. O usuário responde <strong className="text-foreground">civil e criminalmente</strong> por danos que possa causar a terceiros decorrentes do uso em desacordo com a legislação vigente. As informações dos relatórios <strong className="text-foreground">não substituem dados prestados por órgãos oficiais</strong> e é <strong className="text-foreground">vedado seu uso público ou como prova em processos judiciais</strong>.
      </p>

      <h3 className="text-base font-bold text-foreground mt-5 mb-2">4.4. Direito de exclusão de dados (LGPD)</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Em conformidade com a LGPD, é garantido ao titular o direito de solicitar a <strong className="text-foreground">exclusão dos seus dados pessoais</strong> da nossa base. Para exercer esse direito, basta acessar a <a href="/remocao-de-dados" className="text-primary hover:underline">página de Remoção de Dados</a> e preencher o formulário com as informações solicitadas. Após a validação da titularidade, a exclusão é processada dentro do prazo legal e a confirmação é enviada por e-mail. A solicitação resulta na <strong className="text-foreground">remoção permanente das informações do titular da nossa base</strong>.
      </p>

      <h3 className="text-base font-bold text-foreground mt-5 mb-2">4.5. Consequências do uso indevido</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Qualquer uso inadequado pode acarretar <strong className="text-foreground">sanções legais, incluindo multas e ações judiciais</strong>. A Plataforma reserva-se o direito de adotar as medidas cabíveis em caso de uso indevido, incluindo a <strong className="text-foreground">suspensão ou o encerramento definitivo do acesso</strong> aos Serviços e, se necessário, a comunicação às autoridades competentes.
      </p>

      {/* 5 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">5. Serviços e funcionamento</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Os serviços da Confere Aqui funcionam por meio de pagamentos via <strong className="text-foreground">Pix</strong>, única modalidade aceita atualmente. As consultas são oferecidas de forma <strong className="text-foreground">avulsa</strong>, sem planos de assinatura ou recorrência. Cada consulta é adquirida individualmente, com confirmação automática e liberação do conteúdo, em segundos, na tela e por e-mail.
      </p>

      <h3 className="text-base font-bold text-foreground mt-5 mb-2">5.1. Produto principal</h3>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li>
          <strong className="text-foreground">Relatório Consolidado — R$ 18,90:</strong> produto principal da Plataforma. Conforme a disponibilidade nas fontes consultadas, pode apresentar dados cadastrais ligados ao CPF informado (nome, filiação, data de nascimento, situação cadastral, e-mails, entre outros), sempre limitados a informações disponíveis em fontes públicas e de acesso permitido.
        </li>
      </ul>

      <h3 className="text-base font-bold text-foreground mt-5 mb-2">5.2. Módulos complementares opcionais</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        Após a aquisição do Relatório Consolidado, o usuário pode contratar módulos adicionais de forma independente, sempre <strong className="text-foreground">mediante confirmação expressa</strong>. Os módulos disponíveis são:
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li><strong className="text-foreground">Telefones — R$ 11,90:</strong> telefones identificados em registros públicos;</li>
        <li><strong className="text-foreground">Participações Societárias — R$ 11,90:</strong> empresas em que o titular figura como sócio ou administrador;</li>
        <li><strong className="text-foreground">Vínculos — R$ 14,90:</strong> vínculos identificados em registros públicos.</li>
      </ul>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        <strong className="text-foreground">Nenhum módulo é incluído de forma automática.</strong> Toda contratação complementar requer ação consciente do usuário, e os valores são apresentados de forma clara dentro da Plataforma antes da confirmação. A estrutura garante que o usuário tenha acesso primeiro às informações principais antes de adquirir módulos específicos.
      </p>

      <h3 className="text-base font-bold text-foreground mt-5 mb-2">5.3. Pagamento e disponibilidade</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Os valores são informados de forma clara e objetiva antes da confirmação do pagamento. Algumas informações estarão disponíveis para desbloqueio apenas após a aquisição do Relatório Consolidado.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Ao efetuar o pagamento, o usuário declara concordar com estes Termos de Uso e também com os termos da <a href="https://www.pagar.me/documentos/termos-de-uso.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Pagar.me</a>, empresa responsável pelo processamento dos pagamentos via Pix.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        <strong className="text-foreground">Limitações de dados:</strong> a Confere Aqui não gera dados. Os resultados são extraídos de bases públicas, registros abertos e fontes legalmente acessíveis. A exatidão e a completude dos dados estão sujeitas à disponibilidade e à atualização dessas fontes. <strong className="text-foreground">Não garantimos que todos os campos estarão sempre preenchidos</strong>, pois trabalhamos com dados reais e existentes — não presumidos, inventados ou fabricados.
      </p>

      {/* 6 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">6. Política de reembolso</h2>

      <h3 className="text-base font-bold text-foreground mt-5 mb-2">6.1. Direito de arrependimento</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        De acordo com o <strong className="text-foreground">Código de Defesa do Consumidor (Lei nº 8.078/1990)</strong>, em especial o <strong className="text-foreground">art. 49</strong>, o usuário tem o direito de desistir da compra em até <strong className="text-foreground">7 (sete) dias corridos</strong>, contados a partir da data da aquisição, <strong className="text-foreground">sem necessidade de justificativa</strong>, com devolução integral do valor pago.
      </p>

      <h3 className="text-base font-bold text-foreground mt-5 mb-2">6.2. Reembolso por ausência de dados ou falha técnica</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        Além do direito de arrependimento, a Confere Aqui assegura o <strong className="text-foreground">reembolso integral</strong> quando:
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li>O serviço contratado <strong className="text-foreground">não retornar nenhum dado mínimo verificável</strong>, configurando ausência total de conteúdo confirmável no relatório;</li>
        <li>Houver <strong className="text-foreground">falha técnica comprovada</strong> que tenha impedido a entrega do relatório, mediante comprovação do pagamento, e-mail utilizado e dado consultado.</li>
      </ul>

      <h3 className="text-base font-bold text-foreground mt-5 mb-2">6.3. Situações não elegíveis</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        Fora das hipóteses dos itens 6.1 e 6.2, <strong className="text-foreground">o reembolso não se aplica quando</strong>:
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li>A solicitação for feita após o prazo de 7 dias do direito de arrependimento;</li>
        <li>Houver erro do usuário na inserção de dados — é responsabilidade do usuário conferir as informações antes da confirmação;</li>
        <li>A consulta tiver sido realizada com sucesso, ainda que o resultado não atenda às expectativas, pois o serviço foi prestado conforme contratado;</li>
        <li>Tratar-se de bônus promocionais, descontos ou benefícios extras, que não são reembolsáveis em separado;</li>
        <li>Houver uso indevido ou abusivo do serviço.</li>
      </ul>

      <h3 className="text-base font-bold text-foreground mt-5 mb-2">6.4. Como solicitar e prazos de processamento</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        Solicitações de reembolso devem ser enviadas para <a href="mailto:suporte@confereaqui.com" className="text-primary hover:underline">suporte@confereaqui.com</a>, contendo:
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li>E-mail utilizado na compra;</li>
        <li>Data aproximada da consulta;</li>
        <li>Identificação da transação ou comprovante de pagamento, se disponível;</li>
        <li>Motivo da solicitação.</li>
      </ul>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        A análise é feita em até <strong className="text-foreground">2 (dois) dias úteis</strong>. Aprovado o reembolso, o processamento financeiro pode levar até <strong className="text-foreground">3 (três) dias úteis</strong> adicionais para ser efetivado. A política completa está disponível em <a href="/politica-de-reembolso" className="text-primary hover:underline">confereaqui.com/reembolso</a>.
      </p>

      {/* 7 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">7. Licença de uso limitada</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        A Confere Aqui concede ao usuário uma licença <strong className="text-foreground">restrita, pessoal, intransferível, não exclusiva e revogável</strong> para acessar e utilizar os Serviços exclusivamente para os fins previstos nestes Termos.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        É <strong className="text-foreground">estritamente proibido</strong> sublicenciar, vender, revender, reproduzir, explorar comercialmente, redistribuir ou transferir qualquer parte dos dados obtidos por meio da Plataforma. Qualquer uso com finalidade comercial, sublicenciamento, venda ou distribuição dos Serviços depende de <strong className="text-foreground">autorização prévia e expressa, por escrito</strong>, da Confere Aqui.
      </p>

      {/* 8 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">8. Regras de uso</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        A Plataforma reserva-se o direito de <strong className="text-foreground">monitorar e registrar</strong> a utilização dos Serviços para garantir que estejam sendo usados em conformidade com estes Termos.
      </p>

      <h3 className="text-base font-bold text-foreground mt-5 mb-2">8.1. Uso autorizado</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">Os Serviços são disponibilizados para os seguintes propósitos legítimos:</p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li>Verificação cadastral, prevenção a fraudes e avaliação de risco em relações legítimas com clientes, fornecedores, parceiros ou colaboradores;</li>
        <li>Análise cadastral e proteção ao crédito em relações entre particulares;</li>
        <li>Uso pessoal e não comercial, desde que lícito e em conformidade com a LGPD;</li>
        <li>Consultas para finalidades jornalísticas ou artísticas, quando cabível;</li>
        <li>Fins acadêmicos e educativos.</li>
      </ul>

      <h3 className="text-base font-bold text-foreground mt-5 mb-2">8.2. Uso proibido</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">O usuário concorda em <strong className="text-foreground">não utilizar os Serviços</strong> para:</p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li>Violar qualquer legislação ou regulamento aplicável;</li>
        <li>Praticar atos fraudulentos, ilícitos ou contrários à moral e aos bons costumes;</li>
        <li>Estelionato, chantagem, coação ou difamação;</li>
        <li>Qualquer forma de discriminação;</li>
        <li>Violar a intimidade ou a vida privada de terceiros;</li>
        <li>Perseguir, praticar stalking ou assediar pessoas ou organizações;</li>
        <li>Intimidar ou ameaçar indivíduos ou organizações;</li>
        <li>Reproduzir, comercializar ou redistribuir os relatórios obtidos;</li>
        <li>Tentar contornar mecanismos técnicos de proteção;</li>
        <li>Comprometer a integridade dos Serviços ou realizar acessos não autorizados a sistemas.</li>
      </ul>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        O descumprimento destas regras poderá resultar na <strong className="text-foreground">suspensão ou no cancelamento definitivo</strong> do acesso aos Serviços, <strong className="text-foreground">sem direito a reembolso</strong>. O usuário assume inteira responsabilidade civil e criminal por qualquer uso indevido das informações obtidas.
      </p>

      {/* 9 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">9. Propriedade intelectual</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        Todo o conteúdo da Confere Aqui, incluindo:
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li>Identidade visual, logo e marca;</li>
        <li>Layout e interface;</li>
        <li>Textos e elementos editoriais;</li>
        <li>Código-fonte, programação e algoritmos;</li>
        <li>Estrutura tecnológica e mecanismos de organização de dados,</li>
      </ul>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        é protegido pela legislação de propriedade intelectual e pertence à Confere Aqui ou aos seus respectivos licenciadores. <strong className="text-foreground">É vedado qualquer uso não autorizado</strong>, reprodução, cópia, adaptação, distribuição ou modificação sem consentimento prévio e por escrito.
      </p>

      {/* 10 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">10. Privacidade e proteção de dados</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        A Confere Aqui preza pela privacidade dos seus usuários e adota medidas rigorosas para proteger os dados contra acessos não autorizados. Atuamos em conformidade com a LGPD, comprometidos a tratar os dados dos usuários com <strong className="text-foreground">segurança, confidencialidade e respeito</strong>.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">O usuário reconhece que:</p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li>
          <strong className="text-foreground">O conteúdo detalhado dos relatórios não é armazenado pela Plataforma</strong> após a entrega ao usuário, sendo de sua responsabilidade salvar os dados desejados. Permanecem registrados apenas dados mínimos necessários para fins de segurança, prevenção a fraudes e cumprimento de obrigações legais (como CPF consultado, data e hora, IP e informações de pagamento);
        </li>
        <li>Os dados pessoais fornecidos para o pagamento são tratados de forma segura e utilizados apenas para viabilizar a entrega dos serviços contratados;</li>
        <li>As informações consultadas são de origem pública ou de acesso permitido, e a Confere Aqui <strong className="text-foreground">não infringe a LGPD</strong> ao organizá-las e apresentá-las de forma automatizada.</li>
      </ul>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Para informações detalhadas sobre coleta, armazenamento e segurança dos dados pessoais, recomendamos a leitura da nossa <a href="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</a>.
      </p>

      {/* 11 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">11. Isenção de responsabilidade</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        A Confere Aqui <strong className="text-foreground">não garante a disponibilidade constante e ininterrupta</strong> dos Serviços, que podem sofrer instabilidades técnicas, interrupções de rede ou manutenções emergenciais.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Não nos responsabilizamos por <strong className="text-foreground">decisões tomadas pelos usuários com base nas informações obtidas</strong>. O conteúdo dos relatórios é meramente informativo, extraído de fontes públicas, e deve ser analisado com critério pelo usuário.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        As informações disponibilizadas nos relatórios são extraídas de bases de dados públicas ou de acesso permitido, <strong className="text-foreground">amplamente utilizadas por instituições financeiras, bureaus de crédito e empresas de análise de risco</strong>. O conteúdo é apresentado de forma automatizada, em formato de dados brutos, sem qualquer alteração pela Confere Aqui.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Embora envidemos esforços para consultar fontes confiáveis e atualizadas, podem ocorrer <strong className="text-foreground">divergências, omissões ou desatualizações</strong> em relação à situação real do titular, decorrentes de erros, atrasos ou inconsistências nas próprias bases de origem. Nessas hipóteses, é provável que a mesma divergência esteja presente também em outras bases do mercado, não sendo de responsabilidade da Confere Aqui a geração ou a correção desses dados.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Os relatórios devem ser utilizados apenas como <strong className="text-foreground">instrumento de apoio à decisão</strong>, não substituindo análise humana, verificação documental ou outras formas de checagem. Qualquer decisão tomada exclusivamente com base nas informações obtidas por meio da Plataforma é de inteira responsabilidade do usuário.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        A Confere Aqui é uma <strong className="text-foreground">empresa privada e independente</strong>. <strong className="text-foreground">Não é órgão de proteção ao crédito</strong> (como SPC ou Serasa), nem órgão público ou autoridade regulatória. Atuamos apenas como ferramenta de apoio à consulta e organização de informações.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        A Confere Aqui <strong className="text-foreground">não realiza investigação criminal</strong>, não é serviço de segurança pública, nem atua como autoridade judicial ou policial. O uso inadequado pode acarretar <strong className="text-foreground">responsabilização civil e penal</strong> do usuário.
      </p>

      {/* 12 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">12. Suporte e comunicação</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        O atendimento ao usuário é feito exclusivamente pelos canais oficiais:
      </p>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li>Suporte geral: <a href="mailto:suporte@confereaqui.com" className="text-primary hover:underline">suporte@confereaqui.com</a></li>
        <li>Horário de atendimento: todos os dias, das 08h às 21h (horário de Brasília)</li>
      </ul>

      {/* 13 */}
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">13. Disposições finais</h2>
      <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
        <li>Este Termo constitui o <strong className="text-foreground">acordo integral</strong> entre a Confere Aqui e o usuário;</li>
        <li>Caso qualquer disposição seja considerada inválida ou inexequível, as demais permanecerão em pleno vigor;</li>
        <li>A tolerância a qualquer infração não implicará renúncia ou novação;</li>
        <li>Este Termo será regido e interpretado segundo as leis da <strong className="text-foreground">República Federativa do Brasil</strong>;</li>
        <li>Para dirimir quaisquer controvérsias, será competente o <strong className="text-foreground">foro do domicílio do consumidor</strong>, conforme garantido pelo Código de Defesa do Consumidor.</li>
      </ul>
    </LegalPageLayout>
  );
};

export default Termos;
