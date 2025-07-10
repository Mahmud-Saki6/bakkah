import React from "react";
import Headers from "../components/Headers";
import DivisionCard from "../components/DivisionCard";
import Footer from "../components/Footer";

function DivisionPower() {
  return (
    <div>
      <Headers></Headers>
      <div className="all-hero">
        <img src="powerH.png" />
      </div>
      {/* Core Business start */}
      <div className="Core-title">
        <h2>Core Business</h2>
        <div className="core-contents">
          <h2>
            Power, Energy & <br></br> Minerals
          </h2>
          <div className="core-lists">
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p>Energy & Infrastructure Expertise</p>
            </div>
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p>Strategic Global Partnerships</p>
            </div>
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p> Licensed Operations</p>
            </div>
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p>Driving Energy Security</p>
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
        <DivisionCard title="OIl & Gas" image="/oil.png" />
        <DivisionCard title="Power" image="/powerC.png" />
        <DivisionCard title="Mining" image="/miningC.png" />
      </div>

      <Footer></Footer>
    </div>
  );
}

export default DivisionPower;
