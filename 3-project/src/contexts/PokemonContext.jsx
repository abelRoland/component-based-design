import { useState, useEffect, createContext, useContext } from 'react'

const PokemonContext = createContext({})

export default function PokemonProvider({ children }) {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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

  const removeItem = (index) => {
    const updatedList = [...list]
    updatedList.splice(index, 1)
    setList(updatedList)
  }

  const value = { list, isLoading, removeItem }
  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  )
}

export const usePokemon = () => useContext(PokemonContext)
