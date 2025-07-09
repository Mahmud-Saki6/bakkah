import React from "react";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/logo.png" alt="Bakkah Logo" />
      </div>

      <nav className="header__nav">
        <Link to="/" className="active" style={{ cursor: "pointer" }}>
          Home
        </Link>

        <div className="dropdown">
          <p className="dropdown-toggle">Our Team</p>
          <div className="dropdown-menu">
            <Link to="/BoardDirectors">Board of Directors</Link>
            <Link to="/Management">Management</Link>
          </div>
        </div>

        <Link to="/concern">Our Story</Link>

        <div className="dropdown">
          <p className="dropdown-toggle">Our Concern</p>
          <div className="dropdown-menu">
            <Link to="/Division-Holding">Bakkah Holdings Ltd</Link>
            <Link to="/DivisionHealthCare">Bakkah Health Care</Link>
            <Link to="/DivisionTrade">Bakkah Trade & Technology Ltd</Link>
            <Link to="/DivisionPower">Bakkah Power Energy & Mineral</Link>
            <Link to="/DivisionAviation">Bakkah Aviation</Link>
          </div>
        </div>

        <Link to="/Media">Media</Link>
      </nav>

      <div className="header__right">
        <img src="/search.png" alt="Bakkah Logo" />
        <Link to="/Contact">
          <button className="contact-btn">Contact us</button>
        </Link>
      </div>
    </header>
  );
}

export default Headers;
