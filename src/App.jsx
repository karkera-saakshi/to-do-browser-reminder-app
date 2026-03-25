import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
