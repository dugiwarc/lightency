import React from "react";

import "./Contact.scss";

const Contact = () => {
  return (
    <section className="Contact">
      <div className="Contact-box">
        <form>
          <h1>Contact us</h1>
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
    </section>
  );
};

export default Contact;
