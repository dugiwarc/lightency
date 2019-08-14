import React from "react";

import "./GetInTouch.scss";

class GetInTouch extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="GetInTouch">
        <form>
          <h1>Let's talk</h1>
          <div>
            <label htmlFor="email">Email*</label>
            <input id="email" type="text" required />
          </div>
          <div>
            <label htmlFor="name">Name*</label>
            <input id="name" type="text" required />
          </div>
          <div>
            <label htmlFor="message">What can we help you with?*</label>
            <textarea id="message" name="message" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default GetInTouch;
