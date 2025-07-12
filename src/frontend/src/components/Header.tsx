import React from "react";
import { HashLink as Link } from "react-router-hash-link";

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
        <Link smooth to="/#contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}
