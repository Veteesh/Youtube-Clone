import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from '../Components/bodyx'
import Cells from '../Components/cell'
import Play from '../Components/cell'

function App() {
  return (
    <>
      <Nav />
      <Cells />
    </>
  )
}

export default App
