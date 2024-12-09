import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <div className="heads">
      <header className="header">
        <div className="logo-container">
          <img className="logo" src="flogo.png" alt="Logo" />
          <p>Cubicles Tech</p>
        </div>
        
        {/* Hamburger Menu Icon for Small Screens */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#about">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#work">How it Works</a></li>
            <li><a href="#hire">Hire</a></li>
          </ul>
        </nav>

        {/* Contact Button */}
        <button className="contact-btn">
          <a href="#contact">Contact</a>
        </button>
      </header>
    </div>
  );
}

export default Header;
