export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: "Empresas" | "Locação" | "Contratação";
  readTime: number;
  publishedAt: string;
  content?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "como-pequenos-negocios-podem-checar-clientes",
    title: "Como pequenos negócios podem checar clientes antes de fechar negócio",
    description: "Práticas simples e acessíveis para reduzir o risco de calote em vendas, fiado ou parcelamentos.",
    category: "Empresas",
    readTime: 6,
    publishedAt: "2026-04-12",
    content: `
<p>Quem vende para o consumidor final sabe que a maior dor de cabeça quase nunca é a venda em si. É o que vem depois. O cheque que volta, o boleto não pago, o parcelamento que vira inadimplência. Quanto menor o negócio, mais isso dói, porque cada centavo perdido sai direto do caixa.</p>

<p>O reflexo natural de muito empresário é simplesmente parar de vender fiado ou de oferecer condições mais flexíveis. Só que aí o problema é outro: você perde venda boa por medo de algumas vendas ruins. O caminho não é cortar o crédito, é entender com quem você está fazendo negócio.</p>

<h2>Por que pequenos negócios ignoram a verificação</h2>

<p>Existem três motivos clássicos. O primeiro é a pressa. Cliente entrou, demonstrou interesse, ninguém quer perder a venda pedindo pra esperar. O segundo é a impressão de que verificar dados é caro ou complicado, coisa de empresa grande com departamento financeiro. O terceiro é o desconforto de pedir documentos, como se isso ofendesse o cliente.</p>

<p>Os três motivos têm respostas práticas. Pressa não justifica vender pra qualquer um. Verificação não precisa ser cara nem demorada. E cliente sério não se ofende com pedido razoável de informação. Quem se ofende, em geral, é exatamente quem você não quer como cliente.</p>

<h2>O que verificar antes de fechar</h2>

<p>Não precisa virar um banco. Pra maioria dos pequenos negócios, três pontos resolvem boa parte dos casos.</p>

<h3>1. Dados cadastrais básicos</h3>
<p>Nome completo, CPF e contato. Conferir se o CPF está ativo e em situação regular já elimina parte dos golpes mais óbvios. Não é uma garantia de pagamento, mas é uma triagem inicial. Se o cliente recusa informar dados básicos, isso já é um sinal.</p>

<h3>2. Endereço atualizado</h3>
<p>Endereço serve pra duas coisas: localizar a pessoa caso precise cobrar, e dar uma noção de consistência. Endereço comercial num cadastro pessoal, endereço que muda toda semana, ou divergência grande entre o que a pessoa informa e o que aparece em fontes públicas, são pontos pra investigar antes de aprovar venda alta.</p>

<h3>3. Histórico de relacionamento</h3>
<p>Se for cliente novo, considere começar com ticket menor ou exigir pagamento à vista nas primeiras compras. Se for cliente antigo, observe se o padrão de pagamento mudou. Um cliente que sempre pagou em dia e de repente começa a atrasar pode estar passando por dificuldade, e isso muda o tipo de condição que faz sentido oferecer.</p>

<h2>Quando vale a pena consultar fontes externas</h2>

<p>Consulta de dados em fontes públicas faz sentido em três situações: ticket alto, parcelamento longo ou cliente desconhecido. Pra uma venda de R$ 80 à vista, não vale o esforço. Pra um parcelamento de R$ 2.000 em seis vezes, vale.</p>

<p>O que esse tipo de consulta entrega é uma camada extra de informação cadastral. Você confere se o CPF informado está regular, se os dados batem com o que a pessoa declarou, se há sinais de inconsistência. Não substitui análise de crédito, não diz se o cliente vai pagar. Mas reduz a chance de você ter sido enganado em algum dado básico, e isso já elimina parte considerável dos calotes.</p>

<h2>O cuidado que vale a pena</h2>

<p>Verificar não significa desconfiar de todo mundo. Significa ter um processo mínimo que te protege quando o problema aparece. Cliente bom não some quando você pede dados, e cliente ruim some quando percebe que você está atento. Esse filtro sozinho já paga o trabalho.</p>

<p>O pequeno negócio que vende com um pouco mais de cuidado vende por mais tempo. E vende com menos dor de cabeça.</p>
`,
  },
  {
    slug: "vendi-fiado-e-nao-recebi",
    title: "Vendi fiado e não recebi: como evitar isso na próxima venda",
    description: "O que fazer depois de levar um calote e como se prevenir antes da próxima venda fiada.",
    category: "Empresas",
    readTime: 7,
    publishedAt: "2026-04-19",
    content: `
<p>Quase todo comerciante que vende fiado já passou por isso. Cliente parecia tranquilo, prometeu pagar na quinta, na quinta pediu mais um prazo, dali a duas semanas parou de atender o telefone. A conta segue aberta no caderno e você ficou com a sensação de que foi o trouxa da história.</p>

<p>A reação mais comum é decidir que nunca mais vai vender fiado. Funciona, mas no comércio de bairro isso quase sempre custa caro. Muito cliente fiel mantém a relação justamente porque você quebra um galho quando ele precisa. Cortar tudo é jogar o bebê fora junto com a água do banho.</p>

<p>A outra reação, igualmente comum, é seguir igual e torcer pra não acontecer de novo. Spoiler: acontece.</p>

<h2>Primeiro: o que fazer com o calote que já tomou</h2>

<p>Se a dívida é recente, vale tentar contato direto. Sem ameaça, sem exposição, sem nada que te coloque em situação ruim juridicamente. Uma mensagem objetiva, registrando o valor, a data da venda e propondo um caminho pra quitar. Muitas vezes a pessoa some por vergonha, não por má fé, e um contato calmo destrava.</p>

<p>Se a dívida for relevante e a pessoa não responder, é hora de juntar prova. Comprovante da venda, conversa de WhatsApp, qualquer registro que mostre que a transação existiu. Pra valores menores, o caminho mais comum é o Juizado de Pequenas Causas, que cabe ações até 40 salários mínimos sem precisar de advogado. Você apresenta os documentos, abre o processo e a Justiça notifica a parte.</p>

<p>Pra valores maiores ou quando a relação é mais formal, vale conversar com um advogado antes de qualquer movimento. Existe protesto em cartório, existe negativação, existem caminhos. Mas tudo isso depende de você ter documentado a venda. Sem nota, sem comprovante, sem mensagem, fica muito mais difícil.</p>

<h2>O que fazer pra próxima não acontecer</h2>

<p>Aqui mora a parte que realmente resolve o problema no longo prazo. Algumas regras simples reduzem muito a chance de levar calote.</p>

<h3>Tenha um teto pra venda fiada</h3>
<p>Defina um valor máximo que você aceita perder sem grande dor. Acima desse teto, exige pagamento à vista ou pelo menos um sinal. O teto pode subir conforme o cliente se prova bom pagador ao longo do tempo. Começar com R$ 100 e ir aumentando é muito mais seguro do que liberar R$ 800 pra um conhecido que veio a primeira vez na loja.</p>

<h3>Peça dados básicos</h3>
<p>Nome completo, CPF e contato atualizado. Não precisa ser interrogatório. Você pode até justificar como "pra mandar a confirmação de pagamento". Cliente sério informa sem problema. Quem se incomoda em informar CPF pra uma venda fiada de valor relevante geralmente está te dando a primeira pista.</p>

<h3>Registre tudo</h3>
<p>O caderno serve, mas mensagem de WhatsApp serve melhor. Mande uma confirmação simples depois da venda, com o valor, o que foi comprado e a data combinada pra pagamento. Pede pra pessoa confirmar com um "ok". Isso vira prova no futuro, se necessário.</p>

<h3>Confira o cadastro quando o valor justifica</h3>
<p>Pra vendas maiores, uma consulta cadastral rápida ajuda a confirmar que a pessoa é quem diz ser. Não é pra negar venda baseado nisso, é pra ter certeza de que os dados que você está anotando são reais. Endereço que não bate, CPF irregular ou divergência nos dados são sinais que valem o tempo de uma segunda conversa antes de fechar.</p>

<h2>O custo de vender com critério</h2>

<p>O que muito comerciante esquece é que vender pra todo mundo, sem nenhum critério, sai mais caro do que filtrar um pouco. Cada calote não é só o dinheiro perdido. É o tempo gasto cobrando, o estresse, a desconfiança que vai sobrando pra próxima venda.</p>

<p>Filtrar bem é trabalhar menos. Não é desconfiar de todo mundo, é só não vender no escuro.</p>
`,
  },
  {
    slug: "antes-de-aceitar-parcelamento",
    title: "Antes de aceitar parcelamento: o que pequenas empresas devem verificar",
    description: "Cinco verificações que valem a pena fazer antes de oferecer parcelamento em vendas próprias.",
    category: "Empresas",
    readTime: 6,
    publishedAt: "2026-04-26",
    content: `
<p>Parcelar venda própria é diferente de aceitar cartão. Quando o cliente paga no cartão de crédito, o risco é da operadora. Quando você parcela direto no boleto, no carnê ou no cheque, o risco é todo seu. Se a parcela não cair, é do seu bolso que ela some.</p>

<p>Por isso vale a pena ter um processo mínimo antes de oferecer essa condição. Não pra recusar venda, mas pra entender qual venda parcelar e qual não.</p>

<h2>1. Confirme quem é o cliente</h2>

<p>Parece básico, mas é onde mais gente erra. Aceitar uma venda parcelada por R$ 1.500 em quatro vezes, com base só num nome e um número de telefone, é receita pronta pra problema. Pede documento. Confirma se o nome bate com o CPF. Se a venda vale o parcelamento, vale o minuto a mais pra anotar dados corretos.</p>

<p>Não precisa ser invasivo. Diz que é parte do procedimento. Cliente que se incomoda em mostrar identidade pra parcelar uma compra geralmente está te avisando que algo não está certo.</p>

<h2>2. Pegue um sinal sempre que possível</h2>

<p>Sinal de 20% ou 30% à vista, com o resto parcelado, muda tudo. Primeiro porque já cobre seu custo da mercadoria. Segundo porque cliente que dá sinal está realmente engajado com a compra. Cliente que quer parcelar 100% sem entrada e some no dia seguinte é um padrão clássico de fraude.</p>

<p>Pra valores menores, sinal pode parecer rigor demais. Pra valores acima do seu ticket médio, é proteção básica.</p>

<h2>3. Confira o histórico se for cliente novo</h2>

<p>Se a pessoa é primeira vez na loja, você não tem histórico pra se apoiar. Aí cabe uma verificação rápida em fontes públicas pra conferir se os dados que ela informou batem, se o CPF está regular, se não há sinais óbvios de problema. Isso não te diz se ela vai pagar, mas confirma que ela é quem diz ser. É a diferença entre vender pra alguém real e vender pra um nome inventado.</p>

<p>Pra cliente recorrente, o histórico próprio é mais útil que qualquer consulta externa. Se a pessoa já parcelou três vezes com você e pagou tudo direito, você tem uma evidência mais forte que qualquer relatório.</p>

<h2>4. Não estique demais o parcelamento</h2>

<p>Quanto mais longo o parcelamento, maior a chance de algo dar errado no meio do caminho. A pessoa pode perder emprego, ter uma emergência, simplesmente esquecer. O ideal é manter parcelamento curto, três a seis vezes no máximo pra venda direta, e reservar prazos longos pra cartão de crédito, onde o risco não é seu.</p>

<p>Se o cliente insiste em parcelamento longo, dá pra propor entrada maior ou cartão. Quem não topa nenhuma das duas é quem você precisa avaliar com mais cuidado.</p>

<h2>5. Documente a venda</h2>

<p>Contrato simples, recibo, mensagem confirmando os termos. Não precisa ser nada complicado. Um WhatsApp com "venda no valor de X, em Y parcelas de Z, primeira em tal data" e a resposta da pessoa concordando já vale como prova. Se um dia precisar cobrar, esse registro é seu ponto de partida.</p>

<p>Caderno só com nome e valor é o caminho mais curto pra você não conseguir cobrar nada se a coisa azedar.</p>

<h2>O equilíbrio que faz diferença</h2>

<p>Parcelamento é uma ferramenta de venda boa. Não vale a pena cortar de vez por medo. Mas também não dá pra oferecer no automático pra qualquer um que pede. O meio termo é ter um processo de cinco minutos antes de fechar, que filtra a maior parte dos problemas e mantém a flexibilidade pra cliente bom.</p>

<p>Pequeno negócio que vende parcelado com critério vende mais e perde menos. Os dois importam.</p>
`,
  },
  {
    slug: "microempreendedor-reduzir-risco-inadimplencia",
    title: "Microempreendedor: como reduzir o risco de inadimplência sem custar caro",
    description: "Estratégias práticas para MEIs e pequenos negócios reduzirem inadimplência sem grandes investimentos.",
    category: "Empresas",
    readTime: 7,
    publishedAt: "2026-05-03",
    content: `
<p>Empresa grande tem time financeiro, política de crédito, sistema de análise. MEI tem o próprio dono fazendo tudo, geralmente entre uma venda e outra, no fim do dia depois de fechar a loja. Por isso a regra clássica de gestão de inadimplência costuma soar irrealista pra quem está começando ou tocando o negócio sozinho.</p>

<p>A boa notícia é que você não precisa montar um departamento. Algumas práticas simples fazem diferença grande, e nenhuma delas exige software caro ou consultoria.</p>

<h2>Comece pelos dados certos no cadastro</h2>

<p>Boa parte do problema de cobrança não vem de cliente mal intencionado, vem de cadastro mal feito. Telefone que não atende, e-mail digitado errado, endereço incompleto. Quando chega a hora de cobrar, você descobre que não tem como localizar a pessoa.</p>

<p>Pra cada cliente que parcela ou que compra fiado, anote nome completo, CPF, telefone com DDD e e-mail. Confira na hora se o telefone está certo, mandando um WhatsApp de confirmação. Cinco segundos a mais no fechamento da venda economizam horas de cobrança depois.</p>

<h2>Tenha condições padronizadas</h2>

<p>Improvisar condição de pagamento na hora é uma fonte clássica de erro. Cliente pediu seis vezes, você cedeu, no fim do mês não bate. Tenha uma tabela mental ou no papel mesmo: até tanto, à vista. Entre tanto e tanto, parcela em até três vezes com sinal. Acima disso, conversa caso a caso.</p>

<p>Quando o cliente pede algo fora do padrão, você tem espaço pra dizer "vou ver se consigo". Esse minuto de pausa também filtra cliente que está testando seus limites. Quem realmente quer fechar negócio espera. Quem está pressionando por uma condição absurda muitas vezes está com problema.</p>

<h2>Estabeleça um teto pra começar</h2>

<p>Cliente novo, ticket pequeno e à vista. Conforme a pessoa demonstra ser bom pagador, você libera mais. É o oposto do que muito MEI faz, que é dar a melhor condição logo na primeira venda pra fechar o negócio. O problema é que essa primeira venda é justamente a que tem mais risco, porque você não conhece ninguém.</p>

<p>Subir condição com base em histórico próprio é mais seguro do que qualquer análise externa. Cliente que comprou três vezes e pagou em dia ganhou crédito de verdade. Cliente novo, por mais simpático que pareça, ainda é um desconhecido.</p>

<h2>Use consulta cadastral quando o valor justifica</h2>

<p>Consultar dados em fontes públicas faz sentido pra ticket que dói se virar calote. Pra venda de R$ 50, não vale o esforço. Pra um pedido de R$ 800 parcelado em quatro vezes pra um cliente que você nunca viu, vale.</p>

<p>O que esse tipo de consulta entrega é confirmação cadastral. Você vê se o CPF que a pessoa informou está regular, se os dados batem, se há sinais de inconsistência. Não é uma análise de score, não é garantia de pagamento. Mas é uma camada de proteção contra o tipo mais básico de fraude, que é a pessoa simplesmente passar dados falsos.</p>

<h2>Cobre cedo, sem virar inimigo</h2>

<p>O atraso de um dia é muito mais fácil de resolver do que o atraso de trinta. Mande uma mensagem amigável no primeiro dia depois do vencimento. Algo como "passando pra lembrar do boleto que venceu ontem, qualquer dúvida me avisa". Pra cada dia que passa, a chance de receber cai.</p>

<p>Cobrança agressiva no começo afasta cliente bom. Cobrança ausente no começo perpetua o calote. O meio termo é avisar cedo, com naturalidade, e ir endurecendo o tom só se a pessoa começa a fugir.</p>

<h2>Aceite que algum percentual sempre vai cair</h2>

<p>Mesmo com tudo bem feito, alguma inadimplência sobra. O alvo não é zero, é manter num patamar que o negócio aguenta. MEI saudável tem alguma reserva pro caso de calote acontecer, e considera isso parte do custo do tipo de venda que faz.</p>

<p>Quem reduz inadimplência não é quem tem o sistema mais sofisticado, é quem tem o processo mais consistente. Repete a mesma triagem em toda venda. É chato no começo, vira reflexo depois de um mês. E o efeito no caixa aparece rápido.</p>
`,
  },
  {
    slug: "profissional-autonomo-vale-consultar-cpf",
    title: "Profissional autônomo: vale a pena consultar o CPF do cliente?",
    description: "Quando faz sentido e quando não vale a consulta. Análise direta para autônomos.",
    category: "Empresas",
    readTime: 5,
    publishedAt: "2026-05-10",
    content: `
<p>Autônomo costuma ouvir a recomendação de consultar o CPF do cliente como se fosse algo óbvio. Só que ninguém para pra explicar quando faz sentido e quando é desperdício de tempo. A resposta honesta é: depende do tipo de serviço, do valor e da relação que se desenha pela frente.</p>

<h2>Quando consultar faz sentido</h2>

<p>Existem situações em que vale o esforço. Algumas são bem específicas, mas todas têm em comum o fato de envolverem risco financeiro ou compromisso de prazo.</p>

<h3>Serviço com pagamento parcelado</h3>
<p>Se você combinou entrega em duas etapas, com parte do pagamento no início e o resto no fim, está assumindo risco. Antes de começar, confirmar quem é a pessoa do outro lado é razoável. Não é desconfiança, é a versão mínima de qualquer relação comercial com prazo.</p>

<h3>Cliente novo, projeto longo</h3>
<p>Designer que vai trabalhar três semanas num projeto, consultor que vai entregar um relatório só no final do mês, professor particular que vai dar aulas durante dois meses. Em todos esses casos, você está apostando tempo na frente do pagamento. Conferir cadastro básico antes faz parte da prudência.</p>

<h3>Indicação que não te disse nada concreto</h3>
<p>Cliente "indicado" por alguém que você nem conhece direito não é cliente conhecido. É um desconhecido com uma referência fraca. Se o serviço é grande, mesma lógica do projeto longo se aplica.</p>

<h2>Quando consultar é exagero</h2>

<p>Tem situações em que consultar dado de cliente é só perda de tempo.</p>

<p>Serviço de baixo valor com pagamento à vista, na hora. Se você faz manutenção de R$ 80 e a pessoa paga no Pix na hora, conferir CPF não muda nada.</p>

<p>Cliente recorrente com bom histórico. Se ele já pagou cinco vezes em dia, consulta nova não te diz nada que o próprio histórico não diga melhor.</p>

<p>Cliente pessoa jurídica com nota fiscal e contrato. Aí o instrumento de proteção é o contrato, não a consulta. A relação está documentada em outro nível.</p>

<h2>O que a consulta entrega de fato</h2>

<p>Pra autônomo, é importante saber o que esperar dessa ferramenta. Consultar um CPF em fontes públicas te entrega informação cadastral. Você vê se o documento está regular, se os dados que a pessoa te passou batem, se há divergência clara entre o que ela informou e o que aparece em base pública.</p>

<p>O que essa consulta não entrega é previsão de pagamento. Ninguém te diz "esse cliente vai pagar" com base em dado cadastral. O que ela faz é eliminar o tipo mais básico de problema, que é a pessoa simplesmente passar dado errado ou inventado. Já reduz uma parte considerável dos casos.</p>

<h2>A decisão simples</h2>

<p>A pergunta certa não é "vale a pena consultar". É "qual o risco se essa pessoa sumir antes de pagar". Se o risco é pequeno e o serviço é rápido, não consulta. Se o risco é razoável e o pagamento depende de tempo, consulta. É essa a régua.</p>

<p>Autônomo que aplica essa lógica gasta tempo de verificação só onde faz diferença. Os outros casos ele resolve com contrato simples, com sinal antecipado, com a relação que já tem. Tudo tem o instrumento certo, e a consulta é só um deles.</p>
`,
  },
  {
    slug: "como-avaliar-candidato-a-inquilino",
    title: "Como avaliar a idoneidade de um candidato a inquilino",
    description: "Critérios objetivos para analisar a documentação e o perfil de um possível inquilino.",
    category: "Locação",
    readTime: 7,
    publishedAt: "2026-03-15",
    content: `
<p>Alugar imóvel é uma das relações comerciais mais longas que existem entre duas pessoas físicas. Você confia seu bem por um, dois, três anos pra alguém que muitas vezes você conheceu na semana anterior. Por isso a parte de avaliar o candidato é tão importante quanto o anúncio, a foto e a vistoria.</p>

<p>O problema é que muita análise de inquilino se resume a olhar contracheque e marcar visita. Funciona pra parte dos casos, mas não pega os mais difíceis. Vale a pena ter um processo um pouco mais estruturado.</p>

<h2>Comece pela conversa</h2>

<p>Antes de qualquer documento, ouça o candidato. Pergunte por que está procurando esse imóvel, quanto tempo pretende ficar, com quantas pessoas vai morar, do que trabalha. Não é interrogatório, é entender o contexto. Inquilino com história coerente, motivo claro pra se mudar e plano de permanência razoável já passa boa parte da triagem.</p>

<p>Inconsistência nesse momento vale anotação. Quem dá respostas evasivas, quem muda de versão entre uma pergunta e outra, quem evita falar do trabalho atual, são sinais que valem confirmação extra depois.</p>

<h2>Documentação básica</h2>

<p>Existe uma lista clássica: RG, CPF, comprovante de residência, comprovante de renda. Cada um serve pra uma coisa.</p>

<p>RG e CPF confirmam quem é a pessoa. Tem que bater com o nome que ela passou desde o começo, com o que está no e-mail, com o cadastro feito na imobiliária ou diretamente com o proprietário.</p>

<p>Comprovante de residência mostra de onde a pessoa está saindo. Endereço atual recente, no nome dela ou de cônjuge, ajuda a montar histórico. Quem não tem comprovante de residência em nenhum nome próximo é alguém que talvez esteja com vida instável, e isso é informação relevante pra locação.</p>

<p>Comprovante de renda mostra capacidade de pagamento. A regra clássica é renda mensal de pelo menos três vezes o valor do aluguel. Pra quem não é assalariado, pede declaração de imposto de renda, extrato bancário dos últimos meses, contrato de prestação de serviço. O importante é ver consistência, não um único papel isolado.</p>

<h2>Confirme o que foi declarado</h2>

<p>Documento entregue é só o ponto de partida. Vale a pena confirmar pelo menos algumas informações.</p>

<p>Telefone do empregador, se for possível ligar e confirmar vínculo. Telefone do locador anterior, pra saber como foi a relação. Cadastro do CPF em fontes públicas pra ver se os dados batem e se não há divergência grande entre o que a pessoa declarou e o que aparece registrado.</p>

<p>Não é pra agir como detetive. É pra ter dois ou três pontos de confirmação além do que o próprio candidato te entregou. Quem inventa documento geralmente não inventa tudo, e a divergência aparece quando você cruza informações.</p>

<h2>Histórico de locação anterior</h2>

<p>Se possível, fale com o último locador. Pergunta simples: pagava em dia, devolveu o imóvel em ordem, teve algum problema. Locador anterior costuma ser honesto, principalmente se houve atrito. Quem mente é o candidato, raramente o ex-locador.</p>

<p>Se o candidato é primeira vez alugando, isso por si só não é problema. Mas aí a documentação financeira e o fiador ou garantia ficam mais importantes, porque não há histórico pra puxar.</p>

<h2>Garantia adequada ao caso</h2>

<p>Fiador, seguro fiança, depósito caução, título de capitalização. Cada um cobre situações diferentes. A escolha não é só de quem tem o que oferecer. É de qual garantia faz sentido pro perfil do candidato.</p>

<p>Candidato com renda estável e bom histórico aguenta seguro fiança sem problema. Candidato com renda variável e histórico curto vale pedir fiador ou depósito maior. A análise serve pra decidir isso, não só pra aprovar ou recusar.</p>

<h2>O equilíbrio final</h2>

<p>Análise rigorosa demais espanta inquilino bom. Análise frouxa atrai problema. O alvo é um processo que pede o necessário sem virar burocracia, que confirma o essencial sem virar invasão. Quem alinha isso aluga mais rápido e com menos sustos.</p>
`,
  },
  {
    slug: "contrato-de-locacao-sem-fiador",
    title: "O que verificar antes de assinar contrato de locação sem fiador",
    description: "Como reduzir o risco quando não há fiador na operação de aluguel.",
    category: "Locação",
    readTime: 6,
    publishedAt: "2026-03-22",
    content: `
<p>Encontrar fiador ficou difícil. Mesmo quem tem família com imóvel próprio esbarra na resistência natural de comprometer um patrimônio pra cobrir aluguel alheio. Por isso é cada vez mais comum a locação sem fiador, usando outras modalidades de garantia ou simplesmente confiando no candidato.</p>

<p>Pro proprietário, isso aumenta o risco. Não tem terceiro respondendo por inadimplência, danos ou abandono do imóvel. A análise prévia, que sempre foi importante, fica essencial.</p>

<h2>Entenda qual garantia está em jogo</h2>

<p>Existem alternativas ao fiador, e cada uma cobre tipos diferentes de risco.</p>

<p>Seguro fiança é contratado pelo inquilino e cobre inadimplência, danos e despesas. A seguradora analisa o candidato antes de aprovar, o que já filtra parte dos perfis problemáticos. Custo é mensal e fica embutido no que o inquilino paga.</p>

<p>Depósito caução é o inquilino deixar o valor de até três meses de aluguel em uma conta vinculada. Dá tranquilidade ao proprietário, mas exige fôlego financeiro do candidato.</p>

<p>Título de capitalização é um valor que fica preso por todo o contrato, com chance de sorteio. Funciona como caução, com vantagem pro inquilino de poder reaver o dinheiro depois.</p>

<p>Sem nenhuma dessas, é confiança pura. Aí o critério na entrada tem que ser maior.</p>

<h2>Quais verificações se tornam mais importantes</h2>

<p>Quando não há fiador, o que protege o proprietário é o conjunto de evidências sobre o inquilino. Vale apertar em pontos que muitas vezes são tratados com leveza.</p>

<h3>Confirmação cadastral</h3>
<p>Dados básicos têm que bater. Nome, CPF, endereço atual, telefone. Inconsistência aqui é sinal precoce. Vale uma consulta em fontes públicas pra ver se o que a pessoa declarou está alinhado com o registro cadastral. Não substitui análise financeira, mas elimina o tipo mais grosseiro de fraude.</p>

<h3>Estabilidade de renda</h3>
<p>Renda mensal alta não basta. Importa há quanto tempo essa renda existe e se ela é constante. Profissional que mudou de emprego há quatro meses tem renda boa mas histórico curto. Autônomo que tem faturamento variável precisa mostrar extrato de seis meses, não três. Quanto menor a garantia, mais histórico você quer ver.</p>

<h3>Histórico de aluguel anterior</h3>
<p>Liga pro locador anterior. Em locação sem fiador isso vale muito. Quem sai de imóvel anterior em situação regular tem chance maior de manter o padrão. Quem tem histórico ruim ou se recusa a indicar locador anterior precisa de muita explicação convincente antes da assinatura.</p>

<h3>Conversa direta sobre o motivo</h3>
<p>Por que está se mudando. Por que esse imóvel. Por que sem fiador. As três perguntas costumam revelar muito. Resposta direta e coerente é tranquilizadora. Resposta evasiva é alerta.</p>

<h2>Cláusulas que valem a pena</h2>

<p>Sem fiador, o contrato precisa ser bem escrito. Vistoria detalhada com fotos no início é fundamental, porque é com base nela que você cobra danos no final. Prazo de notificação pra ambos os lados claro. Multas e correções de praxe.</p>

<p>Cláusula de devolução com prazo definido em caso de saída antecipada protege contra o inquilino sumir sem avisar. Reajuste pactuado evita discussão depois.</p>

<h2>Decisão final</h2>

<p>Locação sem fiador não é necessariamente arriscada. É só uma locação que exige mais cuidado na entrada. O proprietário que aceita esse tipo de garantia sem fazer análise mais rigorosa está apostando no escuro. Quem aceita com critério reduz risco e amplia o número de candidatos viáveis ao mesmo tempo.</p>

<p>A regra é simples: quanto menor a garantia, maior a triagem. É assim que se aluga sem fiador sem virar problema.</p>
`,
  },
  {
    slug: "locacao-de-imovel-alem-do-contracheque",
    title: "Locação de imóvel: além do contracheque, o que mais analisar",
    description: "O contracheque é um ponto de partida, mas não conta a história toda. Veja o que mais checar.",
    category: "Locação",
    readTime: 6,
    publishedAt: "2026-03-29",
    content: `
<p>Quase toda análise de inquilino começa e termina no contracheque. Renda mensal de pelo menos três vezes o aluguel, carimbo do empregador, está aprovado. O critério não é errado, ele só é insuficiente. Muito calote começa com candidato que tinha contracheque irretocável.</p>

<p>Renda alta com gasto alto produz inadimplência igual. Estabilidade de seis meses no emprego não significa estabilidade de dois anos. E há tipos de renda que o contracheque nem mostra.</p>

<h2>Tempo de vínculo, não só valor</h2>

<p>Salário de R$ 6.000 num emprego que começou no mês passado é diferente de salário de R$ 4.500 num emprego com três anos de carteira. O segundo é muito melhor pra locação, porque significa que o fluxo é estável. Vínculo recente não é problema em si, mas precisa ser olhado junto com o resto do quadro.</p>

<p>Pra autônomo, a referência é tempo de atividade. Quem fatura há cinco anos no mesmo ramo é mais previsível que quem começou agora, mesmo que o faturamento atual seja maior.</p>

<h2>Comprometimento de renda</h2>

<p>Aluguel é só uma parte dos gastos. A pessoa também paga condomínio, IPTU, conta de luz, transporte, alimentação, financiamento de carro, cartão de crédito. Quando você olha só pro contracheque, você não vê o resto.</p>

<p>Não é viável pedir extrato de cartão na hora da locação, mas vale conversar. Pergunta direta sobre situação financeira do candidato, com naturalidade. Quem tem dívidas pesadas geralmente revela alguma coisa, se a conversa for honesta. Quem oculta esse tipo de informação na entrada vai trazer problema lá na frente.</p>

<h2>Tipo de renda</h2>

<p>Salário fixo com carteira é o mais previsível. Comissão pode oscilar. Renda variável de autônomo precisa de média de seis a doze meses. Bolsa, pensão, aluguel de outro imóvel, são fontes que mudam o cálculo.</p>

<p>Importa entender de onde vem o dinheiro pra pagar o aluguel todo mês, não só o número que aparece no holerite. Renda variável bem documentada é melhor que renda fixa mal explicada.</p>

<h2>Histórico de relação com aluguel</h2>

<p>Pessoa que já alugou antes traz informação valiosa. Como pagava, se devolveu imóvel em ordem, se houve atrito. Contato com locador anterior dura cinco minutos e ensina mais que dez documentos.</p>

<p>Quem nunca alugou não é problema. É só ausência de informação. Compense isso pedindo mais peso em outras dimensões: garantia maior, mais documentação, conversa mais detalhada.</p>

<h2>Coerência cadastral</h2>

<p>Os dados que a pessoa entrega têm que bater entre si e com fontes externas. Nome igual em todos os documentos. CPF que aparece de forma consistente. Endereço atual coerente com comprovante de residência.</p>

<p>Quando os dados não batem, geralmente não é fraude maliciosa, é descuido. Mas vale o esforço de pedir correção e entender por quê. Cadastro feito com pressa no início do contrato vira problema quando chega a hora de cobrar, porque você não consegue localizar a pessoa.</p>

<p>Consulta em fontes públicas ajuda a confirmar o básico: CPF regular, dados pessoais consistentes, sinais de divergência. Não substitui o resto da análise, é uma camada a mais.</p>

<h2>Não esqueça o que o documento não mostra</h2>

<p>Postura nas conversas, pontualidade nos contatos, respeito a horário combinado pra visita. Tudo isso é informação. Candidato que atrasa pra visitar o imóvel mas insiste em alugar pode estar te avisando algo. Quem dá retorno rápido e claro durante o processo geralmente mantém esse padrão no contrato.</p>

<p>Contracheque importa. Mas é um pedaço da história, não a história inteira. Análise completa olha pra renda dentro de um quadro maior, que inclui estabilidade, histórico e como a pessoa se comporta no processo. Quem alinha essas pontas aluga melhor.</p>
`,
  },
  {
    slug: "corretor-reduzir-risco-inadimplencia",
    title: "Corretor imobiliário: como reduzir risco de inadimplência sem precisar de fiador",
    description: "Alternativas práticas ao fiador para corretores que querem fechar negócio com segurança.",
    category: "Locação",
    readTime: 6,
    publishedAt: "2026-04-05",
    content: `
<p>Pra corretor, a inadimplência do inquilino tem dois custos. O primeiro é a relação ruim com o proprietário, que cobra explicação e às vezes desfaz a parceria. O segundo é o impacto na própria comissão, principalmente quando há cláusula de devolução ou quando o contrato é rescindido cedo.</p>

<p>Por isso quem trabalha com locação aprende rápido que vender o imóvel é só metade do trabalho. A outra metade é entregar um inquilino que vai pagar.</p>

<h2>Trabalhe com perfil, não com pressa</h2>

<p>Corretor com muita unidade pra alugar tende a focar em fechar negócio rápido. Faz sentido pelo lado da produtividade, mas a pressa cobra preço quando o inquilino aprovado virou problema dois meses depois. Vale parar pra perguntar: esse candidato faz sentido pra esse imóvel.</p>

<p>Imóvel popular num bairro de classe média baixa pede análise diferente de imóvel de alto padrão. Não no rigor, no foco. No primeiro caso, capacidade de pagamento e histórico próximo importam mais. No segundo, estabilidade profissional e referências entram com mais peso.</p>

<h2>Construa um padrão de documentação</h2>

<p>Cada corretor tem seu jeito de pedir documento, mas vale ter um checklist fixo. Quem segue padrão erra menos, e o proprietário enxerga profissionalismo.</p>

<p>O básico é RG, CPF, comprovante de residência atual, comprovante de renda dos últimos três a seis meses, declaração de IR pra quem é autônomo. Pra renda variável, extrato bancário ajuda. Pra cônjuge que também vai assinar, mesmos documentos. Tudo conferido antes de subir pra aprovação.</p>

<h2>Não dependa só do contracheque</h2>

<p>Renda alta sem estabilidade pesa pouco. Renda média com histórico bom pesa muito. Tempo de empresa, tempo no mesmo ramo, comprovação de continuidade. Esses pontos contam.</p>

<p>Pra autônomo, o que conta é consistência. Faturamento dos últimos seis meses, não os melhores três. Atividade declarada, com CNPJ se for o caso. Quem se apresenta como autônomo mas não tem nada formalizado precisa de documentação alternativa robusta.</p>

<h2>Use seguro fiança a seu favor</h2>

<p>Seguro fiança aprova ou rejeita o candidato. Se aprovou, isso já é uma camada de análise feita por uma seguradora que não tem motivo pra arriscar. Se reprovou, é informação relevante mesmo que o cliente queira insistir.</p>

<p>Vale considerar o seguro como triagem auxiliar, principalmente em casos limítrofes. Quando há dúvida sobre o candidato, a tentativa de contratar seguro fiança costuma resolver. Aprovação tranquiliza. Reprovação é alerta pra você reanalisar.</p>

<h2>Confirme os dados antes de subir pra aprovação</h2>

<p>Antes de mandar o cadastro pra análise final, vale confirmar o que pode. Telefone do empregador, contato do locador anterior, dados cadastrais em fontes públicas. Esse cruzamento pega divergência antes do contrato ser fechado, não depois.</p>

<p>Consulta em base pública confirma se o CPF está regular, se os dados batem, se há sinais de inconsistência. Não é análise de score, é confirmação cadastral. Pra corretor, evita o constrangimento de aprovar candidato que tinha problema básico que ninguém olhou.</p>

<h2>Documente toda decisão</h2>

<p>Aprovou? Por quê. Reprovou? Por quê. Anota num arquivo do cliente. Isso protege você juridicamente, ajuda a justificar pro proprietário e cria histórico pra refinar critério no futuro.</p>

<p>Corretor que documenta análise erra menos ao longo do tempo, porque revisita os próprios acertos e enganos. Quem aprova no feeling perpetua os mesmos vieses.</p>

<h2>O resultado prático</h2>

<p>Corretor com processo claro de avaliação ganha duas coisas: confiança dos proprietários, que percebem o cuidado, e menor número de problemas pós-fechamento. Os dois geram retorno direto, em forma de mais imóveis pra trabalhar e menos tempo perdido apagando incêndio.</p>

<p>Sem fiador, com inquilino bem analisado, dá pra fechar negócio com tranquilidade. É só não pular as etapas.</p>
`,
  },
  {
    slug: "aluguel-residencial-documentos-verificacoes",
    title: "Aluguel residencial: documentos e verificações que valem a pena",
    description: "Checklist prático dos documentos a pedir e das verificações realmente úteis na locação.",
    category: "Locação",
    readTime: 5,
    publishedAt: "2026-04-12",
    content: `
<p>Toda imobiliária tem o próprio checklist de documentos pra locação. Pra quem aluga sem imobiliária, o desafio é montar um equivalente que funcione sem cair em burocracia exagerada ou em frouxidão arriscada. A lista a seguir é o mínimo que faz sentido na maioria dos casos.</p>

<h2>Documentos do candidato</h2>

<p>O candidato precisa entregar identificação, comprovação de moradia atual e prova de capacidade de pagamento. Cada um cobre uma função diferente da análise.</p>

<p><strong>RG e CPF.</strong> Confirmação de identidade. Tem que bater com o nome usado em todos os contatos anteriores e com o que vai entrar no contrato.</p>

<p><strong>Comprovante de residência atual.</strong> Conta de luz, água ou telefone com vencimento dos últimos três meses, em nome do candidato ou de cônjuge. Comprovante em nome de terceiro pede explicação adicional.</p>

<p><strong>Comprovante de renda.</strong> Pra assalariado, três últimos contracheques. Pra autônomo, declaração de imposto de renda completa e extrato bancário dos últimos três a seis meses. Pra aposentado, extrato do benefício. Renda total mensal deve ser de pelo menos três vezes o valor do aluguel.</p>

<p>Se há cônjuge ou companheiro que vai morar junto e contribuir com a renda, os mesmos documentos pra ele.</p>

<h2>Documentos do fiador, se houver</h2>

<p>Quando a garantia é fiador, ele precisa entregar a documentação dele também. RG, CPF, comprovante de renda e, crucial, certidão atualizada da matrícula do imóvel que serve como garantia. Sem isso, fiador é só uma assinatura, não tem peso jurídico.</p>

<p>Vale também conferir se o fiador não tem outro imóvel comprometido em outra locação. Fiador que já está em três fianças simultâneas tem capacidade muito menor de honrar mais uma.</p>

<h2>Verificações que valem o esforço</h2>

<p>Documento entregue é começo, não fim. Algumas conferências valem o tempo.</p>

<p><strong>Confirmação de vínculo empregatício.</strong> Liga pra empresa, pergunta pelo setor de RH. Tem que dizer apenas se o candidato trabalha lá, não precisa de mais. Algumas empresas exigem autorização do funcionário pra confirmar, e isso pode ser pedido por e-mail.</p>

<p><strong>Contato com locador anterior.</strong> Pergunta direta sobre pontualidade no pagamento e estado de devolução do imóvel. Cinco minutos de conversa que entregam mais informação que cinco documentos.</p>

<p><strong>Consulta cadastral em fontes públicas.</strong> Confirma se os dados que a pessoa entregou batem, se o CPF está regular, se há divergência clara. É uma camada de proteção contra fraude cadastral, não substitui análise de capacidade.</p>

<h2>O que não vale o esforço</h2>

<p>Algumas práticas que circulam não acrescentam tanto quanto parecem.</p>

<p>Pedir centenas de documentos só pra ter sensação de segurança espanta candidato bom e não filtra os ruins, porque quem quer fraudar consegue forjar quase qualquer papel.</p>

<p>Investigar redes sociais do candidato como filtro principal é pouco confiável. Pode dar contexto, mas não é base pra recusar locação. Pessoa pode ter perfil quieto e ser ótimo inquilino.</p>

<p>Análise muito agressiva de "estilo de vida" entra em terreno escorregadio. Foco no que importa: capacidade financeira, histórico e consistência cadastral.</p>

<h2>O bom equilíbrio</h2>

<p>Checklist enxuto, com cinco a sete pontos bem feitos, costuma render mais que checklist gigante mal executado. Documento pedido tem que ser conferido, não só recebido. Verificação feita tem que ser registrada, não só pensada. É isso que separa locação tranquila de locação que vira problema seis meses depois.</p>
`,
  },
  {
    slug: "contratacao-de-prestador-o-que-conferir",
    title: "Contratação de prestador de serviços: o que conferir antes de fechar",
    description: "Lista de verificações mínimas antes de contratar um prestador, sem virar burocracia.",
    category: "Contratação",
    readTime: 6,
    publishedAt: "2026-02-20",
    content: `
<p>Contratar prestador é diferente de contratar funcionário. Não há vínculo trabalhista, não há período de experiência formal, muitas vezes não há nem entrevista presencial. A relação se constrói rápido, baseada em alinhamento de escopo e preço, e isso deixa um espaço grande pra dor de cabeça depois.</p>

<p>Não é preciso virar departamento jurídico pra contratar bem. Mas vale ter um padrão mínimo que protege os dois lados.</p>

<h2>Comece pelo escopo, não pelo preço</h2>

<p>Muita contratação dá errado porque foi fechada com base só no orçamento. Cliente queria uma coisa, prestador entendeu outra, no final ninguém está satisfeito. Antes de discutir valor, alinhe o que vai ser entregue. Em quantas etapas. Com que prazo. Em que formato. Com quais ajustes incluídos.</p>

<p>Escopo claro reduz a maior parte dos problemas. Prestador sério não tem problema em detalhar entregáveis antes de bater o preço. Quem foge dessa conversa geralmente vai gerar atrito no meio do trabalho.</p>

<h2>Confirme quem é a pessoa do outro lado</h2>

<p>Nome completo, CPF ou CNPJ, contato direto. Se o prestador tem empresa, vale conferir se o CNPJ está ativo. Se for pessoa física, vale conferir CPF.</p>

<p>Isso não é desconfiar do prestador, é parte normal de uma relação comercial. Quem se incomoda em entregar dados básicos pra um cliente novo geralmente está em alguma situação que prefere não explicar. Profissional bem estabelecido tem cadastro pronto, fatura num modelo, recebe pagamento no nome correto.</p>

<h2>Veja portfólio e referências</h2>

<p>Portfólio fala pelo trabalho. Referências falam pelo comportamento. Os dois importam.</p>

<p>Portfólio mostra que a pessoa faz o tipo de trabalho que você precisa. Referência mostra como ela trabalha no dia a dia: se cumpre prazo, se responde com agilidade, se aceita ajustes, se faz cobrança justa.</p>

<p>Profissional que tem três ou quatro indicações de clientes anteriores vale muito mais que profissional com portfólio bonito sem nenhum nome pra te passar. Vale a pena ligar pra duas referências. Pergunta simples: contrataria de novo, teve algum problema, recomenda. Resposta direta diz tudo.</p>

<h2>Documente o combinado</h2>

<p>Não precisa de contrato com cláusulas complexas. Um documento simples, ou até uma sequência de mensagens, com escopo, prazo, valor e forma de pagamento, já cobre boa parte das situações que dão errado.</p>

<p>O que importa é existir registro. Combinado verbal vira "eu nunca disse isso" quando aparece o primeiro desentendimento. Combinado escrito é base pra resolver com calma quando algo precisa ser ajustado.</p>

<h2>Sinal proporcional ao trabalho</h2>

<p>Profissional sério geralmente pede sinal. Faz sentido, porque ele está alocando tempo na sua demanda em vez de outra. Mas o sinal precisa ser proporcional. Sinal de 50% num trabalho que vai durar dois meses é razoável. Pedir 100% adiantado pra começar a trabalhar é sinal de que algo está fora do padrão.</p>

<p>Estrutura comum é entrada, parcela intermediária e quitação na entrega. Pra trabalhos curtos, entrada e finalização bastam.</p>

<h2>Verificações extras pra contratos maiores</h2>

<p>Quanto maior o valor ou mais longo o compromisso, mais vale o cuidado. Pra contratos relevantes, confirmar dados em fontes públicas, pesquisar o nome do profissional, ver se há histórico claro de atuação, são camadas adicionais que não custam quase nada e podem evitar prejuízo grande.</p>

<p>Pra serviço pontual de baixo valor, o checklist fica curto: escopo claro, pagamento combinado, registro mínimo. Pra contrato longo, todos os pontos acima.</p>

<h2>A medida certa</h2>

<p>Contratação tranquila não é a que tem mais papel, é a que tem mais clareza. Quem alinha o que vai ser feito, confere quem é o prestador e documenta o essencial, contrata melhor sem virar burocrata. É esse meio termo que protege os dois lados sem matar a agilidade que deveria fazer parte do trabalho com autônomo.</p>
`,
  },
  {
    slug: "background-check-brasil-o-que-e-legal",
    title: "Background check no Brasil: o que é legal e o que não é",
    description: "Os limites legais de uma verificação de antecedentes no Brasil, conforme a LGPD.",
    category: "Contratação",
    readTime: 8,
    publishedAt: "2026-02-27",
    content: `
<p>O termo background check vem dos Estados Unidos, onde a prática de checar antecedentes pra contratação é bem mais comum e regulamentada. No Brasil, a expressão pegou, mas as regras são diferentes. Vale entender o que cabe na lei e o que entra em terreno escorregadio.</p>

<p>A regra principal vem da LGPD, a Lei Geral de Proteção de Dados, vigente desde 2020. Ela define como dados pessoais podem ser tratados, e isso inclui quase tudo que se faz num background check: nome, CPF, endereço, histórico profissional, registros públicos.</p>

<h2>O que é permitido</h2>

<p>Verificações baseadas em dados públicos e legítimo interesse, com finalidade clara e proporcional. Existem várias situações em que isso é considerado normal.</p>

<p>Confirmação cadastral básica. Nome, CPF, endereço atual, conferindo se os dados que o candidato entregou batem com fontes públicas. Isso é tratamento legítimo quando há interesse claro do contratante e nenhum prejuízo significativo ao titular.</p>

<p>Consulta de antecedentes criminais quando há autorização do candidato e quando a função exige. Funções com porte de arma, lidar com dinheiro, contato com público vulnerável, são exemplos clássicos onde o pedido é aceito.</p>

<p>Verificação de histórico profissional pelas referências que o próprio candidato indicou. Ligar pro emprego anterior, confirmar dados básicos, perguntar como foi a relação.</p>

<p>Análise de capacidade financeira em casos específicos, como contratação pra cargo de gestão financeira ou compliance, sempre com base legal clara e com transparência pro candidato.</p>

<h2>O que entra em zona cinzenta</h2>

<p>Algumas práticas não são proibidas direto, mas exigem cuidado.</p>

<p>Vasculhar redes sociais pessoais do candidato pode entrar em conflito com privacidade. Se o perfil é público, a informação está acessível, mas usar isso pra decidir contratação sem critério claro pode ser questionado. O ideal é definir antecipadamente o que vai ser olhado e por quê.</p>

<p>Consultar bureaus de crédito sem autorização específica do candidato é problema. Mesmo que a empresa tenha cadastro, esse tipo de consulta exige base legal robusta, geralmente consentimento explícito ou cláusula contratual clara.</p>

<p>Pesquisar processos judiciais em que a pessoa figure como parte pode ser feito porque os dados são públicos, mas usar isso pra recusar contratação exige cuidado. Processo trabalhista anterior, por exemplo, não pode ser motivo de discriminação na próxima contratação.</p>

<h2>O que não é permitido</h2>

<p>A LGPD lista categorias de dados sensíveis: origem racial, convicção religiosa, opinião política, filiação sindical, dados de saúde, vida sexual, dados genéticos e biométricos. Tratamento desses dados exige consentimento específico do titular ou base legal muito específica.</p>

<p>Em contratação, basicamente nada disso pode ser pesquisado ou usado como filtro. Discriminação por qualquer dessas categorias é, além de ilegal pela LGPD, vedada pela Constituição e por leis trabalhistas.</p>

<p>Investigações disfarçadas, sem informar o candidato do que está sendo feito, geralmente são problemáticas. A LGPD pede transparência. O candidato precisa saber, em linhas gerais, que tipo de verificação está sendo feita.</p>

<h2>Como fazer de forma adequada</h2>

<p>O caminho que funciona é simples: defina o que precisa verificar, comunique o candidato, peça consentimento quando aplicável, restrinja ao mínimo necessário e documente o processo.</p>

<p>Pra maioria das contratações de pequena empresa, isso significa pedir documentação básica, confirmar dados em fontes públicas, ligar pra referências indicadas pelo próprio candidato. Tudo dentro da legalidade, tudo proporcional ao que está sendo decidido.</p>

<p>Quanto mais a contratação envolve risco, mais profundo pode ser o check, sempre dentro do permitido pela LGPD. Cargo de tesoureiro pede mais que cargo de assistente administrativo. Função com acesso a dados sensíveis pede mais que função de atendimento ao público.</p>

<h2>O ponto central</h2>

<p>Background check no Brasil existe, é legal e é útil. O que muda em relação ao modelo americano é o nível de regulamentação. Você pode verificar, mas precisa fazer dentro de critérios claros. Quem ignora esse limite arrisca processo da pessoa contratada e multa da ANPD.</p>

<p>Quem faz com critério protege a empresa, respeita o candidato e cumpre a lei. Os três objetivos não são incompatíveis. É só questão de estabelecer o processo certo desde o começo.</p>
`,
  },
  {
    slug: "antes-de-contratar-um-freelancer",
    title: "Antes de contratar um freelancer: 4 verificações que fazem sentido",
    description: "Quatro pontos objetivos a checar antes de fechar com um profissional autônomo.",
    category: "Contratação",
    readTime: 5,
    publishedAt: "2026-03-06",
    content: `
<p>Contratar freelancer ficou comum no mercado brasileiro, e nem só pra empresas grandes. Pequeno negócio, autônomo, profissional liberal, todos contratam alguém de fora pra resolver demanda pontual. O processo costuma ser informal, e isso ajuda na agilidade. Só que também abre porta pra problema quando a contratação envolve valor relevante ou prazo apertado.</p>

<p>Não precisa virar processo de RH corporativo. Quatro verificações simples cobrem a maior parte dos cenários e mantêm a leveza que faz sentido nesse tipo de contratação.</p>

<h2>1. Confirmação dos dados básicos</h2>

<p>Nome completo, CPF ou CNPJ, contato direto. Não é exagero, é o mínimo pra fazer qualquer negócio formal. Quem trabalha como freelancer sério tem esses dados na ponta dos dedos. Quem hesita em entregar geralmente está em situação que prefere não explicar.</p>

<p>Os dados precisam bater entre si. Nome igual em todos os contatos, CPF que corresponde, e-mail consistente. Quando alguém se apresenta com um nome no e-mail e outro no documento, é pra entender por quê antes de fechar.</p>

<p>Pra contratos um pouco maiores, vale conferir os dados em fontes públicas. Consulta rápida confirma se o CPF está regular, se há divergência entre o que a pessoa informou e o registro cadastral. É uma camada de proteção contra fraude básica que custa pouco e pode evitar problema sério.</p>

<h2>2. Portfólio que corresponde à demanda</h2>

<p>Freelancer pode ter portfólio incrível em uma área e nenhuma experiência na que você precisa. Vale olhar trabalhos específicos do tipo de serviço que vai ser contratado.</p>

<p>Quem é designer e fez muita identidade visual mas nunca fez animação tem que ser avaliado pela animação, não pela identidade. Quem é redator e escreve muito conteúdo de marketing pode não ser a melhor escolha pra texto técnico denso. Especificidade importa.</p>

<p>Portfólio é também um sinal sobre rigor. Profissional que mantém portfólio atualizado, organizado, com peças bem apresentadas, em geral tem o mesmo cuidado no trabalho contratado. Quem entrega portfólio em pasta bagunçada do drive geralmente entrega serviço do mesmo jeito.</p>

<h2>3. Referência de cliente anterior</h2>

<p>Esse é o passo que mais economiza dor de cabeça. Pede pra indicar dois clientes recentes pra você falar. Profissional bom não tem problema com isso. Profissional ruim trava na resposta ou indica nomes que nem atendem.</p>

<p>Quando você fala com a referência, faz três perguntas: o prestador cumpriu prazo, o trabalho foi bom, contrataria de novo. As respostas, mais que o conteúdo, mostram entonação. Cliente satisfeito fala com naturalidade. Cliente que teve problema disfarça pra não criar atrito, mas o desconforto fica claro.</p>

<h2>4. Alinhamento de processo antes do orçamento</h2>

<p>Antes de aceitar o valor proposto, alinhe como vai funcionar. Frequência de updates. Quem aprova entrega. Quantas rodadas de ajuste estão incluídas. Forma de pagamento. Esse alinhamento revela muito sobre como o profissional trabalha.</p>

<p>Quem responde de forma estruturada, com método claro, sabendo o próprio tempo, costuma entregar com a mesma organização. Quem evita comprometer-se com qualquer combinado nessa fase, geralmente vai improvisar durante o trabalho, e improvisação produz atrito.</p>

<h2>O que esses quatro pontos protegem</h2>

<p>Confirmação cadastral protege contra fraude básica. Portfólio protege contra contratar alguém que não faz o que você precisa. Referência protege contra problema de comportamento. Alinhamento protege contra desencontro de expectativa.</p>

<p>Cada um cobre um tipo diferente de problema, e juntos eles eliminam a maioria das contratações que dão errado. Tempo total dessas quatro etapas: meia hora, em média. Custo de pular: pode chegar a meses de retrabalho e um valor pago que não rendeu o que era esperado.</p>

<p>Freelancer bom passa nos quatro pontos sem dificuldade. Freelancer ruim trava em pelo menos um. Esse filtro sozinho é o que separa contratação tranquila de contratação problemática.</p>
`,
  },
  {
    slug: "due-diligence-de-fornecedores",
    title: "Como pequenas empresas fazem due diligence de fornecedores",
    description: "Como pequenas empresas podem avaliar fornecedores sem precisar de uma estrutura de compliance.",
    category: "Contratação",
    readTime: 7,
    publishedAt: "2026-03-13",
    content: `
<p>Due diligence costuma soar como termo de empresa grande, daquelas que têm departamento jurídico e time de compliance. Mas a lógica por trás é simples e cabe em qualquer porte: conhecer com quem você está fazendo negócio antes de fechar.</p>

<p>Pra pequena empresa, fornecedor problemático é dor de cabeça grande. Atraso na entrega, qualidade abaixo do combinado, faturamento errado, problemas fiscais que respingam em você. Vale a pena ter um processo mínimo de avaliação, mesmo sem estrutura formal de análise.</p>

<h2>Por que avaliar fornecedor</h2>

<p>Existem três tipos de risco principais que uma análise prévia ajuda a reduzir.</p>

<p>Risco operacional. O fornecedor consegue entregar o que está prometendo, no prazo combinado, com a qualidade esperada. Empresa nova, sem histórico, com pouco volume de operação, é mais arriscada que fornecedor estabelecido.</p>

<p>Risco financeiro. Empresa com dívidas significativas, com sócios em situação irregular, com histórico de problemas tributários, traz risco de descontinuidade. Pode falir no meio do contrato, deixando você sem fornecimento.</p>

<p>Risco reputacional. Empresa envolvida em problemas legais ou éticos pode contaminar sua marca por associação. Em alguns setores, isso é mais sério que em outros, mas vale considerar.</p>

<h2>Verificações básicas que cabem em qualquer porte</h2>

<p>Algumas conferências são simples e cobrem o essencial.</p>

<h3>Situação cadastral</h3>
<p>Verificar se o CNPJ está ativo e em situação regular junto à Receita. Consulta gratuita, leva dois minutos no site da Receita Federal. Empresa com CNPJ baixado, suspenso ou com pendência fiscal é alerta imediato.</p>

<h3>Tempo de existência e sócios</h3>
<p>Empresa aberta há quatro meses tem perfil diferente de empresa com dez anos de atuação. Não significa que uma é boa e outra ruim, significa que o tipo de garantia que você precisa pedir varia. Empresa recente pede mais documentação, mais referências, mais sinal antes da operação.</p>

<p>Olhar os sócios também ajuda. Se aparecem em outras empresas com problemas, ou se mudam de quadro societário com muita frequência, é informação relevante.</p>

<h3>Endereço e contatos</h3>
<p>Empresa séria tem endereço fiscal coerente, telefone que atende, e-mail corporativo, site ou perfil profissional. Quando o contato é só um WhatsApp pessoal e o endereço é uma residência sem nenhuma identificação comercial, vale atenção. Pode ser MEI legítimo, mas pode também ser empresa de fachada.</p>

<h3>Referências de outros clientes</h3>
<p>Pede pra fornecedor indicar dois ou três clientes recentes que você pode contatar. Profissional bem estabelecido entrega sem hesitar. Conversa rápida com cliente atual revela mais do que qualquer documento.</p>

<h2>Análise mais profunda pra contratos relevantes</h2>

<p>Quando o contrato envolve valor alto, prazo longo ou criticidade pra operação, vale ampliar a análise.</p>

<p>Histórico em processos judiciais. Sites como tribunais públicos permitem busca pelo CNPJ. Empresa com muito processo trabalhista ou cível ativo pode estar passando por momento financeiro ruim ou ter problema de gestão.</p>

<p>Capacidade técnica. Visita às instalações, se cabe. Ver o time, ver o processo, ver o que existe de fato. Algumas empresas vendem capacidade que não têm. Visita física ou videochamada com tour das operações é desconfiável quando o fornecedor evita.</p>

<p>Saúde financeira em linhas gerais. Pra contratos grandes, vale pedir balanço dos últimos exercícios. Empresa séria entrega sem problema. Empresa que se recusa a mostrar números básicos quando o contrato é significativo pode estar escondendo algo.</p>

<h2>Documentação contratual</h2>

<p>Análise prévia ajuda a decidir contratar. Documentação contratual ajuda a sobreviver quando algo dá errado.</p>

<p>Contrato escrito com escopo claro. Condições de pagamento bem definidas. Cláusulas de rescisão. Multa por descumprimento. Em pequena empresa, contrato simples já cobre muita coisa. Não precisa ter dezenas de páginas, só precisa ter o essencial registrado.</p>

<h2>O processo proporcional</h2>

<p>Due diligence completa pra cada fornecedor é inviável em pequena empresa. Faz sentido escalar a profundidade pela criticidade. Fornecedor de material de escritório vendendo R$ 200 por mês não precisa do mesmo processo que fornecedor de matéria-prima crítica vendendo R$ 50.000.</p>

<p>Quem aplica essa lógica gasta tempo onde faz diferença. Cliente novo pequeno: verificação cadastral básica, referência rápida, pagamento na entrega. Fornecedor relevante: análise mais completa, contrato bem feito, acompanhamento da relação.</p>

<p>Pequena empresa que avalia fornecedor com critério proporcional reduz risco sem virar burocrata. É essa medida que faz a operação rodar sem surpresas.</p>
`,
  },
  {
    slug: "ecommerce-instagram-whatsapp-reduzir-fraude",
    title: "E-commerce próprio: como reduzir fraude em vendas pelo Instagram e WhatsApp",
    description: "Práticas pra quem vende direto pelas redes sociais e não tem um checkout estruturado contra golpes.",
    category: "Empresas",
    readTime: 7,
    publishedAt: "2026-05-17",
    content: `
<p>Vender pelo Instagram e pelo WhatsApp virou a porta de entrada de muito pequeno negócio no Brasil. Cliente vê foto, manda mensagem, combina preço, fecha. É rápido e funciona. O problema é que essa agilidade toda também é o que torna esse tipo de venda alvo fácil pra golpe.</p>

<p>Diferente do e-commerce com checkout estruturado, onde a plataforma faz parte do trabalho de antifraude, na venda por rede social você é o próprio antifraude. Vale ter um processo mínimo.</p>

<h2>Os golpes mais comuns nesse formato</h2>

<p>Conhecer os tipos de fraude ajuda a desenhar o que olhar.</p>

<p>Comprovante falso de Pix. O cliente manda uma imagem de comprovante que parece legítima, você libera a mercadoria, depois descobre que o valor nunca caiu. Edição de imagem ficou muito acessível, e olho destreinado não pega.</p>

<p>Chargeback de cartão. Quando você aceita cartão por link de pagamento e a pessoa contesta a compra dias depois, alegando que não reconhece. Em muitos casos a operadora devolve o dinheiro pro cliente e tira do seu saldo.</p>

<p>Endereço falso pra entrega. Cliente combina entrega num endereço, você manda, ninguém recebe. Geralmente o golpista nem mora ali, usa o endereço como ponto de coleta com terceiros.</p>

<p>Pedido fora do padrão. Compra muito acima do ticket médio, urgência exagerada pra entrega, pressa pra você liberar antes de tudo conferir.</p>

<h2>Cinco práticas que reduzem muito o risco</h2>

<h3>Confirme o Pix no seu próprio extrato</h3>
<p>Nunca libere produto baseado em comprovante enviado por cliente. Comprovante é fácil de forjar. O único comprovante válido é o que aparece na sua conta. Demora um minuto a mais conferir, mas elimina inteiramente esse tipo de golpe.</p>

<h3>Restrinja pagamento parcelado nas primeiras compras</h3>
<p>Cliente novo, pagamento à vista no Pix ou no cartão de débito. Parcelamento só depois de duas ou três compras com bom histórico. Essa regra simples elimina muito chargeback.</p>

<h3>Confirme endereço quando o pedido for grande</h3>
<p>Pra entregas relevantes, ligue ou faça videochamada antes de despachar. Você consegue confirmar visualmente se o endereço existe, se a pessoa que recebe é quem comprou, se o quadro geral faz sentido. Cinco minutos de conferência valem mais que dez dias tentando recuperar mercadoria depois.</p>

<h3>Peça dados básicos pra venda</h3>
<p>Nome completo, CPF, endereço com CEP, telefone. Não como interrogatório, como cadastro normal de cliente. Quem se incomoda em entregar dados pra uma compra real geralmente está te avisando algo. Vale conferir em fontes públicas se os dados batem, principalmente em vendas de ticket alto.</p>

<h3>Confie no estranhamento</h3>
<p>Quase todo comerciante que tomou golpe diz a mesma coisa depois: "estava estranho desde o começo". Pressa exagerada, comportamento incoerente, pedido fora do padrão. Quando algo destoa, vale pausar e questionar antes de fechar.</p>

<h2>Quando o valor justifica camada extra</h2>

<p>Pra vendas acima do seu ticket médio, vale considerar processos adicionais. Pedir foto do documento na hora da compra, conferir o CPF informado, exigir entrada maior no caso de parcelamento. Não é pra toda venda, é pra venda que dói no caixa se virar prejuízo.</p>

<p>Quem vende por rede social fica entre dois extremos: medo de ser chato e perder o cliente, ou pouco rigor e tomar golpe regular. O ponto de equilíbrio é processo consistente, aplicado de forma natural, em vendas em que faz sentido. Cliente bom passa por isso sem reclamar. Cliente ruim some no meio do processo. Esse filtro sozinho já paga o trabalho.</p>
`,
  },
  {
    slug: "cliente-sumiu-cobranca-extrajudicial",
    title: "Cliente sumiu sem pagar: o passo a passo da cobrança extrajudicial",
    description: "Como cobrar uma dívida sem precisar de advogado, do primeiro contato até negativação ou protesto.",
    category: "Empresas",
    readTime: 8,
    publishedAt: "2026-06-07",
    content: `
<p>Antes de pensar em processo, vale lembrar que a maior parte das cobranças se resolve sem nenhuma medida judicial. Cliente que sumiu raramente é golpista profissional. Costuma ser alguém com dificuldade financeira, vergonha ou simplesmente desorganização. Saber conduzir a cobrança fora do tribunal economiza tempo e dinheiro.</p>

<p>Esse texto é um guia prático do que dá pra fazer sem advogado, em ordem de intensidade. Cada etapa serve pra um perfil de devedor diferente.</p>

<h2>Etapa 1: contato amigável</h2>

<p>Mensagem direta, sem ameaça, registrando os fatos. Algo como: "Oi, fulano. Passando pra lembrar do valor de X, referente a Y, com vencimento em Z. Algo aconteceu? Posso ajudar de alguma forma?"</p>

<p>Aqui você quer dois resultados: lembrar a pessoa e abrir canal de diálogo. Muito atraso resolve nessa etapa, porque o devedor estava enrolado com a vida, esqueceu, ou está com dificuldade pontual. Postura amigável dá espaço pra ele responder.</p>

<p>Documente tudo. Print de conversa, registro do contato. Vai ser útil depois se a coisa escalar.</p>

<h2>Etapa 2: proposta de negociação</h2>

<p>Se a pessoa respondeu mas não consegue pagar o valor cheio, abre negociação. Parcelamento, desconto pra quitação à vista, prorrogação de prazo. Cada negociação evita um caminho muito mais longo.</p>

<p>O cálculo é simples: 70% recebido sem dor de cabeça é melhor que 100% perseguido por seis meses. Não é fraqueza, é gestão. Empresa grande faz isso o tempo todo.</p>

<p>Toda negociação tem que ser documentada. Termo simples, pode ser por escrito ou em conversa salva, com valor, parcelas e datas. Isso vira novo combinado, com força jurídica em caso de descumprimento.</p>

<h2>Etapa 3: notificação extrajudicial</h2>

<p>Quando a pessoa não responde ou não cumpre o acordo, sobe um degrau. Notificação extrajudicial é uma comunicação formal, com prazo pra pagamento, descrevendo o débito e as consequências.</p>

<p>Não precisa de advogado. Modelo é simples: identificação das partes, descrição da dívida, prazo (cinco a dez dias úteis), aviso de que medidas serão tomadas em caso de não pagamento. Envia por carta com aviso de recebimento, ou pelos Correios com registro.</p>

<p>Essa etapa pega muito devedor que estava ignorando mensagens. Carta registrada na caixa é diferente de WhatsApp ignorado. Muita gente paga só pelo susto.</p>

<h2>Etapa 4: protesto em cartório</h2>

<p>Pra dívidas com prova documental clara (nota fiscal, contrato, boleto vencido), cabe protesto em cartório. Você leva o documento ao tabelionato de protesto, paga a taxa, e o cartório notifica o devedor com prazo pra pagar.</p>

<p>Se a pessoa não paga, a dívida é protestada, vira pública e fica registrada em bureaus de crédito. Esse impacto faz muito devedor pagar antes do prazo final do cartório. Custo é baixo, geralmente menos de cem reais, e a maior parte é repassada ao devedor quando ele paga.</p>

<p>Cuidado: protesto exige que o documento seja líquido e exigível. Caderno de fiado anotado a mão não serve. Nota fiscal, boleto vencido, contrato assinado, sim.</p>

<h2>Etapa 5: negativação em bureau de crédito</h2>

<p>Cadastros de proteção ao crédito permitem que empresas, incluindo pequenas, registrem inadimplência de seus clientes. Algumas plataformas oferecem esse serviço pra MEI e microempresa, com cadastro simples e custo baixo.</p>

<p>Negativação não recupera o valor diretamente, mas restringe o acesso da pessoa a crédito no mercado. Pra muito devedor, isso pressiona o pagamento de forma efetiva, porque afeta a vida prática dele.</p>

<p>Pra usar, você precisa ter documentação clara da dívida e ter notificado o devedor previamente. Os bureaus exigem comprovação antes de incluir o registro.</p>

<h2>Etapa 6: ação judicial em Pequenas Causas</h2>

<p>Quando nada anterior funcionou e a dívida vale o esforço, o Juizado Especial Cível resolve causas até quarenta salários mínimos sem precisar de advogado. Você apresenta documentação, paga a taxa, e a Justiça notifica a parte. Processo costuma ser rápido, em comparação com Justiça comum.</p>

<p>Vale pra dívida que estava bem documentada desde o começo. Comprovante de venda, conversa registrada, nota fiscal, notificação extrajudicial enviada antes. Quanto mais sólido o processo de cobrança extrajudicial anterior, mais forte o processo judicial.</p>

<h2>A regra geral</h2>

<p>Cobrança boa é cobrança cedo. Cada dia que passa após o vencimento reduz a chance de receber. Quem cobra com naturalidade no primeiro dia depois do atraso recebe mais que quem espera duas semanas pra mandar a primeira mensagem.</p>

<p>O caminho extrajudicial resolve a grande maioria dos casos. Justiça é último recurso, não primeiro. E o processo todo, do contato à negativação, fica muito mais fácil quando a venda foi bem documentada desde o começo.</p>
`,
  },
  {
    slug: "vender-para-mei-ou-microempresa",
    title: "O que muda quando você vende pra MEI ou microempresa",
    description: "As diferenças práticas de vender pra pessoa jurídica de pequeno porte: nota, prazo, formas de pagamento.",
    category: "Empresas",
    readTime: 6,
    publishedAt: "2026-05-24",
    content: `
<p>Vender pra outra empresa, mesmo que pequena, é diferente de vender pra pessoa física. Mudam as expectativas de prazo, de documentação, de pagamento e de relacionamento. Pra quem está começando a atender pessoa jurídica, vale entender as principais diferenças antes de prometer condição que não vai conseguir cumprir.</p>

<h2>Nota fiscal entra na equação</h2>

<p>Pessoa física compra e pronto. Pessoa jurídica geralmente precisa de nota fiscal pra registrar a despesa na contabilidade dela. Mesmo MEI, em muitos casos, prefere comprar de quem emite nota, porque facilita o controle interno.</p>

<p>Se você é MEI, emite Nota Fiscal de Serviço pelo portal do município ou nota avulsa. Microempresa do Simples emite normalmente pelo sistema da prefeitura ou da Sefaz. A diferença é que o tipo de nota e o registro dos impostos seguem regras diferentes pra cada porte.</p>

<p>O que não funciona é vender pra empresa e não dar nenhum tipo de comprovante formal. Cliente pessoa jurídica que aceita compra sem nota geralmente está fazendo algo errado, e isso vira problema seu se a coisa for fiscalizada.</p>

<h2>Prazos diferentes de pagamento</h2>

<p>Empresa não paga na hora. A maioria opera com fluxo de pagamentos definido: certos dias do mês, certas formas de envio, certas exigências de boleto. Combinar prazo pra trinta dias, quarenta e cinco dias ou final do mês é comum, mesmo em transações entre pequenas empresas.</p>

<p>Isso impacta caixa. Se você está acostumado a receber à vista de pessoa física, vender pra empresa com prazo de trinta dias pode descasar seu fluxo. Vale pedir parte adiantada nas primeiras transações, ou pelo menos sinalizar que o prazo padrão é menor pra cliente novo.</p>

<h2>Boleto vira a forma principal</h2>

<p>Empresa pequena raramente paga grandes valores via Pix. O padrão é boleto, porque entra no fluxo contábil de forma rastreada, com data de vencimento, com referência no demonstrativo.</p>

<p>Você precisa ter como emitir boleto. Muito MEI usa bancos digitais que oferecem essa função gratuita ou com baixo custo. Algumas plataformas de pagamento também integram emissão de boleto direto. Vale resolver isso antes de fechar a primeira venda B2B, porque cliente PJ que pediu boleto e você não consegue emitir perde a venda na hora.</p>

<h2>Documentação fica mais robusta</h2>

<p>Cliente pessoa jurídica espera contrato, mesmo que simples. Pode ser uma proposta detalhada com aceite, pode ser um e-mail formal com escopo e valor, pode ser termo de prestação de serviço com algumas cláusulas. Mas alguma documentação formal entra no processo.</p>

<p>Vale ter um modelo básico que você adapta pra cada cliente. Identificação das partes (CNPJ, razão social, endereço), escopo do serviço ou produto, valor, condição de pagamento, prazo, cláusulas básicas de rescisão. Em uma página resolve a maioria dos casos.</p>

<h2>Cadastro do cliente PJ</h2>

<p>Pra vender pra empresa, você precisa do CNPJ, razão social, endereço fiscal e contato do responsável. Vale conferir se o CNPJ está ativo, na Receita Federal, com consulta gratuita e rápida. Empresa com CNPJ baixado ou suspenso é alerta. Pode ser irregularidade pontual, pode ser problema sério, mas exige conversa antes de fechar.</p>

<p>Pra contratos relevantes, vale também verificar dados dos sócios. Sócio em situação irregular, CNPJ recém-aberto, mudanças constantes no quadro societário, são informações que ajudam a calibrar quanto sinal pedir e quanto prazo conceder.</p>

<h2>O ritmo da relação muda</h2>

<p>Cliente pessoa jurídica costuma comprar mais vezes, em ticket menor por compra, com regularidade ao longo do ano. Pessoa física é mais esporádica. Isso muda como você organiza a operação.</p>

<p>Vale criar histórico do cliente, registrar pedidos anteriores, antecipar demandas recorrentes. Cliente PJ que tem boa experiência tende a permanecer, e isso reduz custo de aquisição comparado a buscar pessoa física nova toda hora.</p>

<h2>Vale a pena entrar nesse mercado</h2>

<p>Atender empresa exige um pouco mais de estrutura, mas estabiliza receita. Quem domina os pontos acima entra no B2B com tranquilidade. Os ajustes são mais de processo do que de produto. E uma vez ajustado, a operação roda com previsibilidade maior do que a venda só pra consumidor final.</p>
`,
  },
  {
    slug: "aluguel-para-estudante",
    title: "Aluguel pra estudante: critérios diferentes que valem a pena considerar",
    description: "O perfil estudante tem particularidades. Saiba o que avaliar quando o candidato ao imóvel ainda não tem renda formal.",
    category: "Locação",
    readTime: 6,
    publishedAt: "2026-04-19",
    content: `
<p>Locador que se recusa a alugar pra estudante perde uma fatia importante do mercado, principalmente em cidades universitárias. Estudante costuma ser inquilino tranquilo, com motivo claro pra ocupar o imóvel, com tempo de permanência mais previsível. O problema é que o critério clássico de renda não se aplica, porque a maioria não tem renda própria.</p>

<p>Adaptar a análise pra esse perfil resolve. Não é flexibilizar tudo, é olhar os pontos certos.</p>

<h2>Quem é, na prática, o responsável pelo aluguel</h2>

<p>O estudante mora no imóvel, mas o aluguel quase sempre é pago pelos pais ou responsáveis financeiros. Isso muda completamente a análise. A capacidade financeira que importa é a do responsável, não a do estudante.</p>

<p>Vale incluir o responsável formalmente no contrato. Pode ser como locatário principal, com o estudante como morador, ou como fiador. Os dois formatos funcionam, com o detalhe de que o locatário responde por toda obrigação contratual.</p>

<h2>Documentação que faz sentido</h2>

<p>Do estudante, identificação, CPF e comprovante de matrícula. Esse último é importante por dois motivos: confirma que ele realmente vai estudar na cidade e dá um prazo natural pra duração da estadia.</p>

<p>Do responsável, documentação completa de inquilino padrão. RG, CPF, comprovante de renda, comprovante de residência. Como ele responde pelo contrato, a análise dele é a que conta.</p>

<p>Vale conferir dados em fontes públicas. Tanto do estudante quanto do responsável. Confirma se o que foi declarado bate, se há divergência cadastral, se o CPF de cada um está regular.</p>

<h2>Garantias específicas</h2>

<p>Pra aluguel de estudante, três formatos costumam funcionar bem.</p>

<p>Pais como fiadores, com garantia em imóvel próprio. Tradicional e seguro. Pede certidão atualizada da matrícula do imóvel oferecido.</p>

<p>Pagamento adiantado de vários meses. Comum em estudantes de outras cidades. Família paga seis ou doze meses adiantados pra evitar o trâmite mensal. Pra locador, é a garantia mais sólida.</p>

<p>Seguro fiança em nome do responsável. Funciona se o responsável tem perfil aprovado pela seguradora. A seguradora avalia, você ganha camada extra de análise sem precisar fazer.</p>

<h2>Prazo de contrato adequado</h2>

<p>Contrato de doze meses, com renovação automática, costuma fazer sentido. Estudante segue calendário acadêmico, então mudanças de imóvel costumam ocorrer no início ou fim de semestre. Cláusula que prevê isso facilita a vida dos dois lados.</p>

<p>Multa por rescisão antecipada precisa ser razoável e proporcional ao tempo restante. Cláusula que pune demais a saída antecipada espanta candidato bom.</p>

<h2>Atenção ao que o estudante traz pro imóvel</h2>

<p>Estudante que vai morar com colegas em república traz dinâmica diferente de estudante sozinho. República pede atenção especial ao número de moradores, ao perfil de uso do imóvel e à responsabilidade pela conservação.</p>

<p>Pra república, vale prever cláusulas específicas. Identificação de cada morador no contrato. Responsabilidade conjunta pelo aluguel. Regras sobre rotatividade quando algum sai. Esses pontos previnem discussão depois.</p>

<h2>Conversa direta resolve muito</h2>

<p>Pais costumam estar envolvidos na escolha do imóvel do filho. Conversa franca com os responsáveis na fase de locação alinha expectativa, esclarece dúvidas e diminui ruído.</p>

<p>Pergunte sobre o curso, tempo previsto, planos pra próximos semestres. Não é interrogatório, é entender a situação. Família organizada que está apoiando o filho a estudar fora geralmente conduz a locação com cuidado igual.</p>

<h2>Resultado prático</h2>

<p>Estudante bem analisado, com responsável financeiro firme, costuma ser inquilino melhor que candidato adulto com renda apertada. Sai pouco do imóvel, paga em dia (porque alguém com mais responsabilidade está cuidando), zela razoavelmente pelo espaço.</p>

<p>Locador que sabe analisar esse perfil específico ocupa imóvel rápido em cidade universitária. Quem rejeita estudante de cara perde mercado. É só ajustar o foco da análise pro responsável certo.</p>
`,
  },
  {
    slug: "justica-de-pequenas-causas-cobrar-divida",
    title: "Como funciona a Justiça de Pequenas Causas pra cobrar dívida",
    description: "Caminho prático pra cobrar valores até quarenta salários mínimos sem precisar de advogado.",
    category: "Empresas",
    readTime: 7,
    publishedAt: "2026-06-14",
    content: `
<p>Muita gente desiste de cobrar uma dívida porque acredita que precisa de advogado, processo caro e meses de espera. Em parte dos casos, isso é verdade. Mas pra valores até quarenta salários mínimos, existe um caminho mais direto, mais barato e gratuito até certo limite.</p>

<p>O Juizado Especial Cível, conhecido como Pequenas Causas, foi criado justamente pra resolver disputas de baixo valor sem o peso da Justiça comum. Quem precisa cobrar dívida e perdeu paciência com tentativas extrajudiciais costuma achar nesse caminho a saída.</p>

<h2>Quando o Juizado é o caminho</h2>

<p>Causas cíveis até quarenta salários mínimos podem ser propostas no Juizado. Conversão fica em torno de cinquenta e poucos mil reais no momento atual, dependendo do salário mínimo vigente. Dentro desse limite, o processo corre no Juizado, com regras próprias.</p>

<p>Pra causas até vinte salários mínimos, não é obrigatório contratar advogado. Pra valores entre vinte e quarenta, o advogado vira obrigatório, mas mesmo assim o rito é mais rápido que o da Justiça comum.</p>

<h2>O que você precisa pra abrir a ação</h2>

<p>Documentos básicos do autor: identidade, CPF, comprovante de residência. Documentos da dívida: nota fiscal, contrato, boleto, recibo, qualquer prova de que o débito existe. Identificação do devedor: nome completo, CPF, endereço.</p>

<p>Quanto mais sólida a documentação, mais forte o processo. Conversa de WhatsApp salva, comprovante de notificação extrajudicial enviada antes, evidência de que houve tentativa de cobrança amigável. Tudo isso pesa.</p>

<p>Você reúne tudo e procura o Juizado da sua região. Em muitas cidades, é possível abrir o processo direto, sem agendamento, levando o material e preenchendo formulário no local. Em outras, é obrigatório o sistema online.</p>

<h2>O rito é mais ágil</h2>

<p>Depois que o processo é aberto, o juiz analisa e marca uma audiência de conciliação. Nessa audiência, devedor e credor se encontram, com mediador, pra tentar acordo. Boa parte dos processos termina aqui, com acordo registrado.</p>

<p>Se não há acordo, o caso vai pra audiência de instrução. Cada parte apresenta argumentos e provas. O juiz decide na hora ou em poucos dias. A sentença sai relativamente rápido, em comparação com Justiça comum.</p>

<p>Em causas claras, com documentação bem montada, tudo se resolve em poucos meses. Em casos mais complexos, pode levar mais tempo, mas raramente chega aos prazos de Justiça comum.</p>

<h2>Sem custo na entrada</h2>

<p>Pra causas até vinte salários mínimos, não há custo de processo na entrada. Você abre a ação gratuitamente. Custas só são cobradas se você perder e recorrer, ou em situações específicas previstas em lei.</p>

<p>Isso muda muito a equação de cobrar dívida pequena. Não vale a pena pagar advogado pra cobrar mil reais. Pelo Juizado, sem advogado e sem custo de entrada, faz sentido.</p>

<h2>Limitações que vale conhecer</h2>

<p>Nem toda causa cabe no Juizado. Algumas matérias são excluídas, como questões tributárias, falimentares, e algumas relações específicas de família. Pra cobrança comum de dívida entre pessoa física, entre pessoa física e empresa, ou entre empresas pequenas, cabe.</p>

<p>Outro ponto: a execução da sentença, quando o devedor não paga voluntariamente, pode demorar. Você ganhou na Justiça, mas precisa ir atrás pra penhorar bens ou bloquear conta. Esse processo posterior também pode ser feito no próprio Juizado, com algum esforço adicional.</p>

<h2>Quando vale a pena tentar</h2>

<p>Vale a pena quando você tem documentação sólida da dívida e o devedor não paga apesar das tentativas anteriores. Não vale quando você não tem prova nenhuma, ou quando o valor é tão pequeno que não compensa o tempo investido.</p>

<p>Pra dívidas entre quinhentos e dez mil reais, com documentação razoável, o Juizado costuma ser o melhor caminho. Faz pressão real sobre o devedor, custa pouco e resolve em prazo razoável.</p>

<h2>O lembrete que vale</h2>

<p>O processo só funciona com base no que foi documentado antes da dívida virar problema. Quem vende sem nota, sem recibo, sem registro algum, chega no Juizado com material fraco e pode perder mesmo tendo razão. A cobrança extrajudicial e judicial são tão fortes quanto a venda foi bem feita lá no começo.</p>

<p>Quem documenta a venda como rotina, mesmo as pequenas, tem ferramenta na mão pra cobrar quando precisar. Quem confia só no aperto de mão fica com prejuízo quando o aperto não vale.</p>
`,
  },
  {
    slug: "locacao-por-temporada-checar-hospede",
    title: "Locação por temporada: o que checar antes de receber o hóspede",
    description: "Pra quem aluga pelo Airbnb, Booking ou direto: cuidados práticos antes de entregar a chave.",
    category: "Locação",
    readTime: 6,
    publishedAt: "2026-05-31",
    content: `
<p>Locação por temporada virou fonte de renda relevante pra muita gente. Pode ser um imóvel inteiro pelo Airbnb, um quarto extra, uma casa de praia que fica vazia parte do ano. A facilidade das plataformas tirou parte do peso da operação, mas não eliminou um risco que muito anfitrião subestima: receber alguém que vai dar problema dentro de casa.</p>

<p>Diferente da locação tradicional, o hóspede de temporada chega rápido, fica pouco e some logo depois. Isso dificulta cobrança posterior e protege quem age mal. Por outro lado, dá pra reduzir bastante problema com verificação prévia bem feita.</p>

<h2>O que a plataforma já cobre</h2>

<p>Airbnb, Booking e similares fazem alguma triagem básica. Identidade verificada (em parte), histórico de avaliações de hóspedes anteriores, garantia mínima em caso de dano. Isso já elimina muito problema na entrada, e por isso anfitrião novo costuma achar suficiente.</p>

<p>O problema é que essa camada cobre apenas o básico. Hóspede com perfil novo, sem avaliação anterior, com foto genérica e nome sem sobrenome completo, escapa do filtro automático. E hóspede experiente sabe como manter pontuação suficiente pra continuar reservando, mesmo tendo causado problemas antes.</p>

<h2>O que vale olhar antes de aceitar</h2>

<p>Quando a reserva chega, dedica três minutos a conferir alguns pontos.</p>

<p>Perfil completo. Foto real (não logotipo, não desenho), nome completo, biografia mínima. Perfil sem nenhuma informação além do necessário pra reservar é sinal de descuido ou de intenção de não se identificar muito.</p>

<p>Avaliações recebidas. Não é o número, é o conteúdo. Avaliações curtas e genéricas podem ser de outros anfitriões que evitaram conflito. Avaliações detalhadas, positivas, com menção a comportamento, são muito mais confiáveis. Falta total de avaliação pede atenção, especialmente se o motivo da viagem for vago.</p>

<p>Motivo da estadia. Plataforma pede em geral, mas é fácil deixar vago. Hóspede que detalha (viagem com a família, casamento da prima, evento profissional) traz mais conforto do que hóspede que escreve "passar uns dias".</p>

<p>Quantidade declarada de hóspedes. Bate com a reserva. Quando o número parece pequeno demais pro tipo de imóvel, ou quando há indicação de que vai trazer mais gente "se precisar", é sinal de festa, e isso é problema clássico da locação por temporada.</p>

<h2>Comunicação prévia revela muito</h2>

<p>Antes de confirmar a reserva, troca duas ou três mensagens com o hóspede. Não precisa ser interrogatório. Confirmação de horário de chegada, pergunta sobre o motivo da viagem, esclarecimento sobre regras da casa.</p>

<p>Como a pessoa responde, em quanto tempo, com que tom, diz muito. Resposta direta e cordial é boa indicação. Resposta evasiva ou agressiva quando você pergunta o básico costuma se traduzir em problema na estadia.</p>

<h2>Regras explícitas reduzem dor de cabeça</h2>

<p>Pra cada reserva, o hóspede precisa ter visto e aceito as regras antes de entrar. Festa, fumantes, animais, número máximo de pessoas, horário de silêncio. Cada plataforma permite registrar isso. Não pula essa parte por achar que "está implícito".</p>

<p>Quando a regra está clara no anúncio e no chat, e o hóspede a quebra, você tem base pra acionar a plataforma. Sem registro, o problema vira sua palavra contra a dele.</p>

<h2>Caução e identificação na chegada</h2>

<p>Pra reservas mais longas ou de maior valor, vale pedir caução refundável. Algumas plataformas permitem reter um valor que é devolvido se nada for danificado. Funciona como sinal de que o hóspede está comprometido com a conservação do espaço.</p>

<p>Na chegada, mesmo informalmente, vale conferir o documento da pessoa que está se hospedando. Bate com o nome da reserva. Se quem chega não é quem reservou, ou se aparece mais gente do que o combinado, é hora de pausar antes de entregar a chave.</p>

<h2>Reservas diretas, fora de plataforma</h2>

<p>Quando o hóspede contata direto, sem plataforma, o nível de cuidado precisa ser maior. Não há camada de triagem nenhuma do meio do caminho. Aí vale pedir nome completo, CPF e documento com foto antes de confirmar.</p>

<p>Pra reservas relevantes, confirmar dados em fontes públicas ajuda. Confirma se o CPF está regular, se os dados batem, se há divergência cadastral. Não vai impedir todo problema, mas elimina a fraude mais básica, que é a pessoa simplesmente passar dado errado pra dificultar localização depois.</p>

<h2>O bom equilíbrio</h2>

<p>Locação por temporada é negócio bom porque o ciclo é curto e o retorno por noite é alto. Quem mantém o cuidado mínimo opera por anos sem problema. Quem confia só na plataforma, no automatismo, mais cedo ou mais tarde recebe um hóspede que muda a estatística.</p>

<p>Três minutos antes de aceitar a reserva, duas mensagens no chat, regras claras no anúncio. Esse processo simples filtra a maior parte dos problemas que aparecem nesse tipo de operação.</p>
`,
  },
  {
    slug: "inquilino-atrasou-quando-agir",
    title: "Inquilino atrasou: quando agir e como agir sem entrar em despejo",
    description: "Como conduzir o atraso de aluguel pra resolver antes de chegar em processo de despejo.",
    category: "Locação",
    readTime: 7,
    publishedAt: "2026-06-21",
    content: `
<p>Atraso de aluguel mexe com qualquer locador. Há a preocupação financeira óbvia, mas também a dúvida sobre como agir. Cobrar cedo demais pode ser visto como desrespeito. Esperar demais alimenta dívida que vai virando bola de neve. Saber o ritmo certo de cobrança evita tanto o constrangimento desnecessário quanto a perda total.</p>

<h2>Primeiro dia de atraso: o que fazer</h2>

<p>Atrasou um dia, mensagem amigável. Algo direto, sem peso, mais como lembrete do que como cobrança. "Oi, fulano. Notei que o aluguel não caiu ainda. Tudo certo? Qualquer dificuldade me avisa."</p>

<p>Por incrível que pareça, muito atraso resolve aqui. A pessoa esqueceu, deixou pra depois, está com algum desencontro bancário. Mensagem cordial no primeiro dia traz pagamento na sequência sem nenhum atrito.</p>

<p>O que não faz sentido é deixar passar dias sem nenhum contato. Quanto mais tempo passa, mais difícil receber e mais constrangedora vai ficando a conversa quando ela finalmente acontecer.</p>

<h2>Uma semana sem resposta: subindo o tom</h2>

<p>Se passou uma semana e não houve resposta, segunda mensagem, mais formal. Registra a data do vencimento, o valor em aberto, e pede retorno. Pode ser por WhatsApp ou e-mail. O importante é deixar rastro escrito.</p>

<p>Aqui vale também tentar ligação. Inquilino que ignora WhatsApp às vezes atende quando vê chamada. Conversa por voz, calma, perguntando o que está acontecendo, costuma destravar a situação.</p>

<p>Se a pessoa responde admitindo dificuldade, é hora de negociar. Não precisa ser o valor todo, não precisa ser de uma vez. Parcelamento, prazo estendido, qualquer combinação que vire dinheiro entrando.</p>

<h2>Duas semanas: notificação formal</h2>

<p>Passou duas semanas sem solução, é hora de notificação formal. Envia uma carta, ou comunicação por escrito registrada, descrevendo o débito, o vencimento original, e dando prazo pra regularização.</p>

<p>A notificação serve como prova de que houve tentativa formal de resolver. Se a coisa escalar pra processo, esse documento é base. Sem notificação, fica mais difícil justificar ação judicial.</p>

<p>Ainda nessa fase, mantenha tom respeitoso. Notificação não precisa ser ameaça, precisa ser comunicação clara. Inquilino que estava enrolado às vezes paga só pela formalidade do papel.</p>

<h2>Acordo escrito quando há resposta</h2>

<p>Quando o inquilino responde dispondo a regularizar, formaliza por escrito. Quanto vai pagar, quando vai pagar, em quantas parcelas. Pode ser termo simples assinado, pode ser conversa por escrito com confirmação. O importante é existir registro.</p>

<p>Esse acordo tem duas funções. Primeira, dá segurança ao inquilino de que o locador está sendo razoável. Segunda, vira documento caso o acordo não seja cumprido, o que muda o cenário pra cobrança seguinte.</p>

<h2>Quando não há retorno: caminhos extrajudiciais</h2>

<p>Inquilino que ignora tudo, depois de várias tentativas, pede ação mais firme. Antes de pensar em despejo, há caminhos extrajudiciais que costumam funcionar.</p>

<p>Negativação em bureau de crédito é um deles. Algumas plataformas permitem que locadores registrem inadimplência diretamente. O impacto na vida financeira do devedor costuma ser forte o suficiente pra forçar pagamento ou acordo.</p>

<p>Protesto em cartório também serve, desde que haja documentação clara (contrato, comprovante de inadimplência). O custo é baixo e a pressão é alta.</p>

<p>Pra muitos casos, esses dois caminhos resolvem antes do despejo. Inquilino que enrolou semanas paga em poucos dias quando percebe que vai entrar pra registro público de devedor.</p>

<h2>Quando despejo entra na mesa</h2>

<p>Três meses de atraso é o gatilho clássico da ação de despejo por falta de pagamento, prevista na Lei do Inquilinato. Antes disso, dá pra agir, mas o processo costuma escalar a partir desse ponto.</p>

<p>Despejo é caminho judicial. Vai exigir advogado, custas, tempo. A ação de despejo por falta de pagamento corre relativamente rápido em comparação com outras ações cíveis, mas ainda assim leva meses.</p>

<p>Vale a pena, geralmente, só quando todas as outras tentativas falharam e quando o valor em aberto justifica. Pra atraso curto, é exagero. Pra inadimplência longa e sem perspectiva de resolução, é o instrumento legítimo.</p>

<h2>O custo de não agir</h2>

<p>Locador que ignora atraso, esperando que a coisa se resolva sozinha, costuma terminar com dívida acumulada e imóvel ocupado por inquilino que não vai pagar nem desocupar voluntariamente. A passividade no início vira problema sério no fim.</p>

<p>Cobrança consistente, no ritmo certo, em geral resolve. Inquilino bom não te abandona sem aviso. E inquilino que estava tentando se esconder costuma reagir antes de o caso virar judicial.</p>

<h2>A regra simples</h2>

<p>Aja cedo, com tom adequado pra cada etapa, e documente tudo. Esse trio resolve a maior parte das situações de atraso sem nunca chegar a despejo. Quem pula etapas, espera demais, ou age agressivamente cedo demais, transforma uma cobrança simples num problema longo.</p>
`,
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);

export const getPostsSorted = (): BlogPost[] =>
  [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
