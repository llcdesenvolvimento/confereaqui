import LegalPageLayout from "@/components/LegalPageLayout";
import usePageMeta from "@/hooks/usePageMeta";

const Privacidade = () => {
  usePageMeta({
    title: "Confere Aqui - Política de Privacidade",
    description: "Política de Privacidade da Confere Aqui. Saiba como tratamos dados pessoais, quais são seus direitos como titular e as medidas de proteção adotadas em conformidade com a LGPD.",
    canonical: "https://confereaqui.com/politica-de-privacidade",
  });

  return (
    <LegalPageLayout
      eyebrow="Política de Privacidade"
      title="Política de Privacidade"
      updatedAt="04 de janeiro de 2026"
      slug="politica-de-privacidade"
    >
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui leva a privacidade a sério e trabalha com total transparência. Esta Política descreve de que forma os dados pessoais podem ser utilizados ao longo da sua experiência com o site e com os serviços de consulta e autoverificação, as finalidades que amparam esse uso, os terceiros com quem eventualmente compartilhamos informações para manter o serviço em funcionamento e os direitos que você possui como titular de dados.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Para entrar em contato conosco, esclarecer dúvidas ou exercer qualquer direito relacionado à privacidade, escreva para: <a href="mailto:suporte@confereaqui.com" className="text-primary hover:underline">suporte@confereaqui.com</a>
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          O texto vigente desta Política está sempre acessível em: <a href="/politica-de-privacidade" className="text-primary hover:underline">confereaqui.com/politica-de-privacidade</a>
        </p>

        {/* 1 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">1. A quem esta Política se destina</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">O conteúdo desta Política abrange:</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Pessoas que navegam pelo site da Confere Aqui;</li>
          <li>Usuários que preenchem formulários na plataforma;</li>
          <li>Clientes que efetuam pagamentos e adquirem relatórios;</li>
          <li>Titulares de dados que queiram exercer direitos garantidos pela LGPD.</li>
        </ul>

        {/* 2 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">2. Termos essenciais (guia rápido)</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">Para tornar a leitura mais simples:</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li><strong className="text-foreground">Dados pessoais:</strong> qualquer informação capaz de identificar ou tornar identificável uma pessoa física.</li>
          <li><strong className="text-foreground">Titular:</strong> a pessoa a quem determinado dado pessoal se refere.</li>
          <li><strong className="text-foreground">Tratamento:</strong> toda e qualquer operação envolvendo dados (coleta, consulta, organização, armazenamento, compartilhamento, eliminação).</li>
          <li><strong className="text-foreground">LGPD:</strong> Lei nº 13.709/2018.</li>
        </ul>

        {/* 3 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">3. Quais dados podem ser utilizados</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui trabalha exclusivamente com os dados indispensáveis para operar o serviço, processar compras, entregar relatórios, prevenir fraudes e garantir a segurança da plataforma.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Esses dados podem surgir em duas situações principais: informações fornecidas diretamente pelo usuário (como o CPF para consulta ou dados preenchidos no checkout) e informações obtidas de fontes integradas lícitas para a montagem do relatório, conforme a disponibilidade.
        </p>

        {/* Tabela 1 */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-3 font-semibold text-foreground border-b border-border">Categoria / conjunto</th>
                <th className="text-left p-3 font-semibold text-foreground border-b border-border">Quem é o titular</th>
                <th className="text-left p-3 font-semibold text-foreground border-b border-border">Exemplos de dados</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border">
                <td className="p-3">Consulta (entrada)</td>
                <td className="p-3">Usuário que realiza a busca</td>
                <td className="p-3">CPF digitado no formulário</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="p-3">Resultado parcial / prévia</td>
                <td className="p-3">Pessoa consultada</td>
                <td className="p-3">Dados resumidos (ex.: iniciais do nome, indicador de consistência)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3">Pagamento (checkout)</td>
                <td className="p-3">Comprador</td>
                <td className="p-3">Nome, CPF, e-mail e dados mínimos exigidos pelo gateway de pagamento</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="p-3">Relatório principal</td>
                <td className="p-3">Pessoa consultada</td>
                <td className="p-3">Dados cadastrais disponíveis (ex.: nome, data de nascimento, filiação, situação cadastral)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3">Módulos complementares</td>
                <td className="p-3">Pessoa consultada</td>
                <td className="p-3">Telefones, endereços, participações societárias, vínculos (quando contratados)</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="p-3">Comunicações de serviço</td>
                <td className="p-3">Comprador</td>
                <td className="p-3">E-mail para envio do relatório, confirmações e notificações técnicas</td>
              </tr>
              <tr>
                <td className="p-3">Segurança/antifraude</td>
                <td className="p-3">Usuário e/ou pessoa consultada</td>
                <td className="p-3">Dados técnicos e registros de acesso (ex.: IP, data/hora, identificadores de sessão)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">4. De onde vêm os dados</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">Os dados podem ter três origens:</p>

        <p className="text-sm text-muted-foreground leading-relaxed mb-2"><strong className="text-foreground">4.1. Informações que você nos fornece</strong> — Por exemplo, o CPF digitado para iniciar a consulta ou os dados de contato preenchidos no checkout.</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2"><strong className="text-foreground">4.2. Dados retornados por fontes integradas lícitas</strong> — Com base no CPF informado, a Plataforma pode organizar e exibir informações provenientes de fontes integradas, dentro dos limites legais e técnicos.</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4"><strong className="text-foreground">4.3. Informações técnicas e de segurança</strong> — Para assegurar a estabilidade e a segurança da Plataforma, podemos coletar dados técnicos de acesso (ex.: data/hora, logs, dispositivo/navegador, IP, registros de falha).</p>

        {/* Tabela 2 */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-3 font-semibold text-foreground border-b border-border">Conjunto</th>
                <th className="text-left p-3 font-semibold text-foreground border-b border-border">Origem</th>
                <th className="text-left p-3 font-semibold text-foreground border-b border-border">Finalidade</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border">
                <td className="p-3">Consulta (CPF)</td>
                <td className="p-3">Usuário</td>
                <td className="p-3">Dar início à busca e produzir o resultado</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="p-3">Checkout</td>
                <td className="p-3">Usuário</td>
                <td className="p-3">Viabilizar a compra e a entrega do relatório</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3">Relatório / módulos</td>
                <td className="p-3">Fontes integradas lícitas</td>
                <td className="p-3">Compor a entrega de acordo com o que foi contratado</td>
              </tr>
              <tr>
                <td className="p-3">Logs técnicos</td>
                <td className="p-3">Sistemas de segurança</td>
                <td className="p-3">Prevenção de fraudes, estabilidade e auditoria</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 5 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">5. Para que utilizamos os dados (finalidades)</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">Os dados pessoais são utilizados para:</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Possibilitar a consulta e a exibição dos resultados;</li>
          <li>Entregar o relatório e os complementos adquiridos;</li>
          <li>Processar pagamentos e validar transações;</li>
          <li>Enviar comunicações indispensáveis (ex.: confirmação de compra, link de acesso, recibos, avisos técnicos);</li>
          <li>Combater fraudes e abusos, protegendo titulares, usuários e a própria Plataforma;</li>
          <li>Manter registros para auditoria, suporte e exercício regular de direitos.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Plataforma <strong className="text-foreground">não pode ser utilizada</strong> para perseguição, assédio, discriminação, vigilância indevida ou qualquer outra finalidade contrária à lei.
        </p>

        {/* 6 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">6. Fundamentos legais (LGPD)</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">Quando a Confere Aqui atua como controladora, o tratamento pode estar amparado, conforme a situação, por:</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li><strong className="text-foreground">Execução de contrato</strong> (ex.: processar pagamento e disponibilizar o relatório);</li>
          <li><strong className="text-foreground">Cumprimento de obrigação legal ou regulatória</strong> (quando aplicável);</li>
          <li><strong className="text-foreground">Exercício regular de direitos</strong> (ex.: prevenção e resposta a fraudes, defesa em procedimentos judiciais);</li>
          <li><strong className="text-foreground">Legítimo interesse</strong> (ex.: segurança, combate a abusos, operações essenciais), sempre com salvaguardas e proporcionalidade.</li>
        </ul>

        {/* Tabela 3 */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-3 font-semibold text-foreground border-b border-border">Conjunto / atividade</th>
                <th className="text-left p-3 font-semibold text-foreground border-b border-border">Finalidade</th>
                <th className="text-left p-3 font-semibold text-foreground border-b border-border">Base legal (LGPD)</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border">
                <td className="p-3">Processar pagamento</td>
                <td className="p-3">Concluir a transação e cumprir obrigações administrativas</td>
                <td className="p-3">Execução de contrato; exercício regular de direitos</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="p-3">Entregar relatório</td>
                <td className="p-3">Prestar o serviço adquirido pelo usuário</td>
                <td className="p-3">Execução de contrato e/ou legítimo interesse</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3">Antifraude e segurança</td>
                <td className="p-3">Impedir abusos e proteger a Plataforma e os titulares</td>
                <td className="p-3">Legítimo interesse; exercício regular de direitos</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="p-3">Suporte e atendimento</td>
                <td className="p-3">Solucionar solicitações, incidentes e dúvidas</td>
                <td className="p-3">Legítimo interesse; execução de contrato</td>
              </tr>
              <tr>
                <td className="p-3">Logs e auditoria</td>
                <td className="p-3">Garantir rastreabilidade, segurança e conformidade</td>
                <td className="p-3">Legítimo interesse; obrigação legal (quando aplicável)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 7 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">7. Compartilhamento de dados e operadores</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          A Confere Aqui <strong className="text-foreground">não comercializa dados pessoais</strong>. Informações podem ser compartilhadas apenas quando isso for estritamente necessário para a operação da Plataforma, como:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Provedores de hospedagem e infraestrutura em nuvem;</li>
          <li>Serviços de envio de e-mails transacionais;</li>
          <li>Gateways de pagamento para cobrança e confirmação de compras;</li>
          <li>Fornecedores de segurança, antifraude e monitoramento.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Dados também poderão ser compartilhados mediante ordem judicial, exigência legal ou para exercício regular de direitos, sempre restringindo o escopo ao mínimo indispensável.
        </p>

        {/* 8 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">8. Armazenamento e prazos de retenção</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">Mantemos dados e registros pelo tempo necessário para:</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Prestar o serviço e oferecer suporte;</li>
          <li>Atender obrigações legais e regulatórias (quando aplicável);</li>
          <li>Prevenir fraudes e preservar a segurança do ambiente;</li>
          <li>Guardar evidências para auditoria e defesa de direitos.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Determinadas informações podem permanecer temporariamente em cache técnico/operacional para garantir estabilidade e desempenho.
        </p>

        {/* 9 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">9. Segurança da informação</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">Aplicamos medidas razoáveis e proporcionais para mitigar riscos, incluindo, quando cabível:</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Gestão de acessos e permissões;</li>
          <li>Criptografia em trânsito (HTTPS);</li>
          <li>Monitoramento contínuo e registros de atividade;</li>
          <li>Atualizações e manutenção periódica dos sistemas;</li>
          <li>Mecanismos de detecção e prevenção de fraude e abuso.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Nenhuma medida de segurança é infalível, mas trabalhamos continuamente para elevar o nível de proteção.
        </p>

        {/* 10 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">10. Cookies e tecnologias similares</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">Podemos utilizar cookies e tecnologias equivalentes para:</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Garantir o funcionamento do site (itens essenciais);</li>
          <li>Fortalecer a segurança e impedir abusos;</li>
          <li>Obter métricas agregadas de uso e desempenho.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Você pode ajustar as configurações do seu navegador para bloquear cookies. Nesse caso, algumas funcionalidades poderão não operar corretamente.
        </p>

        {/* 11 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">11. Transferência internacional de dados</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Confere Aqui pode recorrer a serviços de infraestrutura e armazenamento mantidos por fornecedores com servidores localizados fora do Brasil. Nesses cenários, buscamos adotar salvaguardas compatíveis com a LGPD e práticas de segurança apropriadas.
        </p>

        {/* 12 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">12. Seus direitos como titular (LGPD)</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">Você pode solicitar, quando aplicável:</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Confirmação de que seus dados estão sendo tratados;</li>
          <li>Acesso aos dados pessoais;</li>
          <li>Correção de informações incompletas, imprecisas ou desatualizadas;</li>
          <li>Anonimização, bloqueio ou eliminação, quando cabível;</li>
          <li>Detalhes sobre com quem seus dados foram compartilhados;</li>
          <li>Oposição ao tratamento baseado em legítimo interesse, quando cabível.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Para exercer qualquer desses direitos, escreva para: <a href="mailto:suporte@confereaqui.com" className="text-primary hover:underline">suporte@confereaqui.com</a>
        </p>

        {/* 13 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">13. Pedidos de bloqueio ou restrição de consultas</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Quando recebemos solicitações de restrição, bloqueio ou medidas similares ligadas à privacidade, podemos pedir uma verificação mínima de identidade para evitar fraudes e confirmar a legitimidade do pedido.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Se necessário, poderemos reter apenas os dados mínimos suficientes para registrar o atendimento e impedir novas consultas ao item bloqueado, respeitando obrigações legais e de segurança.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Solicitações: <a href="mailto:suporte@confereaqui.com" className="text-primary hover:underline">suporte@confereaqui.com</a>
        </p>

        {/* 14 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">14. Automação e organização de informações</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">Podemos empregar processos automatizados para:</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Estruturar, organizar e apresentar os resultados de forma mais clara;</li>
          <li>Padronizar relatórios e aprimorar a experiência do usuário.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A Plataforma não se destina a realizar decisões automatizadas que produzam efeitos legais ou impacto significativo sobre o titular.
        </p>

        {/* 15 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">15. Atualizações desta Política</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">Esta Política pode ser revisada periodicamente para refletir:</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside mb-4 space-y-1.5">
          <li>Alterações operacionais;</li>
          <li>Melhorias técnicas;</li>
          <li>Adequações à legislação.</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A data da última revisão estará sempre indicada no topo deste documento. Recomendamos que você consulte esta página periodicamente.
        </p>

        {/* 16 */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">16. Fale conosco</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Para dúvidas, solicitações ou exercício de direitos:
        </p>
        <div className="mt-2 mb-4">
          <a href="mailto:suporte@confereaqui.com" className="text-primary hover:underline text-sm font-medium">📩 suporte@confereaqui.com</a>
        </div>

    </LegalPageLayout>
  );
};

export default Privacidade;