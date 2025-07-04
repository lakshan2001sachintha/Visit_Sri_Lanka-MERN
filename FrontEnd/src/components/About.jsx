import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-24 md:px-20 lg:px-32 w-full overflow-hidden' id='About' >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About<span className='underline underline-offset-4 decoration-1 under font-light'> Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicaties, Dedicated to Your Vision</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.two} alt="" className='w-full sm:w-1/2 max-w-lg animate-float' />

        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
           <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
             <div>
                <p className='text-4xl font-medium text-gray-800'>10+</p>
                <p>Year of Excellence</p>
             </div>
             <div>
                <p className='text-4xl font-medium text-gray-800'>12+</p>
                <p>Project Completed</p>
             </div>
             <div>
                <p className='text-4xl font-medium text-gray-800'>20+</p>
                <p>Mn. Sq. Ft. Delivered</p>
             </div>
             <div>
                <p className='text-4xl font-medium text-gray-800'>25+</p>
                <p>Ongoing Projects</p>
             </div>
           </div>
           <p className='my-10 max-w-lg'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           </p>
           <button className='bg-yellow-600 hover:bg-yellow-400 text-white px-8 py-2 rounded'>Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default About
