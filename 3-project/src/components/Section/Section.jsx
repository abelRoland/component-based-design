import { usePokemon } from '../../contexts/PokemonContext'
import { Link } from 'react-router-dom'

import './Section.styles.css'

export const Section = () => {
  const { data, selectId, isLoading } = usePokemon()

  if (isLoading)
    return (
      <main className="section">
        <p>loading</p>
      </main>
    )

  if (!data) return null

  return (
    <main>
      <p>Pokemon id: {selectId}</p>
      <p>Pokemon name: {data.name}</p>
      <img
        className="cardImage"
        alt={data.name}
        src={data.sprites.front_default}
      />
      <Link to={`/edit/${data.id}`}>{`Edit ${data.name}`}</Link>
    </main>
  )
}
