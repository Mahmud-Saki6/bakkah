import React from "react";

function Headers() {
  return (
    <header className="header ">
      <div className="header__logo">
        <img src="/logo.png" alt="Bakkah Logo" />
      </div>

      <nav className="header__nav">
        <a href="#" className="active">
          Home
        </a>
        <a href="#">Our Team</a>
        <a href="#">Our Story</a>
        <a href="#">Our Concern</a>
        <a href="#">Media</a>
      </nav>

      <div className="header__right">
        <img src="/search.png" alt="Bakkah Logo" />
        <button className="contact-btn">Contact us</button>
      </div>
    </header>
  );
}

export default Headers;
