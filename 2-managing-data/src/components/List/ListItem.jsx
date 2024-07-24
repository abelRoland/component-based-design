import './ListItem.css'

export const ListItem = ({ listItem, isActive, onClick }) => {
  
  return (
    <li className={isActive ? 'listActive' : undefined} onClick={onClick}>
      {listItem}
    </li>
  )
}
