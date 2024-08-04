import { Header, SideNav, Footer, Section, Errors } from '../components'
import { usePokemon } from '../contexts/PokemonContext'

export const Home = () => {
  const { list, selectId, setSelectId, showSection } = usePokemon()

  return (
    <>
      <Errors />
      <Header />
      <main className="main">
        <SideNav list={list} onIdSelected={(id) => setSelectId(id)} />

        {showSection && <Section selectedPokemonId={selectId} />}
      </main>
      <Footer />
    </>
  )
}
