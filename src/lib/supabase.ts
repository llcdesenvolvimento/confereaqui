import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check your .env.local file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const criarClienteRealtime = (accessToken: string) => {
  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  })
}

/**
 * Obter a sessão do usuário autenticado
 */
export const obterSessao = async () => {
  const { data, error } = await supabase.auth.getSession()
  return { session: data.session, error }
}

/**
 * Entrar com e-mail e senha
 */
export const entrar = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { user: data.user, session: data.session, error }
}

/**
 * Cadastrar com e-mail e senha
 */
export const cadastrar = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  return { user: data.user, session: data.session, error }
}

/**
 * Sair do usuário atual
 */
export const sair = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

/**
 * Chamar uma Edge Function
 */
export const chamarFuncao = async (functionName: string, payload: any) => {
  const { data, error } = await supabase.functions.invoke(functionName, {
    body: payload,
  })
  return { data, error }
}

/**
 * Inserir dados em uma tabela
 */
export const inserirDados = async (table: string, data: any) => {
  const { data: result, error } = await supabase.from(table).insert([data])
  return { data: result, error }
}

/**
 * Buscar dados de uma tabela
 */
export const buscarDados = async (table: string, filters?: Record<string, any>) => {
  let query = supabase.from(table).select('*')

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      query = query.eq(key, value)
    })
  }

  const { data, error } = await query
  return { data, error }
}
