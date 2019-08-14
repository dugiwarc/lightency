import React, { Component } from "react";
import image_1 from "../../graphics/environment.jpg";
import image_2 from "../../graphics/job.jpg";
import image_3 from "../../graphics/school.jpg";

import "./SliderSection.scss";

// import consoleText from "../../utils/terminalEffect"


export default class SliderSection extends Component {
  state = {
    value: 20,
    circle_1IsClicked: true,
    circle_2IsClicked: false,
    circle_3IsClicked: false,
    currentImage: 1,
    clearInterval: false,
    time: 8000,
    timer: null
  };
  componentDidMount() {
    const timer = setInterval(() => {
      this.setState({
        currentImage:
          this.state.currentImage === 3 ? 1 : this.state.currentImage + 1
      });
    }, this.state.time);
    this.setState({ timer });
    this.state.clearInterval && clearInterval(timer);

    // consoleText(['What We Do'], 'text',['white']);
    
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  render() {
    const slide_1 = {
      opacity: this.state.currentImage === 1 ? "1" : "0",
      transition: "opacity 1s ease-in-out"
    };
    const slide_2 = {
      opacity: this.state.currentImage === 2 ? "1" : "0",
      transition: "opacity 1s ease-in-out"
    };
    const slide_3 = {
      opacity: this.state.currentImage === 3 ? "1" : "0",
      transition: "opacity 1s ease-in-out"
    };

    const { currentImage } = this.state;

    const circleStyle_1 = {
      border: "1px solid black",
      backgroundColor: currentImage === 1 ? "black" : "white",
      transition: "all 1s ease-in-out"
    };

    const circleStyle_2 = {
      border: "1px solid black",
      backgroundColor: currentImage === 2 ? "black" : "white",
      transition: "all 1s ease-in-out"
    };

    const circleStyle_3 = {
      border: "1px solid black",
      backgroundColor: currentImage === 3 ? "black" : "white",
      transition: "all 1s ease-in-out"
    };

    return (
      <section className="SliderSection">
        <div className="Slider-title">Why we do it</div>
        <div className="Slider-slider">
          <div className={`Slider-slide`} style={slide_1}>
            <img src={image_1} alt="slide" />
            <div className="Slider-text">
              <div className="Slider-text-title">Environmental Impact</div>
              <div className="Slider-text-subtitle">
                The adoption of renewables and the increase of energy efficiency
                through better management of available resources have a
                tremendous environmental impact.
              </div>
            </div>
          </div>

          <div className={`Slider-slide`} style={slide_2}>
            <img src={image_2} alt="slide" />
            <div className="Slider-text">
              <div className="Slider-text-title">Economic Impact</div>
              <div className="Slider-text-subtitle">
                Energy access helps to expand people’s opportunities by allowing
                them to join the modern economy.
              </div>
            </div>
          </div>

          <div className={`Slider-slide`} style={slide_3}>
            <img src={image_3} alt="slide" />
            <div className="Slider-text">
              <div className="Slider-text-title">Social Impact</div>
              <div className="Slider-text-subtitle">
                Affordable access to clean energy, considerably impacts people’s
                quality of life by ensuring better health conditions, and
                allowing for better education conditions.
              </div>
            </div>
          </div>
        </div>
        <div className="Slider-navigator">
          <div
            className="circle"
            onClick={() => {
              this.setState({
                clearInterval: true,
                circle_1IsClicked: true,
                circle_2IsClicked: false,
                circle_3IsClicked: false,

                currentImage: 1
              });
            }}
            style={circleStyle_1}
          />
          <div
            className="circle"
            onClick={() => {
              this.setState({
                clearInterval: true,
                circle_1IsClicked: false,
                circle_2IsClicked: true,
                circle_3IsClicked: false,

                currentImage: 2
              });
            }}
            style={circleStyle_2}
          />
          <div
            className="circle"
            onClick={() => {
              this.setState({
                clearInterval: true,
                circle_1IsClicked: false,
                circle_2IsClicked: false,
                circle_3IsClicked: true,

                currentImage: 3
              });
            }}
            style={circleStyle_3}
          />
        </div>
      </section>
    );
  }
}
