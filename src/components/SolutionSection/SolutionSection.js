import React, { Fragment } from "react";

// Components
import SSGroups from "../SSGroups/SSGroups";
import ChevronScroll from "../../components/ChevronScroll/ChevronScroll";

// Styles
import "./SolutionSection.scss";

class SolutionSection extends React.Component {
  render() {
    const { isVisible } = this.props;
    const componentStyle = {
      opacity: isVisible ? "1" : "0",
      transition: "all 0.5s ease-in",
      transform: isVisible ? "translateY(0px)" : "translateY(100px)"
    };
    return (
      <Fragment>
        <ChevronScroll isVisible={isVisible} />
        <section className="SolutionSection" style={componentStyle}>
          <div className="SS-title">
            <p>
              The <span className="text-gold">Lightency</span> solution was
              conceived to answer specific problems faced by the African market
            </p>
          </div>
          <SSGroups />
        </section>
      </Fragment>
    );
  }
}

export default SolutionSection;
