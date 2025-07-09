import React from "react";
import Headers from "../components/Headers";
import DivisionCard from "../components/DivisionCard";
import Footer from "../components/Footer";

function DivisionHealthCare() {
  return (
    <div>
      <Headers></Headers>
      <div className="">
        <img src="divisionhealthhero.png" width={`100%`} alt="Hero Image " />
      </div>
      {/* Core Business start */}
      <div className="Core-title">
        <h2>Core Business</h2>
        <div className="core-contents">
          <h2>
            Giving The Best <br></br> Medical Services
          </h2>
          <div className="core-lists">
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p>GCC-Approved Medical Centers</p>
            </div>
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p>Compliance & Trust</p>
            </div>
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p> High-Volume Service</p>
            </div>
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p>Modern & Accessible Facilities</p>
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
            title="MEDIFLY"
            image="/MEDIFLY.png"
            features={`Established in 2018, Medifly is equipped with the latest global medical technology and staffed by expert physicians, skilled nurses, and certified technicians.`}
            location={`An Approved GCC Medical Check-Up Center `}
          />
          <DivisionCard
            title="Park View"
            image="/MEDI-CHECK.png"
            features={` Conveniently located at the heart of Cumilla —
                        Civic Square, House #1031–1033, Police Line Road, Jhawtala —`}
            location={`An Approved GCC Medical Check-Up Center`}
          />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default DivisionHealthCare;
