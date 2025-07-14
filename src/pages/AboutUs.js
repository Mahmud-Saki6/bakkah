import React from "react";
import Headers from "../components/Headers";
import DivisionCard from "../components/DivisionCard";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";

function AboutUs() {
  return (
    <div>
      <Headers />
      <div className="all-hero">
        <img src="about.png" alt="Hero Image" />
      </div>

      {/* About Content Section */}
      <div className="division-card-container">
        <div className=" about">
          <div>
            <img src="abc.png" width={619} alt="About Visual" />
          </div>

          <div className="about-content">
            <p>
              Bakkah Holdings is a dynamic conglomerate specializing in diverse
              sectors including real estate, healthcare, aviation, energy, power
              and minerals, trade, and technology. Driven by innovation,
              strategic vision, and a commitment to excellence, Bakkah Holdings
              consistently delivers superior value to its stakeholders.
              Established as a strategic venture by Shah Group and Maxwell
              Group—the esteemed parent entities behind the successful TAS
              Group—Bakkah Holdings benefits from a legacy of industry
              expertise, robust financial foundations, and extensive market
              networks. This partnership harnesses significant experience and
              resources, enabling the company to expand effectively across
              multiple high-potential sectors. Bakkah Holdings is dedicated to
              sustainable growth and industry leadership, continually striving
              to make a meaningful impact in each sector it serves. Through a
              combination of strategic investments, operational excellence, and
              unwavering commitment to quality, Bakkah Holdings stands poised to
              lead and innovate, creating lasting value for communities and
              partners alike.
            </p>
            <div className="story">
              <p>Our Story</p>
            </div>
            <hr className="story-border"></hr>
          </div>
        </div>
      </div>

      <div className="division-card-container textcard">
        <div className="division-card4">
          <img src="/ab1.png" width={400} />
          <img src="/ab2.png" width={400} />
          <img src="/ab3.png" width={400} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
