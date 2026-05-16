import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-cron-secret',
}

type Stage = {
  key: 'm10' | 'h3' | 'h12' | 'h24' | 'h48'
  delayMinutes: number
  maxDelayMinutes: number
  badge: string
  subject: string
}

const REMARKETING_STAGES: Stage[] = [
  {
    key: 'm10',
    delayMinutes: 10,
    maxDelayMinutes: 20,
    badge: 'Ha 10 minutos',
    subject: 'Seu pedido esta em aberto: finalize agora com Pix',
  },
  {
    key: 'h3',
    delayMinutes: 3 * 60,
    maxDelayMinutes: 6 * 60,
    badge: 'Ha 3 horas',
    subject: 'Seu pedido continua pendente: sua consulta te espera',
  },
  {
    key: 'h12',
    delayMinutes: 12 * 60,
    maxDelayMinutes: 24 * 60,
    badge: 'Ha 12 horas',
    subject: 'Ultimo lembrete do dia: nao perca sua oportunidade',
  },
  {
    key: 'h24',
    delayMinutes: 24 * 60,
    maxDelayMinutes: 48 * 60,
    badge: 'Ha 24 horas',
    subject: 'Ainda da tempo de liberar seu resultado agora',
  },
  {
    key: 'h48',
    delayMinutes: 48 * 60,
    maxDelayMinutes: 96 * 60,
    badge: 'Ha 48 horas',
    subject: 'Seu pedido esta quase expirando: aproveite agora',
  },
]

type StageKey = Stage['key']

type PaymentRow = {
  id: string
  created_at: string
  status: string
  search_id: string | null
  tipo: string | null
  email_usuario: string | null
  cpf_formatado: string | null
  valor: number | null
  qr_code: string | null
  qr_code_url: string | null
}

type EmailSendResult = {
  success: boolean
  statusCode: number
  id?: string
  response: unknown
  rawResponse: string
}

type RemarketingLogRow = {
  payment_id: string
  sent_m10: boolean
  sent_h3: boolean
  sent_h12: boolean
  sent_h24: boolean
  sent_h48: boolean
}

const STAGE_BY_KEY: Record<StageKey, Stage> = {
  m10: REMARKETING_STAGES[0],
  h3: REMARKETING_STAGES[1],
  h12: REMARKETING_STAGES[2],
  h24: REMARKETING_STAGES[3],
  h48: REMARKETING_STAGES[4],
}

const STAGE_FLAG_COLUMN: Record<StageKey, keyof RemarketingLogRow> = {
  m10: 'sent_m10',
  h3: 'sent_h3',
  h12: 'sent_h12',
  h24: 'sent_h24',
  h48: 'sent_h48',
}

const STAGE_SENT_AT_COLUMN: Record<StageKey, string> = {
  m10: 'sent_m10_at',
  h3: 'sent_h3_at',
  h12: 'sent_h12_at',
  h24: 'sent_h24_at',
  h48: 'sent_h48_at',
}

function normalizeTipo(tipo: string | null | undefined): string {
  const raw = String(tipo || '').toLowerCase().trim()
  if (raw === 'relatorio completo' || raw === 'relatório completo') return 'relatório completo'
  if (raw.includes('celular')) return 'celulares'
  if (raw.includes('endere')) return 'enderecos'
  if (raw.includes('empresa') || raw.includes('cnpj')) return 'empresas'
  if (raw.includes('parent')) return 'parentes'
  return raw || 'relatório completo'
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatCurrencyBRL(cents?: number | null): string {
  if (!cents || Number.isNaN(cents)) return 'R$ 0,00'
  return (cents / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

function buildAccessLink(baseUrl: string, tipo: string, searchId?: string | null): string {
  const safeId = encodeURIComponent(searchId || '')
  if (!safeId) return baseUrl

  if (tipo === 'relatório completo') {
    return `${baseUrl}/consulta?id=${safeId}`
  }

  return `${baseUrl}/relatorio?search_id=${safeId}`
}

function getCampaignLabel(key: Stage['key']): string {
  if (key === 'm10') return '10 minutos'
  if (key === 'h3') return '3 horas'
  if (key === 'h12') return '12 horas'
  if (key === 'h24') return '24 horas'
  return '48 horas'
}

function parseStageKey(value: unknown): StageKey | null {
  const raw = String(value || '').trim().toLowerCase() as StageKey
  if (raw in STAGE_BY_KEY) return raw
  return null
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getDynamicSendDelayMs(totalEmails: number): number {
  // Menos emails -> intervalo maior; mais emails -> intervalo menor.
  const minMs = 1000
  const maxMs = 3000
  const minCount = 10
  const maxCount = 30

  if (totalEmails <= minCount) return maxMs
  if (totalEmails >= maxCount) return minMs

  const progress = (totalEmails - minCount) / (maxCount - minCount)
  return Math.round(maxMs - progress * (maxMs - minMs))
}

function getUpsellUnlockLabel(tipo: string): string {
  if (tipo === 'celulares') return 'celulares'
  if (tipo === 'enderecos') return 'endereços'
  if (tipo === 'empresas') return 'participações societárias'
  if (tipo === 'parentes') return 'parentes'
  return 'informações adicionais'
}

function getTipoLabel(tipo: string): string {
  if (tipo === 'relatório completo') return 'Relatório Completo'
  if (tipo === 'celulares') return 'Relatório de Celulares'
  if (tipo === 'enderecos') return 'Relatório de Endereços'
  if (tipo === 'empresas') return 'Relatório de Participações Societárias'
  if (tipo === 'parentes') return 'Relatório de Parentes'
  return 'Relatório'
}

function getMainTitle(tipo: string): string {
  if (tipo === 'relatório completo') return 'Finalize agora a sua consulta'
  return 'Libere as informações restantes'
}

function getDescriptionHtml(cpf: string, tipo: string): string {
  if (tipo === 'relatório completo') {
    return `Identificamos um pedido pendente para o CPF <strong>${escapeHtml(cpf)}</strong>. Conclua o pagamento e obtenha acesso imediato ao <strong>Relatório Completo</strong>.`
  }

  const unlockLabel = getUpsellUnlockLabel(tipo)
  return `Identificamos um pedido pendente para desbloquear <strong>${escapeHtml(unlockLabel)}</strong> vinculados ao CPF <strong>${escapeHtml(cpf)}</strong>. Conclua o pagamento agora e libere imediatamente as informações restantes.`
}

function getDescriptionText(cpf: string, tipo: string): string {
  if (tipo === 'relatório completo') {
    return `Identificamos um pedido pendente para o CPF ${cpf}. Conclua o pagamento e obtenha acesso imediato ao Relatório Completo.`
  }

  const unlockLabel = getUpsellUnlockLabel(tipo)
  return `Identificamos um pedido pendente para desbloquear ${unlockLabel} vinculados ao CPF ${cpf}. Conclua o pagamento agora e libere imediatamente as informações restantes.`
}

function buildEmailHtml(params: {
  stage: Stage
  payment: PaymentRow
  accessLink: string
  tipo: string
}): string {
  const { payment, accessLink, tipo } = params
  const valor = formatCurrencyBRL(payment.valor)
  const cpf = payment.cpf_formatado || 'CPF consultado'
  const tipoLabel = getTipoLabel(tipo)
  const mainTitle = getMainTitle(tipo)
  const descriptionHtml = getDescriptionHtml(cpf, tipo)
  const pixCode = payment.qr_code || ''
  const qrCodeUrl = payment.qr_code_url || ''

  const qrCodeSection = qrCodeUrl || pixCode
    ? `
      <tr>
        <td style="padding:22px 24px 8px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fbff; border:1px solid #cfe0ff; border-radius:16px;">
            <tr>
              <td align="center" style="padding:18px 18px 8px 18px;">
                <p style="margin:0 0 6px 0; font-family:Arial,Helvetica,sans-serif; font-size:14px; line-height:22px; color:#1e3a8a; font-weight:700;">Escaneie o QR Code para pagar com Pix</p>
                <p style="margin:0 0 14px 0; font-family:Arial,Helvetica,sans-serif; font-size:24px; line-height:30px; font-weight:700; color:#008b0f;">${escapeHtml(valor)}</p>
                ${qrCodeUrl ? `
                <div style="display:inline-block; background:#ffffff; border:1px solid #dbeafe; border-radius:16px; padding:14px; box-shadow:0 4px 14px rgba(13,101,244,0.08);">
                  <img src="${escapeHtml(qrCodeUrl)}" width="220" height="220" alt="QR Code Pix" style="display:block; border:0; outline:none; text-decoration:none; max-width:220px; width:100%; height:auto; border-radius:10px;" />
                </div>
                ` : ''}
              </td>
            </tr>
            ${pixCode ? `
            <tr>
              <td style="padding:8px 18px 18px 18px;">
                <p style="margin:0 0 10px 0; font-family:Arial,Helvetica,sans-serif; font-size:13px; line-height:20px; color:#475569; text-align:center;">Ou pague pelo <strong>Pix Copia e Cola:</strong></p>
                <div style="background:#ffffff; border:1px solid #dbeafe; border-radius:12px; padding:14px; font-family:Consolas,Monaco,monospace; font-size:12px; line-height:18px; color:#0f172a; word-break:break-all;">
                  ${escapeHtml(pixCode)}
                </div>
              </td>
            </tr>
            ` : ''}
          </table>
        </td>
      </tr>
    `
    : ''

  return `
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pedido em aberto</title>
  </head>
  <body style="margin:0; padding:0; background:#eef2f7;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef2f7;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px; background:#ffffff; border-radius:14px; overflow:hidden;">
            <tr>
              <td style="background:#0d65f4; padding:20px 24px;">
                <p style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:24px; line-height:30px; font-weight:700; color:#ffffff;">ConfereAqui</p>
                <p style="margin:6px 0 0 0; font-family:Arial,Helvetica,sans-serif; font-size:13px; line-height:20px; color:#dbeafe;">Seu pagamento está pendente.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 24px 0;">
                <p style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:26px; line-height:34px; font-weight:700; color:#0f172a;">${escapeHtml(mainTitle)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 24px 0 24px;">
                <p style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:24px; color:#334155;">${descriptionHtml}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 24px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px;">
                  <tr>
                    <td style="padding:18px 18px 10px 18px; font-family:Arial,Helvetica,sans-serif; font-size:14px; color:#0f172a;">
                      <p style="margin:0 0 12px 0; line-height:22px;"><strong>Valor:</strong> ${escapeHtml(valor)}</p>
                      <p style="margin:0; line-height:22px;"><strong>Tipo:</strong> ${escapeHtml(tipoLabel)}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:22px 24px 6px;">
                <a href="${escapeHtml(accessLink)}" target="_blank" style="display:inline-block; background:#0d65f4; color:#ffffff; text-decoration:none; font-family:Arial,Helvetica,sans-serif; font-size:15px; font-weight:700; border-radius:10px; padding:13px 20px;">Finalizar minha Consulta</a>
              </td>
            </tr>
            ${qrCodeSection}
            <tr>
              <td style="padding:16px 24px 0;">
                <p style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:13px; line-height:20px; color:#64748b;">Caso o botão não funcione, copie este link no navegador:</p>
                <p style="margin:6px 0 0 0; font-family:Arial,Helvetica,sans-serif; font-size:12px; line-height:18px; color:#1d4ed8; word-break:break-all;">${escapeHtml(accessLink)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 24px 24px;">
                <p style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:12px; line-height:18px; color:#94a3b8; text-align:center;">Este é um e-mail automático. Por favor, não responda.</p>
              </td>
            </tr>
            <tr>
              <td style="background:#0d65f4; padding:16px 24px;">
                <p style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:12px; line-height:18px; color:#dbeafe; text-align:center;">@ConfereAqui 2026. Todos os direitos reservados.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
}

function buildEmailText(params: {
  stage: Stage
  payment: PaymentRow
  accessLink: string
  tipo: string
}): string {
  const { stage, payment, accessLink, tipo } = params
  const tipoTexto = getTipoLabel(tipo)
  const valor = formatCurrencyBRL(payment.valor)
  const cpf = payment.cpf_formatado || 'CPF consultado'
  const pixCode = payment.qr_code || 'Não disponível'
  const descriptionText = getDescriptionText(cpf, tipo)

  return [
    'ConfereAqui - Pedido em aberto',
    '',
    'Seu pagamento está pendente.',
    '',
    `Lembrete: ${getCampaignLabel(stage.key)}`,
    `CPF: ${cpf}`,
    `Tipo: ${tipoTexto}`,
    `Valor: ${valor}`,
    '',
    descriptionText,
    `Acesse: ${accessLink}`,
    '',
    'Pix Copia e Cola:',
    pixCode,
  ].join('\n')
}

async function sendRemarketingEmail(params: {
  apiKey: string
  fromEmail: string
  toEmail: string
  stage: Stage
  payment: PaymentRow
  accessLink: string
  tipo: string
}): Promise<EmailSendResult> {
  const { apiKey, fromEmail, toEmail, stage, payment, accessLink, tipo } = params

  const html = buildEmailHtml({ stage, payment, accessLink, tipo })
  const text = buildEmailText({ stage, payment, accessLink, tipo })

  const emailSubject = 'Finalize sua Consulta de CPF'

  const fromMatch = fromEmail.match(/^(.*)<([^>]+)>$/)
  const senderName = fromMatch ? fromMatch[1].trim().replace(/^"|"$/g, '') : 'ConfereAqui'
  const senderEmail = fromMatch ? fromMatch[2].trim() : fromEmail.trim()

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [
        {
          email: toEmail,
        },
      ],
      subject: emailSubject,
      htmlContent: html,
      textContent: text,
    }),
  })

  const responseText = await response.text()
  let parsedResponse: unknown = null
  try {
    parsedResponse = responseText ? JSON.parse(responseText) : null
  } catch {
    parsedResponse = { raw: responseText }
  }

  const parsedObj = (parsedResponse as Record<string, unknown> | null) || null

  return {
    success: response.ok,
    statusCode: response.status,
    id: (parsedObj?.messageId as string | undefined) || (parsedObj?.message_id as string | undefined),
    response: parsedResponse,
    rawResponse: responseText,
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const cronSecret = Deno.env.get('REMARKETING_CRON_SECRET') || ''
    const incomingSecret = req.headers.get('x-cron-secret') || ''
    const authHeader = req.headers.get('authorization') || ''
    const bearerToken = authHeader.toLowerCase().startsWith('bearer ') ? authHeader.slice(7) : ''

    if (cronSecret && incomingSecret !== cronSecret && bearerToken !== cronSecret) {
      return new Response(
        JSON.stringify({ success: false, error: { message: 'Nao autorizado' } }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    let body: Record<string, unknown> = {}
    if (req.method === 'POST') {
      const rawBody = await req.text()
      body = rawBody ? JSON.parse(rawBody) : {}
    }

    const url = new URL(req.url)
    const stageKey = parseStageKey(body.stage || url.searchParams.get('stage'))

    if (!stageKey) {
      return new Response(
        JSON.stringify({ success: false, error: { message: 'Parametro stage obrigatorio (m10, h3, h12, h24, h48)' } }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const targetStage = STAGE_BY_KEY[stageKey]
    const flagColumn = STAGE_FLAG_COLUMN[stageKey]
    const sentAtColumn = STAGE_SENT_AT_COLUMN[stageKey]

    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    const brevoApiKey = Deno.env.get('BREVO_API_KEY')

    if (!supabaseUrl || !supabaseKey || !brevoApiKey) {
      throw new Error('Missing SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY or BREVO_API_KEY')
    }

    const appBaseUrl = (Deno.env.get('APP_BASE_URL') || 'https://confereaqui.com').replace(/\/$/, '')
    const fromEmail = Deno.env.get('REMARKETING_FROM_EMAIL') || 'ConfereAqui <suporte@confereaqui.com>'
    const maxAgeHours = Number(Deno.env.get('REMARKETING_MAX_AGE_HOURS') || '72')

    const supabase = createClient(supabaseUrl, supabaseKey)
    const now = new Date()
    const oldest = new Date(now.getTime() - maxAgeHours * 60 * 60 * 1000)
    const maxWindowDate = new Date(now.getTime() - targetStage.maxDelayMinutes * 60 * 1000)
    const minWindowDate = new Date(now.getTime() - targetStage.delayMinutes * 60 * 1000)

    const { data: payments, error: paymentsError } = await supabase
      .from('cpf_payments')
      .select('id, created_at, status, search_id, tipo, email_usuario, cpf_formatado, valor, qr_code, qr_code_url')
      .in('status', ['pending', 'waiting_payment', 'processing'])
      .gt('created_at', maxWindowDate.toISOString())
      .lt('created_at', minWindowDate.toISOString())
      .gte('created_at', oldest.toISOString())
      .order('created_at', { ascending: true })
      .limit(2000)

    if (paymentsError) {
      throw new Error(`Erro ao buscar pagamentos pendentes: ${paymentsError.message}`)
    }

    const typedPayments = (payments || []) as PaymentRow[]
    if (!typedPayments.length) {
      return new Response(
        JSON.stringify({ success: true, message: 'Nenhum pagamento pendente elegivel', total_sent: 0 }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const paymentIds = typedPayments.map((p) => p.id)

    const { data: controls, error: controlsError } = await supabase
      .from('cpf_payment_remarketing_control')
      .select('payment_id, sent_m10, sent_h3, sent_h12, sent_h24, sent_h48')
      .in('payment_id', paymentIds)

    if (controlsError) {
      throw new Error(`Erro ao buscar controle de remarketing: ${controlsError.message}`)
    }

    const typedControls = (controls || []) as RemarketingLogRow[]
    const controlMap = new Map(typedControls.map((row) => [row.payment_id, row]))

    const missingControlRows = typedPayments
      .filter((payment) => !controlMap.has(payment.id))
      .map((payment) => ({
        payment_id: payment.id,
        order_created_at: payment.created_at,
      }))

    if (missingControlRows.length > 0) {
      const { error: upsertControlError } = await supabase
        .from('cpf_payment_remarketing_control')
        .upsert(missingControlRows, { onConflict: 'payment_id', ignoreDuplicates: true })

      if (upsertControlError) {
        throw new Error(`Erro ao criar linhas de controle: ${upsertControlError.message}`)
      }

      for (const payment of typedPayments) {
        if (!controlMap.has(payment.id)) {
          controlMap.set(payment.id, {
            payment_id: payment.id,
            sent_m10: false,
            sent_h3: false,
            sent_h12: false,
            sent_h24: false,
            sent_h48: false,
          })
        }
      }
    }

    let totalSent = 0
    const sentItems: Array<{ payment_id: string; campaign: string; to: string }> = []
    const skippedItems: Array<{ payment_id: string; reason: string }> = []
    const failedItems: Array<{ payment_id: string; campaign: string; error: string }> = []
    const successfulPaymentIds: string[] = []
    const attemptLogs: Array<{
      payment_id: string
      stage: StageKey
      sent_to: string
      success: boolean
      provider_status_code: number | null
      provider_message_id: string | null
      provider_response: unknown
      error_message: string | null
    }> = []

    const unsentPayments = typedPayments.filter((payment) => {
      const control = controlMap.get(payment.id)
      return !(control?.[flagColumn] || false)
    })

    const sendDelayMs = getDynamicSendDelayMs(unsentPayments.length)

    for (let index = 0; index < unsentPayments.length; index += 1) {
      const payment = unsentPayments[index]
      const createdAt = new Date(payment.created_at)
      if (Number.isNaN(createdAt.getTime())) {
        skippedItems.push({ payment_id: payment.id, reason: 'created_at invalido' })
        continue
      }
      const tipoNormalizado = normalizeTipo(payment.tipo)
      const accessLink = buildAccessLink(appBaseUrl, tipoNormalizado, payment.search_id)

      if (!payment.search_id) {
        skippedItems.push({ payment_id: payment.id, reason: 'search_id ausente' })
        continue
      }

      const destinationEmail = String(payment.email_usuario || '').trim()

      if (!destinationEmail) {
        skippedItems.push({ payment_id: payment.id, reason: `sem email para etapa ${targetStage.key}` })
        continue
      }

      try {
        const sent = await sendRemarketingEmail({
          apiKey: brevoApiKey,
          fromEmail,
          toEmail: destinationEmail,
          stage: targetStage,
          payment,
          accessLink,
          tipo: tipoNormalizado,
        })

        if (!sent.success) {
          attemptLogs.push({
            payment_id: payment.id,
            stage: targetStage.key,
            sent_to: destinationEmail,
            success: false,
            provider_status_code: sent.statusCode,
            provider_message_id: sent.id || null,
            provider_response: sent.response,
            error_message: `Erro Brevo ${sent.statusCode}`,
          })
          failedItems.push({
            payment_id: payment.id,
            campaign: targetStage.key,
            error: `Erro Brevo ${sent.statusCode}: ${sent.rawResponse}`,
          })
          continue
        }

        attemptLogs.push({
          payment_id: payment.id,
          stage: targetStage.key,
          sent_to: destinationEmail,
          success: true,
          provider_status_code: sent.statusCode,
          provider_message_id: sent.id || null,
          provider_response: sent.response,
          error_message: null,
        })

        totalSent += 1
        successfulPaymentIds.push(payment.id)
        sentItems.push({
          payment_id: payment.id,
          campaign: targetStage.key,
          to: destinationEmail,
        })
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        attemptLogs.push({
          payment_id: payment.id,
          stage: targetStage.key,
          sent_to: destinationEmail,
          success: false,
          provider_status_code: null,
          provider_message_id: null,
          provider_response: null,
          error_message: errorMessage,
        })
        failedItems.push({
          payment_id: payment.id,
          campaign: targetStage.key,
          error: errorMessage,
        })
      }

      const isLastEmail = index === unsentPayments.length - 1
      if (!isLastEmail) {
        await sleep(sendDelayMs)
      }
    }

    if (attemptLogs.length > 0) {
      const { error: attemptLogError } = await supabase
        .from('cpf_payment_remarketing_attempt_log')
        .insert(attemptLogs)

      if (attemptLogError) {
        throw new Error(`Erro ao gravar log de tentativa: ${attemptLogError.message}`)
      }
    }

    if (successfulPaymentIds.length > 0) {
      const nowIso = new Date().toISOString()
      const updatePayload: Record<string, unknown> = {
        [flagColumn]: true,
        [sentAtColumn]: nowIso,
        updated_at: nowIso,
      }

      const { error: updateControlError } = await supabase
        .from('cpf_payment_remarketing_control')
        .update(updatePayload)
        .in('payment_id', successfulPaymentIds)

      if (updateControlError) {
        throw new Error(`Erro ao atualizar controle de remarketing: ${updateControlError.message}`)
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        stage: targetStage.key,
        window_minutes: {
          greater_than: targetStage.delayMinutes,
          less_than: targetStage.maxDelayMinutes,
        },
        total_payments_scanned: typedPayments.length,
        total_pending_for_stage: unsentPayments.length,
        send_interval_ms: sendDelayMs,
        total_sent: totalSent,
        sent: sentItems,
        skipped: skippedItems,
        failed: failedItems,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)

    return new Response(
      JSON.stringify({
        success: false,
        error: { message: 'Erro interno no remarketing', details: message },
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})