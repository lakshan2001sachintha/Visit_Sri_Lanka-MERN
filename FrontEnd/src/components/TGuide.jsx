import React from 'react';
import Team from './Team'; 
import TGone from './TGone';
import Footer from "./Footer";
import gde from '../assets/gde.jpg';

function TGuide() {
  return (
    <div>
      <div className="absolute top-[15%] left-[10%] text-5xl">
      <div className="absolute left-[5%] top-[100%] w-1/2 h-2 bg-yellow-400  w-[300px]"></div>
        <p>TRAVEL GUIDE</p>
      </div>
      <div className="w-[1000px] h-[200px] object-contain absolute right-[0%] top-[5%]" >
        <img src={gde} alt="Sri Lanka" className="w-full h-full object-contain" /> 
      </div>
    <TGone/>
    <Team />
      <div className='pt-40'>
        <Footer/> 
      </div>
    </div>
  );
}

export default TGuide;
