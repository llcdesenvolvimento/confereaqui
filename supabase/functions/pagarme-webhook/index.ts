import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

function formatDateBR(dateStr?: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (Number.isNaN(date.getTime())) return ''
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables')
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const payload = await req.json()

    const eventId = payload?.id || payload?.event?.id || req.headers.get('x-event-id') || null
    const data = payload?.data || payload
    const charge = data?.charge || data?.charges?.[0] || null
    const order = data?.order || null
    const lastTransaction = charge?.last_transaction || null

    const orderId = order?.id || data?.order?.id || payload?.order_id || null
    const chargeId = charge?.id || data?.id || payload?.charge_id || null
    const status = order?.status || charge?.status || data?.status || payload?.status || null

    if (!orderId && !chargeId) {
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'order_id ou charge_id nao encontrado no payload' },
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (eventId) {
      const { data: existingEvent } = await supabase
        .from('cpf_payments')
        .select('id')
        .eq('webhook_event_id', eventId)
        .limit(1)
        .maybeSingle()

      if (existingEvent) {
        return new Response(
          JSON.stringify({ success: true, duplicated: true }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
    }

    let targetQuery = supabase
      .from('cpf_payments')
      .select('id, search_id, session_id')
      .limit(1)

    if (orderId) {
      targetQuery = targetQuery.eq('pagarme_order_id', orderId)
    } else if (chargeId) {
      targetQuery = targetQuery.eq('transaction_id', chargeId)
    }

    const { data: payment, error: paymentError } = await targetQuery.maybeSingle()

    if (paymentError || !payment) {
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'Pagamento nao encontrado para o webhook' },
        }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const nowIso = new Date().toISOString()
    const updateData = {
      status: status || 'pending',
      qr_code: lastTransaction?.qr_code ?? null,
      qr_code_url: lastTransaction?.qr_code_url ?? null,
      pix_expires_at: lastTransaction?.expires_at ?? null,
      transaction_id: chargeId ?? null,
      pagarme_order_id: orderId ?? null,
      pagarme_charge_id: chargeId ?? null,
      order_code: order?.code ?? null,
      valor: order?.amount ?? charge?.amount ?? null,
      updated_at: nowIso,
      updated_at_text: formatDateBR(nowIso),
      paid_at: status === 'paid' ? nowIso : null,
      last_webhook_at: nowIso,
      webhook_event_id: eventId,
      webhook_payload: payload,
    }

    const { error: updateError, data: updatedPayment } = await supabase
      .from('cpf_payments')
      .update(updateData)
      .eq('id', payment.id)
      .select('search_id, session_id, status, transaction_id')

    if (updateError) {
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'Erro ao atualizar pagamento via webhook' },
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true }),
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
