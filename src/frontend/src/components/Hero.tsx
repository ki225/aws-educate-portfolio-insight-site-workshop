import React from "react";
import avatar from "../assets/avatar.png";

export default function Hero(): React.JSX.Element {
  return (
    <section id="heroSection" className="hero">
      <div className="hero-text">
        <p className="greeting">Hello, I’m Allen</p>
        <h1 className="title">
          SOFTWARE
          <br />
          ENGINEER
        </h1>
        <p className="subtitle">based in Taipei</p>
        <button className="resume-btn">Resume</button>
      </div>
      <div className="hero-image">
        <img src={avatar} alt="Allen Hsieh" />
      </div>
    </section>
  );
}
