import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { toggleSignUp } from "../../redux/signupboard/signup.actions";
import { toggleBackground } from "../../redux/background/background.actions";

// Styles
import "./HomeButton.scss";

class HomeButton extends Component {
  render() {
    const { text, toggleSignUp, toggleBackground } = this.props;
    const handleClick = () => {
      toggleSignUp();
      toggleBackground();
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

const mapDispatchToProps = dispatch => ({
  toggleSignUp: () => dispatch(toggleSignUp()),
  toggleBackground: () => dispatch(toggleBackground())
});

export default connect(
  null,
  mapDispatchToProps
)(HomeButton);
