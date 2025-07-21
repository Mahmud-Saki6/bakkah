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
        <img src="about.svg" alt="Hero Image" />
      </div>

      {/* About Content Section */}
      <div className="division-card-container">
        <div className=" about">
          <div>
            <img src="abcdef.png" width={619} alt="About Visual" />
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
          <div className="about-mission-section">
            <div
              className="about-card"
              style={{ backgroundImage: "url(ab1.png)" }}
            >
              <h3>OUR VISION</h3>
              <hr />
              <p>A global leader transforming industries with:</p>
              <ul>
                <li>Innovation</li>
                <li>Sustainability</li>
                <li>Unmatched excellence</li>
              </ul>
            </div>

            <div
              className="about-card"
              style={{ backgroundImage: "url(ab2.png)" }}
            >
              <h3>OUR MISSION</h3>
              <hr />
              <p>
                To drive sustainable growth and deliver high-quality solutions
                across:
              </p>
              <ul>
                <li>Real estate</li>
                <li>Healthcare</li>
                <li>Aviation</li>
                <li>Energy</li>
                <li>Minerals</li>
                <li>Trade</li>
                <li>Technology</li>
              </ul>
              <p>
                While creating long-term value for our stakeholders, partners,
                and communities.
              </p>
            </div>

            <div
              className="about-card"
              style={{ backgroundImage: "url(ab3.png)" }}
            >
              <h3>OUR VALUES</h3>
              <hr />
              <ul>
                <li>
                  Diversify and expand operations across high-potential markets
                </li>
                <li>Innovate continuously using advanced technologies</li>
                <li>Ensure operational excellence and quality assurance</li>
                <li>
                  Empower people through professionalism, growth, and leadership
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
