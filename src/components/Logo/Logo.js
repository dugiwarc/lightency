import React from "react";
import { Link } from "react-router-dom";

import logo from "../../graphics/logo.png";

import "./Logo.scss";

const Logo = () => {
  return (
    <div className="Logo">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/">
        <div className="Logo-text">Lightency</div>
      </Link>
    </div>
  );
};

export default Logo;
