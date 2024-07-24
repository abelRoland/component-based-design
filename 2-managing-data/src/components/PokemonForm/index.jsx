import { useState, useEffect } from 'react'
import { Button } from '../Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import { pokemonList } from '../../api/helper'

import './style.css'

export const PokemonForm = () => {
  const [value, setValue] = useState('')
  const [errors, setErrors] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [pokemonSelect, setPokemon] = useState(false)

  useEffect(() => {
    setPokemons(pokemonList.map((a) => a.name))
    return () => setPokemons([])
  }, [])

  const checkForErrors = (valueToCheck) => {
    if (!pokemons.includes(valueToCheck)) {
      setErrors(['Pokemon not found'])
    } else {
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
        <Button type="submit" disabled={!isCorrect} label="Submit" />
      </Form>

      {hasError && <Alert variant="danger">{errors[0]}</Alert>}
      {!!isCorrect && (
        <Alert variant="success">
          {`You can submit the pokemon: ${value}`}
        </Alert>
      )}
      {pokemonSelect && <img src={pokemonList[0].src} alt={value} />}
    </>
  )
}
