import { ListItem } from './ListItem'
import { usePokemon } from '../../contexts/pokemonContext'

export const List = () => {
  const { pokemons, handleActive } = usePokemon()

  return (
    <ul>
      {pokemons.map((item, i) => (
        <ListItem
          listItem={item.name}
          isActive={item.isActive}
          onClick={() => handleActive(i)}
          key={i}
        />
      ))}
    </ul>
  )
}
