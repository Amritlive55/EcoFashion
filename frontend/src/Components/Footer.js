import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#024f4f", // Bluish green color
        color: "white",
        padding: "20px",
        fontSize: "18px", // Increased font size
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div style={{ marginBottom: "10px", color: "white" }}>
          <h3 style={{ marginBottom: "5px", color: "white" }}>ECO Fashion</h3>
        </div>

        <div style={{ marginBottom: "10px", color: "white" }}>
          <h4 style={{ marginBottom: "5px", color: "white" }}>SOCIAL MEDIA</h4>
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ marginRight: "20px", color: "white" }}
            />
            <FontAwesomeIcon
              icon={faFacebookSquare}
              style={{ marginRight: "20px", color: "white" }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ marginRight: "20px", color: "white" }}
            />
          </div>
        </div>

        <div style={{ marginBottom: "10px", color: "white" }}>
          <h4 style={{ marginBottom: "5px", color: "white" }}>SHOP</h4>
          <ul style={{ listStyle: "none", padding: "0", color: "white" }}>
            <li style={{ color: "white" }}>Products</li>
            <li style={{ color: "white" }}>Overview</li>
            <li style={{ color: "white" }}>Pricing</li>
            <li style={{ color: "white" }}>Releases</li>
          </ul>
        </div>

        <div style={{ marginBottom: "10px", color: "white" }}>
          <h4 style={{ marginBottom: "5px", color: "white" }}>COMPANY</h4>
          <ul style={{ listStyle: "none", padding: "0", color: "white" }}>
            <li style={{ color: "white" }}>About us</li>
            <li style={{ color: "white" }}>Contact</li>
            <li style={{ color: "white" }}>News</li>
            <li style={{ color: "white" }}>Support</li>
          </ul>
        </div>

        <div style={{ color: "white" }}>
          <h4 style={{ marginBottom: "5px", color: "white" }}>STAY UP TO DATE</h4>
          <form>
            <input
              type="email"
              placeholder="Your email"
              style={{ marginRight: "10px", padding: "5px" }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "white",
                color: "#024f4f", // Bluish green color
                padding: "5px 10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
