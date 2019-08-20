import React from "react";
import { connect } from "react-redux";

// Styles
import "./SignUpBoard.scss";

// Actions
import { signUp } from "../../redux/signupboard/signup.actions";

class SignUpBoard extends React.Component {
  state = { isLoading: false };
  render() {
    const { isLoading } = this.state;
    const { signUpIsHidden, hasSignedUp, signUp } = this.props;
    const boardStyle = {
      zIndex: signUpIsHidden ? "-1000" : "1000",
      left: !signUpIsHidden && "calc(85% - 320px)"
    };
    const thankYouStyle = {
      transform: isLoading && "translateY(-1px)",
      transition: "all 1s ease-in-out"
    };
    return (
      <div style={boardStyle} className="SU-board">
        <div className="board-title">Join us today</div>
        <div className="board-subtitle">
          Join us today to get a chance to be among the first testers of the
          demo and try the Lightency P2P Energy Trading Platform{" "}
        </div>
        <div className="board-input-item">
          <label htmlFor="fname">First Name*</label>
          <input type="text" id="fname" placeholder="First Name" />
        </div>
        <div className="board-input-item">
          <label htmlFor="lname">Last Name*</label>
          <input type="text" id="lname" placeholder="Last Name" />
        </div>
        <div className="board-input-item">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <button
          className="board-subscribe"
          onClick={() => {
            console.log("Clicked");
            signUp();
            this.setState({ isLoading: true });
            setTimeout(() => {
              this.setState({ isLoading: false });
            }, 1000);
          }}
          disabled={isLoading || (hasSignedUp && true)}
        >
          {!hasSignedUp ? (
            "Sign Up"
          ) : isLoading ? (
            <div className="lds-ellipsis">
              <div />
              <div />
              <div />
              <div />
            </div>
          ) : (
            <div style={thankYouStyle} className="thankyou">
              Subscribed!
            </div>
          )}
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ signUpState: { signUpIsHidden, hasSignedUp } }) => ({
  signUpIsHidden,
  hasSignedUp
});

export default connect(
  mapStateToProps,
  { signUp }
)(SignUpBoard);
