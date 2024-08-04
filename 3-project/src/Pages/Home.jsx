import { Header, SideNav, Footer, Section, Errors } from '../components'
import { usePokemon } from '../contexts/PokemonContext'

import './styles.css'

export const Home = () => {
  const { list, setSelectId, showSection } = usePokemon()

  return (
    <div className="container">
      <Errors />
      <Header />
      <SideNav list={list} onIdSelected={(id) => setSelectId(id)} />
      {showSection && <Section />}
      <Footer />
    </div>
  )
}
