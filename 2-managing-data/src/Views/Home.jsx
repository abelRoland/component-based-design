import { useState } from 'react'
import { usePokemon } from '../contexts/pokemonContext'
import { List, Header, Card, PokemonForm } from '../components'
import './app.css'

export const Home = () => {
  const { pokemons } = usePokemon()
  return (
    <div className="container">
      <header>
        <Header text="Pokemon app" />
      </header>
      <aside>
        <List pokemonList={pokemons} />
      </aside>
      <main>
        {pokemons.map((item, i) => (
          <Card
            key={i}
            name={item.name}
            fileSrc={item.src}
            isActive={item.isActive}
          />
        ))}
      </main>
      <footer>
        <PokemonForm pokemonList={pokemons} />
      </footer>
    </div>
  )
}
