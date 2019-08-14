import React from "react";
import WWDTextGroup from "../WWDTextGroup/WWDTextGroup";

import "./WhatWeDoSection.scss";

import data from "../../data/whatwedo.data";

import consoleText from "../../utils/terminalEffect";

class WhatWeDoSection extends React.Component {
  state = { isVisible: false };
  componentDidUpdate() {
    console.log(this.props);
    this.props.isVisible && consoleText(["What We Do"], "text", ["white"]);
  }
  render() {
    const { isVisible } = this.props;
    const styleTitle = {
      display: isVisible ? "block" : "none"
    };
    return (
      <div className="WhatWeDo">
        <div className="WWD-filter" />
        <div className="WWD-text">
          <div className="WWD-text-title" style={styleTitle}>
            <div className="console-container">
              <span id="text" />
              <div className="console-underscore" id="console">
                &#95;
              </div>
            </div>
          </div>
          {data.map((item, index) => (
            <WWDTextGroup
              modifier={item.modifier}
              text={item.text}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default WhatWeDoSection;
