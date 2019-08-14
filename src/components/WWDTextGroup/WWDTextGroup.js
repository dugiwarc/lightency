import React from "react";
import "./WWDTextGroup.scss";

const WWDTextGroup = ({ modifier, text }) => {
  return (
    <div className="WWD-text-group">
      <span className="text-gold">{modifier}</span>
      {"\u00A0"}
      {text}
    </div>
  );
};

export default WWDTextGroup;
