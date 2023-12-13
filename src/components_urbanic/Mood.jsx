import React from "react";
import "./Mood.css";

const Mood = ({ title, description, imageUrl }) => {
  return (
    <div className="mood">
      <img src={imageUrl} alt={title} className="mood-image" />
      <div className="mood-content">
        <h3 className="mood-title">{title}</h3>
        <p className="mood-description">{description}</p>
      </div>
    </div>
  );
};

export default Mood;
