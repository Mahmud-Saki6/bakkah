import React from "react";
import Headers from "../components/Headers";
import DivisionCard from "../components/DivisionCard";
import Footer from "../components/Footer";

function Media() {
  return (
    <div>
      <Headers></Headers>
      <div className="">
        <img src="mediaH.png" width={`100%`} alt="Hero Image " />
      </div>
      {/* Core Business start */}
      <div className="Core-title">
        <h2>Photo Gallery</h2>
      </div>

      <div className="division-card-container">
        <img src="g1.png" width={420} alt="g1" />
        <img src="g2.png" width={420} alt="g2" />
        <img src="g3.png" width={420} alt="g3" />
      </div>

      <div className="division-card-container">
        <img src="g4.png" width={420} alt="g4" />
        <img src="g5.png" width={420} alt="g5" />
        <img src="g6.png" width={420} alt="g6" />
      </div>

      <div className="division-card-container">
        <img src="g7.png" width={420} alt="g7" />
        <img src="g8.png" width={420} alt="g8" />
        <img src="g9.png" width={420} alt="g9" />
      </div>

      <div className="division-card-container">
        <img src="g10.png" width={420} alt="g10" />
        <img src="g11.png" width={420} alt="g11" />
        <img src="g12.png" width={420} alt="g12" />
      </div>

      <div className="division-card-container">
        <img src="g13.png" width={420} alt="g13" />
        <img src="g14.png" width={420} alt="g14" />
        <img src="g15.png" width={420} alt="g15" />
      </div>

      <div className="division-card-container">
        <img src="g18.png" width={420} alt="g18" />
        <img src="g19.png" width={420} alt="g19" />
        <img src="g20.png" width={420} alt="g20" />
      </div>

      <div className="division-card-container">
        <img src="g21.png" width={420} alt="g21" />
        <img src="g22.png" width={420} alt="g22" />
        <img src="g23.png" width={420} alt="g23" />
      </div>

      <div className="division-card-container">
        <img src="g24.png" width={420} alt="g24" />
        <img src="g25.png" width={420} alt="g25" />
        <img src="g26.png" width={420} alt="g25" />
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default Media;
