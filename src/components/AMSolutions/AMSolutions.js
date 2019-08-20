import React from "react";
import { connect } from "react-redux";

// Styles
import "./AMSolutions.scss";

// Data
import data from "../../data/amsolutions.data";

class AMSolutions extends React.Component {
  render() {
    const { africanMarketIsVisible } = this.props;
    const solutionsStyle = {
      transform: africanMarketIsVisible && "translateX(0px)",
      opacity: africanMarketIsVisible && "1"
    };
    return (
      <div className="AMSolutions">
        {data.map((item, i) => {
          return (
            <div className="AMSolutions-item" style={solutionsStyle} key={i}>
              <div className="AMSolutions-item-title">{item.title}</div>
              <div className="AMSolutions-item-desc">{item.desc}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ scrollState: { africanMarketIsVisible } }) => ({
  africanMarketIsVisible
});

export default connect(
  mapStateToProps,
  null
)(AMSolutions);
