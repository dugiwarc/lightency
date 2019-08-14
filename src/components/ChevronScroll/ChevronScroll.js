import React from "react";

import "./ChevronScroll.scss";

class ChevronScroll extends React.Component {
  render() {
    const { isVisible } = this.props;
    const componentStyle = {
      opacity: isVisible ? "0" : "1",
      display: isVisible ? "none" : "block",
      transition: "all 0.2s ease-out"
    };
    return (
      <div className="ChevronScroll">
        <div
          className="container"
          style={componentStyle}
          onClick={() => window.scrollTo(0, 600)}
        >
          <div className="chevron" />
          <div className="chevron" />
          <div className="chevron" />
          <span className="text">Scroll down</span>
        </div>
      </div>
    );
  }
}

export default ChevronScroll;
