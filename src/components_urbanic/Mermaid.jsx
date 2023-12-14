import React from "react";
import "./Mermaid.css";

const Mermaid = ({ title, description, imageUrl }) => {
  return (
    <div className="mermaid">
      <img src={imageUrl} alt={title} className="mermaid-image" />
      <div className="mermaid-content">
        <h3 className="mermaid-title">{title}</h3>
        <p className="mermaid-description">{description}</p>
      </div>
    </div>
  );
};

export default Mermaid;
