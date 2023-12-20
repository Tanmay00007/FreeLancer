import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Resources from './pages/Resources'
import {BrowserRouter,Navigate,Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/pricing' element={<Pricing />} ></Route>
        <Route path='/resources' element={<Resources />}> </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
