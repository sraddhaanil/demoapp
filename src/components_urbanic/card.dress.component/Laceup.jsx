import React from "react";
import "../Image.css";

const Laceup = ({ title, description, imageUrl }) => {
  return (
    <div className="img-card">
      <img src={imageUrl} alt={title} className="img-image" />
      <div className="img-content">
        <h3 className="img-title">{title}</h3>
        <p className="img-description">{description}</p>
        <button className="img-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Laceup;
