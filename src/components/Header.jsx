import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
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
            <li><a href="#about" onClick={closeMenu}>About us</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#case-studies" onClick={closeMenu}>Research</a></li>
            <li><a href="#blog" onClick={closeMenu}>Blog</a></li>
            <li><a href="#work" onClick={closeMenu}>How it Works</a></li>
            <li><a href="#hire" onClick={closeMenu}>Hire</a></li>
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
