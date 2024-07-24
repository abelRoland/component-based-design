import { Button, List, Header, Card } from '../components'
import { list } from '../api/helper'

import './app.css'

export const App = () => (
  <div className="container">
    <header>
      <Header text="Pokemon app" />
    </header>
    <aside>
      <List />
    </aside>
    <main>
      {list.map((item, i) => (
        <Card
          key={i}
          name={item.name}
          fileSrc={item.src}
          isActive={item.isActive}
        />
      ))}
    </main>
    <footer>
      <Button label="Add Pokemon" onClick={() => alert('WIP')} />
    </footer>
  </div>
)
