import React from "react";
import { connect } from "react-redux";

// Components
import SSGroup from "../SSGroup/SSGroup";

// Styles
import "./SSGroups.scss";

// Data
import ssgroupdata from "../../data/ssgroup.data";

class SSGroups extends React.Component {
  render() {
    const { solutionSectionIsVisible } = this.props;
    const mainStyles = {
      transform: solutionSectionIsVisible && "translateY(0px)"
    };
    return (
      <div className="SS-groups" style={mainStyles}>
        {ssgroupdata.map((item, i) => {
          return (
            <SSGroup
              key={i}
              concernTitle={item.title}
              concernSTitle={item.subtitle}
              solutionSTitle={item.solution}
              image={item.icon}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ scrollState: { solutionSectionIsVisible } }) => ({
  solutionSectionIsVisible
});

export default connect(
  mapStateToProps,
  null
)(SSGroups);
