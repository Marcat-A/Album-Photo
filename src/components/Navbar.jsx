import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faImage, faCog } from "@fortawesome/free-solid-svg-icons";
import "../styles/index.scss";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    {
      name: "Accueil",
      path: "#!",
      icon: faHome,
    },
    {
      name: "Album",
      path: "#!",
      icon: faImage,
    },
    {
      name: "Options",
      path: "#!",
      icon: faCog,
    },
  ];
  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          Alb<span>u</span>m Ph<span>o</span>t<span>o</span>
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a href={link.path} key={link.name}>
              <FontAwesomeIcon icon={link.icon} />
              {link.name}
            </a>
          ))}
        </div>
        <div
          onClick={() => setShowSidebar(true)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}{" "}
    </>
  );
}

export default Navbar;
