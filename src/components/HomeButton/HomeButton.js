import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { showSignUp } from "../../redux/signupboard/signup.actions";
import { toggleBackground } from "../../redux/background/background.actions";

// Styles
import "./HomeButton.scss";

class HomeButton extends Component {
  render() {
    const { text, showSignUp, toggleBackground, joinUs } = this.props;
    const handleClick = () => {
      joinUs && showSignUp() && toggleBackground();
    };
    return (
      <div className="button_base Home-button" onClick={handleClick}>
        <div>{text}</div>
        <div />
        <div>{text}</div>
      </div>
    );
  }
}

export default connect(
  null,
  { showSignUp, toggleBackground }
)(HomeButton);
