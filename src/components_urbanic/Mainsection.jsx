import React from "react";
import Card from "./card.component/Card";
import "./Mainsection.css";
import { Link } from "react-router-dom";

const Mainsection = () => {
  return (
    <div className="d-flex">
      <Link to="/mermaid-skirt" className="link">
        <Card
          title="Mermaid Skirt"
          description="MRP
        ₹1,390"
          imageUrl="https://img101.urbanic.com/v1/2eb08615cf854f6ab86215068f6bbebb.webp"
        />
      </Link>
      <Link to="/patch-top" className="link">
        <Card
          title="Patchwork Halter Top"
          description="MRP
        ₹1,790"
          imageUrl="https://img101.urbanic.com/v1/edb3377a7f4d4eeab81e6726f4d54113.webp"
        />
      </Link>
      <Link to="/cutout-dress" className="link">
        <Card
          title="Cut Out Cocktail Dress"
          description="MRP
      ₹6,990"
          imageUrl="https://img101.urbanic.com/v1/1b900c725e57475dbbce1742361a9b85.webp"
        />
      </Link>
      <Link to="/bodycon-dress" className="link">
        <Card
          title="Rhinestone Bodycon Dress"
          description="MRP
    ₹4,999"
          imageUrl="https://img101.urbanic.com/v1/205203556ae04c51886964e5b9c5fe13.webp"
        />
      </Link>
      <Link to="/laceup-dress" className="link">
      <Card
        title="Lace Up Wrap Skirt"
        description="MRP
  ₹2,290"
        imageUrl="https://img101.urbanic.com/v1/4f05f83c407f4de1b2a704d58abf2ded.webp"
      />
      </Link>
    </div>
  );
};

export default Mainsection;
