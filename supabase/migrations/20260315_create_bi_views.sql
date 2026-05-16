-- Migration: Create BI views with Brazil timezone formatting
-- Date: 2026-03-15

CREATE OR REPLACE VIEW public.vw_cpfs_bi AS
SELECT
  cpfs.*, 
  to_char(timezone('America/Sao_Paulo', cpfs.created_at_timestamp), 'DD/MM/YYYY HH24:MI:SS') AS created_at_br
FROM public.cpfs;

CREATE OR REPLACE VIEW public.vw_cpf_payments_bi AS
SELECT
  cpf_payments.*,
  to_char(timezone('America/Sao_Paulo', cpf_payments.created_at), 'DD/MM/YYYY HH24:MI:SS') AS created_at_br,
  to_char(timezone('America/Sao_Paulo', cpf_payments.updated_at), 'DD/MM/YYYY HH24:MI:SS') AS updated_at_br,
  to_char(timezone('America/Sao_Paulo', cpf_payments.pix_expires_at), 'DD/MM/YYYY HH24:MI:SS') AS pix_expires_at_br,
  to_char(timezone('America/Sao_Paulo', cpf_payments.paid_at), 'DD/MM/YYYY HH24:MI:SS') AS paid_at_br,
  to_char(timezone('America/Sao_Paulo', cpf_payments.last_webhook_at), 'DD/MM/YYYY HH24:MI:SS') AS last_webhook_at_br
FROM public.cpf_payments;
