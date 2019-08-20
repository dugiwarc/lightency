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
  render() {
    const { africanMarketIsVisible } = this.props;
    const locationStyle = {
      opacity: africanMarketIsVisible && "1"
    };

    return (
      <div className="AMTContinent">
        <object
          aria-label="continent"
          aria-required="true"
          type="image/svg+xml"
          data={continent}
          style={locationStyle}
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
