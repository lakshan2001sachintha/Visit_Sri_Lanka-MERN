import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Hearder from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Place from "./components/Place";




const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Hearder/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Place/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
