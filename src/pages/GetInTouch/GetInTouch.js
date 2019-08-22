import React from "react";

import "./GetInTouch.scss";

class GetInTouch extends React.Component {
	state = {
		title: "Let's talk",
		isReady: false
	};
	componentDidMount() {
		window.scrollTo(0, 0);
		setTimeout(() => {
			this.setState({ isReady: true });
		}, 100);
	}
	render() {
		const letterStyles = {
			transform: this.state.isReady && "translateY(0px)"
		};
		return (
			<div className='GetInTouch'>
				<form>
					<div className='GITTitle'>
						{this.state.title.split("").map((item, index) => {
							return (
								<div key={index} className='letter' style={letterStyles}>
									{`${item} ${index === 4 ? "\u00A0" : ""}`}
								</div>
							);
						})}
					</div>
					<div>
						<label htmlFor='email' style={letterStyles}>
							Email*
						</label>
						<input id='email' type='text' required />
					</div>
					<div>
						<label htmlFor='name' style={letterStyles}>
							Name*
						</label>
						<input id='name' type='text' required />
					</div>
					<div>
						<label htmlFor='message' style={letterStyles}>
							What can we help you with?*
						</label>
						<textarea id='message' name='message' />
					</div>
					<button type='submit' style={letterStyles}>
						Send
					</button>
				</form>
			</div>
		);
	}
}

export default GetInTouch;
