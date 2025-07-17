import React, { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";
import { loadConfig, Config } from "../lib/action/config";

export default function Hero(): React.JSX.Element {
  const [config, setConfig] = useState<Config | null>(null);

  useEffect(() => {
    loadConfig().then(setConfig);
  }, []);

  return (
    <section id="heroSection" className="hero">
      <div className="hero-text">
        <p className="greeting">Hello, I’m {config?.siteName || "Allen"}</p>
        <h1 className="title">
          SOFTWARE
          <br />
          ENGINEER
        </h1>
        <p className="subtitle">based in {config?.location || "Taipei"}</p>
        <button className="resume-btn">Resume</button>
      </div>
      <div className="hero-image">
        <img src={avatar} alt={config?.siteName || "Allen Hsieh"} />
      </div>
    </section>
  );
}
