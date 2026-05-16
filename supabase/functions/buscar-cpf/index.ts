import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

function generateSearchId(): string {
  return Math.floor(10000000 + Math.random() * 90000000).toString()
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

function formatDateTime(): string {
  const now = new Date()
  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const year = now.getFullYear()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
}

function maskRemainingNames(fullName: string, visibleParts = 2): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean)
  if (parts.length <= visibleParts) return parts.join(' ')
  const visible = parts.slice(0, visibleParts).join(' ')
  const hiddenParts = parts.slice(visibleParts)
  const masked = hiddenParts.map(word => '*'.repeat(word.length)).join(' ')
  return `${visible} ${masked}`
}

function maskBirthDate(dateStr: string): string {
  if (!dateStr) return dateStr
  const slashMatch = dateStr.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
  if (slashMatch) {
    return `${slashMatch[1]}/**/****`
  }
  const isoMatch = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (isoMatch) {
    return `${isoMatch[3]}/**/****`
  }
  return dateStr
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight
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
    const { cpf, userId } = body

    if (!cpf) {
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'CPF é obrigatório' }
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const cpfDigits = cpf.replace(/\D/g, '')

    if (cpfDigits.length !== 11) {
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'CPF deve conter 11 dígitos' }
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Chamar API Jarvis
    const jarvisUrl = `https://jarvis-app.referencia.company/webhook/KU51c15GTAD2azzj?cpf=${cpfDigits}&dados_completos=false`

    const startTime = Date.now()
    console.log('[buscar-cpf] Iniciando requisição Jarvis API...')

    const jarvisResponse = await fetch(jarvisUrl, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'API-KEY': jarvisApiKey
      }
    })

    const duration = Date.now() - startTime
    console.log(`[buscar-cpf] Resposta Jarvis API recebida em ${duration}ms`)

    if (!jarvisResponse.ok) {
      const errorText = await jarvisResponse.text()
      console.error(`[buscar-cpf] Jarvis API error (${duration}ms):`, errorText)
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: jarvisResponse.status === 404 ? 'CPF não encontrado' : 'Erro na API externa' }
        }),
        { status: jarvisResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    let jarvisData
    try {
      const responseText = await jarvisResponse.text()
      
      if (!responseText) {
        console.error('[buscar-cpf] Resposta vazia - falha na consulta do CPF')
        return new Response(
          JSON.stringify({
            success: false,
            error: { message: 'Ocorreu um erro na consulta deste CPF. Por favor, retorne mais tarde.' }
          }),
          { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      jarvisData = JSON.parse(responseText)
      console.log(`[buscar-cpf] Dados Jarvis processados com sucesso em ${Date.now() - startTime}ms`)
    } catch (parseError) {
      console.error(`[buscar-cpf] Erro ao processar resposta (${Date.now() - startTime}ms):`, parseError)
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'Erro ao processar resposta da API externa' }
        }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const result = Array.isArray(jarvisData) ? jarvisData[0] : jarvisData

    if (!result) {
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'CPF não encontrado' }
        }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Extrair e formatar dados
    const nome = result.nome || ''
    const sexo = result.sexo || ''
    const dataNascimento = formatDate(result.data_nascimento || '')
    const searchId = generateSearchId()
    const createdAt = formatDateTime()

    console.log('[buscar-cpf] Dados formatados:', { nome, sexo, dataNascimento, searchId })

    // Salvar no banco de dados
    const dbStartTime = Date.now()
    const { error: insertError } = await supabase
      .from('cpfs')
      .insert({
        cpf: cpfDigits,
        nome,
        sexo,
        data_nascimento: dataNascimento,
        search_id: searchId,
        created_at: createdAt,
        user_id: userId || null
      })

    const dbDuration = Date.now() - dbStartTime
    console.log(`[buscar-cpf] Inserção no banco de dados concluída em ${dbDuration}ms`)

    if (insertError) {
      console.error('[buscar-cpf] Database insert error:', insertError)
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'Erro ao salvar dados no banco' }
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('[buscar-cpf] Inserção bem-sucedida, search_id:', searchId)

    return new Response(
      JSON.stringify({
        success: true,
        searchId,
        data: {
          cpf: cpfDigits,
          nome_mascarado: maskRemainingNames(nome, 2),
          sexo,
          data_nascimento: maskBirthDate(dataNascimento)
        }
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error)
    console.error('[buscar-cpf] ERROR:', errorMsg)
    console.error('[buscar-cpf] ERROR type:', error instanceof Error ? error.name : typeof error)
    console.error('[buscar-cpf] ERROR stack:', error instanceof Error ? error.stack : 'N/A')
    
    return new Response(
      JSON.stringify({
        success: false,
        error: { message: 'Erro interno do servidor', details: errorMsg }
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
