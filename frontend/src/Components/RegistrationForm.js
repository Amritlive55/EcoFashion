import React, { useState } from "react";
import "./RegistrationForm.css"; // Import CSS file

function RegistrationForm() {
  // State variables for form fields
  const [username, setUsername] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [region, setRegion] = useState("");
  const [concern, setConcern] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any validation or submission logic here
    // For this example, let's just log the form data
    console.log("Username:", username);
    console.log("Phone Number:", phoneNo);
    console.log("Region:", region);
    console.log("Concern:", concern);
  };

  return (
    <div className="registration-form-container">
      {" "}
      {/* Container div with CSS class */}
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="tel"
            id="phoneNo"
            value={phoneNo}
            placeholder="Phone no"
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="region"
            placeholder="Region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            id="concern"
            value={concern}
            placeholder="Concern"
            onChange={(e) => setConcern(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;