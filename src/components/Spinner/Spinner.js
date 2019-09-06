import React from "react";
import { connect } from "react-redux";
import mailbox from "../../graphics/mailbox.png";

// Styles
import "./Spinner.scss";

// Actions
import { hideSpinner } from "../../redux/spinner/spinner.actions";
import { hideBackground } from "../../redux/background/background.actions";

class Spinner extends React.Component {
	state = { hasLoaded: false };
	componentDidUpdate() {
		this.props.isActive &&
			setTimeout(() => {
				this.setState({ hasLoaded: true });
			}, 900);
	}
	render() {
		const { isActive } = this.props;
		const containerStyle = {
			display: isActive ? "block" : "none"
		};
		return (
			<div className='container' style={containerStyle}>
				{this.state.hasLoaded ? (
					<div className='container-rect'>
						<div className='image'>
							<img src={mailbox} alt='mailbox' />
						</div>
						<div className='title'>Your email has been registered!</div>
						<div
							className='button'
							onClick={() => {
								this.props.hideSpinner();
								this.props.hideBackground();
								this.setState({ hasLoaded: false });
							}}
						>
							Continue
						</div>
					</div>
				) : (
					<div className='main'></div>
				)}
			</div>
		);
	}
}

const mapStateToProps = ({ spinnerState: { isActive } }) => ({
	isActive
});

export default connect(
	mapStateToProps,
	{ hideSpinner, hideBackground }
)(Spinner);
