import React from "react";

import "./Benefit.scss";

const Benefit = ({ title, desc, image }) => {
  return (
    <div className="PCB-item">
      <div className="PCB-image">
        <img src={image} alt="accept" />
      </div>
      <div className="PCB-text">
        <div className="PCB-item-title">{title}</div>
        <div className="PCB-item-desc">{desc}</div>
      </div>
    </div>
  );
};

export default Benefit;
