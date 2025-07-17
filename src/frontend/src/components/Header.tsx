import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { loadConfig, Config } from "../lib/action/config";

export default function Header(): React.JSX.Element {
  const [config, setConfig] = useState<Config | null>(null);

  useEffect(() => {
    loadConfig().then(setConfig);
  }, []);

  return (
    <header className="header">
      <Link smooth to="/" className="header-left">
        {config?.siteName || "AWS Ambassador"}
      </Link>
      <nav className="header-right">
        <Link smooth to="/#project">
          Project
        </Link>
        <div className="social-icons">
          <a
            href={config?.socialLinks.instagram || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href={config?.socialLinks.facebook || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href={config?.socialLinks.youtube || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </nav>
    </header>
  );
}
