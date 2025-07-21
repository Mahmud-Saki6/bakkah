import React from "react";
import Headers from "../components/Headers";
import DivisionCard from "../components/DivisionCard";
import Footer from "../components/Footer";

function DivisionTrade() {
  return (
    <div>
      <Headers></Headers>
      <div className="all-hero">
        <img src="tradeH.svg" />
      </div>
      {/* Core Business start */}
      <div className="Core-title">
        <h2>Core Business</h2>
        <div className="core-contents">
          <h2>
            Trade and <br></br> Technology Ltd
          </h2>
          <div className="core-lists">
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p>Technology-Driven Solutions</p>
            </div>
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p> ICT & BPO Expertise</p>
            </div>
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p> Strategic Digital Innovation</p>
            </div>
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p>Vision for the Future</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Business end */}

      {/* On going start */}

      <div className="Core-title">
        <h2>Our concerns</h2>
      </div>

      <div className="division-card4-container">
        <div className="division-card4">
          <DivisionCard
            title="Digital Advertising"
            image="/trade1.png"
            features={`Digital Print, Media, Signage`}
          />
          <DivisionCard
            title="Support & Services"
            image="/trade3.png"
            features={` 360 Call Centre Solutions`}
          />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default DivisionTrade;
