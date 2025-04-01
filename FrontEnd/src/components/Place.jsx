import React from 'react';
import videoFile from '../assets/video.mp4'; // Ensure this is the correct path

function Place() {
  return (
    <div className="relative w-full"> {/* This is the transparent background */}
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content (Overlay with Transparency) */}
      <div className="relative z-10 bg-white bg-opacity-50 min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 lg:px-32">
        <h1 className="text-4xl font-bold text-black mb-6">Welcome to My Website</h1>
        <p className="text-lg text-gray-700">Scroll down to see the background video effect.</p>
      </div>
    </div>
  );
}

export default Place;
