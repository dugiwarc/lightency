import React from "react";
import Article from "../../components/Article/Article";
import articles from "../../data/articles.data.js";

import "./Blog.scss";

class Blog extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="Blog">
        <div className="Blog-header">
          <div className="Blog-header-title">Latest articles</div>
        </div>
        {articles.map((article, index) => {
          return (
            <Article
              title={article.title}
              author={article.author}
              preview={article.preview}
              image={article.image}
              key={index}
            />
          );
        })}
      </section>
    );
  }
}

export default Blog;
