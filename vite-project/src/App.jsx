import { useState } from 'react'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Resources from './pages/Resources'
import {BrowserRouter,Navigate,Routes, Route } from "react-router-dom";
import SharedLayout from './pages/SharedLayout'
import Features from './pages/Features'
import Industries from './pages/Industries'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home/>}></Route>
        <Route path='/pricing' element={<Pricing />} ></Route>
        <Route path='/resources' element={<Resources />}> </Route>
        <Route path='/features' element={<Features />}> </Route>
        <Route path='/industries' element={<Industries />}> </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
