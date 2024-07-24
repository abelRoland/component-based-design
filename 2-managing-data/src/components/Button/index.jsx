import './style.css'

export const Button = (props) => {
  const { label, onClick } = props

  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  )
}
