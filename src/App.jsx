import React from 'react'
import Hearder from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Hearder/>
      <About/>
      <Projects/>
      <Testimonials/>
    </div>
  )
}

export default App
