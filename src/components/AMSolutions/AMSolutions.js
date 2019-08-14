import React from "react";

// Graphics
import accept from "../../graphics/accept-compressor.png";

import "./AMSolutions.scss";

const AMSolutions = () => {
  return (
    <div className="AMSolutions">
      <div className="AMSolutions-item">
        <div className="AMSolutions-item-title">
          FAVORABLE REGULATION
          <img src={accept} alt="slide" />
        </div>
        <div className="AMSolutions-item-desc">
          In the selected countries, government policies are favorable to our
          solution implementation: under a certain capacity of production,
          electricity can be traded freely between peers.
        </div>
      </div>
      <div className="AMSolutions-item">
        {" "}
        <div className="AMSolutions-item-title">
          MARKET MATURITY
          <img src={accept} alt="slide" />
        </div>
        <div className="AMSolutions-item-desc">
          We chose these countries, because the mini grids market is already
          developed there, so our base for potential customers is wider: more
          than 240 mini grids in Mali, 180 000 customers served with minigrid in
          Tanzania.
        </div>
      </div>
      <div className="AMSolutions-item">
        {" "}
        <div className="AMSolutions-item-title">
          EASE OF DOING BUSINESS
          <img src={accept} alt="slide" />
        </div>
        <div className="AMSolutions-item-desc">
          In the selected countries, the political and economical situation is
          moderately stable, and some indicators are encouraging: for example
          the mobile penetration is high.
        </div>
      </div>
    </div>
  );
};

export default AMSolutions;
