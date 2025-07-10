import React from "react";
import Headers from "../components/Headers";
import DivisionCard from "../components/DivisionCard";
import Footer from "../components/Footer";

function Division_Holding() {
  return (
    <div>
      <Headers></Headers>
      <div className="all-hero">
        <img src="Division-hero.png" />
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

      <div className="division-card-container">
        <DivisionCard
          title="LIZAS CASTLE"
          image="/card1.png"
          features={`Modern Architecture Walk-in Closets Dry Kitchen 24 Hour Security RFID & Video Intercom Internet Connection Cable TV Connection Rooftop BBQ Station Rooftop Lounge Community Space Generator Service`}
          location={`Plot 004, Road 509, Sector 16, Jolshiri Abashon, Dhaka`}
        />
        <DivisionCard
          title="SHUMIS VILLA"
          image="/card2.png"
          features={`Modern Architecture Walk-in Closets 24 Hour Security RFID & Video Intercom Internet Connection Cable TV Connection Rooftop Garden Rooftop Lounge Community Space Generator Service`}
          location={`Plot 004, Road 503, Sector 16, Jolshiri Abashon, Dhaka`}
        />
        <DivisionCard
          title="PARK VIEW"
          image="/card3.png"
          features={`Modern Architecture Walk-in Closets 24 Hour Security Mini Swimming Pool Per Unit Garden Space Per Unit Central Prayer Room Common Laundry Space Common Swimming Pool & Jacuzzi Gymnasium Rooftop Lounge Generator Service`}
          location={`Plot 001, Road 301-A, Sector 17, Purbachal New Town`}
        />
      </div>

      {/* On going end */}

      {/* Upcoming start */}
      <div className="Core-title">
        <h2>Upcoming</h2>
      </div>
      <div className="division-card4-container">
        <div className="division-card4">
          <DivisionCard
            title="Park View"
            image="/card4.png"
            features={`Modern Architecture Walk-in Closets Dry Kitchen 24 Hour Security RFID & Video Intercom Internet Connection Cable TV Connection Rooftop BBQ Station Rooftop Lounge Community Space Generator Service`}
            location={`Plot 004, Road 509, Sector 16, Jolshiri Abashon, Dhaka`}
          />
        </div>
      </div>

      {/* Upcoming end */}

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default Division_Holding;
