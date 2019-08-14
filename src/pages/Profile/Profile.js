import React, { Component } from "react";
import linkedin from "../../graphics/linkedin.png";
import facebook from "../../graphics/facebook.png";

import "./Profile.scss";

export default class Profile extends Component {
  componentDidMount() {
    console.log(this.props.isAuthed);
  }
  render() {
    const { image, social, description, name, position } = this.props;
    return (
      <div className="Profile">
        <div className="Profile-box">
          <div className="Profile-left">
            <div className="Profile-image">
              <img src={image} alt="profile" />
            </div>
          </div>
          <div className="Profile-right">
            <div className="Profile-info">
              <div className="Profile-info-name">{name}</div>
              <div className="Profile-info-position">{position}</div>

              <div className="Profile-info-social">
                {social.linkedin && (
                  <a href={social.linkedin}>
                    <img src={linkedin} alt="linkedin" height="30px" />
                  </a>
                )}
                {social.facebook && (
                  <a href={social.facebook}>
                    <img src={facebook} alt="facebook" height="30px" />
                  </a>
                )}
              </div>
            </div>
            <div className="Profile-description">{description}</div>
          </div>
        </div>
      </div>
    );
  }
}
