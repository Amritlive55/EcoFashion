import React from "react";
import "./Premium.css"; // Import CSS file for styling

const PremiumComponent = () => {
  return (
    <div className="premium-container">
      <div className="arrow-container">
        {/* Left arrow button */}
        <button className="arrow-button" style={{color:"black"}}>{'<'}</button>
      </div>
      <div className="premium-content">
        <p className="go-premium">Go Premium</p>
        <h1>Benefits of Premium</h1>
        <ul>
          <li>Exclusive discount on every product</li>
          <li>Remove Ads</li>
          <li>Free Delivery</li>
        </ul>
      </div>
      <div className="image-container">{/* Image goes here */}</div>
      <div className="boxes-container" style={{ marginLeft: "65px" }}>
        {/* Three boxes with equal dimensions */}
        <div className="box">
          <h3 style={{ color: "white" }}>Free</h3>
          <p style={{ color: "white" }}>7 days trial</p>
        </div>
        <div className="box">
          <h3 style={{ color: "white" }}>Rs 100</h3>
          <p style={{ color: "white" }}>per month</p>
        </div>
        <div className="box">
          <h3 style={{ color: "white" }}>Rs 21</h3>
          <p style={{ color: "white" }}>per week</p>
        </div>
      </div>
      <p className="try-premium" style={{ marginLeft: "200px" }}>
        Try Premium 7 days for free
      </p>
      <button className="select-button" style={{ marginLeft: "220px" }}>
        Select this page
      </button>
      <h2 style={{ marginLeft: "190px", color: "black" }}>
        {" "}
        <a href="#">Restore Premium</a>
      </h2>
    </div>
  );
};

export default PremiumComponent;