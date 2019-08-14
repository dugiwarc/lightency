import React, { Component } from "react";

// Components
import SignUpBoard from "../../components/SignUpBoard/SignUpBoard";
import BackgroundFiller from "../BackgroundFiller/BackgroundFiller";
import HomeText from "../HomeText/HomeText";

// Styles
import "./HomeWelcome.scss";

export default class HomeWelcome extends Component {
  render() {
    return (
      <div className="Home-welcome">
        <BackgroundFiller />
        <SignUpBoard />
        <HomeText />
        <div className="Home-img" />
      </div>
    );
  }
}
