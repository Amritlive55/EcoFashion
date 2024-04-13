import React, { useState } from "react";

// Feedback Item Component
const FeedbackItem = ({ name, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        border: "2px solid #ccc", // Increased border size
        padding: "30px", // Increased padding
        margin: "30px", // Increased margin
        textAlign: "center",
        width: "400px", // Increased width
        cursor: "pointer",
        backgroundColor: isHovered ? "#024f4f" : "transparent",
        color: isHovered ? "white" : "initial",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{ marginBottom: "20px", color: isHovered ? "white" : "#024f4f" }}
      >
        <h3 style={{ fontSize: "30px" }}>{name}</h3>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

// Feedback Component
const Feedback = ({ number }) => {
  // Dummy feedback data
  const feedbacks = [
    {
      name: "Rahul",
      content:
        "The customer experience was exceptional from start to finish.The website is user friendly, the checkout process was smooth, and the clothes I ordered were fit perfectly. I'm beyond saisfied.",
    },
    {
      name: "Ayush",
      content:
        "I absolutely love the quality and style of clothing I purchased from this website , customer service was outstanding and I recieved my order quickly,Highly recommended!",
    },
    {
      name: "Rohit",
      content:
        "I had a great experience shopping on this website. The clothes I bought are fasionable and comfortable.Highly satisfied!",
    },
    // Add more feedbacks as needed
  ];

  // Generate FeedbackItem components based on the number of feedbacks
  const feedbackItems = feedbacks
    .slice(0, number)
    .map((feedback, index) => (
      <FeedbackItem
        key={index}
        name={feedback.name}
        content={feedback.content}
      />
    ));

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{  paddingTop:"10px",fontSize: "75px", marginBottom: "30px", color: "#024f4f" }}>
        Feedback Corner
      </h1>{" "}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {feedbackItems}
      </div>
    </div>
  );
};

export default Feedback;