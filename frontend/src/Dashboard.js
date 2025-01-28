import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to EcoFashion</h1>
        <p>Make a difference, one step at a time.</p>
      </header>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Your Eco Points</h3>
          <p>🌱 1200 Points</p>
          <p>Keep contributing to earn more!</p>
        </div>
        <div className="dashboard-card">
          <h3>Recent Activities</h3>
          <ul>
            <li>Recycled 2kg plastic - 200 points</li>
            <li>Purchased eco-friendly shoes - 400 points</li>
            <li>Donated e-waste - 600 points</li>
          </ul>
        </div>
        <div className="dashboard-card">
          <h3>Your Orders</h3>
          <ul>
            <li>Eco-Friendly T-Shirt - Delivered</li>
            <li>Reusable Water Bottle - In Transit</li>
            <li>Sustainable Sneakers - Processing</li>
          </ul>
          <Link to="/Shop">
            <button className="dashboard-button">Shop More</button>
          </Link>
        </div>
      </div>
      <footer className="dashboard-footer">
        <p>Thank you for making the world a greener place! 🌍</p>
        <Link to="/Leaderboard">Check the Leaderboard</Link>
      </footer>
    </div>
  );
};

export default Dashboard;