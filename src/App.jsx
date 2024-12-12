import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Features from "./components/Features";
import BisnisDigital from "./components/BisnisDigital";
import ABI from "./components/ABI"; // Create this component for Administrasi Bisnis Internasional
import Keunggulan from "./components/Keunggulan";
import Promosi from "./components/Promosi";
import Film from "./components/Film";
import Testimoni from "./components/Testimoni";
import Footer from "./components/Footer";

import "./index.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home route */}
          <Route path="/" element={
            <>
              <Section />
              <Features />
              <Keunggulan />
              <Promosi />
              <Film />
              <Testimoni />
              <Footer />
            </>
          } />
          
          {/* Detail routes */}
          <Route path="/bisnis-digital" element={<BisnisDigital />} />
          <Route path="/administrasi-bisnis-internasional" element={<ABI />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;