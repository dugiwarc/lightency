import React from "react";
import facebook from "../../graphics/facebook.png";
import twitter from "../../graphics/twitter.png";
import linkedin from "../../graphics/linkedin.png";
import { Link, withRouter } from "react-router-dom";

import "./Article.scss";

const Article = ({ title, author, image, preview, id, history }) => {
	console.log(title.replace(/[^\w\s]/gi, ""));
	return (
		<div className='Article'>
			<div className='Article-item'>
				<div className='Article-title'>{title}</div>
				<div className='Article-details'>
					<p>
						31 Jan 1967 by <span className='text-red'>{author}</span>
					</p>
					<div className='social'>
						<img src={facebook} alt='facebook' />
						<img src={linkedin} alt='linkedin' />
						<img src={twitter} alt='twitter' />
					</div>
				</div>
				<div className='Article-img'>
					<img src={image} alt='article-img' />
				</div>
				<div className='Article-preview'>{preview}</div>
				<Link to={title.replace(/[^\w\s]/gi, "")}>
					<div className='Article-button'>Read More</div>
				</Link>
			</div>
		</div>
	);
};

export default withRouter(Article);
