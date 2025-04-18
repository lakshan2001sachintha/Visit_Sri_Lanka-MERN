import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Places from "./components/Places";


const App = () => {

  
  return (
<div className="w-full overflow-hidden bg-white">
  {/* Rest of the sections with white background */}
  <Header />
  <About />
  <Places />
  <Testimonials />
  <Contact />
  <Footer />
</div>

  );
}

export default App;
