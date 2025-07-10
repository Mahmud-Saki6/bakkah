import React from "react";
import Headers from "../components/Headers";
import DivisionCard from "../components/DivisionCard";
import Footer from "../components/Footer";

function DivisionAviation() {
  return (
    <div>
      <Headers></Headers>
      <div className="all-hero">
        <img src="aviationH.png" />
      </div>
      {/* Core Business start */}
      <div className="Core-title">
        <h2>Core Business</h2>
        <div className="core-contents">
          <h2>
            Aviation<br></br> Management <br></br>Services
          </h2>
          <div className="core-lists">
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p>Trusted by Global Airlines</p>
            </div>
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p>National Infrastructure Coverage</p>
            </div>
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p> State-of-the-Art Technology</p>
            </div>
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p>Pioneers in Cargo Scanning</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Business end */}

      {/* On going start */}

      <div className="Core-title">
        <h2>Our concerns</h2>
      </div>

      <div className="division-card-container">
        <img src="/airaisaC.png" width={"410px"} />
        <img src="/akasaC.png" width={"410px"} />
        <img src="/maldivianC.png" width={"410px"} />
      </div>

      {/* On going end */}

      <div className="division-card4-container">
        <div className="division-card4">
          <img src="kuwait.png" width={"410px"} />
          <img src="thai.png" width={"410px"} />
        </div>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default DivisionAviation;
