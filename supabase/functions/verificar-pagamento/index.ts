import { createClient } from 'jsr:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

function generateLaTransactionId(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const bytes = new Uint8Array(8)
  crypto.getRandomValues(bytes)
  let suffix = ''
  for (let i = 0; i < bytes.length; i += 1) {
    suffix += chars[bytes[i] % chars.length]
  }
  return `la_${suffix}`
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { search_id, tipo } = await req.json()

    if (!search_id || !tipo) {
      return new Response(
        JSON.stringify({ error: 'search_id e tipo são obrigatórios' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Criar cliente Supabase com service role
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

    // Buscar o pagamento mais recente
    const { data, error } = await supabase
      .from('cpf_payments')
      .select('status, transaction_id, pagarme_charge_id, session_id, qr_code, qr_code_url, email_usuario, created_at, pix_expires_at')
      .eq('search_id', search_id)
      .eq('tipo', tipo)
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    if (error) {
      // Se não encontrou nenhum registro, verifica se é bypass
      if (error.code === 'PGRST116') {
        console.log(`📍 Nenhum pagamento encontrado para search_id=${search_id}, tipo=${tipo}. Verificando bypass...`)
        
        // Fallback: verificar se o search_id foi marcado como bypass
        const { data: bypassData, error: bypassError } = await supabase
          .from('cpfs')
          .select('is_bypass')
          .eq('search_id', search_id)
          .maybeSingle()

        if (bypassError) {
          console.error('❌ Erro ao verificar bypass:', bypassError)
        }

        if (bypassData && bypassData.is_bypass) {
          console.log(`✅ CPF encontrado como bypass para search_id=${search_id}`)
          const temporaryTransactionId = generateLaTransactionId()
          return new Response(
            JSON.stringify({
              status: 'paid',
              transaction_id: temporaryTransactionId,
              pagarme_charge_id: null,
              session_id: null,
              qr_code: null,
              qr_code_url: null,
              email_usuario: 'liberaragora@gmail.com',
              created_at: new Date().toISOString(),
              pix_expires_at: null,
              found: true,
            }),
            {
              status: 200,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          )
        }

        // Não é bypass, retorna not found
        return new Response(
          JSON.stringify({
            status: null,
            transaction_id: null,
            found: false
          }),
          {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }

      return new Response(
        JSON.stringify({ error: error.message }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const isBypassPayment = data.email_usuario === 'liberaragora@gmail.com'
    const temporaryTransactionId = isBypassPayment ? generateLaTransactionId() : null

    return new Response(
      JSON.stringify({
        status: data.status,
        transaction_id: isBypassPayment ? temporaryTransactionId : data.transaction_id,
        pagarme_charge_id: isBypassPayment ? null : data.pagarme_charge_id,
        session_id: isBypassPayment ? null : data.session_id,
        qr_code: data.qr_code,
        qr_code_url: data.qr_code_url,
        email_usuario: data.email_usuario,
        created_at: data.created_at,
        pix_expires_at: data.pix_expires_at,
        found: true,
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('❌ Erro ao verificar pagamento:', error)
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
