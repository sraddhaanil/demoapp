import React from "react";
import "./View.css";

const View = ({ title, description, imageUrl }) => {
  return (
    <div className="view">
      <img src={imageUrl} alt={title} className="view-image" />
      <div className="view-content">
        <h3 className="view-title">{title}</h3>
        <p className="view-description">{description}</p>
        <button className="img-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default View;
