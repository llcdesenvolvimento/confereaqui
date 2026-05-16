-- Migration: Add is_bypass column to cpfs table
-- Date: 2026-03-21
-- Purpose: Flag to mark CPF searches that received bypass access via liberaragora@gmail.com email

ALTER TABLE public.cpfs
ADD COLUMN IF NOT EXISTS is_bypass BOOLEAN DEFAULT false;

-- Create index for faster lookup on bypass queries
CREATE INDEX IF NOT EXISTS idx_cpfs_is_bypass ON public.cpfs(is_bypass);

-- Create index for combined search on search_id and is_bypass for verificar-pagamento fallback
CREATE INDEX IF NOT EXISTS idx_cpfs_search_id_is_bypass ON public.cpfs(search_id, is_bypass);

COMMENT ON COLUMN public.cpfs.is_bypass IS 'Set to true when payment was bypassed via liberaragora@gmail.com email; used as fallback authorization in verificar-pagamento when no cpf_payments record exists';
