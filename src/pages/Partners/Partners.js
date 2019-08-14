import React from "react";
import partner_1 from "../../graphics/P.png";
import partner_2 from "../../graphics/P1.png";
import partner_3 from "../../graphics/P2.png";
import partner_4 from "../../graphics/p3.png";
import partner_5 from "../../graphics/p4.png";
import partner_6 from "../../graphics/P5.png";
import partner_7 from "../../graphics/p6.png";
import partner_8 from "../../graphics/P7.png";

import "./Partners.scss";

class Partners extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="Partners">
          <section className="Partners-box">
            <img src={partner_1} alt="partner" />
            <img src={partner_2} alt="partner" />
            <img src={partner_3} alt="partner" />
            <img src={partner_4} alt="partner" />
            <img src={partner_5} alt="partner" />
            <img src={partner_6} alt="partner" />
            <img src={partner_7} alt="partner" />
            <img src={partner_8} alt="partner" />
          </section>
        </div>
      </div>
    );
  }
}

export default Partners;
