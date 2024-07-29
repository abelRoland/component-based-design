import { Home } from './Pages/Home'
import { ErrorContextProvider } from './contexts'
import PokemonProvider from './contexts/PokemonContext'
export const App = () => {
  return (
    <PokemonProvider>
      <ErrorContextProvider>
        <Home />
      </ErrorContextProvider>
    </PokemonProvider>
  )
}
