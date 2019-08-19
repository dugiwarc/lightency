import React from "react";
import { connect } from "react-redux";

// Actions
import { toggleHamburgerMenu } from "../../redux/hamburger-menu/hamburger-menu.actions";
import { toggleBackground } from "../../redux/background/background.actions";

class HamburgerIcon extends React.Component {
  render() {
    const {
      toggleBackground,
      toggleHamburgerMenu,
      hamburgerMenuIsHidden
    } = this.props;

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
  { toggleBackground, toggleHamburgerMenu }
)(HamburgerIcon);
