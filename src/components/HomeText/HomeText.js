import React from "react";

// Components
import HomeButton from "../HomeButton/HomeButton";

// Styles
import "./HomeText.scss";

const HomeText = () => {
  return (
    <div className="Home-text">
      <div className="Home-text-title">
        <p>
          <span className="text-gold">
            <span className="text-effect" />
            DEMOCRATIZE
          </span>
          {"\u00A0"}
          ACCESS TO GREEN{"\u00A0"}
          <span className="text-gold">
            <span className="text-effect second" />
            ENERGY
          </span>
          .
        </p>
      </div>
      <div className="Home-text-subtitle">
        <p>
          <span className="text-gold">
            <span className="text-effect third" />
            Lightency
          </span>{" "}
          is a green tech startup that harnesses the power of deep technologies
          to ensure/accelerate better access to affordable and green energy.
        </p>
        <p>
          By providing a decentralized solution, we ensure that green energy is
          produced, consumed, and exchanged locally which lowers the cost and
          increases efficiency.
        </p>
      </div>
      <div className="buttons">
        <div className="Home-text-button-left">
          <HomeButton text="Watch video" />
        </div>
        <div className="Home-text-button-right">
          <HomeButton text="Join us" joinUs />
        </div>
      </div>
    </div>
  );
};

export default HomeText;
