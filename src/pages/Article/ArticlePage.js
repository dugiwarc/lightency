import React, { Component } from "react";
import facebook from "../../graphics/facebook.png";
import linkedin from "../../graphics/linkedin.png";
import twitter from "../../graphics/twitter.png";

import "./ArticlePage.scss";

export default class ArticlePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const {
      title,
      text,
      image,
      authorImage,
      author,
      authorShortInfo
    } = this.props;
    return (
      <div className="ArticlePage">
        <div className="ArticlePageWrapper">
          <section className="Article-title">{title}</section>
          <section className="Article-info">
            Posted on 8/08/2019 by {author}{" "}
            <div className="social">
              <img src={facebook} alt="facebook" />
              <img src={linkedin} alt="linkedin" />
              <img src={twitter} alt="twitter" />
            </div>
          </section>
          <section className="Article-image">
            <img src={image} alt="article" />
          </section>
          <section className="Article-text">{text}</section>
          <hr />
          <section className="Article-footer">
            <div className="Article-author-img">
              <img src={authorImage} alt="author" />
            </div>
            <div>
              <div className="Article-wb">Written by:</div>
              <div className="Article-author">{author}</div>
              <div className="Article-author-info">{authorShortInfo}</div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
