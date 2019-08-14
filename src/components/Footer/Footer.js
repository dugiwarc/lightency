import React from "react";
import facebook from "../../graphics/facebook.png";
import twitter from "../../graphics/twitter.png";
import medium from "../../graphics/medium.png";
import reddit from "../../graphics/reddit.png";
import linkedin from "../../graphics/linkedin.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-img">
        <a href="https://www.facebook.com/ElectrifyNetwork/">
          <img src={facebook} alt="social" />
        </a>
        <a href="https://www.linkedin.com/company/electrify-network/">
          <img src={linkedin} alt="social" />
        </a>
        <a href="https://twitter.com/ElectrifyNetwrk">
          <img src={twitter} alt="social" />
        </a>
        <a href="https://medium.com/@ElectrifyNetw">
          <img src={medium} alt="social" />
        </a>
        <a href="https://www.reddit.com/user/Electrifynetwork/">
          <img src={reddit} alt="social" />
        </a>
      </div>
      <div className="Footer-text">
        <div>Privacy Policy</div>
        <div>|</div>
        <div>Sitemap</div>
        <div>|</div>
        <div>Lightency.io © 2019 All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
