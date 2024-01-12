import React from "react";
import Mermaid from "./Mermaid";
import "../Image.css";

const Mer = () => {
  return (
    <div className="img-container">
      <Mermaid
        title="Mermaid Skirt"
        description="MRP ₹1,390"
        imageUrl="https://img101.urbanic.com/v1/goods-pic/4e38f06e64be44729c4a14909b91f119UR_w1440_q90.webp"
      />
    </div>
  );
};

export default Mer;
