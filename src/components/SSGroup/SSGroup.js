import React from "react";

// Components
import "./SSGroup.scss";

const SSGroup = ({ concernTitle, concernSTitle, solutionSTitle, image }) => {
  return (
    <div className="SS-group">
      <div className="SS-group-left">
        <div className="SS-icon">
          <img src={image} alt="icon" />
        </div>
        <div className="SS-text">
          <div className="SS-text-title">{concernTitle}</div>
          <div className="SS-text-subtitle">{concernSTitle}</div>
        </div>
      </div>
      <div className="SS-group-right">
        <div className="SS-icon">
          <img src={image} alt="icon" />
        </div>
        <div className="SS-text">
          <div className="SS-text-subtitle">{solutionSTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default SSGroup;
