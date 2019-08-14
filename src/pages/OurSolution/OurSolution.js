import React from "react";
import EnergyTrading from "../../components/EnergyTrading/EnergyTrading";
import MockAppSection from "../../components/MockApp/MockAppSection";
import PowerChainBenefits from "../../components/PowerChainBenefits/PowerChainBenefits";

import "./OurSolution.scss";

class OurSolution extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="OurSolution">
        <div className="OS-header">
          <div className="OS-header-title">OUR SOLUTION POWERCHAIN</div>
          <div className="OS-header-text">
            Our P2P trading platform allows consumers to access a green and
            affordable energy. It enables our customers to sell their excess of
            electricity to their neighbours, thus providing a new revenue stream
            to prosumers and a cost effective electricity to consumers.
          </div>
        </div>
        <EnergyTrading />
        <MockAppSection />
        <PowerChainBenefits />
      </div>
    );
  }
}

export default OurSolution;
