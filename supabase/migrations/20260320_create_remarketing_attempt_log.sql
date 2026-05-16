-- Migration: Create remarketing attempt log table
-- Date: 2026-03-20

CREATE TABLE IF NOT EXISTS public.cpf_payment_remarketing_attempt_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  payment_id UUID NOT NULL REFERENCES public.cpf_payments(id) ON DELETE CASCADE,
  stage TEXT NOT NULL,
  sent_to TEXT NOT NULL,
  success BOOLEAN NOT NULL,
  provider_status_code INTEGER,
  provider_message_id TEXT,
  provider_response JSONB,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT TIMEZONE('utc', NOW()),
  CONSTRAINT cpf_payment_remarketing_attempt_stage_check CHECK (stage IN ('m10', 'h3', 'h12', 'h24', 'h48'))
);

CREATE INDEX IF NOT EXISTS idx_remarketing_attempt_log_payment_id
  ON public.cpf_payment_remarketing_attempt_log(payment_id);

CREATE INDEX IF NOT EXISTS idx_remarketing_attempt_log_stage_created_at
  ON public.cpf_payment_remarketing_attempt_log(stage, created_at DESC);

ALTER TABLE public.cpf_payment_remarketing_attempt_log ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Service role can manage remarketing attempt log" ON public.cpf_payment_remarketing_attempt_log;

CREATE POLICY "Service role can manage remarketing attempt log"
  ON public.cpf_payment_remarketing_attempt_log
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

COMMENT ON TABLE public.cpf_payment_remarketing_attempt_log IS 'Log de tentativas de envio de remarketing (sucesso e falha)';