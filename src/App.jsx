import React from 'react'
import Hearder from './components/Header'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Hearder/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
