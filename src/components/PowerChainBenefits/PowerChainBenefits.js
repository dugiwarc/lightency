import React from "react";
import Benefit from "../Benefit/Benefit";
import benefits from "../../data/benefits.data";

import "./PowerChainBenefits.scss";

const PowerChainBenefits = () => {
  return (
    <section className="PowerChainBenefits">
      <div className="PCB-title">Powerchain Benefits</div>
      <div className="PCB-items">
        {benefits.map((item, i) => {
          return (
            <Benefit
              key={i}
              title={item.title}
              desc={item.desc}
              image={item.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PowerChainBenefits;
