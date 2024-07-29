import { useState, useEffect, createContext, useContext } from 'react'
import { ErrorCode } from '../constants'
import { useErrorsContext } from '../contexts'

const PokemonContext = createContext({})

export function PokemonProvider({ children }) {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)
  const { setError } = useErrorsContext()
  const [selectId, setSelectId] = useState(null)
  const showSection = selectId || selectId === 0

  useEffect(() => {
    let isMounted = true
    const fetchInitialList = () => {
      fetch('https://pokeapi.co/api/v2/pokemon')
        .then((response) => response.json())
        .then((response) => {
          setList(response.results)
          setIsLoading(false)
        })
        .catch(() => {
          setIsLoading(false)
        })
    }
    if (isMounted) {
      fetchInitialList()
    }

    return () => (isMounted = false)
  }, [])

  useEffect(() => {
    let isMounted = true

    const fetchPokemon = () => {
      setData(null)
      setIsLoading(true)
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectId}`)
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

    if (isMounted && selectId) {
      fetchPokemon()
    }

    return () => (isMounted = false)
  }, [selectId])

  const removeItem = (index) => {
    const updatedList = [...list]
    updatedList.splice(index, 1)
    setList(updatedList)
  }

  const value = {
    list,
    data,
    isLoading,
    removeItem,
    selectId,
    setSelectId,
    showSection,
  }
  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  )
}

export const usePokemon = () => useContext(PokemonContext)
