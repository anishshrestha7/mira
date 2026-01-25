import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './assets/Pages/Home'
import About from './assets/Pages/About'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App