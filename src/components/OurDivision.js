import React, { useEffect, useState } from "react";

const divisions = [
  {
    image: "realS.png",
    title: "Real Estate",
  },
  {
    image: "healthS.png",
    title: "Health Care",
  },
  {
    image: "powerS.png",
    title: "Power, Energy & Mineral",
  },
  {
    image: "powerS.png",
    title: "Power, Energy & Mineral",
  },
  {
    image: "aviationS.png",
    title: "Aviation",
  },
  {
    image: "tradeS.png",
    title: "Technology",
  },
];

const OurDivision = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = divisions.length;

  const getVisibleDivisions = () => {
    const result = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const currentIndex = (index + i) % totalItems;
      result.push(divisions[currentIndex]);
    }
    return result;
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + itemsPerPage) % totalItems);
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) => (prevIndex - itemsPerPage + totalItems) % totalItems
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleDivisions = getVisibleDivisions();
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
          <div key={i} className="our-division-card">
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
