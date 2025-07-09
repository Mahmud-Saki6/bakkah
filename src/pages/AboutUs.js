import React from "react";
import Headers from "../components/Headers";
import DivisionCard from "../components/DivisionCard";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";

function AboutUs() {
  return (
    <div>
      <Headers />
      <div>
        <img src="about.png" width="100%" alt="Hero Image" />
      </div>

      {/* About Content Section */}
      <div className="division-card-container">
        <div className="division-card4 about">
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

      <div className="division-card-container">
        <div className="vision-mission-values">
          <div className="card">
            <h3>OUR VISION</h3>
            <p>
              A global leader transforming industries with innovation,
              sustainability, and unmatched excellence.
            </p>
          </div>
          <div className="card">
            <h3>OUR MISSION</h3>
            <p>
              To drive sustainable growth and deliver innovative, high-quality
              solutions across our diverse sectors — real estate, healthcare,
              aviation, energy, minerals, trade, and technology — while creating
              long-term value for our stakeholders, partners, and communities.
            </p>
          </div>
          <div className="card">
            <h3>OUR VALUES</h3>
            <p>
              Diversify and expand operations across emerging and high-potential
              markets. Innovate continuously by adopting advanced technologies
              and industry best practices. Ensure operational excellence through
              efficient project execution and quality assurance. Empower people
              by building a culture of professionalism, growth, and leadership.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
