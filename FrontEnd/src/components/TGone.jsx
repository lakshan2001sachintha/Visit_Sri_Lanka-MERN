import React from 'react'
import lanka from '../assets/lanka.png';

function TGone() {
  return (
    <div className="relative w-[500px] h-[600px] mx-auto">
      <img src={lanka} alt="Sri Lanka" className="w-full h-full object-contain" /> 
      <div>
          <div className="absolute right-[65%] top-[35%] w-1/2 h-1 bg-yellow-400 rounded-full w-[280px]"></div>
          <div className="absolute right-[49.5%] top-[35%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-45 origin-left "></div>
          <div className="absolute right-[104.5%] top-[35%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-[-90deg] origin-left "></div>

      </div>
      <div>
          <div className="absolute right-[65%] top-[79%] w-1/2 h-1 bg-yellow-400 rounded-full w-[350px]"></div>
          <div className="absolute right-[49.5%] top-[79%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-[-37deg] origin-left "></div>
          <div className="absolute right-[118.5%] top-[92%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-[-90deg] origin-left "></div>
      </div>
      <div>
          <div className="absolute right-[-45%] top-[67%] w-1/2 h-1 bg-yellow-400 rounded-full w-[350px]"></div>
          <div className="absolute right-[21.5%] top-[59%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-[37deg] origin-left "></div>
          <div className="absolute right-[-61%] top-[80%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-[-90deg] origin-left "></div>
      </div>
      <div>
          <div className="absolute right-[-25%] top-[15%] w-1/2 h-1 bg-yellow-400 rounded-full w-[350px]"></div>
          <div className="absolute right-[28.5%] top-[15%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-[135deg] origin-left "></div>
          <div className="absolute right-[-41%] top-[15%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-[-90deg] origin-left "></div>
      </div>
    </div>
  )
}

export default TGone
