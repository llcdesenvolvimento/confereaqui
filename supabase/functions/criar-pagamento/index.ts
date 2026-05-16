import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const TYPE_PRICES: Record<string, number> = {
  'relatório completo': 1890,
  celulares: 1190,
  enderecos: 1990,
  empresas: 1190,
  parentes: 1490,
}

const BYPASS_EMAIL = 'liberaragora@gmail.com'

function onlyDigits(value: string): string {
  return String(value || '').replace(/\D/g, '')
}

function formatCpf(cpf: string): string {
  const digits = onlyDigits(cpf)
  if (digits.length !== 11) return digits
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`
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

function randomFrom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

function buildCustomerName(): string {
  const firstNames = ['Joao', 'Pedro', 'Lucas', 'Marcos', 'Rafael', 'Carlos', 'Paulo', 'Daniel']
  const lastNames = ['Silva', 'Souza', 'Oliveira', 'Santos', 'Ferreira', 'Almeida', 'Lima', 'Pereira']
  return `${randomFrom(firstNames)} ${randomFrom(lastNames)}`
}

function buildCustomerDocument(): string {
  const base = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10))

  const calcDigit = (nums: number[], factor: number) => {
    const total = nums.reduce((acc, n) => acc + n * factor--, 0)
    const mod = (total * 10) % 11
    return mod === 10 ? 0 : mod
  }

  const d1 = calcDigit(base, 10)
  const d2 = calcDigit([...base, d1], 11)
  return [...base, d1, d2].join('')
}

function buildCustomerPhone(): string {
  return `9${Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('')}`
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

function normalizeTipo(tipo: string): string {
  const raw = (tipo || '').toLowerCase().trim()
  if (raw === 'relatorio completo' || raw === 'relatório completo') return 'relatório completo'
  if (raw.includes('celular')) return 'celulares'
  if (raw.includes('endere')) return 'enderecos'
  if (raw.includes('empresa') || raw.includes('cnpj')) return 'empresas'
  if (raw.includes('parent')) return 'parentes'
  return raw || 'relatório completo'
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    const pagarmeApiKey = Deno.env.get('PAGARME_API_KEY')
    if (!supabaseUrl || !supabaseKey || !pagarmeApiKey) {
      throw new Error('Missing Supabase environment variables')
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const body = await req.json()
    const { cpf, email, searchId, tipo, sessionId } = body ?? {}
    const normalizedTipo = normalizeTipo(tipo)

    console.log('🚀 Criar pagamento iniciado:', { tipo: normalizedTipo, searchId, hasEmail: !!email })

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

    const amountCents = TYPE_PRICES[normalizedTipo]
    if (!amountCents) {
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'Tipo de venda invalido' },
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    //let customerName = ''
    let customerEmail = ''
    let customerDocument = ''
    let customerPhoneCountryCode = '55'
    let customerPhoneAreaCode = '11'
    let customerPhoneNumber = ''

    if (normalizedTipo === 'relatório completo') {
      if (!email) {
        return new Response(
          JSON.stringify({
            success: false,
            error: { message: 'E-mail obrigatorio para relatorio completo' },
          }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      //customerName = buildCustomerName()
      customerEmail = String(email)
      customerDocument = buildCustomerDocument()
      customerPhoneNumber = buildCustomerPhone()
    } else {
      const { data: basePayment, error: baseError } = await supabase
        .from('cpf_payments')
        .select('email_usuario, customer_name, customer_document, customer_phone_country_code, customer_phone_area_code, customer_phone_number')
        .eq('search_id', searchId)
        .eq('tipo', 'relatório completo')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle()

      if (baseError) {
        return new Response(
          JSON.stringify({
            success: false,
            error: { message: 'Erro ao buscar pagamento base para upsell' },
          }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      if (!basePayment) {
        const { data: bypassData, error: bypassError } = await supabase
          .from('cpfs')
          .select('is_bypass')
          .eq('search_id', searchId)
          .maybeSingle()

        if (bypassError) {
          return new Response(
            JSON.stringify({
              success: false,
              error: { message: 'Erro ao verificar bypass para upsell' },
            }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          )
        }

        if (!bypassData?.is_bypass) {
          return new Response(
            JSON.stringify({
              success: false,
              error: { message: 'Pagamento base do relatorio completo nao encontrado para upsell' },
            }),
            { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          )
        }

        customerEmail = String(email || '').trim() || BYPASS_EMAIL
        customerDocument = buildCustomerDocument()
        customerPhoneCountryCode = '55'
        customerPhoneAreaCode = '11'
        customerPhoneNumber = buildCustomerPhone()
      } else {
        //customerName = basePayment.customer_name || buildCustomerName()
        customerEmail = basePayment.email_usuario || String(email || '')
        customerDocument = basePayment.customer_document || buildCustomerDocument()
        customerPhoneCountryCode = basePayment.customer_phone_country_code || '55'
        customerPhoneAreaCode = basePayment.customer_phone_area_code || '11'
        customerPhoneNumber = basePayment.customer_phone_number || buildCustomerPhone()

        if (!customerEmail) {
          return new Response(
            JSON.stringify({
              success: false,
              error: { message: 'Email do pagamento base nao encontrado para upsell' },
            }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          )
        }
      }
    }

    const cpfFormatado = formatCpf(cpfDigits)

    if (customerEmail === BYPASS_EMAIL) {
      // Bypass mode: mark the CPF search as bypass without persisting to cpf_payments
      console.log('🎯 Bypass mode para liberaragora@gmail.com, search_id:', searchId)
      const temporaryTransactionId = generateLaTransactionId()

      const { error: updateError } = await supabase
        .from('cpfs')
        .update({ is_bypass: true })
        .eq('search_id', searchId)

      if (updateError) {
        console.error('❌ Erro ao marcar CPF como bypass:', updateError)
        return new Response(
          JSON.stringify({
            success: false,
            error: { message: 'Erro ao processar bypass' },
          }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      console.log('✅ CPF marcado como bypass para search_id:', searchId)

      return new Response(
        JSON.stringify({
          success: true,
          payment: {
            order_id: null,
            charge_id: null,
            transaction_id: temporaryTransactionId,
            status: 'paid',
            amount: amountCents,
            qr_code: null,
            qr_code_url: null,
            expires_at: null,
            tipo: normalizedTipo,
          },
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const nowIso = new Date().toISOString()
    const { data: existingPayment, error: existingError } = await supabase
      .from('cpf_payments')
      .select('id, status, qr_code, qr_code_url, pix_expires_at')
      .eq('search_id', searchId)
      .eq('tipo', normalizedTipo)
      .in('status', ['pending', 'waiting_payment', 'processing'])
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()

    if (existingError) {
      console.error('❌ Erro ao buscar pagamento existente:', existingError)
    }

    const existingExpiresAtMs = existingPayment?.pix_expires_at
      ? new Date(existingPayment.pix_expires_at).getTime()
      : NaN

    const hasValidExistingPayment =
      !!existingPayment &&
      Number.isFinite(existingExpiresAtMs) &&
      existingExpiresAtMs > Date.now() &&
      (!!existingPayment.qr_code || !!existingPayment.qr_code_url)

    if (hasValidExistingPayment) {
      return new Response(
        JSON.stringify({
          success: true,
          payment: {
            order_id: null,
            charge_id: null,
            status: existingPayment.status,
            amount: amountCents,
            qr_code: existingPayment.qr_code,
            qr_code_url: existingPayment.qr_code_url,
            expires_at: existingPayment.pix_expires_at,
            tipo: normalizedTipo,
          },
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const shouldUpdateExistingExpired =
      !!existingPayment &&
      !!existingPayment.id &&
      Number.isFinite(existingExpiresAtMs) &&
      existingExpiresAtMs <= Date.now()

    const orderPayload = {
      items: [
        {
          amount: amountCents,
          description: 'Produto',
          quantity: 1,
        },
      ],
      customer: {
        name: customerEmail,//customerName,
        email: customerEmail,
        document: customerDocument,
        type: 'individual',
        phones: {
          mobile_phone: {
            country_code: customerPhoneCountryCode,
            area_code: customerPhoneAreaCode,
            number: customerPhoneNumber,
          },
        },
      },
      payments: [
        {
          payment_method: 'pix',
          pix: {
            expires_in: 86400,
          },
        },
      ],
      metadata: {
        cpf_formatado: cpfFormatado,
        search_id: searchId,
        tipo: normalizedTipo,
        plataforma: 'infoempresa',
      },
    }

    console.log('📤 Enviando pedido ao Pagar.me')

    const pagarmeStart = Date.now()

    const basicAuth = btoa(`${pagarmeApiKey}:`)
    const pagarmeResponse = await fetch('https://api.pagar.me/core/v5/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${basicAuth}`,
      },
      body: JSON.stringify(orderPayload),
    })

    console.log('📥 Resposta do Pagar.me:', { status: pagarmeResponse.status, elapsed_ms: Date.now() - pagarmeStart })
    const pagarmeText = await pagarmeResponse.text()

    const pagarmeData = pagarmeText ? JSON.parse(pagarmeText) : null

    if (!pagarmeResponse.ok || !pagarmeData) {
      console.error('❌ Erro ao criar pedido no Pagar.me:', { status: pagarmeResponse.status, response: pagarmeText })
      return new Response(
        JSON.stringify({
          success: false,
          error: {
            message: 'Erro ao criar pedido no Pagar.me',
            details: pagarmeText || 'Resposta vazia do Pagar.me',
          },
        }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const charge = pagarmeData?.charges?.[0]
    const lastTransaction = charge?.last_transaction
    const status = pagarmeData?.status || charge?.status || 'pending'
    const createdAtText = formatDateBR(pagarmeData?.created_at)
    const updatedAtText = formatDateBR(pagarmeData?.updated_at)

    console.log('📊 Pedido criado:', { order_id: pagarmeData?.id, status })

    const paymentPayload = {
      user_id: null,
      cpf: cpfDigits,
      email: customerEmail,
      amount: amountCents / 100,
      status,
      search_id: searchId,
      session_id: sessionId || null,
      tipo: normalizedTipo,
      plataforma: 'infoempresa',
      cpf_formatado: cpfFormatado,
      email_usuario: customerEmail,
      valor: pagarmeData?.amount ?? amountCents,
      qr_code: lastTransaction?.qr_code ?? null,
      qr_code_url: lastTransaction?.qr_code_url ?? null,
      transaction_id: charge?.id ?? null,
      pagarme_order_id: pagarmeData?.id ?? null,
      pagarme_charge_id: charge?.id ?? null,
      order_code: pagarmeData?.code ?? null,
      pix_expires_at: lastTransaction?.expires_at ?? null,
      created_at_text: createdAtText,
      updated_at_text: updatedAtText,
      customer_name: customerEmail,//customerName,
      customer_document: customerDocument,
      customer_phone_country_code: customerPhoneCountryCode,
      customer_phone_area_code: customerPhoneAreaCode,
      customer_phone_number: customerPhoneNumber,
      order_response: pagarmeData,
    }

    let saveError: unknown = null

    if (shouldUpdateExistingExpired) {
      const { error: updateError } = await supabase
        .from('cpf_payments')
        .update(paymentPayload)
        .eq('id', existingPayment.id)

      saveError = updateError
    } else {
      const { error: insertError } = await supabase
        .from('cpf_payments')
        .insert(paymentPayload)

      saveError = insertError
    }

    if (saveError) {
      console.error('❌ Erro ao salvar pagamento no BD:', saveError)
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'Erro ao salvar pagamento' },
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('✅ Pagamento salvo no BD')

    return new Response(
      JSON.stringify({
        success: true,
        payment: {
          order_id: pagarmeData?.id,
          charge_id: charge?.id ?? null,
          status,
          amount: pagarmeData?.amount ?? amountCents,
          qr_code: lastTransaction?.qr_code ?? null,
          qr_code_url: lastTransaction?.qr_code_url ?? null,
          expires_at: lastTransaction?.expires_at ?? null,
          tipo: normalizedTipo,
        },
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
