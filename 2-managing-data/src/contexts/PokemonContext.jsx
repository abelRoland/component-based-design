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
    for (i = 0; i < pokemons.length; i++) {
      if (i === index) {
        pokemons[i].isActive = true
      } else {
        pokemons[i].isActive = false
      }
      setActive([...pokemons])
    }
  }

  const value = { pokemons, setActive, handleActive }
  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  )
}

export const usePokemon = () => useContext(PokemonContext)
