import React from 'react'
import Hearder from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Hearder/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
