import { Home, Edit } from './Pages'
import { ErrorContextProvider, PokemonProvider } from './contexts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: 'edit', element: <Edit /> },
  ])
  return (
    <>
      <ErrorContextProvider>
        <PokemonProvider>
          <RouterProvider router={router} />
        </PokemonProvider>
      </ErrorContextProvider>
    </>
  )
}
