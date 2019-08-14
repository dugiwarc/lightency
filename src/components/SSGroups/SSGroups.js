import React from "react";

import SSGroup from "../SSGroup/SSGroup";

import "./SSGroups.scss";

import ssgroupdata from "../../data/ssgroup.data";

const SSGroups = () => {
  return (
    <div className="SS-groups">
      {ssgroupdata.map((item, i) => {
        return (
          <SSGroup
            key={i}
            concernTitle={item.title}
            concernSTitle={item.subtitle}
            solutionSTitle={item.solution}
          />
        );
      })}
    </div>
  );
};

export default SSGroups;
