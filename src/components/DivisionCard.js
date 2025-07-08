import React from "react";

const divisions = [
  {
    title: "LIZAS CASTLE",
    image: "/card1.png",
    features: `Modern Architecture Walk-in Closets Dry Kitchen 24 Hour Security RFID & Video Intercom Internet Connection Cable TV Connection Rooftop BBQ Station Rooftop Lounge Community Space Generator Service`,
    location: `Plot 004, Road 509, Sector 16, Jolshiri Abashon, Dhaka`,
  },
  {
    title: "SHUMIS VILLA",
    image: "/card2.png",
    features: `Modern Architecture Walk-in Closets 24 Hour Security RFID & Video Intercom Internet Connection Cable TV Connection Rooftop Garden Rooftop Lounge Community Space Generator Service`,
    location: `Plot 004, Road 503, Sector 16, Jolshiri Abashon, Dhaka`,
  },
  {
    title: "PARK VIEW",
    image: "/card3.png",
    features: `Modern Architecture Walk-in Closets 24 Hour Security Mini Swimming Pool Per Unit Garden Space Per Unit Central Prayer Room Common Laundry Space Common Swimming Pool & Jacuzzi Gymnasium Rooftop Lounge Generator Service`,
    location: `Plot 001, Road 301-A, Sector 17, Purbachal New Town`,
  },
];

const DivisionCard = () => {
  return (
    <div className="division-card-container">
      {divisions.map((division, index) => (
        <div className="division-card" key={index}>
          <img
            src={division.image}
            alt={division.title}
            className="division-img"
          />
          <h3>{division.title}</h3>
          <p className="features">{division.features}</p>
          <ul className="location">
            <li>{division.location}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DivisionCard;
