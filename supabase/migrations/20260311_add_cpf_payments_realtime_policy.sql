-- Migration: Allow realtime select by session_id claim
-- Date: 2026-03-11

CREATE POLICY "Realtime access by session"
  ON public.cpf_payments
  FOR SELECT
  USING (
    (auth.jwt() ->> 'session_id') IS NOT NULL
    AND (auth.jwt() ->> 'session_id') = session_id
  );
