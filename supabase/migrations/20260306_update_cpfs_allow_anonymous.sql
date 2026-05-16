-- Migration: Update cpfs table to allow anonymous users (user_id NULL)
-- Date: 2026-03-05

-- Drop existing RLS policies
DROP POLICY IF EXISTS "Users can view their own CPF searches" ON public.cpfs;
DROP POLICY IF EXISTS "Users can delete their own CPF searches" ON public.cpfs;

-- Alter user_id to allow NULL
ALTER TABLE public.cpfs
ALTER COLUMN user_id DROP NOT NULL;

-- Create updated RLS policies
DROP POLICY IF EXISTS "Users can view their own records or public data" ON public.cpfs;
DROP POLICY IF EXISTS "Users can delete their own CPF searches" ON public.cpfs;

CREATE POLICY "Users can view their own records or public data"
  ON public.cpfs
  FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can delete their own CPF searches"
  ON public.cpfs
  FOR DELETE
  USING (auth.uid() = user_id OR user_id IS NULL);
