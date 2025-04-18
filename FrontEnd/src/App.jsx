import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Places from "./components/Places";
import TGuide from "./components/TGuide";

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
