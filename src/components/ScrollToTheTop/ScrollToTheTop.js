import React, { Component } from "react";
import { connect } from "react-redux";
import scrollElement from "scroll-to-element";

// Graphics
import arrow from "../../graphics/arrow.png";

// Styles
import "./ScrollToTheTop.scss";

class ScrollToTheTop extends Component {
	render() {
		const { solutionSectionIsVisible, yPosition } = this.props;
		console.log(yPosition);
		const imgStyles = {
			opacity: yPosition === 0 ? "0" : 1,
			transform: solutionSectionIsVisible && "translateY(0px) rotate(180deg)"
		};
		return (
			<div
				className='ScrollToTheTop'
				onClick={() => {
					scrollElement(".App");
				}}
			>
				<div className='hello' />
				<img src={arrow} alt='arrow' style={imgStyles} />
			</div>
		);
	}
}

const mapStateToProps = ({
	scrollState: { solutionSectionIsVisible, yPosition }
}) => ({
	solutionSectionIsVisible,
	yPosition
});

export default connect(
	mapStateToProps,
	null
)(ScrollToTheTop);
