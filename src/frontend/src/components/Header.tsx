import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Header(): React.JSX.Element {
  return (
    <header className="header">
      <Link smooth to="/#hero" className="header-left">
        Allen Hsieh
      </Link>
      <nav className="header-right">
        <Link smooth to="/#project">
          Project
        </Link>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/awseducatestdambtw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/awseducatestudentambassadortaiwan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://youtube.com/@awseducatecloudambassador"
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
