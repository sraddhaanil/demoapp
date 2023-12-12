import React from "react";
import "../components_urbanic/Shopnow.css";

const Shopnow = ({ title, description, imageUrl }) => {
  return (
    <div className="shop">
      <img src={imageUrl} alt={title} className="shop-image" />
      <div className="shop-content">
        <h3 className="shop-title">{title}</h3>
        <p className="shop-description">{description}</p>
      </div>
    </div>
  );
};

export default Shopnow;
