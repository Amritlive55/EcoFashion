import React from "react";
import "./Contact.css"; // Import CSS file for styling

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-box">
          <h2>Contact Us</h2>
          <div className="contact-details">
            <div className="contact-detail">
              <a href="mailto:example@gmail.com">
                <i className="far fa-envelope"></i>
                <span>Email: example@gmail.com</span> 
              </a>
            </div>
            <div className="contact-detail">
              <a href="tel:+11234567890">
                <i className="fas fa-phone-alt"></i>
                <span>Phone: +1 123-456-7890</span>
              </a>
            </div>
            <div className="contact-detail">
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe"></i>
                <span>Website: www.example.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;