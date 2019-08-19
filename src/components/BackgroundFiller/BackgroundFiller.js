import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { toggleBackground } from "../../redux/background/background.actions";
import {
  hideSignUp,
  signUp,
  resetSignUp
} from "../../redux/signupboard/signup.actions";
import { hideHamburgerMenu } from "../../redux/hamburger-menu/hamburger-menu.actions";

// Styles
import "./BackgroundFiller.scss";

class BackgroundFiller extends Component {
  render() {
    const {
      backgroundFillerIsHidden,
      toggleBackground,
      resetSignUp,
      hideHamburgerMenu,
      hideSignUp
    } = this.props;
    const backgroundFillerSyles = {
      zIndex: backgroundFillerIsHidden ? "-999" : "10",
      opacity: backgroundFillerIsHidden ? "0" : "1"
    };
    const handleClick = () => {
      toggleBackground();
      hideHamburgerMenu();
      hideSignUp();
      resetSignUp();
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

const mapStateToProps = ({
  backgroundState: { backgroundFillerIsHidden },
  signUpState: { hasSignedUp },
  hamburgerMenuState: { hamburgerMenuIsHidden }
}) => ({
  backgroundFillerIsHidden,
  hasSignedUp,
  hamburgerMenuIsHidden
});

export default connect(
  mapStateToProps,
  { toggleBackground, hideSignUp, signUp, resetSignUp, hideHamburgerMenu }
)(BackgroundFiller);
