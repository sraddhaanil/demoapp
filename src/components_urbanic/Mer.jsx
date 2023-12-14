import React from "react";
import Mermaid from "../components_urbanic/Mermaid";

const Mer = () => {
  return (
    <div className="d-flex">
      <Mermaid
        title="Mermaid Skirt"
        description="MRP
        ₹1,390"
        imageUrl="https://img101.urbanic.com/v1/goods-pic/57ae15e7006249359b8e5befd35d65d0UR_w1440_q90.webp"
      />
      <Mermaid
        title="Patchwork Halter Top"
        description="MRP
        ₹1,790"
        imageUrl="https://img101.urbanic.com/v1/goods-pic/4e38f06e64be44729c4a14909b91f119UR_w1440_q90.webp"
      />
    </div>
  );
};

export default Mer;
