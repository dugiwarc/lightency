import React from "react";
import Lottie from "lottie-react-web";
import { connect } from "react-redux";

// Styles
import "./AMTCity.scss";

class AMTCity extends React.Component {
	state = { isClicked: false, isStopped: true, isVisible: false, offsetTop: 0 };

	handleResize = () => {
		this.setState({
			offsetTop:
				document.querySelector("#AM").offsetTop +
				document.querySelector("#AMTCity").offsetTop -
				document.querySelector(".AMTCity").offsetHeight
		});
	};

	componentDidMount() {
		this.setState({
			offsetTop:
				document.querySelector("#AM").offsetTop +
				document.querySelector(".AMTCity").offsetTop -
				document.querySelector(".AMTCity").offsetHeight
		});
		window.addEventListener("resize", this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}
	componentDidUpdate() {
		!this.state.isVisible &&
			this.props.yPosition > this.state.offsetTop &&
			setTimeout(() => {
				this.setState({
					isVisible: true
				});
			}, 1000);
	}
	render() {
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: require("./data-new.json")
		};
		return (
			<div className='AMTCity' id='AMTCity'>
				<Lottie
					options={defaultOptions}
					overflow={"none"}
					speed={0.3}
					isStopped={!this.state.isVisible}
					// style={lottieStyles}
				/>
				
				<div className='AMTMotto'>
					“The monetary system has to change from a gold backed currency to
					energy and natural resources backed currency“<div>-Henry Ford</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = ({ scrollState: { yPosition } }) => ({
	yPosition
});

export default connect(
	mapStateToProps,
	null
)(AMTCity);
