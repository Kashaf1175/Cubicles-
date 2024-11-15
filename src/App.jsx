import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import TrustedCompanies from './components/TrustedCompanies';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import Work from './components/Work'
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <TrustedCompanies />
      <Testimonials />
      <CaseStudies />
      <Work />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
