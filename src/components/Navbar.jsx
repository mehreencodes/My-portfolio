

// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll"; // smooth scrolling
import "../index.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false); // state for toggle
  const navItems = ["Home", "About","Education", "Skills", "Projects", "Contact"];

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <div className="logo-circle">
            <span>MK</span>
          </div>
          <h1>Mehreen K.</h1>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${toggle ? "active" : ""}`} id="nav-links">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setToggle(false)} // close menu on click
              >
                {item}
                <span className="underline"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="nav-btn">
          <a href="#contact" className="btn-template">
         Work With Me
          </a>
        </div>

        {/* Toggle Button */}
        <div
          className={`nav-toggle ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;