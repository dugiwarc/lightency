import React, { Component } from "react";
import { connect } from "react-redux";

// Graphics
import continent from "../../graphics/africa_opt_animated.svg";

// Data
import mapinfo from "../../data/mapinfo.data";

// Components
import Location from "../Location/Location";

// Styles
import "./AMContinent.scss";

class AMContinent extends Component {
  state = { isVisible: false };
  componentDidUpdate() {
    this.props.africanMarketIsVisible &&
      setTimeout(() => {
        this.setState({ isVisible: true });
      }, 1000);
  }
  render() {
    const locationStyle = {
      opacity: this.state.isVisible && "1"
    };
    const continentStyle = {
      display: this.state.isVisible && "block",
      opacity: this.state.isVisible && "1"
    };

    return (
      <div className="AMTContinent">
        <object
          aria-label="continent"
          aria-required="true"
          type="image/svg+xml"
          data={continent}
          style={continentStyle}
        />
        <div className="AMTContinent-locations" style={locationStyle}>
          {mapinfo.map((item, i) => {
            return (
              <Location
                location={item.location}
                paragraphs={item.paragraphs}
                key={i}
              />
            );
          })}
        </div>
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
)(AMContinent);
