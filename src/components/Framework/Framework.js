import React from "react";

import framework from "../../graphics/framework.png";

import "./Framework.scss";

const Framework = () => {
  return (
    <section className="Framework">
      <div className="Framework-title">Smart City Framework</div>
      <div className="Framework-bg">
        <img src={framework} alt="framework" />
      </div>
    </section>
  );
};

export default Framework;
