import React, { Component } from "react";
import Links from "../Links/Links";
import Logo from "../Logo/Logo";
import HamburgerLinks from "../HamburgerLinks/HamburgerLinks";
import NeonEffect from "../../components/NeonEffect/NeonEffect";

import "./Nav.scss";

export default class Nav extends Component {
  state = {
    x: 0,
    y: 0,
    width: 0,
    hamburgerIconIsClicked: false,
    isHovered: false
  };
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.handleChange(0, 0, 0);
    });
  }
  handleChange = (xcoord, ycoord, widthLength) => {
    this.setState({ x: xcoord, y: ycoord, width: widthLength });
  };
  handleHamburger = isHamburgerIconClicked => {
    this.setState({
      hamburgerIconIsClicked: isHamburgerIconClicked ? false : true
    });
  };
  handleHover = isHoveredState => {
    this.setState({
      isHovered: isHoveredState
    });
  };
  render() {
    const { width, isHovered, x } = this.state;

    const dark_filter = {
      position: "absolute",
      background: "black",
      filter: "opacity(0.6)",
      width: "100vw",
      height: "400vh",
      zIndex: "200",
      display: this.state.hamburgerIconIsClicked ? "block" : "none"
    };
    return (
      <div className="Nav">
        <NeonEffect width={width} isHovered={isHovered} x={x} />
        <div className="dark-filter" style={dark_filter} />
        <Logo />
        <Links
          handleChange={this.handleChange}
          handleHover={this.handleHover}
        />
        <HamburgerLinks handleHamburger={this.handleHamburger} />
      </div>
    );
  }
}
