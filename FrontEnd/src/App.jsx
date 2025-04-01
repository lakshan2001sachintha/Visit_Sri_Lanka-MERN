import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Place from "./components/Place";  

const App = () => {

  
  return (
<div className="w-full overflow-hidden bg-white">
  {/* Rest of the sections with white background */}
  <Header />
  <About />
  <Projects />
  <Testimonials />
  <div className="bg-white bg-opacity-10">
    <Place />
  </div>
  <Contact />
  <Footer />
</div>

  );
}

export default App;
