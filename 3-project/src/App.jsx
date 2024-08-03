import { Home, Edit, NotFound } from './Pages'
import { ErrorContextProvider, PokemonProvider } from './contexts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound /> },
  { path: '/edit', element: <Edit /> },
])

export const App = () => {
  return (
    <ErrorContextProvider>
      <PokemonProvider>
        <RouterProvider router={router} />
      </PokemonProvider>
    </ErrorContextProvider>
  )
}
