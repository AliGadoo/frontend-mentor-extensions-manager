import React from "react";
import "./Card.css";

const Card = ({ extension }) => {
  return (
    <div className="card">
      <img src={extension.logo} />
    </div>
  );
};

export default Card;
