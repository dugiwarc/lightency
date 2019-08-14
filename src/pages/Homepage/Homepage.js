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
import { updateYPosition } from "../../redux/scroll/scroll.actions";

class Homepage extends React.Component {
  state = {
    solutionSectionIsReached: false,
    whatWeDoSectionIsReached: false
  };
  componentDidMount() {
    const { updateYPosition } = this.props;
    window.scrollTo(0, 0);
    window.addEventListener("scroll", event => {
      console.log(window.scrollY);
      updateYPosition(window.scrollY);
      window.scrollY > 50 &&
        !this.state.solutionSectionIsReached &&
        this.setState({ solutionSectionIsReached: true });
      window.scrollY > 750 &&
        !this.state.whatWeDoSectionIsReached &&
        this.setState({
          whatWeDoSectionIsReached: true
        });
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", () => console.log("event removed"));
  }
  render() {
    const { solutionSectionIsReached, whatWeDoSectionIsReached } = this.state;
    return (
      <div className="Homepage">
        <HomeWelcome />
        <SolutionSection isVisible={solutionSectionIsReached} />
        <WhatWeDoSection isVisible={whatWeDoSectionIsReached} />
        <SliderSection />
        <AfricanMarket />
        <EnergyTrading />
        <Framework />
        <Contact />
      </div>
    );
  }
}

export default connect(
  null,
  { updateYPosition }
)(Homepage);
