import React from "react";

const clients = [
  {
    image: "bakkah-tech.png",
    alt: "Bakkah Trade & Technology",
  },
  {
    image: "bakkah-power.png",
    alt: "Bakkah Power, Energy & Minerals",
  },
  {
    image: "bakkah-aviation.png",
    alt: "Bakkah Aviation",
  },
  {
    image: "bakkah-holdings.png",
    alt: "Bakkah Holdings",
  },
  {
    image: "bakkah-healthcare.png",
    alt: "Bakkah Healthcare",
  },
];

const Clients = () => {
  return (
    <div className="clients-section">
      <h3>Clients</h3>
      <div className="clients-logos">
        {clients.map((client, index) => (
          <div className="client-logo" key={index}>
            <img src={client.image} alt={client.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
