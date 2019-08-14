import React from "react";

import convo from "../../graphics/conversation.png";
import target from "../../graphics/target.png";

import "./SSGroup.scss";

const SSGroup = ({ concernTitle, concernSTitle, solutionSTitle }) => {
  return (
    <div className="SS-group">
      <div className="SS-group-left">
        <div className="SS-icon">
          <img src={convo} alt="icon" />
        </div>
        <div className="SS-text">
          <div className="SS-text-title">{concernTitle}</div>
          <div className="SS-text-subtitle">{concernSTitle}</div>
        </div>
      </div>
      <div className="SS-group-right">
        <div className="SS-icon">
          <img src={target} alt="icon" />
        </div>
        <div className="SS-text">
          <div className="SS-text-subtitle">{solutionSTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default SSGroup;
