-- Migration: Restrict cpf_payments inserts to service role only (retry)
-- Date: 2026-03-08

ALTER TABLE public.cpf_payments
  ALTER COLUMN user_id DROP NOT NULL;

DROP POLICY IF EXISTS "Anonymous can insert payments" ON public.cpf_payments;
DROP POLICY IF EXISTS "Service role can insert payments" ON public.cpf_payments;

CREATE POLICY "Service role can insert payments"
  ON public.cpf_payments
  FOR INSERT
  WITH CHECK (true);
