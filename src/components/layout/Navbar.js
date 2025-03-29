import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="navbar-logo">FairPayz</span>
      </Link>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/services" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
        <Link to="/contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </div>

      <div className={`navbar-auth ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/login" className="navbar-button" onClick={() => setIsMenuOpen(false)}>Login</Link>
        <Link to="/signup" className="navbar-button" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar; 