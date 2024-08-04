import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePokemon } from '../contexts/PokemonContext'

export const Edit = () => {
  const params = useParams()
  const { data } = usePokemon()
  useEffect(() => console.log(data), [data])

  return (
    <>
      <h1>{`Edit Pokemon ${params.pokemonId}`} </h1>
    </>
  )
}
