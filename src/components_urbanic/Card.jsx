import React from "react";
import { Link } from "react-router-dom";
import {Assets} from "../Assets"

const Card = ({ Asset }) => {
  const { id, title, thumbnail, price, description } = Asset;
  console.log("Assets", Asset);
  return (
    <div className="col card" key={id}>
      <img
        src={thumbnail}
        className="card-img-top"
        style={{ height: "150px" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text fw-bold">${price}</p>
        <p className="card-text text-truncate">{description}</p>
        <Link to="/" className="btn btn-primary">
          {" "}
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default Card;
