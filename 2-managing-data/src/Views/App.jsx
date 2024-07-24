import { List, Header, Card, PokemonForm } from '../components'
import { pokemonList } from '../api/helper'

import './app.css'

export const App = () => (
  <div className="container">
    <header>
      <Header text="Pokemon app" />
    </header>
    <aside>
      <List />
    </aside>
    <main>
      {pokemonList.map((item, i) => (
        <Card
          key={i}
          name={item.name}
          fileSrc={item.src}
          isActive={item.isActive}
        />
      ))}
    </main>
    <footer>
      <PokemonForm />
    </footer>
  </div>
)
