import React, { Fragment } from "react";

import "./Location.scss";

export default class Location extends React.Component {
  state = {
    isHoveredTunisia: false,
    isHoveredMali: false,
    isHoveredSenegal: false,
    isHoveredBurkinaFaso: false,
    isHoveredUganda: false,
    isHoveredKenya: false,
    isHoveredTanzania: false
  };
  render() {
    const info_tunisia = {
      opacity: this.state.isHoveredTunisia ? "1" : "0",
      transition: "opacity 0.5s ease-in-out",
      zIndex: this.state.isHoveredTunisia ? "100" : "-100"
    };
    const info_mali = {
      opacity: this.state.isHoveredMali ? "1" : "0",
      transition: "opacity 0.5s ease-in-out",
      zIndex: this.state.isHoveredMali ? "100" : "-100"
    };
    const info_senegal = {
      opacity: this.state.isHoveredSenegal ? "1" : "0",
      transition: "opacity 0.5s ease-in-out",
      zIndex: this.state.isHoveredSenegal ? "100" : "-100"
    };
    const info_burkinaFaso = {
      opacity: this.state.isHoveredBurkinaFaso ? "1" : "0",
      transition: "opacity 0.5s ease-in-out",
      zIndex: this.state.isHoveredBurkinaFaso ? "100" : "-100"
    };
    const info_uganda = {
      opacity: this.state.isHoveredUganda ? "1" : "0",
      transition: "opacity 0.5s ease-in-out",
      zIndex: this.state.isHoveredUganda ? "100" : "-100"
    };
    const info_kenya = {
      opacity: this.state.isHoveredKenya ? "1" : "0",
      transition: "opacity 0.5s ease-in-out",
      zIndex: this.state.isHoveredKenya ? "100" : "-100"
    };
    const info_tanzania = {
      opacity: this.state.isHoveredTanzania ? "1" : "0",
      transition: "opacity 0.5s ease-in-out",
      zIndex: this.state.isHoveredTanzania ? "100" : "-100"
    };
    const { location, paragraphs } = this.props;

    const styles =
      location === "tunisia"
        ? info_tunisia
        : location === "mali"
        ? info_mali
        : location === "senegal"
        ? info_senegal
        : location === "burkinaFaso"
        ? info_burkinaFaso
        : location === "uganda"
        ? info_uganda
        : location === "kenya"
        ? info_kenya
        : location === "tanzania"
        ? info_tanzania
        : null;
    return (
      <Fragment>
        <div
          className={`location location-${location}`}
          onMouseEnter={() => {
            this.setState({
              [`isHovered${location.charAt(0).toUpperCase() +
                location.slice(1)}`]: true
            });
          }}
          onMouseLeave={() => {
            this.setState({
              [`isHovered${location.charAt(0).toUpperCase() +
                location.slice(1)}`]: false
            });
          }}
        />
        <div className={`info info-${location}`} style={styles}>
          <h3>{location.charAt(0).toUpperCase() + location.slice(1)}</h3>
          {paragraphs.map((p, i) => {
            return <p key={i}>{p}</p>;
          })}
        </div>
      </Fragment>
    );
  }
}
