import React from "react";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <header className="header ">
      <div className="header__logo">
        <img src="/logo.png" alt="Bakkah Logo" />
      </div>

      <nav className="header__nav">
        <Link to="/" className="active" style={{ cursor: "pointer" }}>
          Home
        </Link>
        <Link to="/Division-Holding">Our Team</Link>
        <Link to="/DivisionHealthCare">Our Story</Link>
        <Link to="/DivisionTrade">Our Concern</Link>
        <Link to="/DivisionPower">Media</Link>
      </nav>

      <div className="header__right">
        <img src="/search.png" alt="Bakkah Logo" />
        <button className="contact-btn">Contact us</button>
      </div>
    </header>
  );
}

export default Headers;
