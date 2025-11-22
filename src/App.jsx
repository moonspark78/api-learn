import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokeApi from './components/PokeApi'
import CryptoApi from './components/CryptoApi'

function App() {

  return (
    <div>
     <PokeApi/>
     <CryptoApi/>
    </div>
  )
}

export default App
