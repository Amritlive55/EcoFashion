import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons'

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
        <div style={{ marginBottom: "10px" }}>
          {" "}
          {/* Decreased spacing */}
          <h3 style={{ marginBottom: "5px" }}>  ECO Fashion </h3>{" "}
          {/* Decreased spacing */}
        </div>
        <div style={{ marginBottom: "10px" }}>
          {" "}
          {/* Decreased spacing */}
          <h4 style={{ marginBottom: "5px" }}>SOCIAL MEDIA</h4>{" "}
          {/* Decreased spacing */}
          <div style={{ display: "flex" }}>
            
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon icon={faTwitter} style={{ marginRight: "20px" }} />
            <FontAwesomeIcon icon={faFacebookSquare} style={{ marginRight: "20px" }} />
            <FontAwesomeIcon icon={faInstagram} style={{ marginRight: "20px" }} />
          </div>
          </div>
        </div>
        <div style={{ marginBottom: "10px" }}>
          {" "}
          {/* Decreased spacing */}
          <h4 style={{ marginBottom: "5px" }}>SHOP</h4>{" "}
          {/* Decreased spacing */}
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li>Products</li>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>
        <div style={{ marginBottom: "10px" }}>
          {" "}
          {/* Decreased spacing */}
          <h4 style={{ marginBottom: "5px" }}>COMPANY</h4>{" "}
          {/* Decreased spacing */}
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li>About us</li>
            <li>Contact</li>
            <li>News</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: "5px" }}>STAY UP TO DATE</h4>{" "}
          {/* Decreased spacing */}
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