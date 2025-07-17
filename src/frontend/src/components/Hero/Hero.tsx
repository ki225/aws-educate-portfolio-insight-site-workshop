import React, { useEffect, useState } from "react";
import avatar from "../../assets/avatar.png";
import { loadConfig, Config } from "../../lib/action/config";
import styles from "./Hero.module.css";

export default function Hero(): React.JSX.Element {
  const [config, setConfig] = useState<Config | null>(null);

  useEffect(() => {
    loadConfig().then(setConfig);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <p className={styles.greeting}>
          Hello, I’m {config?.siteName || "Allen"}
        </p>
        <h1 className={styles.title}>
          SOFTWARE
          <br />
          ENGINEER
        </h1>
        <p className={styles.subtitle}>
          based in {config?.location || "Taipei"}
        </p>
        <button className={styles.resumeBtn}>Resume</button>
      </div>
      <div className={styles.heroImage}>
        <img src={avatar} alt={config?.siteName || "Allen Hsieh"} />
      </div>
    </section>
  );
}
