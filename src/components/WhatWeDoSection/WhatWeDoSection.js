import React from "react";
import { connect } from "react-redux";

// Components
import WWDTextGroup from "../WWDTextGroup/WWDTextGroup";

// Styles
import "./WhatWeDoSection.scss";

// Data
import data from "../../data/whatwedo.data";

// Utils
import consoleText from "../../utils/terminalEffect";

class WhatWeDoSection extends React.Component {
  componentDidUpdate() {
    this.props.whatWeDoIsVisible &&
      consoleText(["What We Do"], "text", ["white"]);
  }

  render() {
    const { whatWeDoIsVisible } = this.props;
    const styleTitle = {
      display: whatWeDoIsVisible && "block"
    };
    return (
      <div className="WhatWeDo" id="WWD">
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

const mapStateToProps = ({ scrollState: { whatWeDoIsVisible } }) => ({
  whatWeDoIsVisible
});

export default connect(
  mapStateToProps,
  null
)(WhatWeDoSection);
