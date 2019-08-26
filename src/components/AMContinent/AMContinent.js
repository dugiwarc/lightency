import React, { Component } from "react";
import { connect } from "react-redux";

// Graphics
import continent from "../../graphics/africa_opt_animated.svg";

// Data
import mapinfo from "../../data/mapinfo.data";

// Components
import Location from "../Location/Location";

// Styles
import "./AMContinent.scss";

class AMContinent extends Component {
	state = { isVisible: false, offsetTop: 0 };
	handleResize = () => {
		this.setState({
			offsetTop:
				document.querySelector("#AM").offsetTop -
				document.querySelector(".AMTContinent").offsetHeight
		});
	};
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.yPosition !== this.props.yPosition;
	}
	componentDidMount() {
		this.setState({
			offsetTop:
				document.querySelector("#AM").offsetTop -
				document.querySelector(".AMTContinent").offsetHeight * 1.2
		});
		window.addEventListener("resize", this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}

	componentDidUpdate() {
		!this.state.isVisible &&
			this.props.yPosition > this.state.offsetTop &&
			this.setState({
				isVisible: true
			});
	}
	render() {
		const locationStyle = {
			opacity: this.state.isVisible && "1"
		};
		const continentStyle = {
			display: this.state.isVisible && "block",
			opacity: this.state.isVisible && "1"
		};

		return (
			<div className='AMTContinent'>
				<object
					aria-label='continent'
					aria-required='true'
					type='image/svg+xml'
					data={continent}
					style={continentStyle}
				/>
				<div className='AMTContinent-locations' style={locationStyle}>
					{mapinfo.map((item, i) => {
						return (
							<Location
								location={item.location}
								paragraphs={item.paragraphs}
								key={i}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({
	scrollState: { africanMarketIsVisible, yPosition }
}) => ({
	africanMarketIsVisible,
	yPosition
});

export default connect(
	mapStateToProps,
	null
)(AMContinent);
