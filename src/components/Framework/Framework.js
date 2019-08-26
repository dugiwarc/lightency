import React from "react";
import Lottie from "lottie-react-web";

import "./Framework.scss";

const Framework = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: require("./data.json")
	};
	return (
		<section className='Framework'>
			<div className='Framework-title'>Smart City Framework</div>
			<Lottie options={defaultOptions} overflow={"none"} speed={1} />
		</section>
	);
};

export default Framework;
