import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorContextProvider, PokemonProvider } from './contexts'

import { App } from './App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ErrorContextProvider>
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </ErrorContextProvider>
  </>
)
