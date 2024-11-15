import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='nav'> 
    <header className="header">
      <img className='logo' src="logo.png" alt="" srcset="" width="181" height="50"/>
      <nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#services">Case Studies</a>
        <a href="#features">Blog</a>
        <a href="#contact">How it Works</a>
        <a href="#contact">Hire</a> 
      </nav>
      <button className="contact-btn">Contact Us</button>
    </header>
    </div>
  );
}

export default Header;
