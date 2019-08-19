import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Styles
import "./HamburgerLinks.scss";

// Actions
import { toggleBackground } from "../../redux/background/background.actions";
import {
  toggleHamburgerMenu,
  hideHamburgerMenu
} from "../../redux/hamburger-menu/hamburger-menu.actions";

// Data
import hamburgerLinks from "../../data/hamburger.data";

class HamburgerLinks extends Component {
  render() {
    const {
      hamburgerMenuIsHidden,
      toggleBackground,
      toggleHamburgerMenu,
      hideHamburgerMenu
    } = this.props;
    const menuStyles = {
      visibility: !hamburgerMenuIsHidden ? "visible" : "hidden",
      opacity: !hamburgerMenuIsHidden ? "1" : "0",
      transition: "opacity .4s ease-in-out"
    };
    const bar_1 = {
      background: !hamburgerMenuIsHidden ? "gold" : "white",
      transform: !hamburgerMenuIsHidden
        ? "translateY(15px) rotate(45deg)"
        : "rotate(0deg)",
      transition: "all .3s ease-in-out"
    };
    const bar_2 = {
      background: !hamburgerMenuIsHidden ? "transparent" : "white",
      transition: "all .3s ease-in-out"
    };

    const bar_3 = {
      background: !hamburgerMenuIsHidden ? "gold" : "white",
      transform: !hamburgerMenuIsHidden
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
              toggleHamburgerMenu();
              toggleBackground();
            }}
          >
            <div className="Hamburger-bar" style={bar_1} />
            <div className="Hamburger-bar" style={bar_2} />
            <div className="Hamburger-bar" style={bar_3} />
          </div>
          <div className="Hamburger-menu" style={menuStyles}>
            {hamburgerLinks.map(link => {
              return (
                <div key={link.id}>
                  <Link
                    to={link.link}
                    onClick={() => {
                      hideHamburgerMenu();
                      toggleBackground();
                    }}
                  >
                    {link.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  hamburgerMenuState: { hamburgerMenuIsHidden }
}) => ({
  hamburgerMenuIsHidden
});

export default connect(
  mapStateToProps,
  { toggleBackground, toggleHamburgerMenu, hideHamburgerMenu }
)(HamburgerLinks);
