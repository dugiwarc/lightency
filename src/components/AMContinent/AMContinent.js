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
  state = { tickets: 1 };
  componentDidUpdate() {
    this.state.tickets !== 0 &&
      this.props.yPosition > 2300 &&
      this.setState({ tickets: 0 });
  }
  render() {
    const { yPosition } = this.props;
    const locationStyle = {
      opacity: yPosition > 2300 ? "1" : this.state.tickets === 0 ? "1" : "0"
    };
    const continentStyle = {
      display:
        yPosition > 2300 ? "block" : this.state.tickets === 0 ? "block" : "none"
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

const mapStateToProps = ({ scrollState: { yPosition } }) => ({
  yPosition
});

export default connect(
  mapStateToProps,
  null
)(AMContinent);
