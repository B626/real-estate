import './App.css'

import Best from './components/Best'
import Contact from './components/Contact'
import Exp from './components/Exp'
import Header from './components/Header'
import Hero from './components/Hero'
import Houses from './components/Houses'

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Best />
        <Exp />
        <Houses />
        <Contact />
    </div>
  )
}

export default App
