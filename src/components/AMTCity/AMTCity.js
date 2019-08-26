import React from "react";
import Lottie from "lottie-react-web";
import { connect } from "react-redux";

// Styles
import "./AMTCity.scss";

class AMTCity extends React.Component {
	state = { isClicked: false, isStopped: true, isVisible: false, offsetTop: 0 };

	handleResize = () => {
		this.setState(
			{
				offsetTop:
					document.querySelector("#AM").offsetTop +
					// (document.querySelector("#AM").offsetHeight -
					document.querySelector("#AMTCity").offsetTop -
					document.querySelector(".AMTCity").offsetHeight
			},
			() => console.log("this.state.offsetTop", this.state.offsetTop)
		);
	};

	componentDidMount() {
		this.setState(
			{
				offsetTop:
					document.querySelector("#AM").offsetTop +
					// (document.querySelector("#AM").offsetHeight -
					document.querySelector(".AMTCity").offsetTop -
					document.querySelector(".AMTCity").offsetHeight
			},
			() => console.log("this.state.offsetTop", this.state.offsetTop)
		);
		window.addEventListener("resize", this.handleResize);
	}
	componentDidUpdate() {
		console.log("this.props.yPosition", this.props.yPosition);
		!this.state.isVisible &&
			this.props.yPosition > this.state.offsetTop &&
			this.setState(
				{
					isVisible: true
				},
				() => console.log("Animation Started")
			);
		// this.props.yPosition > 400 && console.log("Done");
		// console.log(
		// 	document.querySelector("#AM").offsetTop +
		// 		document.querySelector("#AMTCity").offsetTop
		// );
	}
	render() {
		const defaultOptions = {
			loop: false,
			// speed: 2,
			autoplay: false,
			animationData: require("./data.json")
		};
		return (
			<div className='AMTCity' id='AMTCity'>
				<Lottie
					options={defaultOptions}
					overflow={"none"}
					speed={0.5}
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
