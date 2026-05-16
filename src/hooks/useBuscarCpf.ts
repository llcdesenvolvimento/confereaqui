import { useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'

interface BuscarCpfState {
  loading: boolean
  error: Error | null
  searchId: string | null
  data: {
    cpf: string
    nome: string
    nome_mascarado?: string
    sexo: string
    data_nascimento: string
  } | null
}

/**
 * Hook para buscar CPF via Edge Function que integra com API Jarvis
 */
export const useBuscarCpf = () => {
  const [state, setState] = useState<BuscarCpfState>({
    loading: false,
    error: null,
    searchId: null,
    data: null,
  })

  const buscar = useCallback(async (cpf: string, userId: string) => {
    setState({ loading: true, error: null, searchId: null, data: null })

    try {
      const { data, error } = await supabase.functions.invoke('buscar-cpf', {
        body: { cpf, userId },
      })

      if (error) {
        console.error('[useBuscarCpf] Erro:', error)
        throw new Error(error.message || 'Erro ao buscar CPF')
      }

      if (!data?.success) {
        const errorMsg = data?.error?.message || data?.error?.details || 'Erro desconhecido ao buscar CPF'
        console.error('[useBuscarCpf] Erro na resposta:', errorMsg)
        throw new Error(errorMsg)
      }

      setState({
        loading: false,
        error: null,
        searchId: data.searchId,
        data: data.data,
      })

      return data
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err))
      console.error('[useBuscarCpf] Erro final:', error.message)
      setState({ loading: false, error, searchId: null, data: null })
      throw error
    }
  }, [])

  const reiniciar = useCallback(() => {
    setState({ loading: false, error: null, searchId: null, data: null })
  }, [])

  return {
    ...state,
    buscar,
    reiniciar,
    buscarLoading: state.loading,
  }
}
