import { Home, Edit, NotFound } from './Pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound /> },
  { path: '/edit/:pokemonId', element: <Edit /> },
])

export const App = () => {
  return <RouterProvider router={router} />
}
