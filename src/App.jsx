import { useState } from 'react'
import Header from './component/Header'
import './App.css'
import Cards from './component/Cards'
import { cards } from './cards'

function App() {
  const [card, setCard] = useState(cards)

  return (
    <>
      <Header />
      <Cards card={card} setCard={setCard} />
    </>
  );
}

export default App
