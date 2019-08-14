import React from "react";
import mockapp from "../../graphics/mockapp.png";

import "./MockAppSection.scss";

const MockAppSection = () => {
  return (
    <section className="MockApp">
      <div className="MA-text">
        <div className="MA-item">
          <div className="MA-title">Open Platform</div>
          <div className="MA-desc">
            Powerchain platform is open to third-party hardware (smart meters,
            sensors…) and mini/micro grid software
          </div>
        </div>
        <div className="MA-item">
          <div className="MA-title">Operator Oriented</div>
          <div className="MA-desc">
            Efficient integration of Powerchain platform in microgrids, enables
            safe operation and optimal asset management
          </div>
        </div>
        <div className="MA-item">
          <div className="MA-title">Several Features</div>
          <div className="MA-desc">
            Powerchain allows for Real-time settlement, detailed billing, usage
            data & accurate measurement of energy generation and consumption.
          </div>
        </div>
      </div>
      <div className="MA-img">
        <img src={mockapp} alt="mockapp" />
      </div>
    </section>
  );
};

export default MockAppSection;
