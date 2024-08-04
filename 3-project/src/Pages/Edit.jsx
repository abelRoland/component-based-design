import { Link, useParams } from 'react-router-dom'
import { usePokemon } from '../contexts'
import { useEffect } from 'react'

export const Edit = () => {
  const params = useParams()
  const { data } = usePokemon()

  useEffect(() => console.log(data), [data])

  return (
    <>
      <h1>{`Edit Pokemon ${data.name}`} </h1>
      <Link to="/">Back Home</Link>
    </>
  )
}
