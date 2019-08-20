import React, { Component } from "react";
import { connect } from "react-redux";

// Styles
import "./ScrollToTheTop.scss";

class ScrollToTheTop extends Component {
  render() {
    const { solutionSectionIsVisible } = this.props;
    const mainStyles = {
      display: solutionSectionIsVisible && "block",
      height: solutionSectionIsVisible && "50px",
      width: solutionSectionIsVisible && "50px"
    };
    return (
      <div
        style={mainStyles}
        className="ScrollToTheTop"
        onClick={() => {
          window.scrollTo(0, 0);
          console.log("STTT");
        }}
      />
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
