import { getIdFromUrl } from '../../utils'
import { usePokemon } from '../../contexts'

import './styles.css'

export const SideNav = ({ list, onIdSelected }) => {
  const { selectId } = usePokemon()

  return (
    <aside>
      <ul>
        {list.map((item, i) => (
          <li
            key={item.url}
            className={selectId === i + 1 ? 'listActive' : undefined}
            onClick={() => onIdSelected(getIdFromUrl(item.url))}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  )
}
