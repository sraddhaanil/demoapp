import React from "react";
import Shopnow from "./Shopnow";
import { Link } from "react-router-dom";

const Bestsellers = () => {
  const handleNavigate = () => {
    window.location.href = "https://in.urbanic.com/activity/best-sellers-3149";
  };

  return (
    <div>
      <div className="inline-container">
        <h1 className="inline-heading">Best Sellers</h1>
        <Link to="" onClick={handleNavigate} className="inline-link">
          SHOP NOW
        </Link>
      </div>
      <div className="d-flex">
        <Shopnow
          title="Belted Knit Pullover"
          description="MRP ₹1,990"
          imageUrl="https://img101.urbanic.com/v1/efaaa449d0944c58b75f03b36d7915e3.webp"
        />
        <Shopnow
          title="Slit Bodycon Dress"
          description="MRP
        ₹2,990"
          imageUrl="https://img101.urbanic.com/v1/9927b1d5e2664f028937e1dd9c0ef1c2.webp"
        />

        <Shopnow
          title="Gathered Bodycon Dress"
          description="MRP
        ₹1,990"
          imageUrl="https://img101.urbanic.com/v1/90d2752992664ed0b9844d916b4ab869.webp"
        />

        <Shopnow
          title="Color Block Knit Cardigan"
          description="MRP
        ₹1,690"
          imageUrl="https://img101.urbanic.com/v1/c11a81c726df4c01b0f9de443e3b0f9a.webp"
        />
        <Shopnow
          title="Stright Skirt"
          description="MRP
        ₹990"
          imageUrl="https://img101.urbanic.com/v1/c99eadebc9f54d258f8899ce1a4cbb03.webp"
        />
      </div>
    </div>
  );
};

export default Bestsellers;
