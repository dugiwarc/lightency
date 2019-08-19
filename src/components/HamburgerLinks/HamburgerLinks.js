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

// Components
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";

class HamburgerLinks extends Component {
  render() {
    const {
      hamburgerMenuIsHidden,
      toggleBackground,
      hideHamburgerMenu
    } = this.props;

    const menuStyles = {
      visibility: !hamburgerMenuIsHidden ? "visible" : "hidden"
    };

    return (
      <div className="Hamburger">
        <div className="Hamburger-links">
          <HamburgerIcon />
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
