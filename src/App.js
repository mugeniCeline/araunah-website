import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturedCategories from "./components/FeaturedCategories";
import MottoMissionVision from "./components/MottoMissionVision";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import ShortTermProjectsPage from "./pages/ShortTermProjectsPage";
import MediumTermProjectsPage from "./pages/MediumTermProjectsPage";
import LongTermProjectsPage from "./pages/LongTermProjectsPage";

function App() {
  const contactRef = useRef();

  return (
    <Router>
      <Navbar contactRef={contactRef} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedCategories />
              <MottoMissionVision />
              <ContactSection ref={contactRef} />
              <Footer />
            </>
          }
        />
        <Route path="/short-term" element={<ShortTermProjectsPage />} />
        <Route path="/medium-term" element={<MediumTermProjectsPage />} />
        <Route path="/long-term" element={<LongTermProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
