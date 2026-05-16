import { createClient } from 'jsr:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const formatDateTimeBR = (date: Date): string => {
  const pad = (value: number) => String(value).padStart(2, '0')
  const dd = pad(date.getDate())
  const mm = pad(date.getMonth() + 1)
  const yyyy = date.getFullYear()
  const hh = pad(date.getHours())
  const min = pad(date.getMinutes())
  const ss = pad(date.getSeconds())
  return `${dd}/${mm}/${yyyy} ${hh}:${min}:${ss}`
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { nome, cpf, email, confirmacaoTitular, confirmacaoExclusao } = await req.json()

    if (!nome || !cpf || !email) {
      return new Response(
        JSON.stringify({ success: false, error: 'nome, cpf e email são obrigatórios' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    if (!confirmacaoTitular || !confirmacaoExclusao) {
      return new Response(
        JSON.stringify({ success: false, error: 'Confirmações obrigatórias' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    const jarvisResponse = await fetch(
      'https://jarvis-app.referencia.company/webhook/descadastrar-cpf',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          cpf,
          email,
          confirmacaoTitular: true,
          confirmacaoExclusao: true,
        }),
      }
    )

    if (!jarvisResponse.ok) {
      const errorText = await jarvisResponse.text()
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Erro ao solicitar remoção de dados',
          details: errorText,
        }),
        {
          status: jarvisResponse.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    const jarvisData = await jarvisResponse.json()

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

    const createdAt = formatDateTimeBR(new Date())

    const { error: insertError } = await supabase
      .from('cpfs_bloqueados')
      .insert({
        cpf,
        nome,
        email,
        created_at: createdAt,
      })

    if (insertError) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Erro ao registrar CPF bloqueado',
          details: insertError.message,
          data: jarvisData,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: jarvisData,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erro desconhecido'
    return new Response(
      JSON.stringify({ success: false, error: message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
