import React, { Fragment } from "react";
import { connect } from "react-redux";

// Components
import SSGroups from "../SSGroups/SSGroups";
import ChevronScroll from "../../components/ChevronScroll/ChevronScroll";

// Styles
import "./SolutionSection.scss";

class SolutionSection extends React.Component {
  render() {
    const { solutionSectionIsVisible } = this.props;
    const componentStyle = {
      opacity: solutionSectionIsVisible ? "1" : "0",
      transition: "all 0.5s ease-in",
      transform: solutionSectionIsVisible
        ? `translateY(0px)`
        : "translateY(100px)"
    };
    return (
      <Fragment>
        <ChevronScroll isVisible={solutionSectionIsVisible} />
        <section className="SolutionSection" style={componentStyle} id="SS">
          <div className="SS-title">
            <p>
              The{" "}
              <span
                className={`text-gold ${solutionSectionIsVisible &&
                  "text-flicker-in-glow"}`}
              >
                Lightency
              </span>{" "}
              solution was conceived to answer specific problems faced by the
              African market
            </p>
          </div>
          <SSGroups />
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ scrollState: { solutionSectionIsVisible } }) => ({
  solutionSectionIsVisible
});

export default connect(
  mapStateToProps,
  null
)(SolutionSection);
