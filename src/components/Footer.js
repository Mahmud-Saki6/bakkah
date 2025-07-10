import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* === LEFT SECTION === */}
        <div className="footer-left">
          <img
            src="/footer-bakkah-logo.png"
            alt="Bakkah Logo"
            className="footer-logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
          <img
            src="/footer-uae.png"
            alt="UAE Sprinklers"
            className="footer-uae"
          />
          <p className="footer-label">VAE CONTROLS</p>
        </div>

        {/* === CENTER SECTION === */}
        <div className="footer-center">
          <div className="footer-menu">
            <h4>MENU</h4>
            <ul>
              <li>
                {" "}
                <Link
                  to="/"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                onClick={() => navigate("/Media")}
                style={{
                  cursor: "pointer",
                }}
              >
                Media
              </li>
              <li
                onClick={() => navigate("/AboutUs")}
                style={{
                  cursor: "pointer",
                }}
              >
                Our Story
              </li>
              <li
                onClick={() => navigate("/Contact")}
                style={{
                  cursor: "pointer",
                }}
              >
                Contact
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <ul>
              <li
                onClick={() => navigate("/Division-Holding")}
                style={{
                  cursor: "pointer",
                }}
              >
                Bakkah Holdings
              </li>
              <li
                onClick={() => navigate("/DivisionHealthCare")}
                style={{
                  cursor: "pointer",
                }}
              >
                Bakkah Health Care
              </li>
              <li
                onClick={() => navigate("/DivisionTrade")}
                style={{
                  cursor: "pointer",
                }}
              >
                Defense & Commodity Trade Ltd
              </li>
              <li
                onClick={() => navigate("/DivisionPower")}
                style={{
                  cursor: "pointer",
                }}
              >
                Bakkah Power Energy & Mineral
              </li>
              <li
                onClick={() => navigate("/DivisionAviation")}
                style={{
                  cursor: "pointer",
                }}
              >
                Bakkah Aviation
              </li>
            </ul>
          </div>

          <div className="footer-location">
            <h4>LOCATION</h4>
            <p>
              Erectors House, 11th Floor, 18 Kemal Ataturk Avenue, Banani C/A,
              Dhaka - 1213
            </p>

            <h4>EMAIL</h4>
            <p>info@bakkahholdings.com</p>

            <h4>SOCIAL MEDIA</h4>
            <div className="footer-social">
              <img src="/footer-youtube.png" alt="YouTube" />
              <img src="/footer-linkedin.png" alt="LinkedIn" />
            </div>
          </div>
        </div>

        {/* === RIGHT SECTION === */}
        <div className="footer-right">
          <button
            className="footer-btn"
            onClick={() => navigate("/Contact")}
            style={{
              cursor: "pointer",
            }}
          >
            Contact us
          </button>
          <button className="footer-btn">Work for us</button>
          <button className="footer-btn-red">Collaborate with us</button>
          <img src="/footer-cmec.png" alt="CMEC Logo" className="cmec-logo" />
          <p className="back-to-top">BACK TO TOP</p>
        </div>
      </div>

      {/* === BAKKAH Background Letter Row === */}
      <div className="footer-bakkah-bg">
        {/* <img src="/.png" alt="B" /> */}
      </div>
      {/* === Footer Bottom Copyright === */}
      <div className="footer-bottom">
        <p>
          Copyright © 2025 BAKKAH. All Rights Reserved |
          {/* <a href="#"> Terms of Use </a> |<a href="#"> Privacy Policy </a> */}
        </p>
        <span>
          Design & Develop by <strong>ETHER TECH</strong>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
