import React, { useState } from "react";

const TeamCard = ({ name, role, image, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-img" />
      <div className="team-contents">
        <h3 className="team-name">{name}</h3>
        <p className={`team-role ${role.toLowerCase().replace(/\s/g, "-")}`}>
          {role}
        </p>
        {details?.length > 0 ? (
          <button
            className={`details-btn ${showDetails ? "active" : ""}`}
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide details" : "Show details"}
          </button>
        ) : (
          ""
        )}

        {showDetails && (
          <div className="team-details">
            {details.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
