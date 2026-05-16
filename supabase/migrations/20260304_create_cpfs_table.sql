-- Migration: Create cpfs table for storing CPF search results
-- Date: 2026-03-04

-- Create cpfs table
CREATE TABLE IF NOT EXISTS public.cpfs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  cpf TEXT NOT NULL,
  nome TEXT,
  sexo TEXT,
  data_nascimento TEXT,
  search_id TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL,
  created_at_timestamp TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  
  -- Constraints
  CONSTRAINT cpf_length_check CHECK (length(cpf) = 11),
  CONSTRAINT search_id_length_check CHECK (length(search_id) = 8)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_cpfs_search_id ON public.cpfs(search_id);
CREATE INDEX IF NOT EXISTS idx_cpfs_user_id ON public.cpfs(user_id);
CREATE INDEX IF NOT EXISTS idx_cpfs_cpf ON public.cpfs(cpf);
CREATE INDEX IF NOT EXISTS idx_cpfs_created_at_timestamp ON public.cpfs(created_at_timestamp);

-- Enable Row Level Security (RLS)
ALTER TABLE public.cpfs ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can read their own records OR records without user_id (anonymous)
CREATE POLICY "Users can view their own records or public data"
  ON public.cpfs
  FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

-- RLS Policy: Service role can insert (for Edge Functions)
CREATE POLICY "Service role can insert CPF records"
  ON public.cpfs
  FOR INSERT
  WITH CHECK (true);

-- RLS Policy: Users can delete their own records
CREATE POLICY "Users can delete their own CPF searches"
  ON public.cpfs
  FOR DELETE
  USING (auth.uid() = user_id);

-- Optional: Create cpf_payments table for payment tracking
CREATE TABLE IF NOT EXISTS public.cpf_payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  cpf TEXT NOT NULL,
  email TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',
  report_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  
  -- Constraints
  CONSTRAINT valid_status CHECK (status IN ('pending', 'completed', 'failed', 'cancelled'))
);

-- Create indexes for cpf_payments
CREATE INDEX IF NOT EXISTS idx_cpf_payments_user_id ON public.cpf_payments(user_id);
CREATE INDEX IF NOT EXISTS idx_cpf_payments_cpf ON public.cpf_payments(cpf);
CREATE INDEX IF NOT EXISTS idx_cpf_payments_status ON public.cpf_payments(status);

-- Enable RLS for cpf_payments
ALTER TABLE public.cpf_payments ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can view their own payments
CREATE POLICY "Users can view their own payments"
  ON public.cpf_payments
  FOR SELECT
  USING (auth.uid() = user_id);

-- RLS Policy: Service role can insert payments
CREATE POLICY "Service role can insert payments"
  ON public.cpf_payments
  FOR INSERT
  WITH CHECK (true);

-- RLS Policy: Service role can update payments
CREATE POLICY "Service role can update payment status"
  ON public.cpf_payments
  FOR UPDATE
  USING (true);

-- Comments for documentation
COMMENT ON TABLE public.cpfs IS 'Stores CPF search results from Jarvis API';
COMMENT ON COLUMN public.cpfs.search_id IS 'Unique 8-digit identifier for URL routing';
COMMENT ON COLUMN public.cpfs.created_at IS 'Human-readable creation date (DD/MM/YYYY HH:MM:SS)';
COMMENT ON COLUMN public.cpfs.created_at_timestamp IS 'Timestamp for sorting and filtering';

COMMENT ON TABLE public.cpf_payments IS 'Tracks payment transactions for CPF reports';
COMMENT ON COLUMN public.cpf_payments.status IS 'Payment status: pending, completed, failed, cancelled';
