import { useState } from 'react'
import Header from './component/Header'
import './App.css'
import Cards from './component/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Cards/>
    </>
  );
}

export default App
