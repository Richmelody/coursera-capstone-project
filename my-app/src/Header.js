import React from "react";
import "./Header.css"; // Import the CSS file
import Nav from "./Nav"; // Import the Nav component
import logo from "./assets/Rectangle 7.png"; // Import the logo image

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header-logo">
        <img src={logo} alt="little lemon" className="header-image-left" />
      </a>
      <Nav />
    </header>
  );
};

export default Header;
