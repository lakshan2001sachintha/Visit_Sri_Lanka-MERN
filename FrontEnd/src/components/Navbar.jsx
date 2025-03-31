import {useState} from 'react'
import {assets} from '../assets/assets'
import Signup from './Signup'
import Login from './Login'

const Navbar = () => {

  const [isSignupOpen, setSignupOpen] = useState(false); 
  const [isLoginOpen, setLoginOpen] = useState(false); 


  return (
    <>
  
      {/* Show the Signup page when isSignupOpen is true */}
    <Signup isOpen={isSignupOpen} onClose={() => setSignupOpen(false)} />
    <Login  isOpen={isLoginOpen}  onClose={() => setLoginOpen(false)} />


    <div className='absolute top-5 left-0 w-full z-10'>
      <div class='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
      

        <ul className='hidden md:flex gap-10 text-white text-lg'>
            <a href='#Home' className='cursor-pointer hover:text-yellow-400'>Home</a>
            <a href='#About' className='hover:text-yellow-400'>About</a>
            <a href='#Projects' className='cursor-pointer hover:text-yellow-400'>Projects</a>
            <a href="#Testimonials" className='cursor-pointer hover:text-yellow-400'>Testimonials</a>
        </ul>
              <div className="grid grid-cols-2 gap-7">
                <button className="border border-white px-8 py-2 rounded-full text-white hover:text-black hover:bg-white transition transform active:scale-95" onClick={() => setLoginOpen(true)} >Log In</button>
                <button className="hidden md:block border border-white bg-white px-8 py-2 rounded-full hover:text-white hover:bg-transparent transition transform active:scale-95"  onClick={() => setSignupOpen(true)}>Sign up</button>
                
              </div>
        </div>

        {/*-------mobile-menu--------*/}
        <div className='md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all'>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img src={assets.cross_icon} className='w-6' alt=''/>
            </div>
            <ul className='flex flex-col item-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a href='#Header' className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a href='#About' className='px-4 py-2 rounded-full inline-block'>About</a>
                <a href='#Projects' className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a href='#Testimonials' className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar;
