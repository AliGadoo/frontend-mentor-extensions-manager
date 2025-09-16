import React from "react";
import { useState } from "react";
import "./Card.css";

const Card = ({ extension: { logo, name, description, isActive } }) => {
  const [isOn, setIsOn] = useState(isActive);

  return (
    <div className="card">
      <div className="content">
        <img src={logo} />
        <div className="extension_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="card_btns">
        <button className="remove_btn default_btn">Remove</button>
        <div
          className={`active_btn ${isOn ? "on" : "off"}`}
          onClick={() => setIsOn(!isOn)}
        >
          <div className="switch"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
