import React from "react";
import Headers from "../components/Headers";
import DivisionCard from "../components/DivisionCard";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Headers />
      <div className="all-hero">
        <img src="contact.png" alt="Contact Hero" />
      </div>

      {/* Contact Title */}
      <div className="Core-title">
        <h2>Contact Us</h2>
      </div>

      <div className="division-card-container contact-section">
        {/* Embedded Google Map */}
        <div className="map-wrapper">
          <iframe
            title="Bakkah Tower Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116822.3599793078!2d90.32146541995863!3d23.793739526095557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7007b8c29d5%3A0xe4a1ea46c64b8cce!2sBakkah%20Tower!5e0!3m2!1sen!2sbd!4v1753042646978!5m2!1sen!2sbd"
            style={{ border: 0, borderRadius: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <div className="contactAdd">
            <p>Bakkah Tower, 18 Kemal Ataturk Ave, Dhaka 1212</p>
          </div>

          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" rows={5}></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;
