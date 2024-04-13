import React from "react";

const SaveEarthComponent = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f8ff",
        padding: "20px",
        width: "600px",
        margin: "0 auto",
      }}
    >
      {" "}
      {/* Very light blue background, width increased and centered */}
      <div style={{ display: "flex" }}>
        {" "}
        {/* Align divs side by side */}
        <div>
          <img
            src="your-image-url.jpg"
            alt="Earth"
            style={{ width: "200px", height: "200px" }}
          />{" "}
          {/* Placeholder for image */}
        </div>
        <div style={{ marginLeft: "20px" }}>
          {" "}
          {/* Add margin for spacing */}
          <h2 style={{ color: "#2E8B57" }}>SAVE EARTH</h2>{" "}
          {/* Bluish green color */}
          <p style={{ color: "#2E8B57" }}>Content goes here...</p>{" "}
          {/* Bluish green color */}
          <div style={{ display: "flex" }}>
            {" "}
            {/* Align boxes side by side */}
            <div
              style={{
                backgroundColor: "#f0f8ff",
                border: "1px solid #2E8B57",
                padding: "10px",
                margin: "5px",
              }}
            >
              Box 1
            </div>
            <div
              style={{
                backgroundColor: "#f0f8ff",
                border: "1px solid #2E8B57",
                padding: "10px",
                margin: "5px",
              }}
            >
              Box 2
            </div>
            <div
              style={{
                backgroundColor: "#f0f8ff",
                border: "1px solid #2E8B57",
                padding: "10px",
                margin: "5px",
              }}
            >
              Box 3
            </div>
          </div>
          <button
            style={{
              backgroundColor: "#2E8B57",
              color: "white",
              padding: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Join Now
          </button>{" "}
          {/* Bluish green color */}
        </div>
      </div>
    </div>
  );
};

export default SaveEarthComponent;