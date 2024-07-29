import { useState } from 'react'
import { Header, AsideMenu, Footer, Section, Errors } from '../components'
import { usePokemon } from '../contexts/PokemonContext'

export const Home = () => {
  const { list, isLoading } = usePokemon()
  const [selectId, setSelectId] = useState(null)
  const showSection = selectId || selectId === 0
  return (
    <>
      <Errors />
      <Header />
      <main className="main">
        {isLoading ? (
          <p>loading</p>
        ) : (
          <AsideMenu list={list} onIdSelected={(id) => setSelectId(id)} />
        )}
        {showSection && <Section selectedPokemonId={selectId} />}
      </main>
      <Footer />
    </>
  )
}
