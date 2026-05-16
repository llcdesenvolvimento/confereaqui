-- Migration: Add full report fields to cpfs table
-- Date: 2026-03-07

ALTER TABLE public.cpfs
  ADD COLUMN IF NOT EXISTS situacao_do_cpf TEXT,
  ADD COLUMN IF NOT EXISTS nome_mae TEXT,
  ADD COLUMN IF NOT EXISTS cpf_mae TEXT,
  ADD COLUMN IF NOT EXISTS data_nascimento_mae TEXT,
  ADD COLUMN IF NOT EXISTS obito TEXT,
  ADD COLUMN IF NOT EXISTS idade INTEGER,
  ADD COLUMN IF NOT EXISTS signo TEXT,
  ADD COLUMN IF NOT EXISTS nacionalidade TEXT,
  ADD COLUMN IF NOT EXISTS estado_civil TEXT,
  ADD COLUMN IF NOT EXISTS renda TEXT,
  ADD COLUMN IF NOT EXISTS ocupacao TEXT,
  ADD COLUMN IF NOT EXISTS risco_credito TEXT,
  ADD COLUMN IF NOT EXISTS emails JSONB,
  ADD COLUMN IF NOT EXISTS telefones JSONB,
  ADD COLUMN IF NOT EXISTS enderecos JSONB,
  ADD COLUMN IF NOT EXISTS historico_profissional JSONB,
  ADD COLUMN IF NOT EXISTS participacao_societaria JSONB,
  ADD COLUMN IF NOT EXISTS parentes JSONB;

COMMENT ON COLUMN public.cpfs.situacao_do_cpf IS 'Situacao do CPF na consulta completa';
COMMENT ON COLUMN public.cpfs.nome_mae IS 'Nome da mae na consulta completa';
COMMENT ON COLUMN public.cpfs.cpf_mae IS 'CPF da mae na consulta completa';
COMMENT ON COLUMN public.cpfs.data_nascimento_mae IS 'Data de nascimento da mae (DD/MM/AAAA)';
COMMENT ON COLUMN public.cpfs.obito IS 'Indicador de obito ou descricao';
COMMENT ON COLUMN public.cpfs.idade IS 'Idade calculada pela consulta completa';
COMMENT ON COLUMN public.cpfs.signo IS 'Signo (zodiaco) da consulta completa';
COMMENT ON COLUMN public.cpfs.nacionalidade IS 'Nacionalidade do CPF';
COMMENT ON COLUMN public.cpfs.estado_civil IS 'Estado civil do CPF';
COMMENT ON COLUMN public.cpfs.renda IS 'Renda informada';
COMMENT ON COLUMN public.cpfs.ocupacao IS 'Ocupacao informada';
COMMENT ON COLUMN public.cpfs.risco_credito IS 'Risco de credito';
COMMENT ON COLUMN public.cpfs.emails IS 'Lista de emails';
COMMENT ON COLUMN public.cpfs.telefones IS 'Lista de telefones';
COMMENT ON COLUMN public.cpfs.enderecos IS 'Lista de enderecos';
COMMENT ON COLUMN public.cpfs.historico_profissional IS 'Lista de historico profissional';
COMMENT ON COLUMN public.cpfs.participacao_societaria IS 'Lista de participacao societaria';
COMMENT ON COLUMN public.cpfs.parentes IS 'Lista de parentes/vinculos';
