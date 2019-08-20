import React from "react";
import { connect } from "react-redux";

// Styles
import "./WWDTextGroup.scss";

class WWDTextGroup extends React.Component {
  render() {
    const { modifier, text, whatWeDoIsVisible } = this.props;
    const textGroup = {
      opacity: whatWeDoIsVisible ? "1" : "0",
      transform: whatWeDoIsVisible && "translateY(0px)"
    };
    return (
      <div className="WWD-text-group" style={textGroup}>
        <span className="text-gold">{modifier}</span>
        {"\u00A0"}
        {text}
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
)(WWDTextGroup);
