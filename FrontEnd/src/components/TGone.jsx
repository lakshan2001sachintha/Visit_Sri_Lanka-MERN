import React from 'react'
import lanka from '../assets/lanka.png';



function TGone() {
  return (

  <div className='pt-72'>  
    <div className="relative w-[500px] h-[600px] mx-auto">
      <img src={lanka} alt="Sri Lanka" className="w-full h-full object-contain" /> 
      <div>
          <div className="absolute right-[65%] top-[35%] w-1/2 h-1 bg-yellow-400 rounded-full w-[280px]"></div>
          <div className="absolute right-[49.5%] top-[35%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-45 origin-left "></div>
          <div className="absolute right-[104.5%] top-[35%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-[-90deg] origin-left "></div>
          <div className="absolute top-[30px] left-[-350px] max-w-sm w-full p-4 bg-white border border-yellow-400 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Information Title</h3>
          <p className="mt-2 text-sm text-gray-600">
            This is a helpful piece of information. Something or highlight a feature. Add more lines here to test height growth.
          </p>
          
      </div>

      </div>
      <div>
          <div className="absolute right-[65%] top-[79%] w-1/2 h-1 bg-yellow-400 rounded-full w-[350px]"></div>
          <div className="absolute right-[49.5%] top-[79%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-[-37deg] origin-left "></div>
          <div className="absolute right-[118.5%] top-[92%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-[-90deg] origin-left "></div>
          <div className="absolute top-[550px] left-[-350px] max-w-sm w-full p-4 bg-white border border-yellow-400 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Information Title</h3>
            <p className="mt-2 text-sm text-gray-600">
              This is a helpful piece of information. It can explain something or highlight a feature.
            </p>
          </div>
      </div>
      <div>
          <div className="absolute right-[-45%] top-[67%] w-1/2 h-1 bg-yellow-400 rounded-full w-[350px]"></div>
          <div className="absolute right-[21.5%] top-[59%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-[37deg] origin-left "></div>
          <div className="absolute right-[-61%] top-[80%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-[-90deg] origin-left "></div>
          <div className="absolute top-[470px] right-[-399px] max-w-sm w-full p-4 bg-white border border-yellow-400 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Information Title</h3>
            <p className="mt-2 text-sm text-gray-600">
              This is a helpful piece of information. It can explain something or highlight a feature.
            </p>
          </div>
      </div>
      <div>
          <div className="absolute right-[-25%] top-[15%] w-1/2 h-1 bg-yellow-400 rounded-full w-[350px]"></div>
          <div className="absolute right-[28.5%] top-[15%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-[135deg] origin-left "></div>
          <div className="absolute right-[-41%] top-[15%] w-[80px] h-1 bg-yellow-400 rounded-full transform rotate-[-90deg] origin-left "></div>
          <div className="absolute top-[-95px] right-[-319px] max-w-sm w-full p-4 bg-white border border-yellow-400 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Information Title</h3>
            <p className="mt-2 text-sm text-gray-600">
              This is a helpful piece of information. omething or highlight a feature.
            </p>
          </div>
      </div>
    </div>
  </div>  
  
  )
}

export default TGone
