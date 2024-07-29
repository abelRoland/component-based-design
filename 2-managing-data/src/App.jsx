import { Home } from './Views/Home'

import PokemonProvider from './contexts/PokemonContext'

export const App = () => {
  return (
    <PokemonProvider>
      <Home />
    </PokemonProvider>
  )
}
