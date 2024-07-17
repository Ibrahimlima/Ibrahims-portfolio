import { useState } from 'react'
import './App.css'
import Navbar from './components/sections/Navbar'
import Presentation from './components/sections/Presentation'
import Projects from './components/sections/Projects'
import Aboutme from './components/sections/Aboutme'
import Footer from './components/sections/Footer'
import React from 'react';
import Skills from './components/sections/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Presentation/>
      <Projects/>
      <Skills/>
      <Aboutme/>
      <Footer/>
    </>
  )
}

export default App
