import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./WWAItem.scss";

export default class WWAItem extends Component {
  render() {
    const { link, title, subtitle, image } = this.props;
    return (
      <div className="WWA-item">
        <img src={image} alt={`${link}`} />
        <div className="WWA-item-desc">
          <div className="WWA-item-desc-title">{title}</div>
          <div className="WWA-item-desc-subtitle">{subtitle}</div>
          <Link to={`${link}`} className="WWA-item-bio">
            View bio
          </Link>
        </div>
      </div>
    );
  }
}
