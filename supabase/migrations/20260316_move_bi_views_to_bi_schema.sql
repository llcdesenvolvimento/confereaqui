-- Migration: Move BI views to dedicated schema with restricted access
-- Date: 2026-03-16

-- Dedicated schema for BI artifacts
CREATE SCHEMA IF NOT EXISTS bi;

-- Ensure BI roles exist (managed at database level)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'bi_admin') THEN
    CREATE ROLE bi_admin NOLOGIN;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'bi_readonly') THEN
    CREATE ROLE bi_readonly NOLOGIN;
  END IF;
END
$$;

-- Restrict schema exposure
REVOKE ALL ON SCHEMA bi FROM PUBLIC;
REVOKE ALL ON SCHEMA bi FROM anon;
REVOKE ALL ON SCHEMA bi FROM authenticated;
GRANT USAGE ON SCHEMA bi TO bi_admin;
GRANT USAGE ON SCHEMA bi TO bi_readonly;

-- Remove old public views
DROP VIEW IF EXISTS public.vw_cpfs_bi;
DROP VIEW IF EXISTS public.vw_cpf_payments_bi;

-- Recreate views in BI schema using caller permissions
CREATE OR REPLACE VIEW bi.vw_cpfs_bi
WITH (security_invoker = true) AS
SELECT
  cpfs.*,
  to_char(timezone('America/Sao_Paulo', cpfs.created_at_timestamp), 'DD/MM/YYYY HH24:MI:SS') AS created_at_br
FROM public.cpfs;

CREATE OR REPLACE VIEW bi.vw_cpf_payments_bi
WITH (security_invoker = true) AS
SELECT
  cpf_payments.*,
  to_char(timezone('America/Sao_Paulo', cpf_payments.created_at), 'DD/MM/YYYY HH24:MI:SS') AS created_at_br,
  to_char(timezone('America/Sao_Paulo', cpf_payments.updated_at), 'DD/MM/YYYY HH24:MI:SS') AS updated_at_br,
  to_char(timezone('America/Sao_Paulo', cpf_payments.pix_expires_at), 'DD/MM/YYYY HH24:MI:SS') AS pix_expires_at_br,
  to_char(timezone('America/Sao_Paulo', cpf_payments.paid_at), 'DD/MM/YYYY HH24:MI:SS') AS paid_at_br,
  to_char(timezone('America/Sao_Paulo', cpf_payments.last_webhook_at), 'DD/MM/YYYY HH24:MI:SS') AS last_webhook_at_br
FROM public.cpf_payments;

-- Grant view read access only to BI roles
REVOKE ALL ON bi.vw_cpfs_bi FROM PUBLIC;
REVOKE ALL ON bi.vw_cpf_payments_bi FROM PUBLIC;
GRANT SELECT ON bi.vw_cpfs_bi TO bi_admin, bi_readonly;
GRANT SELECT ON bi.vw_cpf_payments_bi TO bi_admin, bi_readonly;
