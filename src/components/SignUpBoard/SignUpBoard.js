import React from "react";
import { connect } from "react-redux";

// Styles
import "./SignUpBoard.scss";

// Actions
import { signUp, hideSignUp } from "../../redux/signupboard/signup.actions";
import { showSpinner } from "../../redux/spinner/spinner.actions";

class SignUpBoard extends React.Component {
	render() {
		const { signUpIsHidden, hideSignUp, signUp, showSpinner } = this.props;
		const boardStyle = {
			zIndex: signUpIsHidden ? "-1000" : "1000",
			left: !signUpIsHidden && "calc(85% - 320px)"
		};
		return (
			<div style={boardStyle} className='SU-board'>
				<div className='sign-up-content'>
					<div className='board-title'>Join us today</div>
					<div className='board-subtitle'>
						Join us today to get a chance to be among the first testers of the
						demo and try the Lightency P2P Energy Trading Platform{" "}
					</div>
					<div className='board-input-item'>
						<label htmlFor='fname'>First Name*</label>
						<input type='text' id='fname' placeholder='First Name' />
					</div>
					<div className='board-input-item'>
						<label htmlFor='lname'>Last Name*</label>
						<input type='text' id='lname' placeholder='Last Name' />
					</div>
					<div className='board-input-item'>
						<label htmlFor='email'>Email*</label>
						<input type='email' id='email' placeholder='Email' />
					</div>
					<button
						className='board-subscribe'
						onClick={() => {
							signUp();
							hideSignUp();
							showSpinner();
						}}
					>
						Sign Up
					</button>
				</div>
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
	{ signUp, hideSignUp, showSpinner }
)(SignUpBoard);
