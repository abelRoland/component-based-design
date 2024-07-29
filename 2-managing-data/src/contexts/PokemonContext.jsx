import { useState, useEffect, createContext, useContext } from 'react'
import { pokemonList } from '../api/helper'

const PokemonContext = createContext({})

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState(pokemonList)
  const [, setActive] = useState(false)

  useEffect(() => {
    setPokemons(pokemonList)

    return () => setPokemons({})
  }, [pokemons])

  const handleActive = (index) => {
    let i
    for (i = 0; i < pokemonList.length; i++) {
      if (i === index) {
        pokemonList[i].isActive = true
      } else {
        pokemonList[i].isActive = false
      }
      setActive([...pokemonList])
    }
  }

  const value = { pokemons, setActive, handleActive }
  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  )
}

export const usePokemon = () => useContext(PokemonContext)
