import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='heads'>
    <header className="header">
      <img className="logo" src="flogo.png" alt="Logo" />
      <p>Cubicles Technology</p>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About us</a></li> {/* Link to Hero Section */}
          <li><a href="#services">Services</a></li> {/* Link to Services Section */}
          {/* <li><a href="#trusted-companies">Trusted Companies</a></li> Link to Trusted Companies Section */}
          <li><a href="#case-studies">Case Studies</a></li> {/* Link to Case Studies Section */}
          <li><a href="#blog">Blog</a></li> {/* Link to Testimonials Section */}
          <li><a href="#work">How it Works</a></li> {/* Link to Work Section */}
          <li><a href="#hire">Hire</a></li> {/* Link to Features Section */}
          
           {/* Link to Contact Section */}
        </ul>
      </nav>
      
      <button className="contact-btn"><a href="#contact">Contact</a></button>
      
    </header>
    </div>
  );
}

export default Header;
