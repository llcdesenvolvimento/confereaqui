-- Migration: Add session_id to cpf_payments for realtime channels
-- Date: 2026-03-10

ALTER TABLE public.cpf_payments
  ADD COLUMN IF NOT EXISTS session_id TEXT;

CREATE INDEX IF NOT EXISTS idx_cpf_payments_session_id ON public.cpf_payments(session_id);

COMMENT ON COLUMN public.cpf_payments.session_id IS 'Session identifier for realtime channel';
