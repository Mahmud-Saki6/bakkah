import React from "react";
import Headers from "../components/Headers";
import DivisionCard from "../components/DivisionCard";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Headers></Headers>
      <div className="all-hero">
        <img src="contact.png" />
      </div>
      {/* Core Business start */}

      {/* Core Business end */}

      {/* On going start */}

      <div className="Core-title">
        <h2>Contact Us</h2>
      </div>
      <div className="contactAdd">
        <p>Erectors House, 11th Floor, 18 Kemal Ataturk</p>
        <p>Avenue, Banani C/A, Dhaka – 1213, Bangladesh</p>
      </div>

      <div className="division-card-container contact-section">
        <div className="map-wrapper">
          <img src="your-map-image.png" width={550.31} alt="Map Location" />
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Message" />
          <textarea placeholder="Message" rows={5}></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      {/* On going end */}

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default Contact;
