import React from "react";
import { Link } from "react-router-dom";

import "./Links.scss";

export default class Links extends React.Component {
  state = {
    isClicked: false,
    isDropdownHovered: false,
    isChecking: false,
    positionX: 0,
    positionY: 0,
    isMenuItemHovered: false
  };
  render() {
    const dropdown_styles = {
      opacity: this.state.isClicked ? "1" : "0",
      transition: "opacity .5s ease-in-out"
    };

    // const arrow_styles = {
    //   opacity: this.state.isClicked ? "0" : "1",
    //   transition: "opacity .5s ease-in-out"
    // };

    const { handleChange, handleHover } = this.props;
    return (
      <div className="Links">
        <Link to="/">
          <div
            onMouseEnter={evt => {
              handleHover(true);
              this.setState({
                isMenuItemHovered: true
              });
              handleChange(
                evt.target.getBoundingClientRect().x,
                evt.target.getBoundingClientRect().y,
                evt.target.getBoundingClientRect().width
              );
            }}
            onMouseLeave={() => {
              this.setState({
                isMenuItemHovered: false
              });
              setTimeout(() => {
                !this.state.isMenuItemHovered && handleHover(false);
              }, 500);
            }}
          >
            Home
          </div>
        </Link>
        <Link
          to="#"
          onMouseEnter={evt => {
            this.setState({ isClicked: true, isChecking: true });
            setTimeout(() => {
              !this.state.isDropdownHovered &&
                !this.state.isChecking &&
                this.setState({ isClicked: false });
            }, 1000);
          }}
          onMouseLeave={() => {
            !this.state.isDropdownHovered &&
              !this.state.isChecking &&
              this.setState({ isClicked: false });
          }}
        >
          <div
            onMouseEnter={evt => {
              handleChange(
                evt.target.getBoundingClientRect().x,
                evt.target.getBoundingClientRect().y,
                0
              );
              this.setState({
                isClicked: true
              });
            }}
            onMouseLeave={evt => {
              setTimeout(() => {
                !this.state.isDropdownHovered &&
                  this.setState({ isClicked: false });
              }, 200);
            }}
          >
            About us
          </div>
        </Link>
        {/* <div className="arrow" style={arrow_styles}>
          <div className="square" />
        </div> */}
        <div
          className="dropdown"
          style={dropdown_styles}
          onMouseEnter={() => {
            this.setState({ isDropdownHovered: true });
          }}
          onMouseLeave={() => {
            this.setState({ isClicked: false, isDropdownHovered: false });
          }}
        >
          <Link
            to="/about-us/"
            onClick={() => {
              this.setState({ isClicked: false });
            }}
          >
            Who we are
          </Link>
          <Link
            to="/partners/"
            onClick={() => {
              this.setState({ isClicked: false });
            }}
          >
            Partners
          </Link>
          <Link
            to="/roadmap/"
            onClick={() => {
              this.setState({ isClicked: false });
            }}
          >
            Roadmap
          </Link>
        </div>
        <Link to="/our-solution/">
          <div
            onMouseEnter={evt => {
              handleHover(true);
              this.setState({
                isMenuItemHovered: true
              });
              handleChange(
                evt.target.getBoundingClientRect().x,
                evt.target.getBoundingClientRect().y,
                evt.target.getBoundingClientRect().width
              );
            }}
            onMouseLeave={() => {
              this.setState({
                isMenuItemHovered: false
              });
              setTimeout(() => {
                !this.state.isMenuItemHovered && handleHover(false);
              }, 500);
            }}
          >
            Our Solution
          </div>
        </Link>
        <Link to="/ressources/">
          <div
            onMouseEnter={evt => {
              handleHover(true);
              this.setState({
                isMenuItemHovered: true
              });

              handleChange(
                evt.target.getBoundingClientRect().x,
                evt.target.getBoundingClientRect().y,
                evt.target.getBoundingClientRect().width
              );
            }}
            onMouseLeave={() => {
              this.setState({
                isMenuItemHovered: false
              });
              setTimeout(() => {
                !this.state.isMenuItemHovered && handleHover(false);
              }, 500);
            }}
          >
            Ressources
          </div>
        </Link>
        <Link to="/blog/">
          <div
            onMouseEnter={evt => {
              handleHover(true);
              this.setState({
                isMenuItemHovered: true
              });
              handleChange(
                evt.target.getBoundingClientRect().x,
                evt.target.getBoundingClientRect().y,
                evt.target.getBoundingClientRect().width
              );
            }}
            onMouseLeave={() => {
              this.setState({
                isMenuItemHovered: false
              });
              setTimeout(() => {
                !this.state.isMenuItemHovered && handleHover(false);
              }, 500);
            }}
          >
            Blog
          </div>
        </Link>
        <Link to="/get-in-touch/">
          <div
            onMouseEnter={evt => {
              handleHover(true);
              this.setState({
                isMenuItemHovered: true
              });
              handleChange(
                evt.target.getBoundingClientRect().x,
                evt.target.getBoundingClientRect().y,
                evt.target.getBoundingClientRect().width
              );
            }}
            onMouseLeave={() => {
              this.setState({
                isMenuItemHovered: false
              });
              setTimeout(() => {
                !this.state.isMenuItemHovered && handleHover(false);
              }, 500);
            }}
          >
            Get in touch
          </div>
        </Link>
      </div>
    );
  }
}
