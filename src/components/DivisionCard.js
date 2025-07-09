import React from "react";

const DivisionCard = ({ title, image, features, location }) => {
  return (
    <div className="division-card">
      <img src={image} alt={title} className="division-img" />
      <div className="division-contents">
        <h3 className="division-title">{title}</h3>
        <p className="features">{features}</p>

        {location && (
          <ul className="location">
            <li>{location}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DivisionCard;
