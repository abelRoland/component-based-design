import { usePokemon } from '../../contexts/PokemonContext'
import { Link } from 'react-router-dom'

import './Section.styles.css'

export const Section = ({ selectedPokemonId }) => {
  const { data, isLoading } = usePokemon(selectedPokemonId)

  if (isLoading)
    return (
      <section className="section">
        <p>loading</p>
      </section>
    )

  if (!data) return null

  return (
    <section className="section">
      Pokemon id: {selectedPokemonId}
      Pokemon name: {data.name}
      <img alt={data.name} src={data.sprites.front_default} />
      <Link to={`/edit/${data.id}`}>{`Edit ${data.name}`}</Link>
    </section>
  )
}
