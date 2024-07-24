import { ListItem } from './ListItem'

import { list } from '../../api/helper'

export const List = () => (
  <ul>
    {list.map((item, i) => (
      <ListItem listItem={item.name} isActive={item.isActive} key={i} />
    ))}
  </ul>
)
