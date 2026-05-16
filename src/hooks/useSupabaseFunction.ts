import { useState, useCallback } from 'react'
import { chamarFuncao } from '@/lib/supabase'

interface FunctionState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

/**
 * Hook para chamar Edge Functions do Supabase
 * Gerencia loading, sucesso e erros automaticamente
 */
export const useSupabaseFunction = <T = any>(functionName: string) => {
  const [state, setState] = useState<FunctionState<T>>({
    data: null,
    loading: false,
    error: null,
  })

  const execute = useCallback(
    async (payload: any = {}) => {
      setState({ data: null, loading: true, error: null })
      try {
        const { data, error } = await chamarFuncao(functionName, payload)
        
        if (error) {
          throw new Error(`Function error: ${error.message}`)
        }

        setState({
          data: data as T,
          loading: false,
          error: null,
        })
        return { success: true, data: data as T }
      } catch (error) {
        const err = error instanceof Error ? error : new Error('Function call failed')
        setState({
          data: null,
          loading: false,
          error: err,
        })
        return { success: false, error: err }
      }
    },
    [functionName]
  )

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }))
  }, [])

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null })
  }, [])

  return {
    ...state,
    execute,
    clearError,
    reset,
  }
}
