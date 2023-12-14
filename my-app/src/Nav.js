import React, { useState } from 'react';
import './Nav.css'; // Replace with your actual CSS file path

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navigation">
      <ul className={`navigation-list ${isOpen ? 'visible' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservation">Reservation</a></li>
        <li><a href="#order-online">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
      <button className="hamburger-menu" onClick={toggleMenu}>
        {/* Add hamburger menu icon or text */}
      </button>
    </nav>
  );
};

export default Nav;
