import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./HamburgerLinks.scss";

export default class HamburgerLinks extends Component {
  state = { isClicked: false, isMenuActive: false };
  render() {
    const menuStyles = {
      visibility: this.state.isClicked ? "visible" : "hidden",
      opacity: this.state.isClicked ? "1" : "0",
      transition: "opacity .4s ease-in-out"
    };
    const bar_1 = {
      background: this.state.isClicked ? "gold" : "white",
      transform: this.state.isClicked
        ? "translateY(15px) rotate(45deg)"
        : "rotate(0deg)",
      transition: "all .3s ease-in-out"
    };
    const bar_2 = {
      background: this.state.isClicked ? "transparent" : "white",
      transition: "all .3s ease-in-out"
    };

    const bar_3 = {
      background: this.state.isClicked ? "gold" : "white",
      transform: this.state.isClicked
        ? "translateY(-15px) rotate(135deg)"
        : "rotate(0deg)",
      transition: "all .3s ease-in-out"
    };

    return (
      <div className="Hamburger">
        <div className="Hamburger-links">
          <div
            className="Hamburger-icon"
            onClick={() => {
              this.setState(
                {
                  isClicked: this.state.isMenuActive ? false : true,
                  isMenuActive: this.state.isMenuActive ? false : true
                },
                this.props.handleHamburger(this.state.isMenuActive)
              );
            }}
          >
            <div className="Hamburger-bar" style={bar_1} />
            <div className="Hamburger-bar" style={bar_2} />
            <div className="Hamburger-bar" style={bar_3} />
          </div>
          <div className="Hamburger-menu" style={menuStyles}>
            <div>
              <Link
                to="/"
                onClick={() => {
                  this.props.handleHamburger(true);
                  this.setState({
                    isClicked: false
                  });
                }}
              >
                HOME
              </Link>
            </div>
            <div>
              <Link
                to="/partners/"
                onClick={() => {
                  this.props.handleHamburger(true);
                  this.setState({
                    isClicked: false
                  });
                }}
              >
                PARTNERS
              </Link>
            </div>
            <div>
              <Link
                to="/about-us/"
                onClick={() => {
                  this.props.handleHamburger(true);
                  this.setState({
                    isClicked: false
                  });
                }}
              >
                WHO WE ARE
              </Link>
            </div>
            <div>
              <Link
                to="/roadmap/"
                onClick={() => {
                  this.props.handleHamburger(true);
                  this.setState({
                    isClicked: false
                  });
                }}
              >
                ROADMAP
              </Link>
            </div>
            <div>
              <Link
                to="/our-solution/"
                onClick={() => {
                  this.props.handleHamburger(true);
                  this.setState({
                    isClicked: false
                  });
                }}
              >
                OUR SOLUTION
              </Link>
            </div>
            <div>
              <Link
                to="/ressources/"
                onClick={() => {
                  this.props.handleHamburger(true);
                  this.setState({
                    isClicked: false
                  });
                }}
              >
                RESSOURCES
              </Link>
            </div>
            <div>
              <Link
                to="/blog/"
                onClick={() => {
                  this.props.handleHamburger(true);
                  this.setState({
                    isClicked: false
                  });
                }}
              >
                BLOG
              </Link>
            </div>
            <div>
              <Link
                to="/get-in-touch/"
                onClick={() => {
                  this.props.handleHamburger(true);
                  this.setState({
                    isClicked: false
                  });
                }}
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
