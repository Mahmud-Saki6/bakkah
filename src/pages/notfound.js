import React from "react";
import { Link } from "react-router-dom";

function notfound() {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-content">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="notfound-btn">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default notfound;
