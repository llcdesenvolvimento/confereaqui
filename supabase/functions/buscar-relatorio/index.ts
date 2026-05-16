import { createClient } from 'jsr:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const BATCH_SIZE = 3 // Libera 3 itens por vez

interface UpsellCounts {
  celulares: number
  enderecos: number
  empresas: number
  parentes: number
}

// Função para deduplicate parentes baseado no CPF normalizado
const deduplicateParentes = (parentes: any[] | null): any[] => {
  if (!parentes || !Array.isArray(parentes)) return []
  
  // Filtrar itens inválidos
  const validParentes = parentes.filter(item => {
    if (typeof item !== 'object' || item === null) return false
    const hasNome = item.nome || item.nome_vinculo || item.nome_parente
    const hasCpf = item.cpf || item.cpf_vinculo || item.cpf_parente
    return hasNome || hasCpf
  })
  
  // Remover duplicados baseado no CPF normalizado
  const seen = new Set<string>()
  const unique = validParentes.filter(item => {
    const cpf = item.cpf || item.cpf_vinculo || item.cpf_parente
    if (!cpf) return true // Mantém items sem CPF
    
    const cpfNormalizado = cpf.replace(/\D/g, '')
    if (seen.has(cpfNormalizado)) return false
    
    seen.add(cpfNormalizado)
    return true
  })
  
  return unique
}

// Função para deduplicate participações societárias baseado no CNPJ normalizado
const deduplicateEmpresas = (empresas: any[] | null): any[] => {
  if (!empresas || !Array.isArray(empresas)) return []
  
  // Filtrar itens inválidos
  const validEmpresas = empresas.filter(item => {
    if (typeof item !== 'object' || item === null) return false
    const hasCnpj = item.cnpj
    const hasRazaoSocial = item.razao_social || item.nome_empresa
    return hasCnpj || hasRazaoSocial
  })
  
  // Remover duplicados baseado no CNPJ normalizado
  const seen = new Set<string>()
  const unique = validEmpresas.filter(item => {
    const cnpj = item.cnpj
    if (!cnpj) return true // Mantém items sem CNPJ
    
    const cnpjNormalizado = cnpj.replace(/\D/g, '')
    if (seen.has(cnpjNormalizado)) return false
    
    seen.add(cnpjNormalizado)
    return true
  })
  
  return unique
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { search_id, transaction_id } = await req.json()

    if (!search_id) {
      return new Response(
        JSON.stringify({ error: 'search_id é obrigatório' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

    // 1️⃣ Verificar se o pagamento principal está pago
    const { data: mainPayment, error: mainPaymentError } = await supabase
      .from('cpf_payments')
      .select('status, transaction_id')
      .eq('search_id', search_id)
      .eq('tipo', 'relatório completo')
      .eq('status', 'paid')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()

    if (mainPaymentError) {
      return new Response(
        JSON.stringify({ error: 'Erro ao verificar pagamento', details: mainPaymentError.message }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    let isBypass = false

    if (!mainPayment) {
      const { data: bypassData, error: bypassError } = await supabase
        .from('cpfs')
        .select('is_bypass')
        .eq('search_id', search_id)
        .maybeSingle()

      if (bypassError) {
        return new Response(
          JSON.stringify({ error: 'Erro ao verificar bypass', details: bypassError.message }),
          {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }

      isBypass = !!bypassData?.is_bypass
    }

    if (!mainPayment && !isBypass) {
      return new Response(
        JSON.stringify({ 
          paid: false,
          error: 'Pagamento não confirmado. Complete o pagamento para visualizar o relatório.' 
        }),
        { 
          status: 403,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // 2️⃣ Contar quantos batches de cada upsell foram pagos
    const { data: upsellPayments, error: upsellError } = await supabase
      .from('cpf_payments')
      .select('tipo, status, transaction_id')
      .eq('search_id', search_id)
      .eq('status', 'paid')
      .in('tipo', ['celulares', 'enderecos', 'empresas', 'parentes'])

    if (upsellError) {
      // Não bloqueia, apenas não libera upsells
    }

    const upsellCounts: UpsellCounts = {
      celulares: 0,
      enderecos: 0,
      empresas: 0,
      parentes: 0,
    }

    if (upsellPayments) {
      for (const payment of upsellPayments) {
        const tipo = payment.tipo as keyof UpsellCounts
        if (tipo in upsellCounts) {
          upsellCounts[tipo]++
        }
      }
    }

    // 3️⃣ Buscar dados do CPF
    const { data: cpfData, error: cpfError } = await supabase
      .from('cpfs')
      .select('*')
      .eq('search_id', search_id)
      .single()

    if (cpfError || !cpfData) {
      return new Response(
        JSON.stringify({ error: 'Dados não encontrados', details: cpfError?.message }),
        { 
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // 4️⃣ Aplicar limitação de dados baseado nos upsells pagos
    const limitArray = (arr: any[] | null, upsellType: keyof UpsellCounts): any[] => {
      if (!arr || !Array.isArray(arr)) return []
      if (isBypass) return arr
      const batchesPaid = upsellCounts[upsellType]
      const maxItems = batchesPaid * BATCH_SIZE
      return maxItems > 0 ? arr.slice(0, maxItems) : []
    }

    // Dados básicos sempre liberados (quando pagamento principal está pago)
    const basicData = {
      cpf: cpfData.cpf,
      nome: cpfData.nome,
      sexo: cpfData.sexo,
      data_nascimento: cpfData.data_nascimento,
      idade: cpfData.idade,
      signo: cpfData.signo,
      signos: cpfData.signos,
      nacionalidade: cpfData.nacionalidade,
      nome_mae: cpfData.nome_mae,
      cpf_mae: cpfData.cpf_mae,
      situacao_do_cpf: cpfData.situacao_do_cpf,
      estado_civil: cpfData.estado_civil,
      obito: cpfData.obito,
      emails: cpfData.emails || [],
      historico_profissional: cpfData.historico_profissional || [],
      renda: cpfData.renda,
      ocupacao: cpfData.ocupacao,
      risco_credito: cpfData.risco_credito,
    }

    // Arrays que são desbloqueados via upsells (3 em 3)
    const telefones = limitArray(cpfData.telefones, 'celulares')
    const enderecos = limitArray(cpfData.enderecos, 'enderecos')
    const participacao_societaria = limitArray(cpfData.participacao_societaria, 'empresas')
    const parentes = limitArray(cpfData.parentes, 'parentes')

    // Totais reais disponíveis no banco (para calcular quantos batches ainda podem ser comprados)
    // Para parentes e empresas, usar deduplicação antes de contar
    const parentesUnicos = deduplicateParentes(cpfData.parentes)
    const empresasUnicas = deduplicateEmpresas(cpfData.participacao_societaria)
    const totalTelefones = Array.isArray(cpfData.telefones) ? cpfData.telefones.length : 0
    const totalEnderecos = Array.isArray(cpfData.enderecos) ? cpfData.enderecos.length : 0
    const totalEmpresas = empresasUnicas.length
    const totalParentes = parentesUnicos.length

    console.log('✅ Dados processados e limitados:', {
      telefones_liberados: telefones.length,
      telefones_total: totalTelefones,
      enderecos_liberados: enderecos.length,
      enderecos_total: totalEnderecos,
      empresas_liberadas: participacao_societaria.length,
      empresas_total: totalEmpresas,
      parentes_liberados: parentes.length,
      parentes_total: totalParentes,
    })

    return new Response(
      JSON.stringify({
        paid: true,
        transaction_id: mainPayment?.transaction_id ?? transaction_id ?? null,
        search_id: search_id,
        
        // Dados básicos (sempre liberados)
        ...basicData,
        
        // Arrays controlados por upsells
        telefones,
        enderecos,
        participacao_societaria,
        parentes,
        
        // Metadados para controle de upsells no frontend
        upsells_paid: {
          celulares: upsellCounts.celulares,
          enderecos: upsellCounts.enderecos,
          empresas: upsellCounts.empresas,
          parentes: upsellCounts.parentes,
        },
        
        // Totais disponíveis
        totais: {
          telefones: totalTelefones,
          enderecos: totalEnderecos,
          participacao_societaria: totalEmpresas,
          parentes: totalParentes,
        },
        
        // Quantos ainda faltam desbloquear
        faltam_desbloquear: {
          telefones: Math.max(0, totalTelefones - telefones.length),
          enderecos: Math.max(0, totalEnderecos - enderecos.length),
          participacao_societaria: Math.max(0, totalEmpresas - participacao_societaria.length),
          parentes: Math.max(0, totalParentes - parentes.length),
        },
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('❌ Erro ao buscar relatório:', error)
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
