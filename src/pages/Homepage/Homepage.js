import React from "react";
import { connect } from "react-redux";

// Components
import HomeWelcome from "../../components/HomeWelcome/HomeWelcome";
import SolutionSection from "../../components/SolutionSection/SolutionSection";
import WhatWeDoSection from "../../components/WhatWeDoSection/WhatWeDoSection";
import SliderSection from "../../components/SliderSection/SliderSection";
import AfricanMarket from "../../components/AfricanMarket/AfricanMarket";
import EnergyTrading from "../../components/EnergyTrading/EnergyTrading";
import Framework from "../../components/Framework/Framework";
import Contact from "../../components/Contact/Contact";

// Styles
import "./Homepage.scss";

// Actions
import {
  updateYPosition,
  makeSSVisible,
  makeWWDVisible
} from "../../redux/scroll/scroll.actions";

class Homepage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const {
      updateYPosition,
      makeSSVisible,
      makeWWDVisible,
      solutionSectionIsVisible,
      whatWeDoSectionIsVisible
    } = this.props;

    window.addEventListener("scroll", () => {
      updateYPosition(window.scrollY);
      !solutionSectionIsVisible && window.scrollY > 50 && makeSSVisible();
      !whatWeDoSectionIsVisible && window.scrollY > 750 && makeWWDVisible();
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", () => console.log("event removed"));
  }
  render() {
    return (
      <div className="Homepage">
        <HomeWelcome />
        <SolutionSection />
        <WhatWeDoSection />
        <SliderSection />
        <AfricanMarket />
        <EnergyTrading />
        <Framework />
        <Contact />
      </div>
    );
  }
}

const mapStateToProps = ({
  scrollState: { solutionSectionIsVisible, WhatWeDoSectionIsVisible }
}) => ({
  solutionSectionIsVisible,
  WhatWeDoSectionIsVisible
});

export default connect(
  mapStateToProps,
  { updateYPosition, makeSSVisible, makeWWDVisible }
)(Homepage);
