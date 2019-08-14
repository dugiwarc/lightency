import React from "react";

import "./NeonEffect.scss";

class NeonEffect extends React.Component {
  render() {
    const neon_circle = {
      transform: `translate(${this.props.x}px,0px)`,
      width: `${this.props.width}px`,
      opacity: this.props.isHovered ? "1" : "0"
    };

    return <div className="neon-circle" style={neon_circle} />;
  }
}

export default NeonEffect;
