import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import Footer from './components/Footer'
import Industries from './pages/Industries'

function App() {

  return (
    <>
  <Navbar/>
  <Home/>
  <Features/>
  <Industries/>
  <Footer/>
    </>
  )
}

export default App
