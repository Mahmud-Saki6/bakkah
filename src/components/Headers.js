import React, { useState } from "react";
import { Link } from "react-router-dom";

function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="header__logo">
        <img src="/logo.png" alt="Bakkah Logo" />
      </div>

      {/* Hamburger Menu Button (Mobile Only) */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
      </button>

      {/* Navigation Menu */}
      <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="active" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <div className="dropdown">
          <p className="dropdown-toggle">Our Team</p>
          <div className="dropdown-menu">
            <Link to="/BoardDirectors" onClick={() => setMenuOpen(false)}>
              Board of Directors
            </Link>
            <Link to="/Management" onClick={() => setMenuOpen(false)}>
              Management
            </Link>
          </div>
        </div>

        <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>
          Our Story
        </Link>

        <div className="dropdown">
          <p className="dropdown-toggle">Our Concern</p>
          <div className="dropdown-menu">
            <Link to="/Division-Holding" onClick={() => setMenuOpen(false)}>
              Bakkah Holdings Ltd
            </Link>
            <Link to="/DivisionHealthCare" onClick={() => setMenuOpen(false)}>
              Bakkah Health Care
            </Link>
            <Link to="/DivisionTrade" onClick={() => setMenuOpen(false)}>
              Bakkah Trade & Technology Ltd
            </Link>
            <Link to="/DivisionPower" onClick={() => setMenuOpen(false)}>
              Bakkah Power Energy & Mineral
            </Link>
            <Link to="/DivisionAviation" onClick={() => setMenuOpen(false)}>
              Bakkah Aviation
            </Link>
          </div>
        </div>

        <Link to="/Media" onClick={() => setMenuOpen(false)}>
          Media
        </Link>
        <Link to="/Contact" onClick={() => setMenuOpen(false)}>
          Contact Us
        </Link>
      </nav>

      {/* Search + Contact Button */}
      <div className="header__right">
        <img src="/search.png" alt="Search Icon" />
        <Link to="/Contact">
          <button className="contact-btn">Contact us</button>
        </Link>
      </div>
    </header>
  );
}

export default Headers;
