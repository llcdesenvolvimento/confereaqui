-- Migration: Update remarketing cron jobs with anon auth headers + cron secret
-- Date: 2026-03-19

CREATE EXTENSION IF NOT EXISTS pg_net;
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Public anon key (project-scoped) used to satisfy Edge Function JWT requirement.
-- If you rotate anon key, update this migration strategy in a new migration.
DO $$
DECLARE
  anon_key TEXT := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwYmFucW11eGtmeXZzb2xqYnJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2NDA0MzYsImV4cCI6MjA4ODIxNjQzNn0.KgZt1CouZhNUJ0_Of4nwKbYFgYld9cVwsdgM9XtWI2A';
  cron_secret TEXT := 'envioSeguro2026$@@@';
BEGIN
  PERFORM cron.unschedule(jobid)
  FROM cron.job
  WHERE jobname IN (
    'remarketing-stage-m10',
    'remarketing-stage-h3',
    'remarketing-stage-h12',
    'remarketing-stage-h24',
    'remarketing-stage-h48'
  );

  PERFORM cron.schedule(
    'remarketing-stage-m10',
    '*/10 * * * *',
    format(
      $sql$
      SELECT net.http_post(
        url := 'https://dpbanqmuxkfyvsoljbrw.supabase.co/functions/v1/remarketing-pagamento-pendente',
        headers := %L::jsonb,
        body := '{"stage": "m10"}'::jsonb
      );
      $sql$,
      jsonb_build_object(
        'Content-Type', 'application/json',
        'x-cron-secret', cron_secret,
        'apikey', anon_key,
        'Authorization', 'Bearer ' || anon_key
      )::text
    )
  );

  PERFORM cron.schedule(
    'remarketing-stage-h3',
    '0 */3 * * *',
    format(
      $sql$
      SELECT net.http_post(
        url := 'https://dpbanqmuxkfyvsoljbrw.supabase.co/functions/v1/remarketing-pagamento-pendente',
        headers := %L::jsonb,
        body := '{"stage": "h3"}'::jsonb
      );
      $sql$,
      jsonb_build_object(
        'Content-Type', 'application/json',
        'x-cron-secret', cron_secret,
        'apikey', anon_key,
        'Authorization', 'Bearer ' || anon_key
      )::text
    )
  );

  PERFORM cron.schedule(
    'remarketing-stage-h12',
    '0 */12 * * *',
    format(
      $sql$
      SELECT net.http_post(
        url := 'https://dpbanqmuxkfyvsoljbrw.supabase.co/functions/v1/remarketing-pagamento-pendente',
        headers := %L::jsonb,
        body := '{"stage": "h12"}'::jsonb
      );
      $sql$,
      jsonb_build_object(
        'Content-Type', 'application/json',
        'x-cron-secret', cron_secret,
        'apikey', anon_key,
        'Authorization', 'Bearer ' || anon_key
      )::text
    )
  );

  PERFORM cron.schedule(
    'remarketing-stage-h24',
    '0 0 * * *',
    format(
      $sql$
      SELECT net.http_post(
        url := 'https://dpbanqmuxkfyvsoljbrw.supabase.co/functions/v1/remarketing-pagamento-pendente',
        headers := %L::jsonb,
        body := '{"stage": "h24"}'::jsonb
      );
      $sql$,
      jsonb_build_object(
        'Content-Type', 'application/json',
        'x-cron-secret', cron_secret,
        'apikey', anon_key,
        'Authorization', 'Bearer ' || anon_key
      )::text
    )
  );

  PERFORM cron.schedule(
    'remarketing-stage-h48',
    '0 0 */2 * *',
    format(
      $sql$
      SELECT net.http_post(
        url := 'https://dpbanqmuxkfyvsoljbrw.supabase.co/functions/v1/remarketing-pagamento-pendente',
        headers := %L::jsonb,
        body := '{"stage": "h48"}'::jsonb
      );
      $sql$,
      jsonb_build_object(
        'Content-Type', 'application/json',
        'x-cron-secret', cron_secret,
        'apikey', anon_key,
        'Authorization', 'Bearer ' || anon_key
      )::text
    )
  );
END $$;