import React, { Component } from "react";
import { connect } from "react-redux";
import scrollElement from "scroll-to-element";

// Graphics
import arrow from "../../graphics/arrow.png";

// Styles
import "./ScrollToTheTop.scss";

class ScrollToTheTop extends Component {
  render() {
    const { solutionSectionIsVisible } = this.props;

    const imgStyles = {
      transform: solutionSectionIsVisible && "translateY(0px) rotate(180deg)"
    };
    return (
      <div
        className="ScrollToTheTop"
        onClick={() => {
          scrollElement(".App");
        }}
      >
        <img src={arrow} alt="arrow" style={imgStyles} />
      </div>
    );
  }
}

const mapStateToProps = ({ scrollState: { solutionSectionIsVisible } }) => ({
  solutionSectionIsVisible
});

export default connect(
  mapStateToProps,
  null
)(ScrollToTheTop);
