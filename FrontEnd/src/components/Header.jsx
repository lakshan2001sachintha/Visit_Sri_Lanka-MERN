import React from 'react'
import Navbar from './Navbar'
import {assets} from '../assets/assets'

const Hearder = () => {
  return (
    
    <div className='min-h-screen mb-4 bg-cover bg-center flex-items-center w-full overflow-hidden'
    style={{backgroundImage: "url('/header_img.jpg')"}}  id='Header'>
      <Navbar/>
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        
        <h2 className='text-5xl sm:text-6xl md:text-[87px] inline-block max-w-3xl font-semibold pt-48'>VISIT SRI LANKA</h2>
        <div className='space-x-6 mt-16'>
          <a href='#Projects' className='border border-white px-8 py-3 rounded'>Projects</a>
          <button className="relative bg-yellow-500 px-8 py-3 rounded text-white hover:bg-yellow-600 transition">
            Contact Us
            <span className="absolute -top-2 -right-2 flex size-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75 shadow-inner size-9"></span>
              <span className="relative inline-flex size-4 rounded-full bg-white opacity-80"></span>
            </span>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Hearder
