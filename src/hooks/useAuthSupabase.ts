import { useState, useEffect, useCallback } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

interface AuthState {
  user: User | null
  session: Session | null
  loading: boolean
  error: Error | null
}

/**
 * Hook para gerenciar autenticação com Supabase
 * Fornece login, logout, signup e estado de sessão
 */
export const useAuthSupabase = () => {
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    loading: true,
    error: null,
  })

  // Verificar sessão ao montar o componente
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()
        if (error) throw error
        
        setState(prev => ({
          ...prev,
          session: data.session,
          user: data.session?.user || null,
          loading: false,
        }))
      } catch (error) {
        setState(prev => ({
          ...prev,
          error: error instanceof Error ? error : new Error('Failed to check session'),
          loading: false,
        }))
      }
    }

    checkSession()

    // Listener para mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setState(prev => ({
        ...prev,
        session,
        user: session?.user || null,
      }))
    })

    return () => subscription?.unsubscribe()
  }, [])

  // Login
  const login = useCallback(async (email: string, password: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      
      setState(prev => ({
        ...prev,
        session: data.session,
        user: data.user,
        loading: false,
      }))
      return { success: true }
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Login failed')
      setState(prev => ({ ...prev, error: err, loading: false }))
      return { success: false, error: err }
    }
  }, [])

  // Sign up
  const signup = useCallback(async (email: string, password: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })
      if (error) throw error
      
      setState(prev => ({
        ...prev,
        session: data.session,
        user: data.user,
        loading: false,
      }))
      return { success: true }
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Signup failed')
      setState(prev => ({ ...prev, error: err, loading: false }))
      return { success: false, error: err }
    }
  }, [])

  // Logout
  const logout = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
      setState(prev => ({
        ...prev,
        session: null,
        user: null,
        loading: false,
      }))
      return { success: true }
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Logout failed')
      setState(prev => ({ ...prev, error: err, loading: false }))
      return { success: false, error: err }
    }
  }, [])

  // Reset error
  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }))
  }, [])

  return {
    ...state,
    login,
    signup,
    logout,
    clearError,
  }
}
