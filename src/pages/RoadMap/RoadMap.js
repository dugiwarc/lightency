import React from "react";

import "./RoadMap.scss";

class RoadMap extends React.Component {
  state = { ready: false };
  componentDidMount() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.setState({ ready: true });
    }, 300);
  }
  render() {
    const mainStyles = {
      opacity: this.state.ready && "1",
      transform: this.state.ready && "translateX(0px)"
    };
    const timelineStyles = {
      height: this.state.ready && "85%"
    };
    const checkpointStyle = {
      opacity: this.state.ready && "1"
    };
    return (
      <section className="RoadMap">
        <div className="RM-timeline" style={timelineStyles} />
        <div className="RM-checkpoint one" style={checkpointStyle} />
        <div className="RM-checkpoint two" style={checkpointStyle} />
        <div className="RM-checkpoint three" style={checkpointStyle} />
        <div className="RM-checkpoint four" style={checkpointStyle} />
        <div className="RM-item">
          <div className="RM-title title-left" style={mainStyles}>
            Phase 1: Pilot Project
          </div>
          <div className="RM-text text-right" style={mainStyles}>
            During this first phase, our aim is to perfect our solution, prove
            that our concept is valuable & efficient, and create traction. But
            most and foremost, our aim is to finish building our network of
            partners.
          </div>
        </div>
        <div className="RM-item">
          <div className="RM-text text-left" style={mainStyles}>
            Our goal is to ensure a fast and wide expansion in Africa. The need
            to act is undeniable, and we want to accelerate the access of
            electricity, by the integration of our solution all over the
            continent.
          </div>
          <div className="RM-title title-right" style={mainStyles}>
            Phase 2: Energy efficiency & P2P trading
          </div>
        </div>
        <div className="RM-item">
          <div className="RM-title title-left" style={mainStyles}>
            Phase 3: Worldwide expansion
          </div>
          <div className="RM-text text-right" style={mainStyles}>
            We are convinced that decentralization is the future of the energy
            sector worldwide. Several countries started reforming their policies
            renouncing to the monopolistic systems. All other countries will
            follow, thus opening opportunities for the implementation of our
            solution worldwide.
          </div>
        </div>
        <div className="RM-item">
          <div className="RM-text text-left" style={mainStyles}>
            Our vision is to make energy as a currency. We believe in the
            digital revolution and that energy in the next decade will be the
            most valuable resource. Our plan is then to build a currency around
            energy and to contribute to the implementation of smart cities using
            smart energy solutions.
          </div>
          <div className="RM-title title-right" style={mainStyles}>
            Phase 4: Smart energy / mobility for smart cities
          </div>
        </div>
      </section>
    );
  }
}

export default RoadMap;
