import React from "react";
import whitepaper from "../../graphics/whitepaper.png";
import pitchdeck from "../../graphics/pitchdeck.png";
import tge from "../../graphics/tge.png";

import "./Ressources.scss";

class Ressources extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="Ressources">
        <div className="Ressources-box">
          <div className="Ressources-box-item">
            <img src={whitepaper} alt="whitepaper" />
            <div className="Ressources-box-item-title">(coming soon)</div>
          </div>
          <div className="Ressources-box-item">
            <img src={pitchdeck} alt="whitepaper" />
            <div className="Ressources-box-item-title">Read</div>
          </div>
          <div className="Ressources-box-item">
            <img src={tge} alt="whitepaper" />
            <div className="Ressources-box-item-title">(coming soon)</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Ressources;
