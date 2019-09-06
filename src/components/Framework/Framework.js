import React, { Fragment } from "react";
import Lottie from "lottie-react-web";

import "./Framework.scss";

import data from "../../data/framework.data";

const Framework = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: require("./data-new.json")
	};
	return (
		<section className='Framework'>
			<div className='Framework-title'>Smart City Framework</div>
			<div className='lottie'>
				<div className='lottie-obj'>
					<div className='patches'>
						{data.map(item => {
							return (
								<Fragment key={item.id}>
									<div className={`${item.className}`}></div>
									<div className={`child-${item.id}`}>{item.description}</div>
								</Fragment>
							);
						})}
					</div>
					<div className='object'>
						<Lottie options={defaultOptions} overflow={"none"} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Framework;
