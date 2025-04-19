import React from 'react'
import lanka from '../assets/lanka.png';

function TGone() {
  return (
    <div className="relative w-[500px] h-[600px] mx-auto">
      <img src={lanka} alt="Sri Lanka" className="w-full h-full object-contain" /> 
      <div>
          <div className="absolute right-[65%] top-[32%] w-1/2 h-1 bg-yellow-400 rounded-full"></div>
          <div className="absolute right-[49.5%] top-[32%] w-20 h-1 bg-yellow-400 rounded-full transform rotate-45 origin-left"></div>
      </div>
    </div>
  )
}

export default TGone
