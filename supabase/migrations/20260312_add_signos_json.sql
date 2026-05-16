-- Migration: Add signos JSON data to cpfs table
-- Date: 2026-03-12

ALTER TABLE public.cpfs
  ADD COLUMN IF NOT EXISTS signos JSONB;

COMMENT ON COLUMN public.cpfs.signos IS 'Objeto completo de signos (zodiaco, chines, etc.)';
