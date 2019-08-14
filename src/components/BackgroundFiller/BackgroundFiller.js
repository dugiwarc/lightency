import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { toggleBackground } from "../../redux/background/background.actions";
import { toggleSignUp } from "../../redux/signupboard/signup.actions";

// Styles
import "./BackgroundFiller.scss";

class BackgroundFiller extends Component {
  render() {
    const { hidden, toggleBackground, toggleSignUp } = this.props;
    const backgroundFillerSyles = {
      zIndex: hidden ? "-999" : "999",
      opacity: hidden ? "0" : "1"
    };
    const handleClick = () => {
      toggleBackground();
      toggleSignUp();
    };
    return (
      <div
        className="BackgroundFiller"
        style={backgroundFillerSyles}
        onClick={handleClick}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleBackground: () => dispatch(toggleBackground()),
  toggleSignUp: () => dispatch(toggleSignUp())
});

const mapStateToProps = ({ backgroundState: { hidden } }) => ({
  hidden
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundFiller);
