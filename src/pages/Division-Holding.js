import React from "react";
import Headers from "../components/Headers";
import DivisionCard from "../components/DivisionCard";
import Footer from "../components/Footer";

function Division_Holding() {
  return (
    <div>
      <Headers></Headers>
      <div className="">
        <img src="Division-hero.png" width={`100%`} alt="Hero Image " />
      </div>
      {/* Core Business start */}
      <div className="Core-title">
        <h2>Core Business</h2>
        <div className="core-contents">
          <h2>
            Real Estate<br></br> Development
          </h2>
          <div className="core-lists">
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p>Residential, commercial & industrial properties</p>
            </div>
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p>Smart city and urban development</p>
            </div>
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p> Project management and EPC contracting</p>
            </div>
            <div className="bullet-content">
              <img src="/blue.png" width={28} />
              <p>Incorporated in 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Business end */}

      {/* On going start */}

      <div className="Core-title">
        <h2>On Going</h2>
      </div>

      <DivisionCard></DivisionCard>

      {/* On going end */}

      {/* Upcoming start */}
      <div className="Core-title">
        <h2>Upcoming</h2>
      </div>
      <DivisionCard></DivisionCard>
      {/* Upcoming end */}

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default Division_Holding;
