import React from 'react';
import videoFile from '../assets/video.mp4'; // Adjust the path based on your folder structure

function Place() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content (Transparent Layer) */}
      
      <div className="relative z-10 bg-white bg-opacity-30 h-[500px] flex flex-col justify-center items-center text-center px-6 md:px-20 lg:px-32">

        <h1 className="text-4xl font-bold text-black mb-6">Welcome to My Website</h1>
        <p className="text-lg text-gray-700">
          Scroll down to see the background video effect.
        </p>
      </div>
    </div>
  );
}

export default Place;
