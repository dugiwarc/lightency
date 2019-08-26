import React from "react";
import { connect } from "react-redux";

// Components
import WWDTextGroup from "../WWDTextGroup/WWDTextGroup";

// Styles
import "./WhatWeDoSection.scss";

// Data
import data from "../../data/whatwedo.data";

// Utils
import consoleText from "../../utils/terminalEffect";

class WhatWeDoSection extends React.Component {
	state = { isVisible: false, offsetTop: 0, isDone: false };
	handleResize = () => {
		this.setState({
			offsetTop: document.querySelector("#WWD").offsetTop
		});
	};
	componentDidMount() {
		const value =
			document.querySelector("#WWD").offsetTop -
			document.querySelector("#WWD").offsetHeight * 1.9;
		this.setState({
			offsetTop: value
		});
		window.addEventListener("resize", this.handleResize);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
		this.setState({ isVisible: false });
	}
	shouldComponentUpdate() {
		return !this.state.isDone;
	}
	componentDidUpdate() {
		if (this.state.isVisible) {
			consoleText(["What We Do"], "text", ["white"]);
			this.setState({ isDone: true });
		}
		!this.state.isVisible &&
			this.props.yPosition > this.state.offsetTop &&
			this.setState({
				isVisible: true
			});
	}

	render() {
		const { whatWeDoIsVisible } = this.props;
		const styleTitle = {
			display: whatWeDoIsVisible && "block"
		};
		return (
			<div className='WhatWeDo' id='WWD'>
				<div className='WWD-filter' />
				<div className='WWD-text'>
					<div className='WWD-text-title' style={styleTitle}>
						<div className='console-container'>
							<span id='text' />
							<div className='console-underscore' id='console'>
								&#95;
							</div>
						</div>
					</div>
					{data.map((item, index) => (
						<WWDTextGroup
							modifier={item.modifier}
							text={item.text}
							key={index}
						/>
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({
	scrollState: { whatWeDoIsVisible, yPosition }
}) => ({
	whatWeDoIsVisible,
	yPosition
});

export default connect(
	mapStateToProps,
	null
)(WhatWeDoSection);
