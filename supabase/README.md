# Supabase Backend Configuration

Este diretório contém a configuração do Supabase para o projeto buscadados.

## Estrutura

- **`.branches/`** - Versões de branches (Supabase CLI)
- **`.temp/`** - Arquivos temporários
- **`functions/`** - Edge Functions (serverless do Supabase)
- **`migrations/`** - Migrações SQL do banco de dados
- **`config.toml`** - Arquivo de configuração Supabase
- **`.env`** - Variáveis de ambiente para referência

## Setup

### 1. Configurar credenciais

```bash
# Na raiz do projeto, crie .env.local
cp .env.example .env.local
```

Adicione suas credenciais do Supabase:
```bash
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

Como obter essas credenciais:
1. Acesse [https://app.supabase.com](https://app.supabase.com)
2. Selecione seu projeto
3. Vá em **Settings → API**
4. Copie **Project URL** e **anon public key**

### 2. Instalar dependências

```bash
bun install @supabase/supabase-js @supabase/auth-helpers-react
```

### 3. Inicializar SDK

O cliente Supabase é criado em `src/lib/supabase.ts` e é usado por hooks em `src/hooks/`.

## Edge Functions

As funções serverless do Supabase serão criadas em `functions/`:

- `functions/generate-report/` - Gerar relatórios de CPF
- `functions/process-payment/` - Processar pagamentos

Deploy automático via GitHub Actions quando commitar em `supabase/functions/`.

## Migrações

Alterações no schema do banco de dados vão em `migrations/`.

Exemplo:
```sql
-- migrations/20260304_create_cpf_searches.sql
CREATE TABLE cpf_searches (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  cpf TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Documentação

- [Supabase Docs](https://supabase.com/docs)
- [Auth Setup](https://supabase.com/docs/guides/auth)
- [Edge Functions](https://supabase.com/docs/guides/functions)
- [Database](https://supabase.com/docs/guides/database)
