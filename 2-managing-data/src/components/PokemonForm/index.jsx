import { useState, useEffect } from 'react'
import { Button } from '../Button'
import { usePokemon } from '../../contexts/pokemonContext'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'

import './style.css'

export const PokemonForm = ({ pokemonList }) => {
  const [value, setValue] = useState('')
  const [errors, setErrors] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [, setAvatar] = useState([])
  const [avatarIndex, setAvatarIndex] = useState(0)
  const [pokemonSelect, setPokemon] = useState(false)
  const { handleActive } = usePokemon()

  useEffect(() => {
    setPokemons(pokemonList.map((a) => a.name))
    setAvatar(pokemonList.map((a) => a.src))
    return () => setPokemons([])
  }, [])

  const checkForErrors = (valueToCheck) => {
    if (!pokemons.includes(valueToCheck)) {
      setErrors(['Pokemon not found'])
    } else {
      setAvatarIndex(pokemons.indexOf(valueToCheck))
      setErrors([])
    }
  }

  const hasError = !!errors.length
  const isCorrect = !hasError && value.length

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          setPokemon(true)
          handleActive(avatarIndex)
        }}
      >
        <Form.Group>
          <Form.Label>Search for a pokemon</Form.Label>
          <Form.Control
            isInvalid={errors.length}
            placeholder="Pikachu"
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              checkForErrors(e.target.value)
            }}
          />
        </Form.Group>
        <Button type="submit" disabled={!isCorrect} label="Activate" />
      </Form>

      {hasError && <Alert variant="danger">{errors[0]}</Alert>}
      {!!isCorrect && (
        <Alert variant="success">
          {`You can submit the pokemon: ${value}`}
        </Alert>
      )}
      {pokemonSelect && <img src={pokemonList[avatarIndex].src} alt={value} />}
    </>
  )
}
