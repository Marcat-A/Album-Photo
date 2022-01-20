import React from "react";
import "../styles/index.scss";

function Navbar() {
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
    </div>
  );
}

export default Navbar;
