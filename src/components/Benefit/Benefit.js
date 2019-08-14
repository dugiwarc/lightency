import React from "react";
import accept from "../../graphics/accept.png";

import "./Benefit.scss";

const Benefit = ({ title, desc }) => {
  return (
    <div className="PCB-item">
      <div className="PCB-item-title">
        {title}
        <img src={accept} alt="accept" />
      </div>
      <div className="PCB-item-desc">{desc}</div>
    </div>
  );
};

export default Benefit;
