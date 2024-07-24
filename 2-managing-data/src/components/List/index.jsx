import { useState } from 'react'
import { ListItem } from './ListItem'

import { pokemonList } from '../../api/helper'

export const List = () => {
  const [, setActive] = useState(pokemonList)

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
  return (
    <ul>
      {pokemonList.map((item, i) => (
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
