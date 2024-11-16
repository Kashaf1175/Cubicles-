import React, { useState, useEffect } from 'react';
// import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Case from './components/Case';
import Blog from './components/Blog';
import Work from './components/Work';
import Hire from './components/Hire';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Loader disappears after 3 seconds
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Header />

      {/* Sections with unique ids */}
      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="case-studies">
        <Case />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="hire">
        <Hire />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
