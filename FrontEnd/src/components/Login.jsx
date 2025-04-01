import React from 'react'


function Login({isOpen,onClose}) {
  return (
    <div className={`fixed top-0 right-0 h-full w-1/4 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`} style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
      <div className="p-6">
        <button
          className="text-white hover:text-gray-700 absolute top-10 right-12 text-lg" onClick={onClose}>
          ✖
        </button>
        <h2 className="text-3xl text-center text-white bg-yellow-600 px-4 py-4 mb-8">Log In</h2>

        <form>
         
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-10">
            <label className="block text-gray-700 text-lg font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-1/2 bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-400 transition items-center transform active:scale-95 mb-6">
            LogIn
          </button>
          <p className="text-center mt-4 text-black">Don't have an account? 
            <a className="text-gray-600 hover:text-yellow-100 font-bold cursor-pointer"><u>_Sign Up_</u></a></p>
        </form>
      </div>
    </div>
  )
}

export default Login
