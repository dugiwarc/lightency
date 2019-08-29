import React from "react";
import Lottie from "lottie-react-web";

import "./Framework.scss";

const Framework = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("./data.json")
  };
  return (
    <section className="Framework">
      <div className="Framework-title">Smart City Framework</div>
      <div className="lottie">
        <div className="lottie-obj">
          <div className="patches">
            <div className="one">
              {/* <div className="title">Smart Water Management</div> */}
              {/* <div className="desc">
                Collect, share and analyze data from water equipment and water
                networks to find leaks, lower energy use and predict equipement
                failure
              </div> */}
            </div>
            <div className="child-1">
              Collect, share and analyze data from water equipment and water
              networks to find leaks, lower energy use and predict equipement
              failure
            </div>
            <div className="two"></div>
            <div className="child-2">
              Farming management using modern Information and Communication
              Technologies to increase the quantity and quality of products...
            </div>
            <div className="three"></div>
            <div className="child-3">
              Innovative building technology for the developement and
              construction ...
            </div>
            <div className="four"></div>
            <div className="child-4">
              More efficient, reliable and transparent processes .
            </div>
            <div className="five"></div>
            <div className="child-5">
              Create less congestion, better infrastructure, better access to
              public transport and cleaner air...
            </div>{" "}
            <div className="seven"></div>
            <div className="child-7">
              Tokenization of assets using the blockchain solutions
            </div>
            <div className="eight"></div>
            <div className="child-8">
              Using e-governance to strengthen democracy, citizen participation
              and public welfare.
            </div>
            <div className="nine"></div>
            <div className="child-9">
              Applying data mining techniques to provide proper data for
              building’s optimal operation, enabling P2P trading of renewabe
              energy...
            </div>
          </div>
          <div className="object">
            <Lottie options={defaultOptions} overflow={"none"} speed={1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;
