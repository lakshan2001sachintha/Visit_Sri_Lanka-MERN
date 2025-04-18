import React from 'react'

function Contact() {
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact
        <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
       <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from Those Who Found Home With Us</p>
      
    <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
              Your Name
              <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='text' name='Name' placeholder='Your Name' required/>
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
              Your Email
              <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='email' name='Email' placeholder='Your Email' required/>
            </div>
        </div>
    <div>
        Message 
        <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' 
        name ='Message' placeholder='Message' required></textarea>
    </div>
    <div>
    <button className='bg-yellow-600 hover:bg-yellow-400 text-white px-8 py-2 rounded'>Submit</button>
    </div>
    </form>

    </div>
  )
}

export default Contact
