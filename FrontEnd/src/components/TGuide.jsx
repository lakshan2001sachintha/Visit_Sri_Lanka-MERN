import React from 'react';
import Team from './Team'; 
import TGone from './TGone';

function TGuide() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold mb-6">Travel Guide</h1>
      <TGone/>
      <Team />
    </div>
  );
}

export default TGuide;
