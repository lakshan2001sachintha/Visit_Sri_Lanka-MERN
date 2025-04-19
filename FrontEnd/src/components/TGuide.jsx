import React from 'react';
import Team from './Team'; 
import TGone from './TGone';
import Footer from "./Footer";

function TGuide() {
  return (
    <div>
    <TGone/>
    <Team />
      <div className='pt-40'>
        <Footer/> 
      </div>
    </div>
  );
}

export default TGuide;
