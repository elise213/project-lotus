import { useState } from 'react'
import reactLogo from '../public/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from "./components/Landing"
import About from "./components/About"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='home-container'>
      <Landing />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </div>
  )
}

export default App
