-- Migration: Update remarketing crons to send x-cron-secret header
-- Date: 2026-03-11

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
    headers := '{"Content-Type": "application/json", "x-cron-secret": "envioSeguro2026$@@@"}'::jsonb,
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
    headers := '{"Content-Type": "application/json", "x-cron-secret": "envioSeguro2026$@@@"}'::jsonb,
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
    headers := '{"Content-Type": "application/json", "x-cron-secret": "envioSeguro2026$@@@"}'::jsonb,
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
    headers := '{"Content-Type": "application/json", "x-cron-secret": "envioSeguro2026$@@@"}'::jsonb,
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
    headers := '{"Content-Type": "application/json", "x-cron-secret": "envioSeguro2026$@@@"}'::jsonb,
    body := '{"stage": "h48"}'::jsonb
  );
  $$
);