import React from "react";
import Headers from "../components/Headers";
import DivisionCard from "../components/DivisionCard";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";

function BoardDirectors() {
  return (
    <div>
      <Headers></Headers>
      <div className="all-hero">
        <img src="director.png" alt="Hero Image " />
      </div>
      {/* Core Business start */}
      <div className="Core-title">
        <h2>Board of directors</h2>
      </div>

      {/* Core Business end */}

      {/* TeamCard start */}
      <div className="division-card-container">
        <div className="division-card4 ">
          <TeamCard
            name="K M Mozibul Hoque"
            role="Chairman"
            image="/drec1.png"
            details={`Chairman – Shah Group of Companies
Honorary Consul General of the Republic of Yemen
Former Honorary Consul of the Republic of Tajikistan
Former Regional Director of UN-FER (1986)
Former National President of JCI Bangladesh (1992)
Former World Vice President of JCI International (1993)
Former Dean/President of Consul Corps Bangladesh (2018–2020)
Founder and Treasurer of University of Asia Pacific
Founder of Noman Degree College
Commercially Important Person (CIP) (1989–2000)
Former Vice Chairman of Bangladesh Jute Spinners Association (1993)`}
          />

          <TeamCard
            name="Morsedul Alam Chaklader"
            role="Managing Director"
            image="/drec2.png"
            details={`Managing Director of Shah Group
Former Executive of XYZ Corporation
Leader in Sustainable Development and Trade
International relations and finance background`}
          />

          <TeamCard
            name="Kazi Shah Muzakker Ahmadul Hoque"
            role="Director"
            image="/drec3.png"
            details={`Director of Shah Group
Advocate for innovation in energy sector
MBA from XYZ University
20+ years in corporate leadership`}
          />

          <TeamCard
            name="Md. Atiqur Rahman Masud"
            role="Director"
            image="/drec4.png"
            details={`Director of Shah Group
Oversees business development and outreach
Expert in logistics and transport
Passionate about team building and growth`}
          />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default BoardDirectors;
