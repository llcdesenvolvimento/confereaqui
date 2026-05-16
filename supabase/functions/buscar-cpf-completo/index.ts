import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
    return dateStr
  }
  if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) {
    const [year, month, day] = dateStr.split('T')[0].split('-')
    return `${day}/${month}/${year}`
  }
  return dateStr
}

function normalizeArray(value: unknown): unknown[] | null {
  if (!value) return null
  if (Array.isArray(value)) return value
  return [value]
}

function toInt(value: unknown): number | null {
  if (value === null || value === undefined || value === '') return null
  const parsed = Number(value)
  return Number.isNaN(parsed) ? null : Math.trunc(parsed)
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    const jarvisApiKey = Deno.env.get('JARVIS_API_KEY')

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables')
    }

    if (!jarvisApiKey) {
      throw new Error('Missing JARVIS_API_KEY environment variable')
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const body = await req.json()
    const { cpf, searchId } = body ?? {}

    if (!cpf || !searchId) {
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'CPF e searchId sao obrigatorios' },
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const cpfDigits = String(cpf).replace(/\D/g, '')
    if (cpfDigits.length !== 11) {
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'CPF deve conter 11 digitos' },
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const jarvisUrl = `https://jarvis-app.referencia.company/webhook/KU51c15GTAD2azzj?cpf=${cpfDigits}&dados_completos=true`
    
    const startTime = Date.now()
    console.log('[buscar-cpf-completo] Iniciando requisição Jarvis API...')

    const jarvisResponse = await fetch(jarvisUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'API-KEY': jarvisApiKey,
      },
    })

    const duration = Date.now() - startTime
    console.log(`[buscar-cpf-completo] Resposta Jarvis API recebida em ${duration}ms`)

    if (!jarvisResponse.ok) {
      const errorText = await jarvisResponse.text()
      console.error(`[buscar-cpf-completo] Jarvis API error (${duration}ms):`, errorText)
      return new Response(
        JSON.stringify({
          success: false,
          error: {
            message: jarvisResponse.status === 404 ? 'CPF nao encontrado' : 'Erro na API externa',
            details: errorText,
          },
        }),
        { status: jarvisResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const responseText = await jarvisResponse.text()

    let jarvisData: any
    if (!responseText) {
      console.error('[buscar-cpf-completo] Resposta vazia - falha na consulta do CPF')
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'Ocorreu um erro na consulta deste CPF. Por favor, retorne mais tarde.' },
        }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    try {
      jarvisData = JSON.parse(responseText)
      console.log(`[buscar-cpf-completo] Dados Jarvis processados com sucesso em ${Date.now() - startTime}ms`)
    } catch (parseError) {
      console.error(`[buscar-cpf-completo] Erro ao processar resposta (${Date.now() - startTime}ms):`, parseError)
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'Erro ao processar resposta da API externa' },
        }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const result = Array.isArray(jarvisData) ? jarvisData[0] : jarvisData
    if (!result) {
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'CPF nao encontrado' },
        }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const signosJson = typeof result.signos === 'object' && result.signos
      ? result.signos
      : (typeof result.signo === 'object' && result.signo ? result.signo : null)
    const signoValue = signosJson ? signosJson.zodiaco : result.signo

    const updatePayload = {
      situacao_do_cpf: result.situacao_do_cpf ?? result.situacao_cpf ?? null,
      nome_mae: result.nome_mae ?? result.mae?.nome ?? null,
      cpf_mae: result.cpf_mae ?? result.mae?.cpf ?? null,
      data_nascimento_mae: formatDate(result.data_nascimento_mae ?? result.mae?.data_nascimento ?? ''),
      obito: result.obito ?? null,
      idade: toInt(result.idade),
      signo: signoValue ?? null,
      signos: signosJson,
      nacionalidade: result.nacionalidade ?? null,
      estado_civil: result.estado_civil ?? null,
      renda: result.renda ?? null,
      ocupacao: result.ocupacao ?? null,
      risco_credito: result.risco_credito ?? null,
      emails: normalizeArray(result.emails),
      telefones: normalizeArray(result.telefones),
      enderecos: normalizeArray(result.enderecos),
      historico_profissional: normalizeArray(result.historico_profissional),
      participacao_societaria: normalizeArray(result.participacao_societaria),
      parentes: normalizeArray(result.parentes ?? result.vinculos),
    }

    const dbStartTime = Date.now()
    const { data: updated, error: updateError } = await supabase
      .from('cpfs')
      .update(updatePayload)
      .eq('search_id', searchId)
      .select('search_id')
      .single()

    const dbDuration = Date.now() - dbStartTime
    console.log(`[buscar-cpf-completo] Atualização no banco de dados concluída em ${dbDuration}ms`)
    console.log(`[buscar-cpf-completo] Tempo total: ${Date.now() - startTime}ms (API: ${duration}ms, BD: ${dbDuration}ms)`)

    if (updateError || !updated) {
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'Erro ao atualizar dados do CPF' },
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        searchId,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error)
    return new Response(
      JSON.stringify({
        success: false,
        error: { message: 'Erro interno do servidor', details: errorMsg },
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
