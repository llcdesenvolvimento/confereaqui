import { useEffect } from "react";
import LegalPageLayout from "@/components/LegalPageLayout";
import usePageMeta from "@/hooks/usePageMeta";

const Termos = () => {
  usePageMeta({
    title: "Confere Aqui - Termos de Uso",
    description: "Termos e condições de uso da Confere Aqui. Regras de utilização, responsabilidades do usuário e diretrizes de conformidade com a LGPD e a legislação vigente.",
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
      updatedAt="04 de janeiro de 2026"
      slug="termos-de-uso"
    >
      <h2 className="text-lg font-bold text-foreground mt-8 mb-3">1. Introdução</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Bem-vindo à Confere Aqui, uma plataforma focada na preservação de dados pessoais e na garantia da segurança dos usuários, em conformidade com a <strong className="text-foreground">Lei Geral de Proteção de Dados Pessoais (LGPD) — Lei nº 13.709/2018</strong>. Nossa plataforma é especializada na organização de informações públicas disponíveis na internet, voltada exclusivamente à realização de consultas com base em dados acessíveis legalmente.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui oferece relatórios sobre pessoas físicas, com base no número de CPF, voltados à análise cadastral, verificação de identidade, prevenção a fraudes e apoio à tomada de decisão em relações legítimas com o mercado.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Estes Termos de Uso ("Termos") definem as regras para o acesso e a utilização dos serviços disponibilizados pela Confere Aqui ("Plataforma", "nós" ou "nosso") por meio do nosso site ("Serviços"). Ao acessar ou utilizar os Serviços, você concorda integralmente com estes Termos. É essencial que você leia este documento com atenção antes de utilizar qualquer recurso.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Caso não concorde com algum ponto, solicitamos que não utilize os Serviços. Este Termo é um contrato legal vinculativo entre você (usuário) e a Confere Aqui, sendo aplicável a qualquer forma de acesso, navegação, uso ou interação com os Serviços.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui pode alterar estes Termos a qualquer momento. Quaisquer modificações serão informadas por meio de nossos canais oficiais, sendo responsabilidade do usuário acompanhar as atualizações. O uso continuado dos Serviços após as alterações será considerado como aceitação da versão vigente.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A versão atualizada estará sempre acessível em: <a href="/termos-de-uso" className="text-primary hover:underline">confereaqui.com/termos-de-uso</a>. As práticas de tratamento de dados pessoais estão descritas na <a href="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</a>.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">2. Critérios de capacidade legal</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          O acesso e a utilização dos Serviços estão restritos a pessoas com idade mínima de 18 anos e que possuam plena capacidade legal para contratar. Ao utilizar os Serviços, o usuário confirma que atende a esses critérios e garante que sua utilização está em conformidade com a legislação aplicável.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          É vedada a utilização da Plataforma por terceiros em nome de outros indivíduos, salvo mediante autorização legal expressa. Caso o usuário esteja representando uma empresa ou organização, declara deter poderes suficientes para agir em seu nome e comprometer a entidade aos presentes Termos.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          O usuário declara estar em pleno gozo de sua capacidade civil e assume total responsabilidade por todas as ações realizadas durante o uso dos Serviços.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">3. Objeto dos Serviços</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui disponibiliza ao usuário o acesso a informações de natureza pública e de acesso permitido sobre pessoas físicas (CPF), organizadas de maneira automatizada e concentradas em uma interface acessível e prática. Os dados consultados são provenientes de bases públicas, fontes legais disponíveis e registros acessíveis nos termos da legislação brasileira.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          As informações são disponibilizadas em formato de dados brutos, tal como retornadas pelas bases consultadas, sem qualquer alteração de conteúdo ou atribuição de juízo de valor pela Confere Aqui. Nosso papel é apenas reunir, organizar tecnicamente e apresentar esses dados de forma estruturada ao usuário.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          Os relatórios <strong className="text-foreground">não incluem dados sensíveis</strong> nos termos da LGPD, tais como:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Informações sobre saúde;</li>
          <li>Origem racial ou étnica;</li>
          <li>Convicções religiosas, filosóficas ou políticas;</li>
          <li>Filiação a sindicato ou organização de caráter religioso, filosófico ou político;</li>
          <li>Orientação sexual;</li>
          <li>Dados genéticos ou biométricos.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          O foco do serviço é limitado a dados cadastrais e informações de relacionamento com o mercado.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui empenha-se em fornecer os dados disponíveis nas bases públicas que utiliza, mas não garante a precisão, a integralidade ou a disponibilidade de todas as informações em cada consulta realizada. Algumas informações podem não estar disponíveis — como endereço, nome dos pais, telefones, entre outras —, pois tais dados podem não estar vinculados ao CPF pesquisado nas fontes consultadas.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          O sistema apenas reúne, organiza, indexa e apresenta essas informações de forma estruturada, facilitando a leitura e a análise por parte do usuário. A Confere Aqui <strong className="text-foreground">não gera, cria, falsifica, manipula ou insere artificialmente dados</strong>.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Não nos responsabilizamos por consultas realizadas com dados incorretos inseridos pelo usuário. Nesses casos, a consulta será considerada válida e, para realizar uma nova consulta com os dados corretos, será necessário efetuar um novo pagamento.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">4. Conformidade com a LGPD e responsabilidades do usuário</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui opera em conformidade com a Lei Geral de Proteção de Dados (LGPD), garantindo o respeito à privacidade e aos direitos dos titulares em relação aos seus dados pessoais. Ao utilizar nossos Serviços, o usuário declara que:
        </p>

        <h3 id="finalidades-permitidas" className="text-base font-bold text-foreground mt-5 mb-2 scroll-mt-24">4.1. Finalidade legítima de uso</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          Em conformidade com a LGPD, ao realizar uma consulta na Confere Aqui, o usuário declara, sob as penas da lei, que possui base legal ou legítimo interesse para o tratamento dos dados pessoais obtidos. As finalidades permitidas incluem, entre outras:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li><strong className="text-foreground">Legítimo interesse</strong> — consulta de dados pessoais para atender a interesses legítimos do controlador ou de terceiros, respeitando direitos e liberdades fundamentais do titular;</li>
          <li><strong className="text-foreground">Confirmação de identidade</strong> — verificação de dados pessoais para prevenção de fraudes e garantia da autenticidade da identidade apresentada;</li>
          <li><strong className="text-foreground">Análise cadastral e proteção ao crédito</strong> — apoio à avaliação de risco em relações comerciais e contratuais;</li>
          <li><strong className="text-foreground">Execução de contrato</strong> — consulta de informações para procedimentos preliminares ou execução de contrato dos quais o titular seja parte ou possa vir a ser.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          O uso das informações para finalidades diferentes das declaradas constitui violação à LGPD e pode acarretar responsabilização civil e criminal do usuário.
        </p>

        <h3 className="text-base font-bold text-foreground mt-5 mb-2">4.2. Obrigações do usuário</h3>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li><strong className="text-foreground">Capacidade civil:</strong> possuir plena capacidade legal para contratar e utilizar os Serviços;</li>
          <li><strong className="text-foreground">Uso legal das informações:</strong> garantir que as informações obtidas sejam utilizadas de forma lícita, ética e legal, respeitando as normas aplicáveis no Brasil. É estritamente proibido empregar os dados para práticas ilegais, discriminatórias ou que possam comprometer a privacidade de terceiros;</li>
          <li><strong className="text-foreground">Legitimidade no tratamento de dados:</strong> declarar que possui os direitos necessários, legitimidade e finalidade legítima para processar os dados pessoais obtidos por meio das consultas, incluindo o consentimento necessário quando exigido por lei;</li>
          <li><strong className="text-foreground">Proibição de compartilhamento:</strong> não compartilhar com terceiros as informações obtidas, salvo mediante autorização expressa do titular;</li>
          <li><strong className="text-foreground">Confidencialidade:</strong> reconhecer que as informações apresentadas são confidenciais e serão utilizadas exclusivamente para a finalidade declarada, respondendo civil e criminalmente por eventuais danos a terceiros decorrentes do uso indevido.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          As informações contidas nos relatórios visam exclusivamente colaborar com atividades amparadas pela LGPD e não substituem informações obtidas diretamente nas fontes originais, sendo vedado seu uso público ou em processos judiciais.
        </p>

        <h3 className="text-base font-bold text-foreground mt-5 mb-2">4.3. Direito de exclusão de dados (LGPD)</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Em conformidade com a LGPD, garantimos a qualquer titular de dados pessoais o direito de solicitar a exclusão de suas informações da nossa base. Para exercer este direito, o usuário pode acessar a <a href="/remocao-de-dados" className="text-primary hover:underline">página de Remoção de Dados</a>, preencher o formulário com as informações solicitadas e, após a validação da titularidade, processaremos a exclusão dentro do prazo legal e enviaremos confirmação por e-mail. A solicitação resulta na remoção permanente das informações do titular da nossa base de dados.
        </p>

        <h3 className="text-base font-bold text-foreground mt-5 mb-2">4.4. Consequências do uso indevido</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Qualquer uso inadequado pode acarretar sanções legais, incluindo multas e ações judiciais. A Plataforma reserva-se o direito de adotar as medidas cabíveis em caso de uso indevido das informações, incluindo a suspensão ou o encerramento do acesso aos Serviços e, se necessário, a comunicação às autoridades competentes.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">5. Serviços e funcionamento</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Os serviços da Confere Aqui funcionam por meio de pagamentos via <strong className="text-foreground">Pix</strong>, única modalidade aceita atualmente. As consultas são oferecidas de forma avulsa, sem planos de assinatura ou recorrência. Cada consulta é adquirida individualmente, com confirmação automática e liberação do conteúdo, em segundos, na tela e por e-mail.
        </p>

        <h3 className="text-base font-bold text-foreground mt-5 mb-2">5.1. Relatório principal</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          O <strong className="text-foreground">Relatório Completo</strong> é o produto principal da Plataforma, com valor de <strong className="text-foreground">R$ 18,90</strong>. Conforme a disponibilidade nas fontes consultadas, o relatório poderá apresentar dados cadastrais ligados ao CPF informado, sempre limitados a informações disponíveis em fontes públicas e de acesso permitido nos termos da legislação brasileira.
        </p>

        <h3 className="text-base font-bold text-foreground mt-5 mb-2">5.2. Conteúdos complementares opcionais</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Após a aquisição do Relatório Completo, o usuário poderá contratar módulos adicionais de forma independente, sempre mediante confirmação expressa. Os valores e o conteúdo dos módulos complementares são apresentados de forma clara dentro da Plataforma, antes da confirmação da contratação.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Nenhum item adicional é incluído de forma automática. Toda contratação complementar requer ação consciente do usuário. A estrutura garante que o usuário tenha acesso primeiro às informações principais antes de adquirir conteúdos adicionais específicos.
        </p>

        <h3 className="text-base font-bold text-foreground mt-5 mb-2">5.3. Pagamento e disponibilidade dos dados</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Os valores das consultas são informados de forma clara e objetiva antes da confirmação do pagamento. Algumas informações estarão disponíveis para desbloqueio apenas após a aquisição do Relatório principal.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Ao efetuar o pagamento, o usuário declara estar de acordo com os presentes Termos de Uso, bem como com os termos da <a href="https://pagar.me" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Pagar.me</a>, empresa responsável pelo processamento dos pagamentos via Pix.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">Limitações de dados:</strong> a Confere Aqui não gera dados. Os resultados apresentados são extraídos de bases públicas, registros abertos e fontes legalmente acessíveis. A exatidão e a completude dos dados estão sujeitas à disponibilidade e à atualização dessas bases públicas. Não garantimos que todos os campos estarão sempre preenchidos, pois trabalhamos com dados reais e existentes — não presumidos, inventados ou fabricados.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">6. Política de reembolso</h2>

        <h3 className="text-base font-bold text-foreground mt-5 mb-2">6.1. Direito de arrependimento</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          De acordo com o <strong className="text-foreground">Código de Defesa do Consumidor (Lei nº 8.078/1990)</strong>, em especial o <strong className="text-foreground">Art. 49</strong>, o usuário tem o direito de desistir da compra em até <strong className="text-foreground">7 (sete) dias corridos</strong>, contados a partir da data da aquisição, sem necessidade de apresentar justificativa, com devolução integral do valor pago.
        </p>

        <h3 className="text-base font-bold text-foreground mt-5 mb-2">6.2. Reembolso por ausência de dados ou falha técnica</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Além do direito de arrependimento, a Confere Aqui assegura o reembolso integral quando:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>O serviço contratado não retornar nenhum dado mínimo verificável, configurando ausência total de conteúdo confirmável no relatório;</li>
          <li>Houver falha técnica comprovada que tenha impedido a entrega do relatório, mediante comprovação do pagamento, e-mail utilizado e dado consultado.</li>
        </ul>

        <h3 className="text-base font-bold text-foreground mt-5 mb-2">6.3. Situações não elegíveis</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          Fora das hipóteses de arrependimento (item 6.1) e ausência de dados ou falha técnica (item 6.2), o reembolso não se aplica quando:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>A solicitação for feita após o prazo de 7 dias do direito de arrependimento;</li>
          <li>Houver erro do usuário na inserção de dados — é responsabilidade do usuário conferir as informações antes da confirmação;</li>
          <li>Houver uso indevido ou abusivo do serviço;</li>
          <li>Tratar-se de bônus promocionais, descontos ou benefícios extras, que não são reembolsáveis em separado.</li>
        </ul>

        <h3 className="text-base font-bold text-foreground mt-5 mb-2">6.4. Como solicitar e prazos de processamento</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          Solicitações de reembolso devem ser enviadas para o e-mail <a href="mailto:suporte@confereaqui.com" className="text-primary hover:underline">suporte@confereaqui.com</a>, contendo:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>E-mail utilizado na compra;</li>
          <li>Data aproximada da consulta;</li>
          <li>Identificação da transação ou comprovante de pagamento, se disponível;</li>
          <li>Motivo da solicitação.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A análise da solicitação é feita em até <strong className="text-foreground">2 (dois) dias úteis</strong>. Uma vez aprovado, o reembolso é processado conforme os procedimentos financeiros aplicáveis e pode levar até <strong className="text-foreground">3 (três) dias úteis</strong> para ser efetivado.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A política completa, com prazos e detalhes adicionais, está disponível em: <a href="/politica-de-reembolso" className="text-primary hover:underline">confereaqui.com/reembolso</a>.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">7. Licença de uso limitada</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui concede ao usuário uma licença <strong className="text-foreground">restrita, pessoal, intransferível, não exclusiva e revogável</strong> para acessar e utilizar os Serviços exclusivamente para os fins definidos nestes Termos.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          É proibido sublicenciar, vender, revender, reproduzir, explorar comercialmente, redistribuir ou transferir qualquer parte dos dados obtidos por meio da Plataforma. Qualquer uso com finalidade comercial, sublicenciamento, venda, distribuição ou transferência dos Serviços é estritamente proibido sem prévia autorização expressa, por escrito, da Confere Aqui.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">8. Regras de uso</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Plataforma reserva-se o direito de monitorar e registrar a utilização dos Serviços para garantir que estejam sendo usados em conformidade com estes Termos.
        </p>

        <h3 className="text-base font-bold text-foreground mt-5 mb-2">8.1. Uso autorizado</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">Os Serviços são disponibilizados exclusivamente para as finalidades previstas no item 4.1 desta política, em especial:</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li><strong className="text-foreground">Legítimo interesse</strong> — consulta de dados pessoais para atender a interesses legítimos do controlador ou de terceiros, respeitando os direitos e liberdades fundamentais do titular;</li>
          <li><strong className="text-foreground">Confirmação de identidade</strong> — verificação de dados pessoais para prevenção de fraudes e garantia da autenticidade da identidade apresentada;</li>
          <li><strong className="text-foreground">Análise cadastral e proteção ao crédito</strong> — apoio à avaliação de risco em relações comerciais e contratuais;</li>
          <li><strong className="text-foreground">Execução de contrato</strong> — consulta de informações para procedimentos preliminares ou execução de contrato dos quais o titular seja parte ou possa vir a ser.</li>
        </ul>

        <h3 className="text-base font-bold text-foreground mt-5 mb-2">8.2. Uso proibido</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">O usuário concorda em não utilizar os Serviços para:</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Violar qualquer legislação ou regulamento aplicável;</li>
          <li>Praticar ações fraudulentas, ilegais ou contrárias à moral e aos bons costumes;</li>
          <li>Estelionato, chantagem, coação ou difamação;</li>
          <li>Discriminação de qualquer natureza;</li>
          <li>Violar a intimidade ou a vida privada de terceiros;</li>
          <li>Perseguir, praticar stalking ou assediar indivíduos ou organizações;</li>
          <li>Reproduzir, comercializar ou redistribuir os relatórios obtidos;</li>
          <li>Tentar contornar mecanismos técnicos de proteção;</li>
          <li>Comprometer a integridade dos Serviços ou realizar acessos não autorizados a sistemas.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          O descumprimento destas regras poderá resultar na suspensão ou no cancelamento definitivo do acesso aos Serviços, sem direito a reembolso. O usuário assume inteira responsabilidade civil e criminal por qualquer uso indevido das informações obtidas.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">9. Propriedade intelectual</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          Todo o conteúdo da Confere Aqui, incluindo:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Identidade visual, logo e marca;</li>
          <li>Layout e interface;</li>
          <li>Textos e elementos editoriais;</li>
          <li>Código-fonte, programação e algoritmos;</li>
          <li>Banco de dados e estrutura tecnológica,</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          é protegido pela legislação de propriedade intelectual e pertence à Confere Aqui ou aos seus respectivos licenciadores. É vedado qualquer uso não autorizado, reprodução, cópia, adaptação, distribuição ou modificação sem consentimento prévio e por escrito.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">10. Privacidade e proteção de dados</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui preza pela privacidade dos seus usuários e adota medidas rigorosas para proteger os dados e evitar acessos não autorizados. Atuamos em conformidade com a LGPD, comprometendo-nos a tratar os dados dos usuários com segurança, confidencialidade e respeito.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">O usuário reconhece que:</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Os dados pessoais fornecidos para o pagamento serão tratados de forma segura e apenas para viabilizar a entrega dos serviços contratados;</li>
          <li>As informações consultadas são de origem pública ou de acesso permitido, e a Confere Aqui não infringe a LGPD ao organizá-las e apresentá-las de forma automatizada.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Para informações detalhadas sobre como tratamos a coleta, o armazenamento e a segurança dos dados pessoais, recomendamos a leitura da nossa <a href="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</a>.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">11. Isenção de responsabilidade</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui não garante a disponibilidade constante e ininterrupta dos Serviços, que poderão sofrer instabilidades técnicas, interrupções de rede ou manutenções emergenciais.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui não se responsabiliza por decisões tomadas pelos usuários com base nas informações obtidas nas consultas. O conteúdo é meramente informativo, com base em fontes públicas, e deve ser analisado com critério pelo usuário.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          As informações disponibilizadas nos relatórios são extraídas de bases de dados públicas ou de acesso permitido, amplamente disponíveis em fontes públicas. O conteúdo é apresentado de forma automatizada, em formato de dados brutos, sem qualquer alteração pela Confere Aqui.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Embora envidemos esforços para consultar fontes confiáveis e atualizadas, podem ocorrer, em casos pontuais, divergências, omissões ou desatualizações em relação à situação real do titular, decorrentes de erros, atrasos de atualização ou inconsistências nas próprias bases de origem. Nessas hipóteses, é possível que a mesma divergência esteja presente também em outras bases do mercado, não sendo de responsabilidade da Confere Aqui a geração ou a correção desses dados.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Os relatórios devem ser utilizados apenas como instrumento de apoio à decisão, não substituindo análise humana, verificação documental ou outras formas de checagem. Qualquer decisão tomada exclusivamente com base nas informações obtidas por meio da Plataforma é de inteira responsabilidade do usuário.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui <strong className="text-foreground">é uma empresa privada e independente</strong>, não exercendo função pública nem regulatória, atuando apenas como ferramenta de apoio à consulta e à organização de informações.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui não realiza investigação criminal, não é serviço de segurança pública, nem age como autoridade judicial ou policial. O uso inadequado pode acarretar responsabilização civil e penal do usuário.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">12. Suporte e comunicação</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          O atendimento ao usuário é feito exclusivamente pelos canais oficiais:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Suporte geral: <a href="mailto:suporte@confereaqui.com" className="text-primary hover:underline">suporte@confereaqui.com</a></li>
          <li>Horário de atendimento: todos os dias, das 08h às 21h (horário de Brasília)</li>
        </ul>

        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">13. Disposições finais</h2>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>O presente Termo constitui o acordo integral entre a Confere Aqui e o usuário;</li>
          <li>Caso qualquer disposição seja considerada inválida ou inexequível, as demais permanecerão em pleno vigor;</li>
          <li>A tolerância a qualquer infração não implicará renúncia ou novação;</li>
          <li>Este Termo será regido e interpretado segundo as leis da República Federativa do Brasil;</li>
          <li>Para dirimir quaisquer controvérsias, será competente o foro do domicílio do consumidor, conforme garantido pelo Código de Defesa do Consumidor.</li>
        </ul>

    </LegalPageLayout>
  );
};

export default Termos;
