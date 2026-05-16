-- Migration: Create remarketing control table and stage-specific cron jobs
-- Date: 2026-03-17

CREATE TABLE IF NOT EXISTS public.cpf_payment_remarketing_control (
  payment_id UUID PRIMARY KEY REFERENCES public.cpf_payments(id) ON DELETE CASCADE,
  order_created_at TIMESTAMP WITH TIME ZONE NOT NULL,
  sent_m10 BOOLEAN NOT NULL DEFAULT FALSE,
  sent_h3 BOOLEAN NOT NULL DEFAULT FALSE,
  sent_h12 BOOLEAN NOT NULL DEFAULT FALSE,
  sent_h24 BOOLEAN NOT NULL DEFAULT FALSE,
  sent_h48 BOOLEAN NOT NULL DEFAULT FALSE,
  sent_m10_at TIMESTAMP WITH TIME ZONE,
  sent_h3_at TIMESTAMP WITH TIME ZONE,
  sent_h12_at TIMESTAMP WITH TIME ZONE,
  sent_h24_at TIMESTAMP WITH TIME ZONE,
  sent_h48_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_remarketing_control_order_created_at
  ON public.cpf_payment_remarketing_control(order_created_at DESC);

ALTER TABLE public.cpf_payment_remarketing_control ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Service role can manage remarketing control" ON public.cpf_payment_remarketing_control;

CREATE POLICY "Service role can manage remarketing control"
  ON public.cpf_payment_remarketing_control
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

COMMENT ON TABLE public.cpf_payment_remarketing_control IS 'Controle de disparo de remarketing por etapa (m10, h3, h12, h24, h48)';

-- Optional: Supabase cron schedules per stage window.
-- m10: every 10 minutes, window >10 and <20 minutes.
-- h3: every 3 hours, window >3 and <6 hours.
-- h12: every 12 hours, window >12 and <24 hours.
-- h24: daily, window >24 and <48 hours.
-- h48: every 48 hours, window >48 and <96 hours.

CREATE EXTENSION IF NOT EXISTS pg_net;
CREATE EXTENSION IF NOT EXISTS pg_cron;

SELECT cron.unschedule(jobid)
FROM cron.job
WHERE jobname IN (
  'remarketing-stage-m10',
  'remarketing-stage-h3',
  'remarketing-stage-h12',
  'remarketing-stage-h24',
  'remarketing-stage-h48'
);

SELECT cron.schedule(
  'remarketing-stage-m10',
  '*/10 * * * *',
  $$
  SELECT net.http_post(
    url := 'https://dpbanqmuxkfyvsoljbrw.supabase.co/functions/v1/remarketing-pagamento-pendente',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := '{"stage": "m10"}'::jsonb
  );
  $$
);

SELECT cron.schedule(
  'remarketing-stage-h3',
  '0 */3 * * *',
  $$
  SELECT net.http_post(
    url := 'https://dpbanqmuxkfyvsoljbrw.supabase.co/functions/v1/remarketing-pagamento-pendente',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := '{"stage": "h3"}'::jsonb
  );
  $$
);

SELECT cron.schedule(
  'remarketing-stage-h12',
  '0 */12 * * *',
  $$
  SELECT net.http_post(
    url := 'https://dpbanqmuxkfyvsoljbrw.supabase.co/functions/v1/remarketing-pagamento-pendente',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := '{"stage": "h12"}'::jsonb
  );
  $$
);

SELECT cron.schedule(
  'remarketing-stage-h24',
  '0 0 * * *',
  $$
  SELECT net.http_post(
    url := 'https://dpbanqmuxkfyvsoljbrw.supabase.co/functions/v1/remarketing-pagamento-pendente',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := '{"stage": "h24"}'::jsonb
  );
  $$
);

SELECT cron.schedule(
  'remarketing-stage-h48',
  '0 0 */2 * *',
  $$
  SELECT net.http_post(
    url := 'https://dpbanqmuxkfyvsoljbrw.supabase.co/functions/v1/remarketing-pagamento-pendente',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := '{"stage": "h48"}'::jsonb
  );
  $$
);