import { Home } from './Pages/Home'
import { ErrorContextProvider, PokemonProvider } from './contexts'
export const App = () => {
  return (
    <ErrorContextProvider>
      <PokemonProvider>
        <Home />
      </PokemonProvider>
    </ErrorContextProvider>
  )
}
