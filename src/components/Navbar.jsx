import React from "react";
import { useState } from "react";

import "../styles/index.scss";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="navbar container">
      <a href="#!" className="logo">
        A<span>lb</span>um Photo
      </a>
      <div className="nav-links">
        <a href="/album">Albums</a>
        <a href="#!">Catégorie 2</a>
        <a href="#!">Options</a>
      </div>
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
