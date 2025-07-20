import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Headers from "../components/Headers";
import OurDivision from "../components/OurDivision";
import LatestNews from "../components/LatestNews";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

const sectors = [
  "Real Estate",
  "Health",
  "Power & Energy",
  "Aviation's",
  "Trading",
];

function Home() {
  const navigate = useNavigate();
  const [active, setActive] = useState("Power & Energy");
  return (
    <div>
      <Headers />
      {/* Hero Section Start */}
      <section className="hero-section">
        <video className="hero-video" autoPlay loop muted>
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay">
          <div className="sector-buttons">
            {sectors.map((sector) => (
              <button
                key={sector}
                className={`sector-btn ${active === sector ? "active" : ""}`}
                onClick={() => setActive(sector)}
              >
                {sector}
                {active === sector && <div className="arrow-down"></div>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section Ends */}

      {/* Engineering Services start */}

      <section className="service-section">
        <h2 className="service-title">Engineering Services</h2>
        <p className="service-description">
          We specialize in designing large-scale construction projects
          worldwide, using cutting-edge Building Information Modeling technology
          to deliver innovative and efficient solutions.
        </p>
        <button
          className="service-button"
          onClick={() => navigate("/Contact")}
          style={{
            cursor: "pointer",
          }}
        >
          Collaborate with us
        </button>
      </section>

      {/* Engineering Services end */}

      {/* Our Services section start*/}

      <div class="section-heading">
        <img src="/Slogo.png" alt="Red Logo" class="section-icon" />
        <h2 class="section-title">Our Story</h2>
      </div>
      <hr></hr>
      {/* <!-- SECTION: Icon Grid + Right Text --> */}
      <div className="sectors-container">
        <div className="sectors-left">
          <h4>BAKKAH in Figures</h4>
          <div className="sectors-grid">
            <div className="sector-item">
              <img src="real-estate.png" alt="Real Estate" />
              <p>Real Estate</p>
            </div>
            <div className="sector-item">
              <img src="power.png" alt="Power" />
              <p>Power</p>
            </div>
            <div className="sector-item">
              <img src="gas.png" alt="Gas" />
              <p>Gas</p>
            </div>
            <div className="sector-item">
              <img src="mining.png" alt="Mining" />
              <p>Mining</p>
            </div>
            <div className="sector-item">
              <img src="technology.png" alt="Technology" />
              <p>Technology</p>
            </div>
            <div className="sector-item">
              <img src="trading.png" alt="Trading" />
              <p>Trading</p>
            </div>
            <div className="sector-item">
              <img src="healthcare.png" alt="Healthcare" />
              <p>Healthcare</p>
            </div>
            <div className="sector-item">
              <img src="aviation.png" alt="Aviation" />
              <p>Aviation</p>
            </div>
          </div>
        </div>

        <div className="sectors-right ">
          <h1>
            Strength in Sectors,
            <br />
            United by Vision
          </h1>
          <p className="description ">
            “Bakkah Holdings is a dynamic conglomerate specializing in diverse
            sectors including real estate, healthcare, aviation, energy, power
            and minerals, trade, and technology.”
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="about-text">
        <h2>8 Industries, 20+ Years </h2>
        <a
          onClick={() => navigate("/AboutUs")}
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          About Us <span>{">"}</span>
        </a>
      </div>
      <hr></hr>
      <div className="about-text">
        <h2>
          <span>↑</span>200+ total projects completed{" "}
        </h2>
        <a href="">
          View Projects <span>{">"}</span>
        </a>
      </div>
      <hr></hr>
      {/* Our Services section end*/}

      {/* Our Division Start*/}
      {/* <div className="Our-division">
        <h2>Our Division</h2>
        <div className="arrow">
          <img src="left-arrow.png" />
          <img src="right-arrow.png" />
        </div>
      </div> */}
      <OurDivision></OurDivision>

      {/* Our Division End*/}

      {/* Dreams start */}
      <section className="giving-best-section">
        <div className="overlay">
          <div className="content">
            <h1>Giving The Best For Dreams</h1>
            <p className="text-alignment">
              Sponsored having diversified experience in the field of Civil
              Engineering Construction (Home & Abroad), Manufacturing in the
              area of Jute, Plastic, Lamination, Real Estate, Food & Beverage,
              Shoes & Leather Products, Airlines Representation, Logistics &
              Courier, Inland Container Yard (ICD), Aviation Management Service,
              ICT Technologies, High-tech Park development, Pipeline & Steel
              Fabrication/Erection and many more.
            </p>
          </div>
        </div>
      </section>
      {/* Dreams end */}

      {/* Latest News start */}

      <LatestNews></LatestNews>

      {/* Latest News end */}

      {/* Clients start */}

      <Clients></Clients>

      {/* Clients end */}

      {/* Footer start */}

      <Footer></Footer>

      {/* Footer end */}
    </div>
  );
}

export default Home;
