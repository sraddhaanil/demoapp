import React from "react";
import "../card.component/CardComponent.css";

const CardComponent = () => {
  return (
    <div className="card-comp">
      <img
        src="https://img101.urbanic.com/v1/9ad83812aa6b438faf30c5027b556a36.webp"
        alt="img-1"
        className="card-comp-img"
      />
      <img
        src="https://img101.urbanic.com/v1/e5f10e5a8e24498f851ba5e9d6ed4ad8.webp"
        alt="img-2"
        className="card-comp-img"
      />
      <img
        src="https://img101.urbanic.com/v1/429f1b4ef6ec4e26b31d4ec4133cabb9.webp"
        alt="img-3"
        className="card-comp-img"
      />

      <div className="card-com-content"></div>
    </div>
  );
};

export default CardComponent;
