-- Migration: Add Pagar.me fields and metadata to cpf_payments
-- Date: 2026-03-09

ALTER TABLE public.cpf_payments
  ADD COLUMN IF NOT EXISTS search_id TEXT,
  ADD COLUMN IF NOT EXISTS tipo TEXT,
  ADD COLUMN IF NOT EXISTS plataforma TEXT DEFAULT 'infoempresa',
  ADD COLUMN IF NOT EXISTS cpf_formatado TEXT,
  ADD COLUMN IF NOT EXISTS email_usuario TEXT,
  ADD COLUMN IF NOT EXISTS valor INTEGER,
  ADD COLUMN IF NOT EXISTS qr_code TEXT,
  ADD COLUMN IF NOT EXISTS qr_code_url TEXT,
  ADD COLUMN IF NOT EXISTS transaction_id TEXT,
  ADD COLUMN IF NOT EXISTS pagarme_order_id TEXT,
  ADD COLUMN IF NOT EXISTS pagarme_charge_id TEXT,
  ADD COLUMN IF NOT EXISTS order_code TEXT,
  ADD COLUMN IF NOT EXISTS pix_expires_at TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS created_at_text TEXT,
  ADD COLUMN IF NOT EXISTS updated_at_text TEXT,
  ADD COLUMN IF NOT EXISTS customer_name TEXT,
  ADD COLUMN IF NOT EXISTS customer_document TEXT,
  ADD COLUMN IF NOT EXISTS customer_phone_country_code TEXT,
  ADD COLUMN IF NOT EXISTS customer_phone_area_code TEXT,
  ADD COLUMN IF NOT EXISTS customer_phone_number TEXT,
  ADD COLUMN IF NOT EXISTS order_response JSONB,
  ADD COLUMN IF NOT EXISTS webhook_payload JSONB,
  ADD COLUMN IF NOT EXISTS webhook_event_id TEXT,
  ADD COLUMN IF NOT EXISTS paid_at TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS last_webhook_at TIMESTAMP WITH TIME ZONE;

ALTER TABLE public.cpf_payments
  DROP CONSTRAINT IF EXISTS valid_status;

ALTER TABLE public.cpf_payments
  ADD CONSTRAINT valid_status CHECK (
    status IN (
      'pending',
      'completed',
      'failed',
      'cancelled',
      'paid',
      'waiting_payment',
      'processing',
      'refunded',
      'chargedback'
    )
  );

CREATE INDEX IF NOT EXISTS idx_cpf_payments_search_id ON public.cpf_payments(search_id);
CREATE INDEX IF NOT EXISTS idx_cpf_payments_tipo ON public.cpf_payments(tipo);
CREATE INDEX IF NOT EXISTS idx_cpf_payments_pagarme_order_id ON public.cpf_payments(pagarme_order_id);
CREATE INDEX IF NOT EXISTS idx_cpf_payments_transaction_id ON public.cpf_payments(transaction_id);
CREATE UNIQUE INDEX IF NOT EXISTS uq_cpf_payments_webhook_event_id ON public.cpf_payments(webhook_event_id) WHERE webhook_event_id IS NOT NULL;

COMMENT ON COLUMN public.cpf_payments.search_id IS 'Search id da consulta (URL /consulta?id=...)';
COMMENT ON COLUMN public.cpf_payments.tipo IS 'Tipo da venda (relatório completo, celulares, enderecos, empresas, parentes)';
COMMENT ON COLUMN public.cpf_payments.plataforma IS 'Plataforma de origem da venda';
COMMENT ON COLUMN public.cpf_payments.valor IS 'Valor em centavos retornado pelo gateway';
COMMENT ON COLUMN public.cpf_payments.transaction_id IS 'Charge id retornado pelo Pagar.me';
COMMENT ON COLUMN public.cpf_payments.created_at_text IS 'Data formatada DD/MM/AAAA da criacao';
COMMENT ON COLUMN public.cpf_payments.updated_at_text IS 'Data formatada DD/MM/AAAA da ultima atualizacao';
COMMENT ON COLUMN public.cpf_payments.order_response IS 'Payload bruto de resposta do Pagar.me /orders';
COMMENT ON COLUMN public.cpf_payments.webhook_payload IS 'Payload bruto recebido no webhook do Pagar.me';
