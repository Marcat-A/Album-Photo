import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faImage, faCog, faLanguage } from "@fortawesome/free-solid-svg-icons";
import "../styles/index.scss";
import { FormattedMessage } from "react-intl";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const links = [
    {
      name: "Accueil",
      path: "/",
      icon: faHome,
    },
    {
      name: "Albums",
      path: "/albums",
      icon: faImage,
    },
    {
      name: "Options",
      path: "/settings",
      icon: faCog,
    },
    {
      name:"Language",
      path:"/language",
      icon:faLanguage,
    }
  ];
  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          <FormattedMessage id="navbar.logo" defaultMessage="Alb<span>u</span>m Ph<span>o</span>t<span>o</span>" values={{span: (span) => <span>{span}</span>}} />
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            
            <Link
              to={link.path}
              key={link.name}
              className={location.pathname === link.path ? "active" : ""}
            >
              <FontAwesomeIcon icon={link.icon} />
              <FormattedMessage id={"navbar." + `${link.name}`} defaultMessage={`${link.name}`}/>
            </Link>
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
