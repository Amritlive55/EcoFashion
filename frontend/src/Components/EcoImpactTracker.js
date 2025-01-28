import React, { useState } from "react";
import "./EcoImpactTracker.css";

const EcoImpactTracker = () => {
  const [plasticWeight, setPlasticWeight] = useState(0);
  const [impact, setImpact] = useState(null);

  const calculateImpact = () => {
    const CO2Saved = plasticWeight * 1.5; // Example: 1 kg plastic saves 1.5 kg CO₂
    const energySaved = plasticWeight * 2; // Example: 1 kg plastic saves 2 kWh
    const wasteReduced = plasticWeight; // Waste reduced equals plastic recycled

    setImpact({
      CO2Saved,
      energySaved,
      wasteReduced,
    });
  };

  return (
    <div className="eco-impact-tracker">
      <h2>Eco-Impact Tracker</h2>
      <div>
        <label>
          Enter Plastic Waste Recycled (kg):{" "}
          <input
            type="number"
            value={plasticWeight}
            onChange={(e) => setPlasticWeight(Number(e.target.value))}
          />
        </label>
        <button onClick={calculateImpact}>Calculate Impact</button>
      </div>
      {impact && (
        <div className="impact-details">
          <h3>Your Eco-Impact:</h3>
          <p>Waste Reduced: {impact.wasteReduced} kg</p>
          <p>CO₂ Saved: {impact.CO2Saved.toFixed(2)} kg</p>
          <p>Energy Saved: {impact.energySaved.toFixed(2)} kWh</p>
        </div>
      )}
    </div>
  );
};

export default EcoImpactTracker;