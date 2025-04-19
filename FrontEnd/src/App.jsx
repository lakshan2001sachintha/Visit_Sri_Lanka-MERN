import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Places from "./components/Places";
import TGuide from "./components/TGuide";
import travelImage from './assets/perahara.jpg';

const App = () => {
  return (
    <Router>
      <div className="w-full overflow-hidden bg-white">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <Header />
              <About />
              <Places />
              <div className="flex justify-center my-8">
                <img 
                  src={travelImage}
                  alt="Descriptive Alt Text" 
                  className="max-w-full h-auto rounded-lg shadow-md"/>
              </div>
              <Contact />
              <Footer />
            </>
          } />
          
          {/* Travel Guide Page */}
          <Route path="/guide" element={<TGuide />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
