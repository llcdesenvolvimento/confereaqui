import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
 
  
  try {
    const { charge_id } = await req.json()

    if (!charge_id) {
      return new Response(
        JSON.stringify({ success: false, error: 'charge_id é obrigatório' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const pagarmeApiKey = Deno.env.get('PAGARME_API_KEY')
    if (!pagarmeApiKey) {
      console.error('❌ PAGARME_API_KEY não configurado')
      return new Response(
        JSON.stringify({ success: false, error: 'Configuração do servidor incorreta' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Consulta o status do pagamento no Pagar.me
    console.log(`🔍 Consultando pagamento manual: ${charge_id}`)
    
    const pagarmeResponse = await fetch(
      `https://api.pagar.me/core/v5/charges/${charge_id}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${btoa(pagarmeApiKey + ':')}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!pagarmeResponse.ok) {
      const errorText = await pagarmeResponse.text()
      console.error('❌ Erro ao consultar Pagar.me:', errorText)
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Erro ao consultar status do pagamento',
          details: errorText
        }),
        { 
          status: pagarmeResponse.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const chargeData = await pagarmeResponse.json()
    console.log('📊 Status do pagamento:', chargeData.status)

    // Verifica se o pagamento foi aprovado
    const isPaid = chargeData.status === 'paid'
    const status = chargeData.status

    // Se o pagamento foi aprovado, atualizar no banco de dados
    if (isPaid) {
      const supabaseUrl = Deno.env.get('SUPABASE_URL')!
      const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
      const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

      // Busca o pagamento pelo charge_id
      const { data: payment, error: paymentError } = await supabase
        .from('cpf_payments')
        .select('session_id, paid, transaction_id')
        .eq('charge_id', charge_id)
        .single()

      if (paymentError) {
        console.error('❌ Erro ao buscar pagamento:', paymentError)
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: 'Pagamento não encontrado no banco de dados',
            payment_status: status
          }),
          { 
            status: 404,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }

      // Se ainda não está marcado como pago, atualizar
      if (!payment.paid) {
        console.log(`✅ Marcando pagamento como pago: ${charge_id}`)
        const { error: updateError } = await supabase
          .from('cpf_payments')
          .update({ 
            paid: true,
            payment_status: 'paid',
            updated_at: new Date().toISOString()
          })
          .eq('charge_id', charge_id)

        if (updateError) {
          console.error('❌ Erro ao atualizar pagamento:', updateError)
          return new Response(
            JSON.stringify({ 
              success: false, 
              error: 'Erro ao atualizar status do pagamento',
              payment_status: status
            }),
            { 
              status: 500,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          )
        }

        console.log('✅ Pagamento atualizado com sucesso')
      }

      return new Response(
        JSON.stringify({
          success: true,
          paid: true,
          status: status,
          session_id: payment.session_id,
          transaction_id: payment.transaction_id,
          message: 'Pagamento confirmado!'
        }),
        { 
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Pagamento ainda não foi aprovado
    return new Response(
      JSON.stringify({
        success: true,
        paid: false,
        status: status,
        message: 'Pagamento ainda não foi confirmado'
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('❌ Erro ao verificar pagamento manual:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Erro interno do servidor',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
