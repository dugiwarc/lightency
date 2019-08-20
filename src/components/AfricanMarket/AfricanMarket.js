import React from "react";

import AMTCity from "../AMTCity/AMTCity";
import AMSolutions from "../AMSolutions/AMSolutions";
import AMSubtitle from "../AMSubtitle/AMSubtitle";
import AMContinent from "../AMContinent/AMContinent";

import "./AfricanMarket.scss";

export default class AfricanMarket extends React.Component {
  render() {
    return (
      <section className="AfricanMarket" id="AM">
        <div className="AMTitle">Why the african market</div>
        <div className="AMImgAndSolutions">
          <AMContinent />
          <AMSolutions />
        </div>
        <AMSubtitle />
        <AMTCity />
      </section>
    );
  }
}
