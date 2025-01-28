import React, { useState } from "react";
import "./CarbonFootprintCalculator.css";

const CarbonFootprintCalculator = () => {
  const [fabric, setFabric] = useState("");
  const [clothingItems, setClothingItems] = useState(0);
  const [recycling, setRecycling] = useState(0);
  const [result, setResult] = useState(null);

  const calculateFootprint = () => {
    // Approximation for carbon footprint calculation
    let fabricImpact = 0;
    if (fabric === "cotton") fabricImpact = 2; // Cotton: 2 kg CO2 per item
    if (fabric === "polyester") fabricImpact = 5; // Polyester: 5 kg CO2 per item
    if (fabric === "recycled") fabricImpact = 0.5; // Recycled: 0.5 kg CO2 per item

    const footprint = clothingItems * fabricImpact - recycling * 3; // Recycling reduces CO2

    setResult(footprint > 0 ? footprint.toFixed(2) : 0);
  };

  return (
    <div className="eco-fashion-calculator">
      <h2>EcoFashion Carbon Footprint Calculator</h2>

      <div className="input-group">
        <label htmlFor="fabric">Select Fabric Type:</label>
        <select
          id="fabric"
          value={fabric}
          onChange={(e) => setFabric(e.target.value)}
        >
          <option value="">--Choose Fabric--</option>
          <option value="cotton">Cotton</option>
          <option value="polyester">Polyester</option>
          <option value="recycled">Recycled Material</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="clothingItems">Number of Clothing Items:</label>
        <input
          type="number"
          id="clothingItems"
          value={clothingItems}
          onChange={(e) => setClothingItems(e.target.value)}
          placeholder="E.g., 5"
        />
      </div>

      <div className="input-group">
        <label htmlFor="recycling">Items Recycled (per month):</label>
        <input
          type="number"
          id="recycling"
          value={recycling}
          onChange={(e) => setRecycling(e.target.value)}
          placeholder="E.g., 3"
        />
      </div>

      <button onClick={calculateFootprint}>Calculate Footprint</button>

      {result !== null && (
        <div className="result">
          <h3>Your Estimated Carbon Footprint:</h3>
          <p>{result} kg CO2 per month</p>
        </div>
      )}
    </div>
  );
};

export default CarbonFootprintCalculator;