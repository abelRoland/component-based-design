import { useState, useEffect } from 'react'

import { ErrorCode } from '../constants'
import { useErrorsContext } from '../contexts'

export const usePokemon = (pokemonId) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { setError } = useErrorsContext()

  useEffect(() => {
    let isMounted = true

    const fetchPokemon = () => {
      setData(null)
      setIsLoading(true)
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((response) => {
          if (response.ok) return response.json()

          throw new Error(ErrorCode.POKEMON_NOT_FOUND)
        })
        .then((response) => {
          setData(response)
          setIsLoading(false)
        })
        .catch((error) => {
          setIsLoading(false)
          setError(error.message)
        })
    }

    if (isMounted) {
      fetchPokemon()
    }

    return () => (isMounted = false)
  }, [pokemonId])

  return {
    data,
    isLoading,
  }
}
