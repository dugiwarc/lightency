import React from "react";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import OurSolution from "./pages/OurSolution/OurSolution";
import Ressources from "./pages/Ressources/Ressources";
import Blog from "./pages/Blog/Blog";
import GetInTouch from "./pages/GetInTouch/GetInTouch";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
import Partners from "./pages/Partners/Partners";
import RoadMap from "./pages/RoadMap/RoadMap";
import Profile from "./pages/Profile/Profile";
import { users } from "./data/users.data";
import articles from "./data/articles.data";
import ArticlePage from "./pages/Article/ArticlePage";
import Footer from "./components/Footer/Footer";
import BackgroundFiller from "./components/BackgroundFiller/BackgroundFiller";
import Spinner from "./components/Spinner/Spinner";
import ScrollToTheTop from "./components/ScrollToTheTop/ScrollToTheTop";

function AppRouter() {
	return (
		<Router>
			<div className='App'>
				<BackgroundFiller />
				<Nav />
				<Spinner />
				<ScrollToTheTop />
				<Route path='/' exact component={Homepage} />
				<Route path='/our-solution/' component={OurSolution} />
				<Route path='/ressources/' component={Ressources} />
				<Route exact path='/blog/' component={Blog} />
				<Route path='/get-in-touch/' component={GetInTouch} />
				<Route exact path='/about-us/' component={WhoWeAre} />
				<Route path='/partners/' component={Partners} />
				<Route path='/roadmap/' component={RoadMap} />
				{users.map(user => {
					return (
						<Route
							exact
							key={user.name}
							path={`/about-us/${user.link}/`}
							render={props => (
								<Profile
									{...props}
									description={user.description}
									position={user.position}
									image={user.image}
									social={user.social}
									name={user.name}
								/>
							)}
						/>
					);
				})}
				{articles.map(article => {
					return (
						<Route
							key={article.id}
							exact
							path={`/blog/${article.title.replace(/[^\w\s]/gi, "")}/`}
							render={props => (
								<ArticlePage
									{...props}
									title={article.title}
									text={article.text}
									image={article.image}
									authorImage={article.authorImage}
									author={article.author}
									authorShortInfo={article.authorShortInfo}
								/>
							)}
						/>
					);
				})}
			</div>
			<Footer />
		</Router>
	);
}

export default AppRouter;
