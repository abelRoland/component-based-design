import { usePokemon } from '../../contexts'

import './styles.css'

export const SideNav = ({ list }) => {
  const { selectId, setSelectId } = usePokemon()

  return (
    <aside>
      <ul>
        {list.map((item, i) => (
          <li
            key={item.url}
            className={selectId === i + 1 ? 'listActive' : undefined}
            onClick={() => setSelectId(i + 1)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  )
}
