import React from "react";

const newsItems = [
  {
    id: 1,
    image: "news1.png",
    badge: "PRESS",
    text: "Established in 2025, Bakkah Power Energy and Mineral Ltd is a forward-thinking energy and infrastructure company",
  },
  {
    id: 2,
    image: "news2.png",
    badge: "PRESS",
    text: "Our goal is to empower businesses and institutions through technology—supporting growth, efficiency, and transformation.",
  },
  {
    id: 3,
    image: "news3.png",
    badge: "BLOG",
    text: "Licensed by Petrobangla—Bakkah Power collaborates with global leaders such as VAE Control (Czech Republic) and China Machinery Engineering Corporation (CMEC)",
  },
];

const LatestNews = () => {
  return (
    <div className="latest-news-section">
      <h2>Latest News</h2>
      <div className="news-grid">
        {newsItems.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-image-wrapper">
              <img src={item.image} alt="news" className="news-image" />
              {/* <span className="badge">{item.badge}</span> */}
            </div>
            <p className="news-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
