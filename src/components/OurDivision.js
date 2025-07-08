import React, { useState } from "react";

const divisions = [
  {
    image: "real.png",
    title: "Real Estate",
  },
  {
    image: "health.png",
    title: "Health Care",
  },
  {
    image: "powerM.png",
    title: "Power, Energy & Mineral",
  },
  {
    image: "powerM.png",
    title: "Power, Energy & Mineral",
  },
  {
    image: "aviationL.png",
    title: "Aviation",
  },
  {
    image: "trade.png",
    title: "Technology",
  },
];

const OurDivision = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (index + itemsPerPage < divisions.length) {
      setIndex(index + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (index - itemsPerPage >= 0) {
      setIndex(index - itemsPerPage);
    }
  };

  const visibleDivisions = divisions.slice(index, index + itemsPerPage);

  return (
    <div className="our-division-wrapper">
      <div className="our-division-header">
        <h2>Our Division</h2>
        <div className="arrow">
          <img
            src="left-arrow.png"
            alt="left"
            onClick={handlePrev}
            className={index === 0 ? "disabled" : ""}
          />
          <img
            src="right-arrow.png"
            alt="right"
            onClick={handleNext}
            className={
              index + itemsPerPage >= divisions.length ? "disabled" : ""
            }
          />
        </div>
      </div>

      <div className="our-division-slider">
        {visibleDivisions.map((div, i) => (
          <div key={i} className="division-card">
            {/* <img src={div.logo} alt={div.title} className="division-logo" /> */}
            <img src={div.image} alt={div.title} className="division-img" />
            <p className="division-title">{div.title}</p>
            <p className="read-more">Read More &rsaquo;</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurDivision;
