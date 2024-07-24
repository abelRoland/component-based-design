import './ListItem.css'

export const ListItem = ({ listItem, isActive }) => {
  return <li className={isActive ? 'listActive' : undefined}>{listItem}</li>
}
