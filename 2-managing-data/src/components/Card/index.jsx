import './styles.css'

export const Card = (props) => {
  const { name, fileSrc, isActive } = props

  return (
    <>
      {isActive && (
        <div className="card">
          <h1>{name}</h1>
          <img src={fileSrc} />
        </div>
      )}
    </>
  )
}
