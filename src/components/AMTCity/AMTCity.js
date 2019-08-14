import React from "react";

// Graphics
import city from "../../graphics/city.png";

// Styles
import "./AMTCity.scss";

const AMTCity = () => {
  return (
    <div className="AMTCity">
      <img src={city} alt="city" />
      <div className="AMTMotto">
        “The monetary system has to change from a gold backed currency to energy
        and natural resources backed currency“<div>-Henry Ford</div>
      </div>
    </div>
  );
};

export default AMTCity;
