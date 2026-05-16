import { createClient } from 'jsr:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Função para mascarar nome (mantém N palavras visíveis, mascara o resto por caractere)
function maskRemainingNames(fullName: string, keepWords: number = 2): string {
  if (!fullName) return fullName

  const words = fullName.trim().split(/\s+/)
  if (words.length <= keepWords) return fullName

  const visiblePart = words.slice(0, keepWords).join(' ')
  const hiddenParts = words.slice(keepWords)
  const masked = hiddenParts.map(word => '*'.repeat(word.length)).join(' ')

  return `${visiblePart} ${masked}`
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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { search_id } = await req.json()

    if (!search_id) {
      return new Response(
        JSON.stringify({ success: false, error: 'search_id é obrigatório' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

    // Buscar dados básicos do CPF
    const { data: cpfData, error: cpfError } = await supabase
      .from('cpfs')
      .select('cpf, nome, sexo, data_nascimento')
      .eq('search_id', search_id)
      .single()

    if (cpfError || !cpfData) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Dados não encontrados' 
        }),
        { 
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Aplicar máscara no nome (mantém 2 primeiras palavras)
    const maskedData = {
      ...cpfData,
      nome_mascarado: maskRemainingNames(cpfData.nome, 2),
      data_nascimento: maskBirthDate(cpfData.data_nascimento),
    }

    delete (maskedData as { nome?: string }).nome

    return new Response(
      JSON.stringify({
        success: true,
        data: maskedData
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('❌ Erro ao buscar dados básicos:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: (error as Error).message 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
